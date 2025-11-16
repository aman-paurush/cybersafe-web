import { MessageCircle, Phone, AlertTriangle, BookOpen, Volume2, Moon, Sun, X, HelpCircle } from "lucide-react";
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

  const menuItems = [
    {
      icon: Phone,
      label: t("help.menu.call"),
      action: () => window.location.href = 'tel:1930',
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      icon: AlertTriangle,
      label: t("help.menu.report"),
      action: () => window.location.href = '/report',
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      icon: BookOpen,
      label: t("help.menu.learn"),
      action: () => window.location.href = '/learn',
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Volume2,
      label: t("help.menu.audio"),
      action: () => speakText(t("help.menu.audio.text")),
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
  ];

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40">
        {isOpen && (
          <div className="mb-4 bg-background dark:bg-slate-900 border border-border dark:border-slate-700 rounded-2xl shadow-2xl p-5 w-72 animate-scale-in backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border dark:border-slate-700">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground dark:text-white">{t("help.menu.title")}</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="hover:bg-accent dark:hover:bg-slate-800">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="space-y-2 mb-4">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.action}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 group ${item.bgColor}`}
                  >
                    <div className={`flex-shrink-0 p-2 rounded-lg ${item.bgColor} group-hover:shadow-md transition-all`}>
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground dark:text-white group-hover:font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-border dark:border-slate-700 my-3"></div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 group ${
                darkMode
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-900/50'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <div className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-yellow-100 dark:bg-yellow-900/30'
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}>
                {darkMode ? (
                  <Sun className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                )}
              </div>
              <span className="text-sm font-medium text-foreground dark:text-white group-hover:font-semibold">
                {darkMode ? t("help.menu.lightMode") : t("help.menu.darkMode")}
              </span>
            </button>
          </div>
        )}

        {/* Floating Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-16 w-16 shadow-2xl bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce border-2 border-white/20 dark:border-slate-700"
        >
          <div className="relative">
            <MessageCircle className="h-7 w-7" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default FloatingHelpButton;
