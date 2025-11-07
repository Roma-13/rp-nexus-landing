import { MessageSquare, Youtube, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  community: [
    { name: "Discord", href: "#discord" },
    { name: "Forums", href: "#forums" },
    { name: "Rules", href: "#rules" },
    { name: "Ban Appeals", href: "#appeals" },
  ],
  resources: [
    { name: "How to Join", href: "#join" },
    { name: "Features", href: "#features" },
    { name: "Departments", href: "#departments" },
    { name: "Donate", href: "#donate" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Report Bug", href: "#bug" },
    { name: "Contact", href: "#contact" },
    { name: "Status", href: "#status" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-2xl bg-gradient-accent blur-lg opacity-60"></div>
                <div className="relative h-full w-full rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary-foreground">LS</span>
                </div>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Los Santos <span className="text-gradient">RP</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed text-lg">
              The most immersive GTA V roleplay experience. Join our community and create your story
              in Los Santos.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="h-12 w-12 glass border-border/50 hover:border-primary/50 hover:text-primary transition-all hover:scale-110">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="h-12 w-12 glass border-border/50 hover:border-primary/50 hover:text-primary transition-all hover:scale-110">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="h-12 w-12 glass border-border/50 hover:border-primary/50 hover:text-primary transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="h-12 w-12 glass border-border/50 hover:border-primary/50 hover:text-primary transition-all hover:scale-110">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 font-display text-primary">Community</h3>
            <ul className="space-y-4">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 font-display text-primary">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 font-display text-primary">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-muted-foreground">
              © 2025 Los Santos Roleplay. Not affiliated with Rockstar Games.
            </p>
            <div className="flex gap-8">
              <a href="#privacy" className="text-base text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-base text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-base text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
