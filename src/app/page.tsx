import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
      <Banner />
      <Hero />
      <About />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
