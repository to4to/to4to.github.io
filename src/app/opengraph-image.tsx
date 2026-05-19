import { ImageResponse } from "next/og";

export const alt = "Himanshu Kumar Singh | Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 72,
                    backgroundColor: "#070a10",
                    color: "#e7eaf2",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "10px 14px",
                            borderRadius: 12,
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            background: "rgba(255, 255, 255, 0.06)",
                            alignSelf: "flex-start",
                            fontSize: 22,
                            color: "rgba(231, 234, 242, 0.88)",
                        }}
                    >
                        <span
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                background: "rgba(34, 211, 238, 0.9)",
                            }}
                        />
                        Calm systems. Reliable software.
                    </div>

                    <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
                        Himanshu Kumar Singh
                    </div>

                    <div
                        style={{
                            maxWidth: 900,
                            fontSize: 28,
                            lineHeight: 1.4,
                            color: "rgba(231, 234, 242, 0.68)",
                        }}
                    >
                        Dependable systems, sharp tooling, and web that stays clear as it scales.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 22,
                        color: "rgba(231, 234, 242, 0.6)",
                    }}
                >
                    <div>to4to.dev</div>
                    <div>India</div>
                </div>
            </div>
        ),
        size,
    );
}
