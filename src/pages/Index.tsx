import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import HeroSection from "@/components/HeroSection";
import QuickAccessCards from "@/components/QuickAccessCards";
import NewsCarousel from "@/components/NewsCarousel";
import Footer from "@/components/Footer";
import EmergencyHelpline from "@/components/EmergencyHelpline";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, TrendingUp, Users, Zap, Globe, Heart, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        
        {/* Features Section */}
        <section className="py-16 md:py-24 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-foreground">{t("home.features.title") || "Why Choose Community Connect?"}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("home.features.subtitle") || "A comprehensive cybersecurity awareness platform built for you"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.features.fast.title") || "Fast & Offline"}</h3>
                <p className="text-muted-foreground">{t("home.features.fast.desc") || "Access cybersecurity content anytime, anywhere, without internet connection"}</p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="inline-flex p-3 rounded-lg bg-green-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.features.trusted.title") || "Expert Curated"}</h3>
                <p className="text-muted-foreground">{t("home.features.trusted.desc") || "Content developed by cybersecurity experts and verified resources"}</p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="inline-flex p-3 rounded-lg bg-purple-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.features.multilingual.title") || "Multilingual"}</h3>
                <p className="text-muted-foreground">{t("home.features.multilingual.desc") || "Available in 6+ languages to reach diverse communities"}</p>
              </div>

              {/* Feature 4 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border border-pink-200 dark:border-pink-800 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="inline-flex p-3 rounded-lg bg-pink-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.features.free.title") || "100% Free"}</h3>
                <p className="text-muted-foreground">{t("home.features.free.desc") || "No subscriptions, no hidden costs - completely free cybersecurity education"}</p>
              </div>

              {/* Feature 5 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="inline-flex p-3 rounded-lg bg-yellow-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.features.interactive.title") || "Interactive Learning"}</h3>
                <p className="text-muted-foreground">{t("home.features.interactive.desc") || "Engage with quizzes, checklists, and real-world scenarios"}</p>
              </div>

              {/* Feature 6 */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="inline-flex p-3 rounded-lg bg-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.features.community.title") || "Community Driven"}</h3>
                <p className="text-muted-foreground">{t("home.features.community.desc") || "Join thousands protecting themselves from cyber threats"}</p>
              </div>
            </div>
          </div>
        </section>
        
        <QuickAccessCards />
        
        {/* News Section */}
        <section className="py-16 md:py-24 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-foreground">{t("home.latestNews") || "Latest Security News"}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("home.latestNewsDesc") || "Stay updated with the latest cybersecurity alerts and awareness tips"}
              </p>
            </div>
            <NewsCarousel />
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-foreground">{t("mission.title") || "Our Mission"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("mission.desc") || "Empowering communities to stay safe in the digital world"}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 group hover:bg-card/50 p-8 rounded-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground">{t("mission.free") || "Free"}</h3>
                <p className="text-muted-foreground">{t("mission.freeDesc") || "Accessible to everyone, everywhere"}</p>
              </div>

              <div className="text-center space-y-4 group hover:bg-card/50 p-8 rounded-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground">{t("mission.offline") || "Offline"}</h3>
                <p className="text-muted-foreground">{t("mission.offlineDesc") || "Works without internet connection"}</p>
              </div>

              <div className="text-center space-y-4 group hover:bg-card/50 p-8 rounded-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex p-4 rounded-full bg-warning/10 group-hover:bg-warning/20 transition-colors">
                    <Heart className="h-8 w-8 text-warning" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground">{t("mission.support") || "24/7 Support"}</h3>
                <p className="text-muted-foreground">{t("mission.supportDesc") || "Always here when you need help"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center space-y-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">{t("home.cta.title") || "Ready to Secure Your Digital Life?"}</h2>
            <p className="text-lg opacity-95">
              {t("home.cta.subtitle") || "Start learning about cybersecurity threats and best practices today"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" variant="secondary" className="btn-hover-scale text-base md:text-lg px-8 py-6">
                  Start Learning
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" className="btn-hover-scale text-base md:text-lg px-8 py-6 bg-primary-dark hover:bg-primary-dark/90 text-primary-foreground">
                  View Resources
                </Button>
              </Link>
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
