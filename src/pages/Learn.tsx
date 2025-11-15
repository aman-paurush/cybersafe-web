import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Phone, ShoppingBag, FileText, Key, Smartphone, Wallet, AlertTriangle } from "lucide-react";

const Learn = () => {
  const scamTypes = [
    {
      id: "aadhaar-kyc",
      title: "Aadhaar & KYC Scams",
      icon: FileText,
      description: "Learn how fraudsters exploit bank verification processes to steal your money and personal information.",
      severity: "High",
      cases: "500+ cases/month",
      color: "text-danger",
      bgColor: "bg-danger-light",
    },
    {
      id: "voice-phishing",
      title: "Voice Phishing Calls",
      icon: Phone,
      description: "'Do you recognize me?' scams where criminals record your voice to create fake identity proofs.",
      severity: "High",
      cases: "300+ cases/month",
      color: "text-danger",
      bgColor: "bg-danger-light",
    },
    {
      id: "shopping-scams",
      title: "Fake Shopping & Malicious Apps",
      icon: ShoppingBag,
      description: "Social media ads leading to harmful APK downloads that steal your banking and personal data.",
      severity: "Medium",
      cases: "400+ cases/month",
      color: "text-warning",
      bgColor: "bg-warning-light",
    },
    {
      id: "bank-calls",
      title: "Fake Bank Calls",
      icon: CreditCard,
      description: "Scammers posing as bank officials threatening account closure unless you share OTP immediately.",
      severity: "High",
      cases: "600+ cases/month",
      color: "text-danger",
      bgColor: "bg-danger-light",
    },
    {
      id: "otp-fraud",
      title: "OTP Frauds",
      icon: Key,
      description: "Understanding why you should NEVER share OTP (One-Time Password) with anyone, including 'bank officials'.",
      severity: "Critical",
      cases: "800+ cases/month",
      color: "text-danger",
      bgColor: "bg-danger-light",
    },
    {
      id: "upi-scams",
      title: "UPI Payment Scams",
      icon: Wallet,
      description: "QR code frauds, fake refund calls, and payment reversal scams targeting UPI users.",
      severity: "High",
      cases: "700+ cases/month",
      color: "text-danger",
      bgColor: "bg-danger-light",
    },
    {
      id: "loan-apps",
      title: "Loan App Frauds",
      icon: Smartphone,
      description: "Predatory lending apps with hidden charges, data theft, and harassment tactics.",
      severity: "Medium",
      cases: "350+ cases/month",
      color: "text-warning",
      bgColor: "bg-warning-light",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient text-primary-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-4">
            <h1 className="font-bold">Learn About Cyber Scams</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Knowledge is your best defense. Understand how scammers operate and protect yourself and your family.
            </p>
          </div>
        </section>

        {/* Warning Banner */}
        <div className="bg-warning-light border-l-4 border-warning py-4 px-4">
          <div className="container mx-auto flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-lg mb-1">Important Reminder:</p>
              <p className="text-base">
                <strong>No bank, government agency, or company will EVER ask you to share OTP, PIN, CVV, or card details over phone, SMS, or email.</strong> 
                If someone asks for this information, it is 100% a scam. Hang up immediately and report to 1930.
              </p>
            </div>
          </div>
        </div>

        {/* Scam Types Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Common Scam Types</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on any scam type to learn warning signs, prevention tips, and what to do if you're targeted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scamTypes.map((scam) => {
                const Icon = scam.icon;
                return (
                  <Link key={scam.id} to={`/learn/${scam.id}`}>
                    <Card className="card-hover cursor-pointer h-full border-2 hover:border-primary">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className={`${scam.bgColor} w-14 h-14 rounded-lg flex items-center justify-center`}>
                            <Icon className={`h-7 w-7 ${scam.color}`} />
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${
                              scam.severity === "Critical" || scam.severity === "High" 
                                ? "border-danger text-danger" 
                                : "border-warning text-warning"
                            }`}
                          >
                            {scam.severity}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold">{scam.title}</h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {scam.description}
                        </p>

                        <div className="pt-2 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{scam.cases}</span>
                          <span className="text-primary font-semibold">Learn More →</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-foreground">Not Sure Where to Start?</h2>
            <p className="text-lg text-muted-foreground">
              Take our 5-minute Cyber Safety Quiz to assess your knowledge and get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/quiz">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold btn-hover-scale">
                  Take the Quiz
                </button>
              </Link>
              <Link to="/checklist">
                <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold btn-hover-scale">
                  View Safety Checklist
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
