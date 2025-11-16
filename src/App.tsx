import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
