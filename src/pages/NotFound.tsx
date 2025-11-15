import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold text-foreground">{t("notFound.title")}</h2>
        <p className="text-muted-foreground max-w-md mx-auto">{t("notFound.message")}</p>
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="h-5 w-5" />
              {t("notFound.home")}
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            {t("notFound.back")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
