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
    <Card className="bg-card/50 backdrop-blur-sm border-border p-4 lg:p-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Circle
              className={`h-3 w-3 ${
                stats.status === "online"
                  ? "fill-success text-success animate-glow-pulse"
                  : "fill-destructive text-destructive"
              }`}
            />
            <span className="text-xs text-muted-foreground uppercase font-medium">Status</span>
          </div>
          <span className="text-lg lg:text-2xl font-bold text-success">
            {stats.status === "online" ? "Online" : "Offline"}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase font-medium">Players</span>
          </div>
          <span className="text-lg lg:text-2xl font-bold">
            {stats.online}
            <span className="text-sm text-muted-foreground font-normal">/{stats.maxPlayers}</span>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase font-medium">Ping</span>
          </div>
          <span className="text-lg lg:text-2xl font-bold text-info">{stats.ping}ms</span>
        </div>
      </div>
    </Card>
  );
}
