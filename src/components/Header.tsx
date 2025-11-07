import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How to Join", href: "#join" },
  { name: "Rules", href: "#rules" },
  { name: "Community", href: "#community" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="font-display text-xl font-bold text-primary-foreground">LS</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Los Santos <span className="text-primary">RP</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="#discord">Discord</a>
            </Button>
            <Button size="sm" className="bg-gradient-accent shadow-glow" asChild>
              <a href="#join">Join Now</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-border">
                  <Button variant="outline" asChild>
                    <a href="#discord">Join Discord</a>
                  </Button>
                  <Button className="bg-gradient-accent shadow-glow" asChild>
                    <a href="#join">Join Server</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
