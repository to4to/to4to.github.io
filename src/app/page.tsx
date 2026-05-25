import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main
      id="content"
      className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-6 lg:px-8"
    >
      <StructuredData />
      <Banner />
      <Hero />
      <About />
      <Work />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
