import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      q: "What should I do if I suspect fraud?",
      a: "Immediately call 1930 and file a complaint on cybercrime.gov.in. Block your cards/apps and collect evidence (screenshots, messages).",
    },
    {
      q: "Will reporting help recover my money?",
      a: "Authorities will investigate — early reporting improves chances. Recovery depends on many factors, including bank cooperation and timing.",
    },
    {
      q: "Can I report anonymously?",
      a: "You can provide only necessary details, but providing contact information helps investigators reach you for more information.",
    },
    {
      q: "Are there any charges to file a complaint?",
      a: "No. Official reporting portals do not charge for filing complaints. Beware of intermediaries who ask for fees.",
    },
    {
      q: "How do I protect my bank details?",
      a: "Never share OTP, PIN, CVV, or UPI PIN. Use official bank apps, enable transaction alerts, and avoid unknown links or APKs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <HelpCircle className="h-12 w-12 mx-auto text-primary" />
            <h1 className="text-3xl font-bold mt-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mt-2">Quick answers to common questions about fraud reporting and protection.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
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

export default FAQ;
