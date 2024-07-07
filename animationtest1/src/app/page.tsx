import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="mb-4">
          <HeroSection />
        </div>
        <div className="mb-4">
          <AboutSection />
        </div>
        <div className="mb-4">
          <Projects />
        </div>
        <div className="mb-4 ">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
