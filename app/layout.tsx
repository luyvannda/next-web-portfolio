import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Portfolio",
  description:
    "Welcome to my Next.js portfolio apps. This app showcase my front-end skills in Typescript, tailwind, framer motion, Swiper and more...",
  openGraph: {
    images: [
      {
        url: "https://onedrive.live.com/embed?resid=FF8AC3081FC56D69%2188623&authkey=%21AHFL2eCUsXcBlnw&width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Next Portfolio App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@luyvannda",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
