import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Cars", path: "/cars" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Car className="h-7 w-7 text-primary" />
          <span className="font-display font-bold text-xl text-foreground tracking-wide">
            Smart<span className="text-primary">Rental</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-secondary rounded-md px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                placeholder="Search cars..."
                className="bg-transparent border-none outline-none text-sm py-2 text-foreground placeholder:text-muted-foreground w-40"
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="sm">Login</Button>
          <Button variant="default" size="sm">Register</Button>
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1">Login</Button>
            <Button variant="default" size="sm" className="flex-1">Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
