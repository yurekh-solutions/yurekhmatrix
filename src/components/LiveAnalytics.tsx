import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, BarChart3, Package, Clock, TrendingUp, TrendingDown } from "lucide-react";

const LiveAnalytics = () => {
  const [stats] = useState(() => {
    const materials = ["Steel", "Cement", "Aluminum", "Copper"];
    const currentMaterial = Math.floor(Math.random() * materials.length);
    
    return {
      activeQuotes: 95 + Math.floor(Math.random() * 30),
      processing: 40 + Math.floor(Math.random() * 25),
      completedToday: 120 + Math.floor(Math.random() * 40),
      avgResponse: 18 + Math.floor(Math.random() * 8),
      totalOrders: 1100 + Math.floor(Math.random() * 150),
      pendingApprovals: 20 + Math.floor(Math.random() * 20),
      marketTrend: parseFloat((-1 + Math.random() * 5).toFixed(1)),
      materials,
      currentMaterial,
      predictions: [92, 95, 88, 94],
    };
  });

  const currentMaterial = stats.materials[stats.currentMaterial];
  const currentPrediction = stats.predictions[stats.currentMaterial];

  return (
    <Card className="relative p-5 sm:p-6 md:p-8 border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-[#f9f7f6] to-[#f4f0ec] backdrop-blur-md rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse rounded-2xl -z-10"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-3">
          <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Live Analytics
          </h2>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/30 text-xs sm:text-sm shadow-lg flex items-center">
          <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse shadow-lg shadow-primary/50"></div>
          LIVE
        </Badge>
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 font-medium leading-relaxed">
        Real-time Ritzyard platform insights • Refreshes on page load
      </p>

      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
        {[
          { title: "Active Quotes", value: stats.activeQuotes, color: "primary", note: "Live updates" },
          { title: "Processing", value: stats.processing, color: "secondary", note: "In progress" },
          { title: "Completed Today", value: stats.completedToday, color: "primary", note: "Delivered" },
          { title: "Avg Response", value: `${stats.avgResponse}min`, color: "secondary", note: "Lightning fast" },
        ].map((item, index) => (
          <Card
            key={index}
            className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{item.title}</span>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></div>
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {item.value}
            </div>
            <div className="text-xs text-primary font-medium">{item.note}</div>
          </Card>
        ))}
      </div>

      {/* Market Intelligence */}
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 p-3 sm:p-4 mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Market Intelligence
            </span>
          </div>
          <div className="flex items-center gap-1">
            {stats.marketTrend >= 0 ? (
              <TrendingUp className="w-4 h-4 text-primary" />
            ) : (
              <TrendingDown className="w-4 h-4 text-destructive" />
            )}
            <span className={`text-xs sm:text-sm font-bold ${stats.marketTrend >= 0 ? 'text-primary' : 'text-destructive'}`}>
              {stats.marketTrend >= 0 ? '+' : ''}{stats.marketTrend}%
            </span>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground font-medium">
          <span className="font-bold text-primary">{currentMaterial}</span> prices {stats.marketTrend >= 0 ? 'trending upward' : 'declining'} • AI prediction: {currentPrediction}% accuracy
        </div>
      </Card>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <Card className="p-3 sm:p-4 border border-primary/20 shadow-md bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-medium">Total Orders</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-primary">{stats.totalOrders}</div>
          <div className="text-xs text-primary font-medium">+2.4% growth</div>
        </Card>

        <Card className="p-3 sm:p-4 border border-primary/20 shadow-md bg-gradient-to-br from-secondary/5 to-primary/5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
            <span className="text-xs text-muted-foreground font-medium">Pending</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-secondary">{stats.pendingApprovals}</div>
          <div className="text-xs text-secondary font-medium">-3.2% reduced</div>
        </Card>
      </div>
      
    </Card>
  );
};

export default LiveAnalytics;
