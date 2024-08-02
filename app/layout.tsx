import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import "modern-normalize/modern-normalize.css";
import { ThemeProvider } from "next-themes";
import "resetcss/reset.min.css";
import "../styles/globals.css";

export const metadata = {
  title: "Guess The Word",
  description:
    "Guess the Word is a fun and engaging word-guessing game that challenges players to identify a hidden word based on clues and letter hints. The game can be played individually or in teams, and it tests players' vocabulary, spelling, and deduction skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen dark:bg-black text-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
