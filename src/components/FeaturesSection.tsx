import { Shield, DollarSign, Car, Building2, Briefcase, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import policeBadge from "@/assets/badge-police.png";
import emsBadge from "@/assets/badge-ems.png";
import businessBadge from "@/assets/badge-business.png";

const features = [
  {
    icon: Shield,
    title: "Law Enforcement",
    description: "Join LSPD, BCSO, or DOJ. Maintain order with realistic procedures and equipment.",
    badge: policeBadge,
  },
  {
    icon: Heart,
    title: "Emergency Medical",
    description: "Save lives as EMS. Respond to emergencies with advanced medical systems.",
    badge: emsBadge,
  },
  {
    icon: Briefcase,
    title: "Legal Careers",
    description: "Build your empire with custom businesses, real estate, and legal operations.",
    badge: businessBadge,
  },
  {
    icon: Car,
    title: "Custom Vehicles",
    description: "Over 500 custom vehicles including imports, muscle cars, and luxury vehicles.",
  },
  {
    icon: DollarSign,
    title: "Dynamic Economy",
    description: "Realistic banking system, stocks, investments, and player-driven market.",
  },
  {
    icon: Building2,
    title: "Housing & Property",
    description: "Own apartments, houses, and commercial properties. Fully customizable interiors.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Server <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for an immersive roleplay experience, from law enforcement to business ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4 relative">
                  {feature.badge ? (
                    <img src={feature.badge} alt={feature.title} className="h-16 w-16 object-contain" />
                  ) : (
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
