import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ReadAloudButton = () => {
  const { t } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const handleSpeechEnd = () => {
      setIsSpeaking(false);
    };

    if ('speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('end', handleSpeechEnd);
      return () => {
        window.speechSynthesis.removeEventListener('end', handleSpeechEnd);
      };
    }
  }, []);

  const extractPageContent = () => {
    // Get main content area
    const mainContent = document.querySelector('main');
    if (!mainContent) return '';

    // Clone the content to avoid modifying the DOM
    const clone = mainContent.cloneNode(true) as HTMLElement;

    // Remove unwanted elements
    const unwantedSelectors = [
      'script',
      'style',
      'nav',
      'button',
      '.hidden',
      '[aria-hidden="true"]',
      'svg',
      'img'
    ];

    unwantedSelectors.forEach(selector => {
      clone.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Get text content
    let text = clone.textContent || '';
    
    // Clean up text
    text = text
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\n+/g, '. ') // Replace newlines with periods
      .trim();

    return text;
  };

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('आपका ब्राउज़र इस फीचर को सपोर्ट नहीं करता। / Your browser does not support text-to-speech.');
      return;
    }

    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start speaking
      const text = extractPageContent();
      
      if (!text) {
        alert('पेज पर कोई सामग्री नहीं मिली। / No content found on page.');
        return;
      }

      // Split text into chunks (for better performance with long content)
      const maxLength = 200;
      const chunks = [];
      let currentChunk = '';

      text.split('. ').forEach(sentence => {
        if ((currentChunk + sentence).length > maxLength) {
          if (currentChunk) chunks.push(currentChunk);
          currentChunk = sentence;
        } else {
          currentChunk += (currentChunk ? '. ' : '') + sentence;
        }
      });
      
      if (currentChunk) chunks.push(currentChunk);

      setIsSpeaking(true);

      // Speak each chunk
      chunks.forEach((chunk, index) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        utterance.lang = 'hi-IN';
        utterance.rate = 0.9; // Slightly slower for better comprehension
        utterance.pitch = 1;
        utterance.volume = 1;

        if (index === chunks.length - 1) {
          utterance.onend = () => {
            setIsSpeaking(false);
          };
        }

        utterance.onerror = () => {
          setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
      });
    }
  };

  return (
    <div className="fixed bottom-24 left-4 z-40">
      <Button
        onClick={toggleSpeech}
        size="lg"
        className={`rounded-full h-14 w-14 shadow-lg transition-all ${
          isSpeaking 
            ? 'bg-destructive hover:bg-destructive/90 animate-pulse' 
            : 'bg-primary hover:bg-primary/90'
        }`}
        title={isSpeaking ? "बोलना बंद करें / Stop Reading" : "पेज पढ़ें / Read Page Aloud"}
      >
        {isSpeaking ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </Button>
      <div className="mt-2 text-center">
        <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded-md shadow-sm">
          {isSpeaking ? "बोल रहा है..." : "सुनें"}
        </span>
      </div>
    </div>
  );
};

export default ReadAloudButton;
