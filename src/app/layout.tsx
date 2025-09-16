import "@/styles/globals.css";
import type { Metadata } from "next";
import { Karla, Roboto_Slab } from "next/font/google";

export const metadata: Metadata = {
  title: "Damith Mendis",
  description:
    "I'm Damith, a Senior 3D Generalist, Short Filmmaker, and a Lecturer",
};

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-slab",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${robotoSlab.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
