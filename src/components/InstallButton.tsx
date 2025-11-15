import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface InstallButtonProps {
  deferredPrompt: any;
  showInstallPrompt: boolean;
}

const InstallButton = ({ deferredPrompt, showInstallPrompt }: InstallButtonProps) => {
  const { t } = useLanguage();

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response: ${outcome}`);
    }
  };

  if (!showInstallPrompt) return null;

  return (
    <Button
      onClick={handleInstall}
      size="sm"
      className="bg-success hover:bg-success/90 text-white animate-pulse gap-2"
    >
      <Download className="h-4 w-4" />
      {t("install.button")}
    </Button>
  );
};

export default InstallButton;
