import { Phone, AlertTriangle, Share2, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const EmergencyHelpline = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-destructive text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <AlertTriangle className="h-6 w-6 animate-pulse" />
            <div>
              <p className="font-bold text-sm md:text-base">{t("emergency.title")}</p>
              <p className="text-xs opacity-90">{t("emergency.subtitle")}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-destructive hover:bg-white/90"
              onClick={() => window.location.href = '/report'}
            >
              {t("emergency.report")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div className="pb-4 border-t border-white/20 pt-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a href="tel:1930" className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="font-semibold">1930</p>
                  <p className="text-xs opacity-90">{t("emergency.cybercrime")}</p>
                </div>
              </a>
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <AlertTriangle className="h-5 w-5" />
                <div>
                  <p className="font-semibold">{t("emergency.portal")}</p>
                  <p className="text-xs opacity-90">cybercrime.gov.in</p>
                </div>
              </a>
              <button className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Share2 className="h-5 w-5" />
                <div>
                  <p className="font-semibold">{t("emergency.share")}</p>
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
