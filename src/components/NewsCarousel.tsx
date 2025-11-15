import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Bookmark, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  isBookmarked: boolean;
}

const NewsCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: "New UPI Scam Alert: Fake Refund Calls",
      summary: "Fraudsters are calling citizens posing as bank officials offering refunds. Never share OTP or click suspicious links.",
      date: "2024-01-15",
      category: "UPI Fraud",
      isBookmarked: false,
    },
    {
      id: 2,
      title: "Aadhaar KYC Scam: 200+ Cases Reported",
      summary: "Scammers asking for Aadhaar update to prevent account blocking. Remember: Banks never ask for OTP via call.",
      date: "2024-01-14",
      category: "KYC Fraud",
      isBookmarked: false,
    },
    {
      id: 3,
      title: "Fake Loan Apps Steal Personal Data",
      summary: "Beware of instant loan apps demanding access to contacts and photos. Only use RBI-approved lending apps.",
      date: "2024-01-13",
      category: "Loan Fraud",
      isBookmarked: false,
    },
    {
      id: 4,
      title: "Voice Phishing: 'Do You Recognize Me?' Scam",
      summary: "Fraudsters recording your voice to create fake identity. Never answer unknown calls with 'Yes' or personal info.",
      date: "2024-01-12",
      category: "Voice Phishing",
      isBookmarked: false,
    },
    {
      id: 5,
      title: "Fake Shopping Websites on Social Media",
      summary: "Attractive deals leading to malicious APK downloads. Shop only from verified e-commerce platforms.",
      date: "2024-01-11",
      category: "Shopping Fraud",
      isBookmarked: false,
    },
  ]);

  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, newsItems.length]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const toggleBookmark = (id: number) => {
    setNewsItems(newsItems.map(item => 
      item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
    ));
  };

  const currentNews = newsItems[currentIndex];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-danger" />
            <h2 className="text-foreground">{t("news.title")}</h2>
          </div>
          <Badge variant="outline" className="text-danger border-danger">
            {t("news.liveUpdates")}
          </Badge>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2 border-danger/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <Badge className="bg-danger text-danger-foreground">
                    {currentNews.category}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBookmark(currentNews.id)}
                    className="btn-hover-scale"
                  >
                    <Bookmark 
                      className={`h-5 w-5 ${currentNews.isBookmarked ? 'fill-current text-warning' : ''}`}
                    />
                  </Button>
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {currentNews.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentNews.summary}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(currentNews.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>

                <Button variant="outline" className="w-full btn-hover-scale">
                  {t("news.readFull")}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden md:flex btn-hover-scale"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden md:flex btn-hover-scale"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <Button variant="outline" size="sm" onClick={handlePrevious}>
              <ChevronLeft className="h-5 w-5" />
              {t("common.previous")}
            </Button>
            <Button variant="outline" size="sm" onClick={handleNext}>
              {t("common.next")}
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full smooth-transition ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
