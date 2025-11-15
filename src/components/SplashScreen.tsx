import { Shield, Lock } from "lucide-react";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2; // Changed to 2 for 5 second duration (100/2 * 100ms = 5000ms)
      });
    }, 100); // Changed to 100ms intervals

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo with Shield and Lock */}
        <div className="relative flex justify-center">
          <Shield className="h-32 w-32 animate-pulse" />
          <Lock className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in" />
        </div>

        {/* App Name */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">CyberSafe</h1>
          <p className="text-xl opacity-95">सुरक्षित रहें, डिजिटल बनें</p>
          <p className="text-lg opacity-90">(Stay Safe, Go Digital)</p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Language Info */}
        <div className="flex items-center gap-3 text-sm opacity-80">
          <span>Available in:</span>
          <div className="flex gap-2">
            <span>🇮🇳 हिन्दी</span>
            <span>|</span>
            <span>English</span>
            <span>|</span>
            <span>తెలుగు</span>
            <span>|</span>
            <span>தமிழ்</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
