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
    <footer className="bg-secondary/20 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary-foreground">LS</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Los Santos <span className="text-primary">RP</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The most immersive GTA V roleplay experience. Join our community and create your story
              in Los Santos.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Los Santos Roleplay. Not affiliated with Rockstar Games.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
