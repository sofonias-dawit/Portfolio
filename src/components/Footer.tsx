import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-card border-t-2 border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm sm:text-base">
              Sofonias Dawit
          </p>
            <p className="text-sm text-muted-foreground">
            © <strong>{new Date().getFullYear()}</strong> All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
