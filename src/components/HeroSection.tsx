import { Play, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServerStatus } from "./ServerStatus";
import heroImage from "@/assets/hero-cityscape.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
        <img
          src={heroImage}
          alt="Los Santos Cityscape"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-sm font-medium">147 Players Online Now</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            Welcome to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">
              Los Santos Roleplay
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the most authentic GTA V roleplay server with custom scripts, dynamic economy,
            professional law enforcement, and a thriving community of passionate players.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-gradient-accent shadow-glow text-lg px-8 h-14">
              <Play className="mr-2 h-5 w-5" />
              Start Playing Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14">
              <Users className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
              <Users className="h-8 w-8 text-primary mb-2" />
              <span className="text-3xl font-bold font-display">10K+</span>
              <span className="text-sm text-muted-foreground">Active Members</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <span className="text-3xl font-bold font-display">99.9%</span>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
              <Play className="h-8 w-8 text-primary mb-2" />
              <span className="text-3xl font-bold font-display">24/7</span>
              <span className="text-sm text-muted-foreground">Online</span>
            </div>
          </div>

          <div className="pt-8">
            <ServerStatus />
          </div>
        </div>
      </div>
    </section>
  );
}
