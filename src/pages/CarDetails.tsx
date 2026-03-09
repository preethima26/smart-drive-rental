import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users, Gauge, Fuel, Cog, Zap, Timer } from "lucide-react";
import { cars } from "@/data/cars";
import BookingForm from "@/components/BookingForm";

const specs = [
  { key: "seats", icon: Users, label: "Seats" },
  { key: "transmission", icon: Cog, label: "Transmission" },
  { key: "fuel", icon: Fuel, label: "Fuel" },
  { key: "engine", icon: Zap, label: "Engine" },
  { key: "topSpeed", icon: Gauge, label: "Top Speed" },
  { key: "acceleration", icon: Timer, label: "0-60 mph" },
] as const;

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="pt-24 pb-20 text-center">
        <p className="text-muted-foreground">Car not found.</p>
        <Link to="/cars" className="text-primary hover:underline mt-4 inline-block">Back to fleet</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
      {/* Back link */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/cars" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to fleet
        </Link>
      </div>

      {/* Hero image */}
      <div className="container mx-auto px-4 mb-10">
        <div className="rounded-xl overflow-hidden border border-border aspect-[21/9]">
          <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-sm text-primary font-medium mb-1">{car.category}</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">{car.name}</h1>
              <p className="text-muted-foreground mt-1">{car.model}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">{car.description}</p>

            {/* Specs grid */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specs.map((spec) => (
                  <div key={spec.key} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <spec.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-display font-semibold text-foreground">
                        {String(car[spec.key as keyof typeof car])}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking */}
          <div>
            <BookingForm car={car} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
