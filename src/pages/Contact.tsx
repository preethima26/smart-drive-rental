import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
          Contact <span className="text-gradient">Us</span>
        </h1>
        <p className="text-muted-foreground mb-12">Get in touch — we'd love to hear from you</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: Mail, label: "Email", value: "info@smartrental.com" },
                { icon: MapPin, label: "Location", value: "123 Main Street, Downtown, City 10001" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="font-display font-semibold text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="How can we help?"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
