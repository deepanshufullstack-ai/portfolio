import About from "@/components/About";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Tech from "@/components/Tech";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Counter />
        <About />
        <Services />
        {/* <Tech /> */}
        {/* <Experience /> */}
        {/* <Work /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
