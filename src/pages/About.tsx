import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Shield, Target, Users, Heart, BookOpen, Bell, Download, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Comprehensive learning modules covering 7+ types of cyber scams with real-world examples and prevention strategies",
    },
    {
      icon: Bell,
      title: "Daily Fraud Alerts",
      description: "Auto-rotating news carousel with latest cyber crime cases and warnings to keep you informed",
    },
    {
      icon: Shield,
      title: "Report Fraud",
      description: "Quick access to emergency helplines (1930), online reporting portal, and step-by-step guidance",
    },
    {
      icon: Download,
      title: "Offline Access (PWA)",
      description: "Progressive Web App that works without internet, saving all educational content for offline learning",
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Content available in Hindi, English, and regional languages to reach rural communities effectively",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "Designed specifically for users with basic digital literacy, with large fonts and simple navigation",
    },
  ];

  const mission = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower rural communities across India with the knowledge and tools to identify, prevent, and report cyber fraud, creating a safer digital environment for everyone.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A digitally aware rural India where every citizen can confidently use online services without fear of fraud, supported by accessible education and immediate help.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient text-primary-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-6">
            <Shield className="h-20 w-20 mx-auto animate-scale-in" />
            <h1 className="font-bold">About CyberSuraksha</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Protecting Rural India from the Growing Threat of Cyber Crime
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mission.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-2 border-primary">
                    <CardContent className="p-8 space-y-4">
                      <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-center">{item.title}</h2>
                      <p className="text-lg text-muted-foreground text-center leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why We Built This */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-center mb-8 text-foreground">Why We Built This Platform</h2>
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  With India's rapid digital transformation, rural communities are increasingly vulnerable to sophisticated cyber scams. 
                  Fraudsters exploit the lack of awareness and digital literacy to steal hard-earned money through fake bank calls, 
                  KYC scams, loan app frauds, and UPI payment tricks.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Over ₹1,200 crores</strong> are lost annually to cyber crimes in India, with rural areas being the fastest-growing targets. 
                  Most victims don't know where to report or how to protect themselves.
                </p>
                <p className="text-lg leading-relaxed">
                  CyberSuraksha bridges this gap by providing <strong>free, accessible, and offline-capable education</strong> in simple language. 
                  We believe everyone deserves to use digital services safely, regardless of their technical knowledge or internet connectivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <h2 className="text-center mb-12 text-foreground">Complete Feature List</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-hover border-2 hover:border-primary">
                    <CardContent className="p-6 space-y-4">
                      <div className="bg-accent w-14 h-14 rounded-lg flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-center mb-8 text-foreground">How to Use This Website</h2>
            <Card>
              <CardContent className="p-8">
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Install as App (PWA)</h4>
                      <p className="text-muted-foreground">
                        On your phone browser, tap the menu and select "Add to Home Screen" or "Install App". 
                        This allows offline access and app-like experience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Choose Your Language</h4>
                      <p className="text-muted-foreground">
                        Click the language selector (globe icon) in the navigation bar to choose between English, Hindi, or regional languages.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Start Learning</h4>
                      <p className="text-muted-foreground">
                        Go to the "Learn" section to explore different types of scams. Each module includes examples, warning signs, and prevention tips.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Stay Updated</h4>
                      <p className="text-muted-foreground">
                        Visit the "News" section regularly to see the latest fraud alerts. Bookmark important articles for offline reading.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Report Immediately</h4>
                      <p className="text-muted-foreground">
                        If you suspect fraud, use the "Report Fraud" section to call 1930 or file an online complaint. Time is critical!
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions, feedback, or want to collaborate? We'd love to hear from you.
            </p>
            <Card className="border-2 border-primary">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg">
                  <strong>Email:</strong> info@cybersuraksha.in
                </p>
                <p className="text-lg">
                  <strong>Emergency Helpline:</strong> 1930 (24/7)
                </p>
                <p className="text-lg">
                  <strong>Cyber Crime Portal:</strong>{" "}
                  <a 
                    href="https://cybercrime.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    cybercrime.gov.in
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
