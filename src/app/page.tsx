import About from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Courses />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
