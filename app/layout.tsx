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
  metadataBase: new URL("https://luyvannda.vercel.app/"),
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Next Portfolio Image",
      },
      {
        url: "/og-custom.png",
        width: 800,
        height: 600,
        alt: "My custom Next Portfolio Image",
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
