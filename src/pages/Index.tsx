import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Catalogue from "@/components/Catalogue";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen" id="top">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Catalogue />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
