import { useState, useEffect } from "react";
import { MessageCircle, Eye, ExternalLink } from "lucide-react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import signage1 from "@/assets/signage-1.jpg";
import signage2 from "@/assets/signage-2.jpg";
import signage3 from "@/assets/signage-3.jpg";
import signage4 from "@/assets/signage-4.jpg";
import wearableArt from "@/assets/wearable-art.jpg";
import ScrollAnimation from "./ScrollAnimation";
import ImageModal from "./ImageModal";
import { Button } from "@/components/ui/button";


const portfolioItems = [
  // Interior Decor
  {
    image: interior1,
    title: "Contemporary Living Space",
    category: "Interior Decor",
  },
  {
    image: interior2,
    title: "Artistic Wall Feature",
    category: "Interior Decor",
  },
  {
    image: interior3,
    title: "Modern Office Design",
    category: "Interior Decor",
  },
  {
    image: "/interior decor.jpg",
    title: "Elegant Interior Design",
    category: "Interior Decor",
  },
  // 3D Signage
  {
    image: signage1,
    title: "Aisha Shop 3D Signage",
    category: "3D Signage",
  },
  {
    image: signage2,
    title: "Corporate Signage",
    category: "3D Signage",
  },
  {
    image: signage3,
    title: "Illuminated Display",
    category: "3D Signage",
  },
  {
    image: signage4,
    title: "Dash Me Store Signage",
    category: "3D Signage",
  },
  // Framed Art
  {
    image: "/framed art.jpg",
    title: "Classic Framed Artwork",
    category: "Framed Art",
  },
  {
    image: "/framed art1.jpg",
    title: "Modern Framed Piece",
    category: "Framed Art",
  },
  {
    image: "/framed art2.jpg",
    title: "Contemporary Frame Design",
    category: "Framed Art",
  },
  {
    image: "/framed art3.jpg",
    title: "Artistic Frame Collection",
    category: "Framed Art",
  },
  {
    image: "/framed art 5.jpg",
    title: "Elegant Framed Work",
    category: "Framed Art",
  },
  {
    image: "/framed art work.jpg",
    title: "Professional Framed Art",
    category: "Framed Art",
  },
  {
    image: "/framed art7.jpg",
    title: "Custom Framed Piece",
    category: "Framed Art",
  },
  // Wall Murals
  {
    image: "/wall murals.jpg",
    title: "Vibrant Wall Mural",
    category: "Wall Murals",
  },
  {
    image: "/wall murals1.jpg",
    title: "Large Scale Mural Design",
    category: "Wall Murals",
  },
  {
    image: "/wall murals2.jpg",
    title: "Artistic Wall Transformation",
    category: "Wall Murals",
  },
  {
    image: "/wall murals3.jpg",
    title: "Custom Mural Artwork",
    category: "Wall Murals",
  },
  {
    image: "/wall murals7.jpg",
    title: "Contemporary Mural Design",
    category: "Wall Murals",
  },
  {
    image: "/wall murals8.jpg",
    title: "Bold Wall Art",
    category: "Wall Murals",
  },
  // Wearable Arts
  {
    image: wearableArt,
    title: "Art is Luxury Collection",
    category: "Wearable Arts",
  },
  {
    image: "/wearable art.jpg",
    title: "Creative Wearable Design",
    category: "Wearable Arts",
  },
];

const categories = ["All", "Interior Decor", "3D Signage", "Framed Art", "Wall Murals", "Wearable Arts"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    category: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Listen for custom filter events from Services component
    const handleFilterPortfolio = (event: CustomEvent) => {
      setSelectedCategory(event.detail.category);
    };

    window.addEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    
    // Check URL parameters on component mount
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }

    return () => {
      window.removeEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    };
  }, []);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (item: { image: string; title: string; category: string }) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const handleWhatsAppClick = (item: { title: string; category: string }) => {
    const message = `Hi! I'm interested in your ${item.category} work: "${item.title}". Could you please provide more details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348166717054?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our portfolio of exceptional projects that showcase our commitment to artistic excellence.
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const animationType = isEven ? 'slide-in-left' : 'slide-in-right';
            
            return (
            <ScrollAnimation key={index} animation={animationType} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div 
                  className="aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary font-semibold text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </p>
                  <h3 className="text-accent-foreground font-display text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(item);
                      }}
                      className="bg-background/90 text-foreground hover:bg-background font-semibold"
                    >
                      <Eye className="mr-1 h-4 w-4" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppClick(item);
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                    >
                      <MessageCircle className="mr-1 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            );
          })}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage.image}
          title={selectedImage.title}
          category={selectedImage.category}
          onWhatsAppClick={() => handleWhatsAppClick(selectedImage)}
        />
      )}
    </section>
  );
};

export default Portfolio;
