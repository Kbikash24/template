import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pepperazy - AI Ads that win.",
  description: "Generate engaging video ads for your products from any URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
