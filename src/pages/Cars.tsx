import { useState } from "react";
import { Search } from "lucide-react";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const categories = ["All", ...Array.from(new Set(cars.map((c) => c.category)))];

const CarsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = cars.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.model.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || c.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
          Our <span className="text-gradient">Fleet</span>
        </h1>
        <p className="text-muted-foreground mb-8">Browse and book from our premium collection</p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex items-center gap-2 bg-secondary rounded-md px-3 flex-1 max-w-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none text-sm py-2.5 text-foreground placeholder:text-muted-foreground w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  category === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No cars match your search.</p>
        )}
      </div>
    </div>
  );
};

export default CarsPage;
