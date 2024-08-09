import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import { ThemeProvider } from "next-themes";

export default function Main() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      <section className="flex-1 flex">
        <div className="my-container"></div>
      </section>
      <Footer />
    </ThemeProvider>
  );
}
