import { useState, useEffect } from "react";
import { Bookmark, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SavedNews = () => {
  const { t } = useLanguage();
  const [savedArticles, setSavedArticles] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  const removeArticle = (id: string) => {
    const updated = savedArticles.filter(article => article.id !== id);
    setSavedArticles(updated);
    localStorage.setItem('savedArticles', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("saved.back")}
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <Bookmark className="h-8 w-8 text-primary" />
            <h1 className="text-foreground">{t("saved.title")}</h1>
          </div>

          {savedArticles.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t("saved.empty")}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {savedArticles.map((article) => (
                <div key={article.id} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">{article.headline}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                      <p className="text-muted-foreground">{article.summary}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArticle(article.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavedNews;
