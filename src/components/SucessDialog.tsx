import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const SuccessDialog = ({ open, onClose }: SuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
            </motion.div>
          </div>
          <DialogTitle className="text-center text-2xl">Message Sent Successfully!</DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Thank you for reaching out to MaterialMatrix. Our team will contact you shortly to discuss your AI-powered procurement needs.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={onClose} className="px-8">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
