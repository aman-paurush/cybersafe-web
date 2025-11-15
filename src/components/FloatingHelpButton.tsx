import { MessageCircle, Phone, AlertTriangle, BookOpen, Volume2, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const FloatingHelpButton = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40">
        {isOpen && (
          <div className="mb-4 bg-background border border-border rounded-lg shadow-lg p-4 w-64 animate-scale-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{t("help.menu.title")}</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <a href="tel:1930" className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                <Phone className="h-5 w-5 text-destructive" />
                <span className="text-sm">{t("help.menu.call")}</span>
              </a>
              <button onClick={() => window.location.href = '/report'} className="w-full flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <span className="text-sm">{t("help.menu.report")}</span>
              </button>
              <button onClick={() => window.location.href = '/learn'} className="w-full flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm">{t("help.menu.learn")}</span>
              </button>
              <button onClick={() => speakText(t("help.menu.audio.text"))} className="w-full flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                <Volume2 className="h-5 w-5 text-success" />
                <span className="text-sm">{t("help.menu.audio")}</span>
              </button>
              <button onClick={toggleDarkMode} className="w-full flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                {darkMode ? <Sun className="h-5 w-5 text-warning" /> : <Moon className="h-5 w-5 text-primary" />}
                <span className="text-sm">{darkMode ? t("help.menu.lightMode") : t("help.menu.darkMode")}</span>
              </button>
            </div>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};

export default FloatingHelpButton;
