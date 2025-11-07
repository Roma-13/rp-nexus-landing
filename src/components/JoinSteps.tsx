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
    <section id="join" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How to <span className="text-primary">Join</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow these simple steps to become part of our thriving community.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">{step.number}</span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:border-primary/50 group-hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={step.href}>{step.action}</a>
                  </Button>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="h-0.5 w-6 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-secondary/50 border-border p-8 inline-block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg mb-1">Already Whitelisted?</p>
                  <p className="text-sm text-muted-foreground">
                    Server IP:{" "}
                    <code className="px-2 py-1 rounded bg-muted text-primary font-mono text-xs">
                      connect play.lsrp.net:30120
                    </code>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
