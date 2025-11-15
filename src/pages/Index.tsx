import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import HeroSection from "@/components/HeroSection";
import QuickAccessCards from "@/components/QuickAccessCards";
import NewsCarousel from "@/components/NewsCarousel";
import Footer from "@/components/Footer";
import EmergencyHelpline from "@/components/EmergencyHelpline";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import { useLanguage } from "@/contexts/LanguageContext";

interface IndexProps {
  deferredPrompt: any;
  showInstallPrompt: boolean;
  setShowInstallPrompt: (show: boolean) => void;
}

const Index = ({ deferredPrompt, showInstallPrompt, setShowInstallPrompt }: IndexProps) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col pb-20">
      <EmergencyBanner />
      <Navbar deferredPrompt={deferredPrompt} showInstallPrompt={showInstallPrompt} />
      <main className="flex-grow">
        <HeroSection />
        <QuickAccessCards />
        <NewsCarousel />
        
        {/* Mission Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-foreground">{t("mission.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("mission.desc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">{t("mission.free")}</div>
                <div className="text-lg">{t("mission.freeDesc")}</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-secondary">{t("mission.offline")}</div>
                <div className="text-lg">{t("mission.offlineDesc")}</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-warning">{t("mission.support")}</div>
                <div className="text-lg">{t("mission.supportDesc")}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyHelpline />
      <FloatingHelpButton />
    </div>
  );
};

export default Index;
