import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Globe, MessageSquare, MapPin, FileText, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Report = () => {
  const reportingSteps = [
    {
      step: 1,
      title: "Call National Cyber Crime Helpline",
      description: "Dial 1930 immediately - available 24/7 in multiple languages",
      action: "Call Now",
      link: "tel:1930",
      icon: Phone,
      urgent: true,
    },
    {
      step: 2,
      title: "File Online Complaint",
      description: "Visit National Cyber Crime Reporting Portal to file detailed complaint",
      action: "Go to Portal",
      link: "https://cybercrime.gov.in",
      icon: Globe,
      urgent: true,
    },
    {
      step: 3,
      title: "Report via WhatsApp",
      description: "Send complaint details to official cyber crime WhatsApp number",
      action: "Open WhatsApp",
      link: "https://wa.me/918758092247",
      icon: MessageSquare,
      urgent: false,
    },
    {
      step: 4,
      title: "Visit Nearest Cyber Police Station",
      description: "Find your local cyber crime police station for in-person reporting",
      action: "Find Station",
      link: "#police-locator",
      icon: MapPin,
      urgent: false,
    },
  ];

  const documentsNeeded = [
    "Transaction details (date, time, amount, transaction ID)",
    "Screenshots of suspicious messages/calls/apps",
    "Bank statements showing unauthorized transactions",
    "Phone numbers or email addresses of fraudsters",
    "Any communication with the scammer (WhatsApp, SMS, email)",
    "Your identity proof (Aadhaar, PAN card)",
  ];

  const immediateActions = [
    {
      title: "For Bank/UPI Fraud",
      actions: [
        "Call your bank's customer care immediately",
        "Block your card/UPI if compromised",
        "Report to bank's fraud department",
        "Note down transaction reference numbers",
      ],
    },
    {
      title: "For OTP/Password Shared",
      actions: [
        "Change all your passwords immediately",
        "Inform your bank about OTP sharing",
        "Monitor your bank account for unusual activity",
        "File police complaint within 24 hours",
      ],
    },
    {
      title: "For Malicious App Downloaded",
      actions: [
        "Uninstall the app immediately",
        "Run antivirus scan on your phone",
        "Change all banking passwords",
        "Contact bank to monitor your account",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-danger text-danger-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-4">
            <h1 className="font-bold">Report Cyber Fraud</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Time is critical! Report immediately to prevent further loss and help catch the criminals.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">Report within 24 hours for best results</span>
            </div>
          </div>
        </section>

        {/* Report Form CTA */}
        <section className="py-8 px-4 bg-primary/5 border-b border-primary/20">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary rounded-xl">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Report Your Scam Experience</h3>
                <p className="text-muted-foreground">Share your details directly with us - help us track fraud patterns and reach out to you with support and updates.</p>
              </div>
              <Link to="/report-scam">
                <Button className="gap-2 bg-primary hover:bg-primary/90 whitespace-nowrap">
                  Fill Report Form <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Reporting Steps */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <h2 className="text-center mb-12 text-foreground">How to Report - Step by Step</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {reportingSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card 
                    key={step.step} 
                    className={`border-2 ${step.urgent ? 'border-danger' : 'border-border'}`}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`${step.urgent ? 'bg-danger' : 'bg-primary'} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                          {step.step}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start gap-2 mb-2">
                            <Icon className={`h-6 w-6 ${step.urgent ? 'text-danger' : 'text-primary'} mt-1`} />
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          <a href={step.link} target="_blank" rel="noopener noreferrer">
                            <Button 
                              className={`w-full btn-hover-scale ${
                                step.urgent 
                                  ? 'bg-danger text-danger-foreground hover:bg-danger/90' 
                                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
                              }`}
                            >
                              {step.action}
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Documents Needed */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-foreground">Documents You'll Need</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Gather these documents before filing your complaint for faster processing
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {documentsNeeded.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <span className="text-lg">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Immediate Actions */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <h2 className="text-center mb-12 text-foreground">Immediate Actions Based on Fraud Type</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {immediateActions.map((category, index) => (
                <Card key={index} className="border-2 border-warning">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-warning">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-warning font-bold">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bank Contact Numbers */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-foreground mb-8">Major Bank Fraud Helpline Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { bank: "SBI", number: "1800 425 3800" },
                { bank: "HDFC", number: "1800 202 6161" },
                { bank: "ICICI", number: "1860 120 7777" },
                { bank: "Axis", number: "1860 419 5555" },
                { bank: "PNB", number: "1800 180 2222" },
                { bank: "BOB", number: "1800 102 4455" },
              ].map((bank) => (
                <Card key={bank.bank}>
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-lg mb-1">{bank.bank}</p>
                    <a href={`tel:${bank.number.replace(/\s/g, '')}`} className="text-primary hover:underline">
                      {bank.number}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Report;
