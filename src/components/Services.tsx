import { Paintbrush, Frame, Palette, Shirt, Box, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

const services = [
  {
    icon: Palette,
    title: "Interior Decor",
    description: "Transform your living or working space with our bespoke interior design solutions. We create harmonious environments that reflect your personality.",
    color: "primary",
  },
  {
    icon: Box,
    title: "3D Signage",
    description: "Make a lasting impression with our premium 3D signage. Perfect for businesses and establishments seeking distinctive branding.",
    color: "secondary",
  },
  {
    icon: Paintbrush,
    title: "Wall Murals",
    description: "Bring your walls to life with custom murals. From abstract art to realistic scenes, we paint stories that captivate.",
    color: "accent",
  },
  {
    icon: Frame,
    title: "Framed Artwork",
    description: "Curated and custom framed artwork that adds sophistication to any space. Quality craftsmanship meets artistic vision.",
    color: "primary",
  },
  {
    icon: Shirt,
    title: "Wearable Arts",
    description: "Stand out with our unique wearable art pieces. Quality hand-painted designs that make a statement.",
    color: "secondary",
  },
];

const Services = () => {
  const handleServiceClick = (serviceTitle: string) => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
      
      // Set the category filter in the URL after a short delay to allow scroll
      setTimeout(() => {
        const category = serviceTitle === 'Framed Artwork' ? 'Framed Art' : serviceTitle;
        window.history.pushState({}, '', `#portfolio?category=${encodeURIComponent(category)}`);
        
        // Trigger a custom event to update the portfolio filter
        window.dispatchEvent(new CustomEvent('filterPortfolio', { 
          detail: { category } 
        }));
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              A trial will convince you. We specialize in transforming spaces and creating memorable artistic experiences.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const animationType = isEven ? 'fade-in-left' : 'fade-in-right';
            
            return (
              <ScrollAnimation key={service.title} animation={animationType} delay={index * 150}>
                <Card
                  onClick={() => handleServiceClick(service.title)}
                  className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/50 bg-card cursor-pointer hover:bg-primary/5 active:scale-95 shadow-md hover:shadow-2xl hover:scale-105"
                >
                <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Images</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
