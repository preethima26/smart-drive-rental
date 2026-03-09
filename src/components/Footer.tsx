import { Car, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-lg">Smart<span className="text-primary">Rental</span></span>
          </div>
          <p className="text-sm text-muted-foreground">Premium car rental service with 24/7 support and the best fleet in the city.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Cars", "About", "Contact"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📍 123 Main Street, City</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@smartrental.com</p>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
        © 2026 SmartRental. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
