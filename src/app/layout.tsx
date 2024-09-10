import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colab - Digital Marketing & Web Solutions",
  description:
    "Colab offers cutting-edge digital marketing strategies and custom website design to boost your online presence and drive success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm.className} antialiased`}>{children}</body>
    </html>
  );
}
