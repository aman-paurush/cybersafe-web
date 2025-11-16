import { Phone, AlertTriangle, Share2, ChevronUp, ChevronDown, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const EmergencyHelpline = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-destructive to-red-700 text-white shadow-2xl border-t border-white/20 dark:from-red-900 dark:to-red-950 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="relative">
                <Shield className="h-7 w-7 text-red-100" />
                <AlertTriangle className="h-4 w-4 animate-pulse absolute -bottom-1 -right-1 text-yellow-300" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-sm md:text-base leading-tight">{t("emergency.title")}</p>
              <p className="text-xs opacity-90 truncate">{t("emergency.subtitle")}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-destructive hover:bg-white/90 font-semibold shadow-lg"
              onClick={() => window.location.href = '/report'}
            >
              {t("emergency.report")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div className="pb-4 border-t border-white/20 pt-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Call Button */}
              <a href="tel:1930" className="group flex items-center gap-3 p-4 bg-white/15 hover:bg-white/25 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 shadow-md hover:shadow-lg hover:scale-105">
                <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm">1930</p>
                  <p className="text-xs opacity-90">{t("emergency.cybercrime")}</p>
                </div>
              </a>
              
              {/* Portal Button */}
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 bg-white/15 hover:bg-white/25 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 shadow-md hover:shadow-lg hover:scale-105">
                <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm">{t("emergency.portal")}</p>
                  <p className="text-xs opacity-90">cybercrime.gov.in</p>
                </div>
              </a>
              
              {/* Share Button */}
              <button className="group flex items-center gap-3 p-4 bg-white/15 hover:bg-white/25 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 shadow-md hover:shadow-lg hover:scale-105">
                <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Share2 className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-semibold text-sm">{t("emergency.share")}</p>
                  <p className="text-xs opacity-90">{t("emergency.shareDesc")}</p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyHelpline;
