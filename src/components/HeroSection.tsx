import { Play, Users, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServerStatus } from "./ServerStatus";
import heroImage from "@/assets/hero-cityscape.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-hero z-[9]" />
        <img
          src={heroImage}
          alt="Los Santos Cityscape"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-accent/20 rounded-full blur-[120px] floating" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 grid-pattern opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-32 pb-16">
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-strong border border-border/50 shadow-lg animate-scale-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success shadow-glow"></span>
            </span>
            <span className="text-base font-semibold">147 Players Online Now</span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight leading-none">
              Welcome to
            </h1>
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-3xl bg-gradient-accent opacity-30 animate-glow-pulse"></div>
              <h1 className="relative font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight leading-none text-gradient-blue">
                Los Santos RP
              </h1>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Experience the most <span className="text-primary font-semibold">authentic GTA V roleplay</span> server with custom scripts, 
            dynamic economy, and a thriving community of passionate players.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <Button size="lg" className="bg-gradient-accent shadow-glow hover:shadow-xl text-lg px-10 h-16 rounded-2xl font-bold transition-all hover:scale-105 group">
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Start Playing Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 h-16 rounded-2xl glass border-border/50 hover:border-primary/50 font-bold transition-all hover:scale-105">
              <Users className="mr-3 h-6 w-6" />
              Join Discord
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-3xl"></div>
              <div className="relative flex flex-col items-center gap-3 p-8 rounded-3xl glass-strong border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <span className="text-5xl font-bold font-display text-gradient">10K+</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Active Members</span>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-secondary-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-3xl"></div>
              <div className="relative flex flex-col items-center gap-3 p-8 rounded-3xl glass-strong border border-border/50 hover:border-secondary-accent/50 transition-all hover:scale-105 hover:shadow-lg">
                <div className="h-14 w-14 rounded-2xl bg-secondary-accent/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-secondary-accent" />
                </div>
                <span className="text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-primary">99.9%</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Uptime</span>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-success opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-3xl"></div>
              <div className="relative flex flex-col items-center gap-3 p-8 rounded-3xl glass-strong border border-border/50 hover:border-success/50 transition-all hover:scale-105 hover:shadow-lg">
                <div className="h-14 w-14 rounded-2xl bg-success/10 flex items-center justify-center mb-2">
                  <Play className="h-8 w-8 text-success" />
                </div>
                <span className="text-5xl font-bold font-display text-success">24/7</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Online</span>
              </div>
            </div>
          </div>

          {/* Server Status */}
          <div className="pt-12 max-w-3xl mx-auto">
            <ServerStatus />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15"></div>
    </section>
  );
}
