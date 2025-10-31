import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Sofonias Dawit 
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © <strong>{new Date().getFullYear()}</strong> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
