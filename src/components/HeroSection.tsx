import { Shield, BookOpen, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-gradient text-primary-foreground py-20 px-4">
      <div className="container mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex justify-center mb-6">
          <Shield className="h-20 w-20 animate-scale-in" />
        </div>
        
        <h1 className="font-bold mb-6">
          {t("home.hero.title")}
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-95">
          {t("home.hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/learn">
            <Button size="lg" variant="secondary" className="btn-hover-scale text-lg px-8">
              <BookOpen className="mr-2 h-5 w-5" />
              {t("home.hero.startLearning")}
            </Button>
          </Link>
          <Link to="/report">
            <Button 
              size="lg" 
              className="btn-hover-scale text-lg px-8 bg-warning text-warning-foreground hover:bg-warning/90"
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              {t("home.hero.reportFraud")}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="text-4xl font-bold">7+</div>
            <div className="text-sm opacity-90">{t("home.hero.scamTypes")}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-sm opacity-90">{t("home.hero.helpline")}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm opacity-90">{t("home.hero.freeResources")}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">Offline</div>
            <div className="text-sm opacity-90">{t("home.hero.offlineAccess")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
