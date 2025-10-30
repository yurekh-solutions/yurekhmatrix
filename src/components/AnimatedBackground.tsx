import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 300,20 450,60 C600,100 750,20 900,60 C1050,100 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
            className="animate-wave"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ea580c" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
