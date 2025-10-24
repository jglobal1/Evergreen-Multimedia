import ScrollAnimation from './ScrollAnimation';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 dark:bg-accent/90 dark:text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ScrollAnimation animation="fade-in-left" delay={0}>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Evergreen <span className="text-primary">Multimedia</span>
              </h3>
              <p className="text-accent-foreground/80 italic dark:text-accent-foreground/80">Art is Luxury</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" delay={200}>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-accent-foreground/80 dark:text-accent-foreground/80">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block">
                    Interior Decor
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block">
                    3D Signage
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block">
                    Wall Murals
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block">
                    Framed Artwork
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block">
                    Wearable Arts
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-right" delay={400}>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-accent-foreground/80 dark:text-accent-foreground/80">
                <li className="hover:text-primary transition-colors cursor-pointer">+234 816 671 7054</li>
                <li className="hover:text-primary transition-colors cursor-pointer">+234 905 398 5335</li>
                <li className="hover:text-primary transition-colors cursor-pointer">stephenagboola679@gmail.com</li>
                <li className="hover:text-primary transition-colors cursor-pointer">FCT Abuja, Kubwa</li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation animation="fade-in-up" delay={600}>
          <div className="border-t border-accent-foreground/20 dark:border-accent-foreground/30 pt-8 text-center text-accent-foreground/70 dark:text-accent-foreground/70">
            <p>&copy; {new Date().getFullYear()} Evergreen Multimedia. All rights reserved.</p>
            <p className="mt-2 text-sm">A trial will convince you.</p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
