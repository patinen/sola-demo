import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./typography.css";

export const metadata: Metadata = {
  title: "SOLA Studio — Aikaa itsellesi",
  description: "Kuvitteellisen kauneushoitolan verkkosivukonsepti.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f5f0e9" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fi"><body>{children}</body></html>;
}
