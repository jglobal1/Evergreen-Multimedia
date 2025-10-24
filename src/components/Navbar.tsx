import { useEffect, useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        isScrolled ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src="/logo.jpg" alt="Evergreen Multimedia" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="https://wa.me/2348166717054" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                <MessageCircle className="mr-1 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
            <a href="#contact">
              <Button className="ml-2">Get in touch</Button>
            </a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-lg font-bold">Menu</span>
              </div>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-base font-medium text-foreground/90 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-6 space-y-4">
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                  <a href="https://wa.me/2348166717054" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    <Button variant="outline" className="w-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white py-3">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="#contact" onClick={handleLinkClick}>
                    <Button className="w-full py-3 mt-6">Get in touch</Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


