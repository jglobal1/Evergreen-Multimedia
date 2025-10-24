import { MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

const Catalogue = () => {
  return (
    <section id="catalogue" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Catalogue
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of services and previous projects. 
              View our full catalogue on WhatsApp for detailed pricing and availability.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <ScrollAnimation animation="fade-in-left" delay={200}>
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                WhatsApp Catalogue
              </h3>
              <p className="text-muted-foreground mb-6">
                View our complete catalogue with pricing, availability, and detailed service descriptions directly on WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                <a href="https://wa.me/2348166717054" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Open WhatsApp
                </a>
              </Button>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-right" delay={400}>
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Portfolio Preview
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore our featured projects and get inspired by our artistic transformations across different categories.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full"
              >
                <a href="#portfolio">
                  <Eye className="mr-2 h-5 w-5" />
                  View Portfolio
                </a>
              </Button>
            </Card>
          </ScrollAnimation>

        </div>

        <div className="text-center max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-primary">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Contact us directly on WhatsApp for instant quotes, consultations, and to discuss your project requirements.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-lg"
              >
                <a href="https://wa.me/2348166717054" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
