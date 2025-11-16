import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Glossary = () => {
  const terms = [
    { term: "OTP", def: "One-Time Password sent by banks for transaction verification. Never share it." },
    { term: "UPI", def: "Unified Payments Interface — a real-time payment system used across India." },
    { term: "Phishing", def: "Fraudulent attempts to obtain sensitive information via messages or websites." },
    { term: "KYC", def: "Know Your Customer — identity verification required by banks and services." },
    { term: "Malware", def: "Malicious software that can steal data or take control of devices." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <BookOpen className="h-12 w-12 mx-auto text-primary" />
            <h1 className="text-3xl font-bold mt-4">Glossary</h1>
            <p className="text-muted-foreground mt-2">Simple definitions of common terms used on this app and in fraud reporting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terms.map((t, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">{t.term}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{t.def}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
