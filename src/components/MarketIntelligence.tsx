import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import AnimatedCounter from "@/components/AnimatedCounter";
import { TrendingUp, TrendingDown, BarChart3, Activity, DollarSign, Package, Truck, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const MarketIntelligence = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Generate dynamic market data based on current time
  const generateMarketData = () => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const day = currentTime.getDate();
    
    // Base values with time-based fluctuation
    const baseMultiplier = 1 + Math.sin((hour + minute / 60) * Math.PI / 12) * 0.1;
    const dayMultiplier = 1 + Math.sin(day * Math.PI / 15) * 0.05;
    
    return {
      activeOrders: Math.round(156 * baseMultiplier * dayMultiplier),
      totalValue: Math.round(2.8 * baseMultiplier * dayMultiplier * 10) / 10,
      avgDelivery: Math.round(4.2 * (2 - baseMultiplier) * 10) / 10,
      suppliers: Math.round(89 * (1 + dayMultiplier * 0.1)),
      priceIndex: Math.round(102.5 * baseMultiplier * 10) / 10,
      demandScore: Math.round(78 * baseMultiplier),
    };
  };

  const marketData = generateMarketData();

  const pricetrends = [
    {
      material: "TMT Bars",
      currentPrice: "₹68,500",
      change: "+2.4%",
      trend: "up",
      volume: "1,240 MT",
      icon: "🏗️"
    },
    {
      material: "Cement",
      currentPrice: "₹385",
      change: "-1.2%", 
      trend: "down",
      volume: "8,750 Bags",
      icon: "🏭"
    },
    {
      material: "Steel Pipes",
      currentPrice: "₹72,200",
      change: "+3.1%",
      trend: "up", 
      volume: "890 MT",
      icon: "⚡"
    },
    {
      material: "Aggregates",
      currentPrice: "₹1,850",
      change: "+0.8%",
      trend: "up",
      volume: "2,340 Cu.m",
      icon: "🪨"
    }
  ];

  const regionalData = [
    { city: "Mumbai", demand: 94, supply: 87, price: "High" },
    { city: "Delhi", demand: 88, supply: 92, price: "Medium" },
    { city: "Bangalore", demand: 91, supply: 85, price: "High" },
    { city: "Chennai", demand: 86, supply: 89, price: "Medium" },
    { city: "Hyderabad", demand: 89, supply: 83, price: "Medium" },
    { city: "Pune", demand: 92, supply: 88, price: "High" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Live Market Intelligence
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time construction material market data powered by AI analytics
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-500 font-medium">
              Live Data • Updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </motion.div>

        {/* Live Market Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="interactive" className="text-center p-4 group">
            <Package className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              <AnimatedCounter end={marketData.activeOrders} />
            </div>
            <div className="text-xs text-muted-foreground">Active Orders</div>
          </GlassCard>

          <GlassCard variant="interactive" className="text-center p-4 group">
            <DollarSign className="h-6 w-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              ₹<AnimatedCounter end={marketData.totalValue} decimals={1} />Cr
            </div>
            <div className="text-xs text-muted-foreground">Total Value</div>
          </GlassCard>

          <GlassCard variant="interactive" className="text-center p-4 group">
            <Truck className="h-6 w-6 text-primary-glow mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              <AnimatedCounter end={marketData.avgDelivery} decimals={1} />d
            </div>
            <div className="text-xs text-muted-foreground">Avg Delivery</div>
          </GlassCard>

          <GlassCard variant="interactive" className="text-center p-4 group">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              <AnimatedCounter end={marketData.suppliers} />
            </div>
            <div className="text-xs text-muted-foreground">Active Suppliers</div>
          </GlassCard>

          <GlassCard variant="interactive" className="text-center p-4 group">
            <Activity className="h-6 w-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              <AnimatedCounter end={marketData.priceIndex} decimals={1} />
            </div>
            <div className="text-xs text-muted-foreground">Price Index</div>
          </GlassCard>

          <GlassCard variant="interactive" className="text-center p-4 group">
            <BarChart3 className="h-6 w-6 text-primary-glow mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              <AnimatedCounter end={marketData.demandScore} />%
            </div>
            <div className="text-xs text-muted-foreground">Demand Score</div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Price Trends */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="premium" className="p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-foreground">Price Trends</h3>
                <div className="text-xs text-muted-foreground">Last 24 hours</div>
              </div>
              
              <div className="space-y-4">
                {pricetrends.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 glass-morphism rounded-lg group hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-foreground">{item.material}</div>
                        <div className="text-sm text-muted-foreground">{item.volume}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-foreground">{item.currentPrice}</div>
                      <div className={`flex items-center space-x-1 text-sm font-medium ${
                        item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.trend === 'up' ? 
                          <TrendingUp className="h-4 w-4" /> : 
                          <TrendingDown className="h-4 w-4" />
                        }
                        <span>{item.change}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Regional Demand */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="premium" className="p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-foreground">Regional Analysis</h3>
                <div className="text-xs text-muted-foreground">Major Cities</div>
              </div>
              
              <div className="space-y-4">
                {regionalData.map((region, index) => (
                  <motion.div
                    key={index}
                    className="glass-morphism p-4 rounded-lg group hover:border-accent/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">{region.city}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        region.price === 'High' 
                          ? 'text-red-500 bg-red-500/10' 
                          : 'text-amber-500 bg-amber-500/10'
                      }`}>
                        {region.price} Price
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Demand</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${region.demand}%` }}
                              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground">{region.demand}%</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Supply</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-accent to-primary-glow h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${region.supply}%` }}
                              transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground">{region.supply}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Market Insights */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="premium" className="inline-block p-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹12.5Cr+</div>
                <div className="text-muted-foreground">Today's Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">2,340+</div>
                <div className="text-muted-foreground">Materials Sourced</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-glow mb-2">96.8%</div>
                <div className="text-muted-foreground">Market Accuracy</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketIntelligence;