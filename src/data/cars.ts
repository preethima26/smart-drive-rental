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
  seats: number;
  transmission: string;
  fuel: string;
  engine: string;
  topSpeed: string;
  acceleration: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: 1, name: "Velocity GT", model: "2025 Sport", price: 120, image: car1, category: "Sports",
    seats: 2, transmission: "Automatic", fuel: "Gasoline", engine: "4.0L V8 Twin-Turbo",
    topSpeed: "205 mph", acceleration: "3.2s 0-60",
    description: "A breathtaking sports car that combines raw power with elegant design. The Velocity GT delivers an adrenaline-pumping driving experience with its twin-turbo V8 engine and precision-tuned suspension.",
  },
  {
    id: 2, name: "Explorer Pro", model: "2025 SUV", price: 85, image: car2, category: "SUV",
    seats: 7, transmission: "Automatic", fuel: "Hybrid", engine: "2.5L Hybrid I4",
    topSpeed: "130 mph", acceleration: "7.1s 0-60",
    description: "The Explorer Pro is the ultimate family adventure vehicle. With seating for seven, advanced safety features, and hybrid efficiency, it handles both city streets and off-road terrain with confidence.",
  },
  {
    id: 3, name: "Horizon S", model: "2025 Sedan", price: 95, image: car3, category: "Sedan",
    seats: 5, transmission: "Automatic", fuel: "Gasoline", engine: "3.0L Inline-6 Turbo",
    topSpeed: "155 mph", acceleration: "4.8s 0-60",
    description: "The Horizon S redefines luxury sedans with its striking design and powerful inline-6 engine. Every detail is crafted for comfort, from the premium leather interior to the whisper-quiet cabin.",
  },
  {
    id: 4, name: "Shadow Convertible", model: "2025 Luxury", price: 150, image: car4, category: "Luxury",
    seats: 4, transmission: "Automatic", fuel: "Gasoline", engine: "6.6L W12",
    topSpeed: "195 mph", acceleration: "3.7s 0-60",
    description: "Open-air luxury at its finest. The Shadow Convertible features a powerful W12 engine wrapped in handcrafted opulence. Drop the top and experience the wind in style.",
  },
  {
    id: 5, name: "Nova Electric", model: "2025 EV", price: 110, image: car5, category: "Electric",
    seats: 5, transmission: "Single-Speed", fuel: "Electric", engine: "Dual Motor AWD",
    topSpeed: "162 mph", acceleration: "3.1s 0-60",
    description: "Zero emissions, maximum performance. The Nova Electric delivers instant torque from its dual motors and over 350 miles of range, making it the perfect blend of sustainability and speed.",
  },
  {
    id: 6, name: "Titan Truck", model: "2025 Pickup", price: 75, image: car6, category: "Truck",
    seats: 5, transmission: "Automatic", fuel: "Diesel", engine: "3.0L Turbo Diesel V6",
    topSpeed: "120 mph", acceleration: "6.8s 0-60",
    description: "Built to work and play. The Titan Truck offers best-in-class towing capacity with a rugged turbo diesel engine, paired with a surprisingly refined interior for everyday comfort.",
  },
];
