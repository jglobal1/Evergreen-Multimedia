import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-fade-in-down">
            Evergreen
            <span className="block text-primary mt-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>Multimedia</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-display italic text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Art is Luxury
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.9s" }}>
            Transform your space with our bespoke artistic services. From interior decor to wearable art, 
            we bring luxury and creativity to every project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-bounce-in" style={{ animationDelay: "1.2s" }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection("services")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-primary transition-all hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-6 text-lg transition-all hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            >
              View Portfolio
            </Button>
            
            <Button 
              asChild
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg transition-all hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            >
              <a href="https://wa.me/2348166717054" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          
          <div className="pt-12 space-y-2">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              Contact Us 24/7
            </p>
            <a 
              href="tel:+2348166717054" 
              className="text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors inline-block"
            >
              +234 816 671 7054
            </a>
            <p className="text-sm text-muted-foreground">
              FCT Abuja, Kubwa, Inside Adebayo Oke Cresent/Estate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
