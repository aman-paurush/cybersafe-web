import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ReadAloudButton from "@/components/ReadAloudButton";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import ScamDetail from "./pages/ScamDetail";
import Quiz from "./pages/Quiz";
import Checklist from "./pages/Checklist";
import Videos from "./pages/Videos";
import Report from "./pages/Report";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Glossary from "./pages/Glossary";
import NotFound from "./pages/NotFound";
import SavedNews from "./pages/SavedNews";
import SpotTheScam from "./pages/SpotTheScam";
import SafetyScore from "./pages/SafetyScore";
import Resources from "./pages/Resources";
import HelpLanding from "./pages/HelpLanding";
import ReportScamForm from "./pages/ReportScamForm";

const queryClient = new QueryClient();

interface AppProps {
  deferredPrompt: any;
  showInstallPrompt: boolean;
  setShowInstallPrompt: (show: boolean) => void;
}

const App = ({ deferredPrompt, showInstallPrompt, setShowInstallPrompt }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ReadAloudButton />
          <Routes>
            <Route path="/" element={<Index deferredPrompt={deferredPrompt} showInstallPrompt={showInstallPrompt} setShowInstallPrompt={setShowInstallPrompt} />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:scamId" element={<ScamDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/report" element={<Report />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/saved-news" element={<SavedNews />} />
            <Route path="/spot-the-scam" element={<SpotTheScam />} />
            <Route path="/safety-score" element={<SafetyScore />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/report-scam" element={<ReportScamForm />} />
            {/* Alias routes for common broken help links - show friendly help landing */}
            <Route path="/learn-protect" element={<HelpLanding />} />
            <Route path="/learn-and-protect" element={<HelpLanding />} />
            <Route path="/learn%20%26%20protect" element={<HelpLanding />} />
            <Route path="/report-fraud" element={<HelpLanding />} />
            <Route path="/reportfraud" element={<HelpLanding />} />
            <Route path="/help" element={<HelpLanding />} />
            <Route path="/help-and-support" element={<HelpLanding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

// ScrollToTop component forces the window to the top on every navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
