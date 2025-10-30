import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AIBadgeProps {
  text?: string;
  className?: string;
}

const AIBadge = ({ text = "AI Powered", className = "" }: AIBadgeProps) => {
  return (
    <Badge 
      className={`ai-badge bg-gradient-to-r from-primary to-primary/80 text-white border-0 px-3 py-1 ${className}`}
    >
      <Sparkles className="w-3 h-3 mr-1" />
      {text}
    </Badge>
  );
};

export default AIBadge;
