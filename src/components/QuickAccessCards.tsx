import { BookOpen, Newspaper, Shield, FileText, AlertCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const QuickAccessCards = () => {
  const { t } = useLanguage();
  
  const cards = [
    {
      icon: BookOpen,
      title: t("quickAccess.learn.title"),
      description: t("quickAccess.learn.desc"),
      path: "/learn",
      color: "text-primary",
      bgColor: "bg-accent",
    },
    {
      icon: Newspaper,
      title: t("quickAccess.news.title"),
      description: t("quickAccess.news.desc"),
      path: "/news",
      color: "text-secondary",
      bgColor: "bg-success-light",
    },
    {
      icon: AlertCircle,
      title: t("quickAccess.report.title"),
      description: t("quickAccess.report.desc"),
      path: "/report",
      color: "text-danger",
      bgColor: "bg-danger-light",
    },
    {
      icon: FileText,
      title: t("quickAccess.resources.title"),
      description: t("quickAccess.resources.desc"),
      path: "/resources",
      color: "text-warning",
      bgColor: "bg-warning-light",
    },
    {
      icon: Shield,
      title: t("quickAccess.checklist.title"),
      description: t("quickAccess.checklist.desc"),
      path: "/checklist",
      color: "text-primary",
      bgColor: "bg-accent",
    },
    {
      icon: Phone,
      title: t("quickAccess.contacts.title"),
      description: t("quickAccess.contacts.desc"),
      path: "/contacts",
      color: "text-secondary",
      bgColor: "bg-success-light",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-center mb-12 text-foreground">{t("quickAccess.title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link key={index} to={card.path}>
                <Card className="card-hover cursor-pointer h-full border-2 hover:border-primary">
                  <CardContent className="p-6 space-y-4">
                    <div className={`${card.bgColor} w-16 h-16 rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${card.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;
