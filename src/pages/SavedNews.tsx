import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bookmark, Trash2, ArrowLeft, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import EmergencyBanner from "@/components/EmergencyBanner";

const SavedNews = () => {
  const { t } = useLanguage();
  const [savedArticles, setSavedArticles] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSwipe, setAutoSwipe] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  // Reset index when navigated to this route (or when navigation state requests a startIndex)
  useEffect(() => {
    // If navigation supplied a start index, honor it
    // @ts-ignore - location.state may be undefined or any
    const startIndex = location.state && (location.state.startIndex ?? null);
    if (startIndex !== null && typeof startIndex === 'number' && startIndex >= 0) {
      setCurrentIndex(startIndex);
    } else {
      // default: start from beginning
      setCurrentIndex(0);
    }
    // when arriving fresh, resume auto-swipe
    setAutoSwipe(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  // Auto-swipe functionality
  useEffect(() => {
    if (!autoSwipe || savedArticles.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % savedArticles.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval);
  }, [autoSwipe, savedArticles.length]);

  const removeArticle = (id: string) => {
    const updated = savedArticles.filter(article => article.id !== id);
    setSavedArticles(updated);
    localStorage.setItem('savedArticles', JSON.stringify(updated));
    if (currentIndex >= updated.length && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % savedArticles.length);
    setAutoSwipe(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + savedArticles.length) % savedArticles.length);
    setAutoSwipe(false);
  };

  const handleCardSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      prevCard();
    } else {
      nextCard();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("saved.back")}
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-foreground">Latest Fraud News & Alerts</h1>
          </div>

          {savedArticles.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t("saved.empty")}</p>
            </div>
          ) : (
            <>
              {/* Swipeable Card Carousel */}
              <div className="mb-12">
                <div className="relative">
                  {/* Main Swipeable Card */}
                  <div className="perspective mb-6">
                    <div className="relative h-96 md:h-80 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                         onMouseEnter={() => setAutoSwipe(false)}
                         onMouseLeave={() => setAutoSwipe(true)}>
                      
                      {/* Card Background with Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50">
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>

                      {/* Card Content */}
                      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between text-white z-10">
                        <div>
                          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-4 border border-white/30">
                            {savedArticles[currentIndex].category}
                          </span>
                          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {savedArticles[currentIndex].headline}
                          </h2>
                          <p className="text-lg opacity-90 line-clamp-3">
                            {savedArticles[currentIndex].summary}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm opacity-75">{savedArticles[currentIndex].date}</p>
                          <p className="text-xs font-semibold opacity-75">
                            {currentIndex + 1} / {savedArticles.length}
                          </p>
                        </div>
                      </div>

                      {/* Swipe Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                        {savedArticles.map((_, index) => (
                          <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-6">
                      <Button
                        onClick={prevCard}
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        Previous
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          {autoSwipe ? 'Auto-swiping...' : 'Manual mode'}
                        </p>
                        <Button
                          onClick={() => setAutoSwipe(!autoSwipe)}
                          variant="secondary"
                          size="sm"
                        >
                          {autoSwipe ? 'Pause' : 'Resume'} Auto
                        </Button>
                      </div>

                      <Button
                        onClick={nextCard}
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2"
                      >
                        Next
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <div className="mt-4 text-center">
                      <Button
                        onClick={() => removeArticle(savedArticles[currentIndex].id)}
                        variant="destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove This News
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* All News Articles List */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8 text-foreground">All Saved News</h2>
                <div className="space-y-4">
                  {savedArticles.map((article, index) => (
                    <div
                      key={article.id}
                      onClick={() => {
                        setCurrentIndex(index);
                        setAutoSwipe(false);
                      }}
                      className={`bg-card border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        index === currentIndex
                          ? 'border-primary bg-primary/5 shadow-lg'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                            {article.category}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {article.headline}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                          <p className="text-muted-foreground line-clamp-2">{article.summary}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeArticle(article.id);
                          }}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavedNews;
