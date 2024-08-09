import CheckAuthHeader from "@/components/checkers/CheckAuthHeader";
import Footer from "@/components/elements/Footer";
import "@/styles/globals.css";
import "modern-normalize/modern-normalize.css";
import { Metadata } from "next";
import "resetcss/reset.min.css";
import ClientProviders from "./ClientProviders";

export const metadata: Metadata = {
  title: "Guess The Word - Fun Word-Guessing Game for All Ages",
  description:
    "Guess the Word is an exciting word-guessing game that challenges you to uncover hidden words using clever clues and hints. Perfect for all ages and skill levels!",
  openGraph: {
    title: "Guess The Word",
    description: "Guess the Word is a fun and engaging word-guessing game.",
    url: "https://guess-the-word-gtw.web.app",
    images: [
      new URL(
        "/meta/image.jpg",
        "https://guess-the-word-gtw.web.app"
      ).toString(),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guess The Word",
    description: "Guess the Word is a fun and engaging word-guessing game.",
    images: [
      new URL(
        "/meta/image.jpg",
        "https://guess-the-word-gtw.web.app"
      ).toString(),
    ],
  },
  icons: {
    icon: new URL(
      "/meta/favicon.svg",
      "https://guess-the-word-gtw.web.app"
    ).toString(),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen dark:bg-black text-black dark:text-white">
        <ClientProviders>
          <CheckAuthHeader />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
