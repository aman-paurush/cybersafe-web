import { Link } from "react-router-dom";
import { Menu, X, Shield, Globe, Bookmark, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import InstallButton from "@/components/InstallButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  deferredPrompt?: any;
  showInstallPrompt?: boolean;
}

const Navbar = ({ deferredPrompt, showInstallPrompt }: NavbarProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const { language, setLanguage, t } = useLanguage();
  const [deferredPromptLocal, setDeferredPromptLocal] = useState<any>(null);
  const [showInstallPromptLocal, setShowInstallPromptLocal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSavedCount = () => {
      const saved = localStorage.getItem('savedArticles');
      if (saved) {
        setSavedCount(JSON.parse(saved).length);
      }
    };
    updateSavedCount();
    window.addEventListener('storage', updateSavedCount);
    
    // Detect mobile
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(mobile);
    console.log('Mobile detected:', mobile);
    
    return () => window.removeEventListener('storage', updateSavedCount);
  }, []);

  // Local PWA install prompt listener so InstallButton is available on all pages (including mobile)
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      console.log('beforeinstallprompt fired - setting prompt available');
      setDeferredPromptLocal(e);
      setShowInstallPromptLocal(true);
    };

    const handleAppInstalled = () => {
      console.log('App installed');
      setShowInstallPromptLocal(false);
      setDeferredPromptLocal(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "mr", name: "मराठी" },
    { code: "gu", name: "ગુજરાતી" },
    { code: "te", name: "తెలుగు" },
    { code: "ta", name: "தமிழ்" }
  ];

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.learn"), path: "/learn" },
    { name: t("nav.videos"), path: "/videos" },
    { name: t("nav.resources"), path: "/resources" },
    { name: t("nav.report"), path: "/report" },
    { name: "Report Scam", path: "/report-scam" },
    { name: t("nav.about"), path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Shield className="h-8 w-8" />
            <span className="font-bold text-xl">{t("app.name")}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button variant="ghost">{link.name}</Button>
                </Link>
              ))}
              <Link to="/saved-news">
                <Button variant="ghost" className="relative gap-2">
                  <Bookmark className="h-4 w-4" />
                  {savedCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {savedCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {((deferredPrompt && showInstallPrompt) || (deferredPromptLocal && showInstallPromptLocal)) && (
              <InstallButton deferredPrompt={deferredPrompt || deferredPromptLocal} showInstallPrompt={showInstallPrompt || showInstallPromptLocal} />
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {languages.find(l => l.code === language)?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={language === lang.code ? "bg-accent" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">{link.name}</Button>
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-4 border-t border-border pt-4 mt-4">
              {isMobile && !showInstallPromptLocal && (
                <div className="mb-4 p-3 bg-primary/10 border border-primary rounded-lg text-center">
                  <p className="text-xs text-foreground mb-2 font-semibold">Install CyberSafe App</p>
                  <p className="text-xs text-muted-foreground mb-3">Get offline access and faster loading</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-primary hover:bg-primary/90 gap-2"
                    onClick={() => {
                      alert('On Android: Tap menu (3 dots) → "Install app" or "Add to Home Screen"\nOn iPhone: Tap Share → "Add to Home Screen"');
                    }}
                  >
                    <Download className="h-4 w-4" />
                    How to Install
                  </Button>
                </div>
              )}
              
              {((deferredPrompt && showInstallPrompt) || (deferredPromptLocal && showInstallPromptLocal)) && (
                <div className="mb-4">
                  <InstallButton deferredPrompt={deferredPrompt || deferredPromptLocal} showInstallPrompt={showInstallPrompt || showInstallPromptLocal} />
                </div>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full gap-2">
                    <Globe className="h-4 w-4" />
                    {languages.find(l => l.code === language)?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={language === lang.code ? "bg-accent" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
