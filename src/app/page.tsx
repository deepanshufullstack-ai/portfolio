import About from "@/components/About";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Tech from "@/components/Tech";
import Test from "@/components/Test";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Counter />
        <About />
        <Offer />
        <Tech />
        <Experience />
        {/* <Test/> */}
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
