import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sigmoidal: AI systems compounding enterprise value",
  description:
    "Since 2016, Sigmoidal has been embedding dedicated teams and deploying purpose-built enterprise AI products inside the world's most demanding organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
