import { Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const EmergencyBanner = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-danger text-danger-foreground py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 animate-pulse" />
          <span className="font-semibold text-base sm:text-lg">
            {t("emergency.text")}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:1930" className="no-underline">
            <Button 
              variant="secondary" 
              size="sm" 
              className="btn-hover-scale bg-background text-foreground hover:bg-background/90"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t("emergency.call")}
            </Button>
          </a>
          <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="secondary" 
              size="sm"
              className="btn-hover-scale bg-background text-foreground hover:bg-background/90"
            >
              {t("emergency.reportOnline")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
