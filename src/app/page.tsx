// import About from "@/components/About";
import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Tech from "@/components/Tech";
// import Work from "@/components/Work";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main>
        <Hero />
        <Tech/>
        {/* <About/> */}
        {/* <Experience/> */}
        {/* <Work/> */}
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
