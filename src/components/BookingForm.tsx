import { useState } from "react";
import { format, differenceInDays } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Car } from "@/data/cars";

const BookingForm = ({ car }: { car: Car }) => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = pickupDate && returnDate ? differenceInDays(returnDate, pickupDate) : 0;
  const totalCost = days > 0 ? days * car.price : 0;
  // Fixed conversion: $120 per day = ₹2000 per day
  const fixedUsd = 120;
  const fixedInr = 2000;
  // Calculate per-day INR based on USD price
  const perDayInr = car.price === fixedUsd ? fixedInr : Math.round((car.price / fixedUsd) * fixedInr);
  const totalCostInr = days > 0 ? days * perDayInr : 0;

  const canSubmit = pickupDate && returnDate && days > 0 && name.trim() && email.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setConfirmed(true);
  };

  const handleClose = () => {
    setConfirmed(false);
    setPickupDate(undefined);
    setReturnDate(undefined);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-5 sticky top-24">
        <div>
          <p className="text-sm text-muted-foreground">Price per day</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-display font-bold text-primary">${car.price}</span>
            <span className="text-muted-foreground pb-0.5">USD / day</span>
            <span className="text-lg font-display font-bold text-green-600">₹{perDayInr}</span>
            <span className="text-muted-foreground pb-0.5">INR / day</span>
          </div>
        </div>

        <div className="border-t border-border pt-5 space-y-4">
          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Pickup Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !pickupDate && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={(d) => {
                    setPickupDate(d);
                    if (returnDate && d && returnDate <= d) setReturnDate(undefined);
                  }}
                  disabled={(date) => date < today}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Return Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !returnDate && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  disabled={(date) => date < (pickupDate || today)}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-md bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@email.com"
              className="w-full rounded-md bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Phone (optional)</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-md bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Cost summary */}
        {days > 0 && (
          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${car.price} × {days} day{days > 1 ? "s" : ""}</span>
              <span>${totalCost} USD</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-display font-bold text-foreground text-lg pt-2 border-t border-border">
              <span>Total</span>
              <span className="text-primary">${totalCost} USD / <span className="text-green-600">₹{totalCostInr} INR</span></span>
            </div>
          </div>
        )}

        <Button type="submit" variant="hero" className="w-full" disabled={!canSubmit}>
          {days > 0 ? `Reserve for $${totalCost} / ₹${totalCostInr}` : "Select dates to book"}
        </Button>
      </form>

      {/* Confirmation dialog */}
      <Dialog open={confirmed} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl font-display">Reservation Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Your booking has been successfully placed.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-secondary rounded-lg p-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Vehicle</span>
              <span className="font-medium text-foreground">{car.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Pickup</span>
              <span className="font-medium text-foreground">{pickupDate && format(pickupDate, "PPP")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Return</span>
              <span className="font-medium text-foreground">{returnDate && format(returnDate, "PPP")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-medium text-foreground">{days} day{days > 1 ? "s" : ""}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3">
              <span className="text-muted-foreground">Total</span>
              <span className="font-display font-bold text-primary text-lg">${totalCost} USD / <span className="text-green-600">₹{totalCostInr} INR</span></span>
            </div>
          </div>
          <Button onClick={handleClose} className="w-full mt-2">Done</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingForm;
