import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const features = [
  { icon: MapPin, label: "Downtown Location", desc: "123 Main Street, City Center" },
  { icon: Phone, label: "Call Us Anytime", desc: "+1 (555) 123-4567" },
  { icon: Clock, label: "24/7 Service", desc: "Available around the clock" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-screen flex items-center">
      <img src={heroCar} alt="Luxury car at night" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-foreground">
            Welcome to <span className="text-gradient">Smart Car Rental</span> System
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Experience the thrill of driving premium vehicles. Affordable rates, unmatched service.
          </p>
          <Link to="/cars">
            <Button variant="hero" size="lg" className="mt-2">
              Reserve Now
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Features strip */}
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">{f.label}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Featured cars */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Featured <span className="text-gradient">Vehicles</span>
        </h2>
        <p className="text-muted-foreground mt-2">Hand-picked from our premium fleet</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.slice(0, 3).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/cars">
          <Button variant="outline" size="lg">View All Cars</Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
