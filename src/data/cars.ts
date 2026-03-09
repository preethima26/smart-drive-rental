import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export interface Car {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  category: string;
}

export const cars: Car[] = [
  { id: 1, name: "Velocity GT", model: "2025 Sport", price: 120, image: car1, category: "Sports" },
  { id: 2, name: "Explorer Pro", model: "2025 SUV", price: 85, image: car2, category: "SUV" },
  { id: 3, name: "Horizon S", model: "2025 Sedan", price: 95, image: car3, category: "Sedan" },
  { id: 4, name: "Shadow Convertible", model: "2025 Luxury", price: 150, image: car4, category: "Luxury" },
  { id: 5, name: "Nova Electric", model: "2025 EV", price: 110, image: car5, category: "Electric" },
  { id: 6, name: "Titan Truck", model: "2025 Pickup", price: 75, image: car6, category: "Truck" },
];
