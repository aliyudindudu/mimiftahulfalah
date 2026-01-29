import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MI Miftahul Falah - Madrasah Ibtidaiyah",
  description: "Website resmi MI Miftahul Falah - Membentuk Generasi Islami yang Cerdas dan Berakhlak Mulia",
  keywords: ["MI Miftahul Falah", "Madrasah Ibtidaiyah", "Sekolah Islam", "Pendidikan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
