import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-14">
      <Banner />
      <Hero />
      <About />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
