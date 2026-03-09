import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";

const CarCard = ({ car }: { car: Car }) => (
  <div className="group bg-card rounded-lg overflow-hidden border border-border card-glow hover:border-primary/30 transition-all duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5 space-y-3">
      <div>
        <h3 className="font-display font-bold text-lg text-foreground">{car.name}</h3>
        <p className="text-sm text-muted-foreground">{car.model}</p>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-display font-bold text-primary">${car.price}</span>
          <span className="text-sm text-muted-foreground">/day</span>
        </div>
        <Button size="sm">Book Now</Button>
      </div>
    </div>
  </div>
);

export default CarCard;
