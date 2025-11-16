import { BookOpen, Newspaper, Shield, FileText, AlertCircle, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuickAccessCards = () => {
  const { t } = useLanguage();
  
  const [showContacts, setShowContacts] = useState(false);

  const cards = [
    {
      icon: BookOpen,
      title: t("quickAccess.learn.title"),
      description: t("quickAccess.learn.desc"),
      path: "/learn",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/50",
    },
    {
      icon: Newspaper,
      title: t("quickAccess.news.title"),
      description: t("quickAccess.news.desc"),
      // routes to Learn page showing common scam types
      path: "/learn",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      borderColor: "border-green-200 dark:border-green-800",
      hoverBg: "hover:bg-green-50 dark:hover:bg-green-900/50",
    },
    {
      icon: AlertCircle,
      title: t("quickAccess.report.title"),
      description: t("quickAccess.report.desc"),
      path: "/report",
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      borderColor: "border-red-200 dark:border-red-800",
      hoverBg: "hover:bg-red-50 dark:hover:bg-red-900/50",
    },
    {
      icon: FileText,
      title: t("quickAccess.resources.title"),
      description: t("quickAccess.resources.desc"),
      path: "/resources",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-100 dark:bg-amber-900/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      hoverBg: "hover:bg-amber-50 dark:hover:bg-amber-900/50",
    },
    {
      icon: Shield,
      title: t("quickAccess.checklist.title"),
      description: t("quickAccess.checklist.desc"),
      path: "/checklist",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-900/50",
    },
    {
      icon: Phone,
      title: t("quickAccess.contacts.title"),
      description: t("quickAccess.contacts.desc"),
      // special: not a route, will expand inline
      path: "#contacts",
      type: "contacts",
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      borderColor: "border-pink-200 dark:border-pink-800",
      hoverBg: "hover:bg-pink-50 dark:hover:bg-pink-900/50",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">{t("quickAccess.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("quickAccess.subtitle") || "Quick access to all essential cybersecurity resources and tools"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            // Contacts card: special inline expansion (no navigation)
            if (card.type === "contacts") {
              return (
                <div key={index} className="group">
                  <Card className={`h-full border-2 ${card.borderColor} ${card.hoverBg} transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 space-y-4 relative z-10">
                      <div className={`${card.bgColor} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className={`h-7 w-7 ${card.color}`} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg md:text-xl font-bold text-foreground">{card.title}</h3>
                          <button onClick={() => setShowContacts(!showContacts)} className="text-muted-foreground">
                            {showContacts ? 'Hide' : 'View'}
                          </button>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{card.description}</p>

                        {showContacts && (
                          <div className="mt-3 space-y-2 bg-muted/30 p-3 rounded-md">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">National Cyber Helpline</p>
                                <a href="tel:1930" className="text-lg font-bold text-destructive">1930</a>
                              </div>
                              <a href="tel:1930" className="text-sm text-primary">Call</a>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">Police Emergency</p>
                                <a href="tel:100" className="text-lg font-bold text-amber-600">100</a>
                              </div>
                              <a href="tel:100" className="text-sm text-primary">Call</a>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">Bank Helpline (Example)</p>
                                <span className="text-lg font-bold text-foreground">Your Bank's Number</span>
                              </div>
                              <a href="#" className="text-sm text-muted-foreground">—</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${card.color.replace('text-', 'bg-')} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </Card>
                </div>
              );
            }

            // Default: regular link card
            return (
              <Link key={index} to={card.path} className="group">
                <Card className={`h-full border-2 ${card.borderColor} ${card.hoverBg} transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden relative`}>
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    {/* Icon Container */}
                    <div className={`${card.bgColor} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className={`h-7 w-7 ${card.color}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-bold text-foreground">{card.title}</h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${card.color.replace('text-', 'bg-')} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
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
