import { Check, Download, MessageSquare, FileText, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: MessageSquare,
    number: 1,
    title: "Join Discord",
    description: "Connect with our community and get verified access to server information.",
    action: "Join Discord",
    href: "#discord",
  },
  {
    icon: FileText,
    number: 2,
    title: "Submit Whitelist",
    description: "Fill out our application form. Review typically takes 24-48 hours.",
    action: "Apply Now",
    href: "#apply",
  },
  {
    icon: Download,
    number: 3,
    title: "Install FiveM",
    description: "Download and install the FiveM client if you haven't already.",
    action: "Get FiveM",
    href: "https://fivem.net",
  },
  {
    icon: Play,
    number: 4,
    title: "Start Playing",
    description: "Connect using our server IP and begin your Los Santos adventure!",
    action: "Connect",
    href: "#connect",
  },
];

export function JoinSteps() {
  return (
    <section id="join" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-accent/10 rounded-full blur-[150px] floating" style={{ animationDelay: '-2s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full glass border border-primary/20 mb-4">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            How to <span className="text-gradient">Join</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to become part of our thriving community.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-3xl"></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-accent blur-lg opacity-60 animate-glow-pulse"></div>
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                      <span className="font-display text-3xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="relative glass-strong rounded-3xl border border-border/50 p-8 pt-16 hover:border-primary/50 transition-all duration-500 group-hover:scale-105 hover:shadow-xl h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-30 transition-opacity rounded-2xl"></div>
                      <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                        <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-3 flex-grow">
                    <h3 className="font-bold text-2xl font-display group-hover:text-gradient transition-all">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full mt-6 glass border-border/50 hover:border-primary/50 hover:text-primary transition-all group-hover:shadow-lg rounded-xl"
                    asChild
                  >
                    <a href={step.href}>{step.action}</a>
                  </Button>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="h-1 w-8 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="glass-strong rounded-3xl border border-primary/30 p-8 max-w-2xl w-full shadow-glow">
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-success blur-lg opacity-50 animate-glow-pulse"></div>
                  <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center border border-success/30">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                </div>
                <div className="text-left flex-grow">
                  <p className="font-bold text-2xl mb-2 font-display">Already Whitelisted?</p>
                  <p className="text-base text-muted-foreground mb-3">
                    Connect now and start your adventure in Los Santos
                  </p>
                  <div className="flex items-center gap-2 p-3 rounded-xl glass border border-primary/20">
                    <span className="text-xs text-muted-foreground uppercase font-semibold">Server IP:</span>
                    <code className="text-primary font-mono text-sm font-bold flex-grow">
                      connect play.lsrp.net:30120
                    </code>
                    <Button size="sm" variant="outline" className="text-xs">Copy</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
