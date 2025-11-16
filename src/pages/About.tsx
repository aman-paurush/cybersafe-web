import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Shield, Target, Users, Heart, BookOpen, Bell, Download, Languages, Phone, AlertCircle, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

        {/* Emergency Contacts Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-destructive/10 to-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <AlertCircle className="h-8 w-8 text-destructive animate-pulse" />
                <h2 className="text-foreground">Emergency Contacts - Whom to Contact</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you suspect fraud or become a victim, here are the emergency contacts to reach out immediately
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* National Cyber Crime Portal */}
              <Card className="border-2 border-destructive hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-destructive/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">National Helpline</h3>
                  </div>
                  <div className="space-y-3 pl-12">
                    <div>
                      <p className="text-sm text-muted-foreground">Call for Cyber Crime Report:</p>
                      <p className="text-2xl font-bold text-destructive">1930</p>
                      <p className="text-xs text-muted-foreground mt-1">24/7 Availability • Free • No Subscription</p>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-destructive hover:bg-destructive/90"
                    >
                      <a href="tel:1930">Call Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Online Complaint Portal */}
              <Card className="border-2 border-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Cyber Crime Portal</h3>
                  </div>
                  <div className="space-y-3 pl-12">
                    <div>
                      <p className="text-sm text-muted-foreground">File Online Complaint:</p>
                      <p className="text-base font-semibold text-blue-600 break-all">cybercrime.gov.in</p>
                      <p className="text-xs text-muted-foreground mt-1">Official Government Website • Secure • Tracked</p>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                        File Complaint Online
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Local Police */}
              <Card className="border-2 border-amber-500 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-500/20 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Local Police</h3>
                  </div>
                  <div className="space-y-3 pl-12">
                    <div>
                      <p className="text-sm text-muted-foreground">Emergency Police Help:</p>
                      <p className="text-2xl font-bold text-amber-600">100</p>
                      <p className="text-xs text-muted-foreground mt-1">24/7 • For Emergency & Threats</p>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-amber-600 hover:bg-amber-700"
                    >
                      <a href="tel:100">Call Police</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bank / Financial Institution */}
              <Card className="border-2 border-green-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-600/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Bank Support</h3>
                  </div>
                  <div className="space-y-3 pl-12">
                    <div>
                      <p className="text-sm text-muted-foreground">Report Bank Fraud:</p>
                      <p className="text-base font-semibold text-foreground">Your Bank's Helpline</p>
                      <p className="text-xs text-muted-foreground mt-1">Check Your Debit/Credit Card • Block Immediately</p>
                    </div>
                    <Button 
                      disabled 
                      className="w-full bg-gray-400 cursor-not-allowed"
                    >
                      Contact Your Bank
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* RBI Consumer Grievance */}
              <Card className="border-2 border-purple-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <AlertCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">RBI Grievance</h3>
                  </div>
                  <div className="space-y-3 pl-12">
                    <div>
                      <p className="text-sm text-muted-foreground">Banking Complaint:</p>
                      <p className="text-base font-semibold text-purple-600">grievance.rbi.org.in</p>
                      <p className="text-xs text-muted-foreground mt-1">Reserve Bank of India • Official Portal</p>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <a href="https://www.grievance.rbi.org.in" target="_blank" rel="noopener noreferrer">
                        File Grievance
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Important Tips */}
              <Card className="border-2 border-pink-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-600/20 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Quick Tips</h3>
                  </div>
                  <ul className="space-y-2 text-sm pl-12">
                    <li>✓ Act immediately if fraud is suspected</li>
                    <li>✓ Block your cards & apps instantly</li>
                    <li>✓ Write down transaction details</li>
                    <li>✓ Keep screenshots & call records</li>
                    <li>✓ Get complaint reference number</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Notice */}
            <Card className="border-2 border-destructive/50 bg-destructive/5 mt-8">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  Important: Time is Critical!
                </h4>
                <p className="text-muted-foreground">
                  Report fraud within the first few hours to maximize chances of recovery. The sooner you report, the better the chances of authorities taking action and preventing others from becoming victims.
                </p>
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
