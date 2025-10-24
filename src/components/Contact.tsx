import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 816 671 7054", "+234 905 398 5335"],
    action: "tel:+2348166717054",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["stephenagboola679@gmail.com"],
    action: "mailto:stephenagboola679@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["FCT Abuja, Kubwa", "Inside Adebayo Oke Cresent/Estate"],
    action: "https://maps.google.com/?q=Abuja+Kubwa",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["Chat with us 24/7"],
    action: "https://wa.me/2348166717054",
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["Follow us @ceo_evg"],
    action: "https://www.instagram.com/ceo_evg",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your space? Contact us today for any of our services. We're available 24/7 to bring your artistic vision to life.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <ScrollAnimation key={method.title} animation="scale-in" delay={index * 100}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {method.title}
                </h3>
                
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
                
                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  <a href={method.action} target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </Button>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation animation="fade-in-up" delay={500}>
          <div className="text-center max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-primary">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                View Our Full Catalogue
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Browse our complete collection of services and previous projects
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-lg"
              >
                <a href="https://wa.me/2348166717054" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Open WhatsApp Catalogue
                </a>
              </Button>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
