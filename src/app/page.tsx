import About from "@/components/AboutUs";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Courses />
      <Services />
      <About />
    </main>
  );
}
