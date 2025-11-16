import { Shield, BookOpen, AlertTriangle, Zap, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-gradient text-primary-foreground py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      <div className="container mx-auto text-center space-y-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm font-semibold">
            <Zap className="h-4 w-4" />
            {t("home.hero.badge") || "Trusted by Thousands"}
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
            <Shield className="h-24 w-24 md:h-28 md:w-28 relative animate-bounce" style={{animationDuration: "3s"}} />
          </div>
        </div>
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="font-bold mb-2 leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 opacity-95 leading-relaxed">
            {t("home.hero.subtitle")}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/learn">
            <Button size="lg" variant="secondary" className="btn-hover-scale text-base md:text-lg px-8 py-6 shadow-lg">
              <BookOpen className="mr-2 h-5 w-5" />
              {t("home.hero.startLearning")}
            </Button>
          </Link>
          <Link to="/report">
            <Button 
              size="lg" 
              className="btn-hover-scale text-base md:text-lg px-8 py-6 bg-warning text-warning-foreground hover:bg-warning/90 shadow-lg"
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              {t("home.hero.reportFraud")}
            </Button>
          </Link>
        </div>

        {/* Enhanced Stats with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20 max-w-5xl mx-auto pt-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="h-8 w-8 text-yellow-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">7+</div>
            <div className="text-xs md:text-sm opacity-90 mt-2">{t("home.hero.scamTypes")}</div>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <Lock className="h-8 w-8 text-green-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">24/7</div>
            <div className="text-xs md:text-sm opacity-90 mt-2">{t("home.hero.helpline")}</div>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-blue-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">100%</div>
            <div className="text-xs md:text-sm opacity-90 mt-2">{t("home.hero.freeResources")}</div>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-purple-200" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">Offline</div>
            <div className="text-xs md:text-sm opacity-90 mt-2">{t("home.hero.offlineAccess")}</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-8 animate-bounce" style={{animationDelay: "0.5s"}}>
          <svg className="w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
