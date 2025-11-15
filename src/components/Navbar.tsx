import { Link } from "react-router-dom";
import { Menu, X, Shield, Globe, Bookmark } from "lucide-react";
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

  useEffect(() => {
    const updateSavedCount = () => {
      const saved = localStorage.getItem('savedArticles');
      if (saved) {
        setSavedCount(JSON.parse(saved).length);
      }
    };
    updateSavedCount();
    window.addEventListener('storage', updateSavedCount);
    return () => window.removeEventListener('storage', updateSavedCount);
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

            {deferredPrompt && showInstallPrompt && (
              <InstallButton deferredPrompt={deferredPrompt} showInstallPrompt={showInstallPrompt} />
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
