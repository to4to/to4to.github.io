import { ImageResponse } from "next/og";

export const alt = "Himanshu Kumar Singh | Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 80,
                    backgroundColor: "#070a10",
                    color: "#e7eaf2",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                    <div style={{ fontSize: 22, color: "rgba(231, 234, 242, 0.7)" }}>
                        to4to.dev
                    </div>
                    <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.06 }}>
                        Himanshu Kumar Singh
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            lineHeight: 1.35,
                            color: "rgba(231, 234, 242, 0.68)",
                            maxWidth: 980,
                        }}
                    >
                        Reliable products, clear interfaces, and maintainable systems.
                    </div>
                    <div
                        style={{
                            marginTop: 18,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "10px 14px",
                            borderRadius: 12,
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            background: "rgba(255, 255, 255, 0.06)",
                            alignSelf: "flex-start",
                            fontSize: 22,
                            color: "rgba(231, 234, 242, 0.86)",
                        }}
                    >
                        <span
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: 999,
                                background: "rgba(34, 211, 238, 0.9)",
                            }}
                        />
                        Calm systems. Reliable software.
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
