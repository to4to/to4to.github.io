import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const outDir = join(process.cwd(), "out");

const baseDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'none'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-src 'none'",
  "img-src 'self' data:",
  "manifest-src 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
];

const commonHeaders = [
  ["Cross-Origin-Opener-Policy", "same-origin"],
  ["Cross-Origin-Resource-Policy", "same-origin"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)"],
  ["Referrer-Policy", "no-referrer"],
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
];

const staticAssetHeaderBlocks = [
  [
    "/_next/static/*",
    "  Cache-Control: public, max-age=31536000, immutable",
  ].join("\n"),
];

function robotsTagFor(path) {
  if (path === "/404.html" || path.startsWith("/404/") || path.startsWith("/_not-found")) {
    return "noindex, nofollow";
  }

  return "index, follow";
}

const hashSource = (content) => {
  const digest = createHash("sha256").update(content).digest("base64");

  return `'sha256-${digest}'`;
};

const unique = (values) => [...new Set(values)];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);

      if (entry.isDirectory()) {
        return htmlFiles(path);
      }

      return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
    }),
  );

  return files.flat();
}

function inlineHashes(html, tagName) {
  const hashes = [];
  const pattern = new RegExp(`<${tagName}\\b(?![^>]*\\bsrc=)[^>]*>([\\s\\S]*?)</${tagName}>`, "gi");

  for (const match of html.matchAll(pattern)) {
    if (match[1]) {
      hashes.push(hashSource(match[1]));
    }
  }

  return unique(hashes);
}

function cspFor(html) {
  const scriptHashes = inlineHashes(html, "script");
  const styleHashes = inlineHashes(html, "style");
  const directives = [
    ...baseDirectives,
    `script-src 'self'${scriptHashes.length ? ` ${scriptHashes.join(" ")}` : ""}`,
    `style-src 'self'${styleHashes.length ? ` ${styleHashes.join(" ")}` : ""}`,
  ];

  return directives.join("; ");
}

function replaceCsp(html, csp) {
  const escaped = csp.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
  const metaPattern = /<meta http-equiv="Content-Security-Policy" content="[^"]*"\/>/i;
  const meta = `<meta http-equiv="Content-Security-Policy" content="${escaped}"/>`;

  if (!metaPattern.test(html)) {
    throw new Error("Could not find Content-Security-Policy meta tag");
  }

  const withoutExistingCsp = html.replace(metaPattern, "");
  const viewportPattern =
    /(<head><meta charSet="utf-8"\/><meta name="viewport" content="width=device-width, initial-scale=1"\/>)/i;

  if (viewportPattern.test(withoutExistingCsp)) {
    return withoutExistingCsp.replace(viewportPattern, `$1${meta}`);
  }

  return withoutExistingCsp.replace("<head>", `<head>${meta}`);
}

function routePathsFor(file) {
  const relativePath = relative(outDir, file).split(sep).join("/");

  if (relativePath === "index.html") {
    return ["/", "/index.html"];
  }

  if (relativePath.endsWith("/index.html")) {
    const directory = relativePath.slice(0, -"/index.html".length);

    return [`/${directory}/`, `/${directory}/index.html`];
  }

  return [`/${relativePath}`];
}

function headersBlock(path, csp) {
  const lines = [
    path,
    `  Content-Security-Policy: ${csp}`,
    ...commonHeaders.map(([key, value]) => `  ${key}: ${value}`),
    `  X-Robots-Tag: ${robotsTagFor(path)}`,
  ];

  return lines.join("\n");
}

const files = await htmlFiles(outDir);
const headerBlocks = [...staticAssetHeaderBlocks];

await Promise.all(
  files.map(async (file) => {
    const html = await readFile(file, "utf8");
    const csp = cspFor(html);

    await writeFile(file, replaceCsp(html, csp));
    headerBlocks.push(...routePathsFor(file).map((path) => headersBlock(path, csp)));
  }),
);

headerBlocks.sort();
await writeFile(join(outDir, "_headers"), `${headerBlocks.join("\n\n")}\n`);

console.log(`Applied hash-based CSP and Cloudflare headers to ${files.length} exported HTML files.`);
