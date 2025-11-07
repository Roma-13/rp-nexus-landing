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
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] floating"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-up space-y-4">
          <div className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-4">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Features</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Server <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need for an immersive roleplay experience, from law enforcement to business ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-3xl"></div>
              
              {/* Card */}
              <div className="relative glass-strong rounded-3xl border border-border/50 p-8 hover:border-primary/50 transition-all duration-500 group-hover:scale-105 hover:shadow-xl h-full flex flex-col">
                <div className="mb-6 relative">
                  {feature.badge ? (
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-gradient-accent blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
                      <img src={feature.badge} alt={feature.title} className="relative h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-30 transition-opacity rounded-2xl"></div>
                      <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all border border-primary/20">
                        <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all font-display">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
