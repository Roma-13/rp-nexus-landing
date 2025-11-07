import { useState, useEffect } from "react";
import { Users, Circle, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ServerStatus() {
  const [stats, setStats] = useState({
    online: 147,
    maxPlayers: 256,
    status: "online",
    ping: 32,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        online: Math.floor(Math.random() * 50) + 120,
        ping: Math.floor(Math.random() * 20) + 20,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-strong rounded-3xl border border-border/50 p-6 lg:p-8 shadow-xl">
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl hover:bg-success/5 transition-colors">
          <div className="flex items-center gap-2">
            <Circle
              className={`h-3 w-3 ${
                stats.status === "online"
                  ? "fill-success text-success animate-glow-pulse"
                  : "fill-destructive text-destructive"
              }`}
            />
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Status</span>
          </div>
          <span className="text-xl lg:text-3xl font-bold font-display text-success">
            {stats.status === "online" ? "Online" : "Offline"}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl hover:bg-primary/5 transition-colors">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Players</span>
          </div>
          <div className="text-xl lg:text-3xl font-bold font-display">
            <span className="text-gradient">{stats.online}</span>
            <span className="text-base text-muted-foreground font-normal">/{stats.maxPlayers}</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl hover:bg-info/5 transition-colors">
          <div className="flex items-center gap-2">
            <Wifi className="h-5 w-5 text-secondary-accent" />
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Ping</span>
          </div>
          <span className="text-xl lg:text-3xl font-bold font-display text-secondary-accent">{stats.ping}ms</span>
        </div>
      </div>
    </div>
  );
}
