import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main
      id="content"
      className="mx-auto w-full max-w-6xl space-y-14 px-5 py-10 sm:space-y-20 sm:px-6 sm:py-14"
    >
      <Banner />
      <Hero />
      <About />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
