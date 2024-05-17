import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlusCash - Home",
  description:
    "PlusCash puts cash at your fingertips, offering financial flexibility for both accessing credit and making smart investment choices. Take charge of your financial journey with ease, ensuring you have the cash you need and the ability to grow your wealth through strategic investments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>{children}</body>
    </html>
  );
}
