import { Shield, Award, Users, Headphones } from "lucide-react";

const services = [
  { icon: Shield, title: "Insured Fleet", desc: "All vehicles are fully insured for your peace of mind." },
  { icon: Award, title: "Top Quality", desc: "We maintain our fleet to the highest standards." },
  { icon: Users, title: "10K+ Customers", desc: "Trusted by thousands of happy drivers." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer service." },
];

const AboutPage = () => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
        About <span className="text-gradient">Us</span>
      </h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Smart Car Rental System is a premium car rental company offering a wide selection of vehicles for every occasion — from business trips to weekend getaways.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card rounded-lg border border-border p-8 space-y-4">
          <h2 className="text-2xl font-display font-bold text-foreground">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strive to make car rental simple, affordable, and enjoyable. Our carefully curated fleet ensures that every customer finds the perfect vehicle for their needs, while our dedicated team provides seamless service from booking to return.
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-8 space-y-4">
          <h2 className="text-2xl font-display font-bold text-foreground">Why Choose Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            With competitive pricing, flexible rental terms, and a fleet of well-maintained vehicles, we offer an unmatched rental experience. Our transparent pricing means no hidden fees, and our 24/7 roadside assistance ensures you're never stranded.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
        Our <span className="text-gradient">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-6 text-center card-glow hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
