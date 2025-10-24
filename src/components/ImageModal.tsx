import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  category: string;
  onWhatsAppClick: () => void;
}

const ImageModal = ({ isOpen, onClose, imageSrc, title, category, onWhatsAppClick }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden [&>button]:hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">{title}</DialogTitle>
              <p className="text-muted-foreground mt-1">{category}</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto max-h-[60vh] object-contain"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
            <div className="flex gap-4 justify-center">
              <Button
                onClick={onWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Get Quote on WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(imageSrc, '_blank')}
                className="border-2"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Full Size
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
