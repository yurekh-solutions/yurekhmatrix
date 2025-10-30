import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SuccessAnimationProps {
  message?: string;
  onComplete?: () => void;
  duration?: number;
}

const SuccessAnimation = ({
  message = "Success! Your request has been sent.",
  onComplete,
  duration = 3000
}: SuccessAnimationProps) => {
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [onComplete, duration]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="glass-card p-8 max-w-md mx-4 text-center animate-scale-in">
        <div className="relative">
          {/* Confetti particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: '50%',
                top: '50%',
                background: `hsl(${i * 30}, 70%, 60%)`,
                animationDelay: `${i * 0.1}s`,
                '--angle': `${i * 30}deg`,
              } as React.CSSProperties}
            />
          ))}
          
          {/* Success icon */}
          <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-bounce-in shadow-lg shadow-green-500/50">
            <CheckCircle2 className="w-12 h-12 text-white animate-scale-in" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Request Sent!
        </h3>
        <p className="text-muted-foreground mb-4">{message}</p>
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600 animate-progress"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      </Card>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translate(-50%, -50%) translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translateY(-200px) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-confetti {
          animation: confetti 1.5s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </div>
  );
};

export default SuccessAnimation;
