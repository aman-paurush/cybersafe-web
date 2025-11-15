import { useState } from "react";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Download, Shield } from "lucide-react";

const Checklist = () => {
  const [dailyChecked, setDailyChecked] = useState<boolean[]>([]);
  const [accountChecked, setAccountChecked] = useState<boolean[]>([]);
  const [deviceChecked, setDeviceChecked] = useState<boolean[]>([]);

  const dailyTips = [
    "Never share OTP, PIN, CVV, or password with anyone",
    "Verify caller identity before sharing any information",
    "Check sender's email/number before clicking links",
    "Don't download APK files from unknown sources",
    "Double-check UPI payment details before confirming",
    "Be suspicious of too-good-to-be-true offers",
    "Save emergency numbers (1930 for cyber crime)"
  ];

  const accountSecurity = [
    "Enable two-factor authentication on all accounts",
    "Use strong, unique passwords for each account",
    "Regularly check bank statements for unauthorized transactions",
    "Enable transaction alerts via SMS/email",
    "Set daily transaction limits on UPI apps",
    "Update KYC only through official bank branches",
    "Keep banking app updated to latest version"
  ];

  const deviceSecurity = [
    "Install apps only from official app stores",
    "Keep phone operating system updated",
    "Use antivirus/security app on your phone",
    "Review and limit app permissions regularly",
    "Lock your phone with strong PIN/biometric",
    "Don't save OTPs or passwords in SMS/notes",
    "Backup important data regularly"
  ];

  const dos = [
    "Verify caller by calling official bank number independently",
    "Visit bank branch for KYC updates",
    "Read all terms before accepting loans",
    "Check merchant name before scanning QR codes",
    "Report suspicious calls/messages to 1930",
    "Educate family members about scams",
    "Keep emergency contacts handy",
    "Take screenshots of fraudulent messages as evidence"
  ];

  const donts = [
    "Never share OTP, even if caller claims emergency",
    "Don't click on links from unknown SMS/WhatsApp",
    "Never install apps from outside Play Store",
    "Don't give remote access to your phone",
    "Never respond to unknown caller asking 'Can you hear me?'",
    "Don't panic if threatened with account closure",
    "Never scan QR codes sent via WhatsApp for 'prizes'",
    "Don't share banking details on social media"
  ];

  const handlePrint = () => {
    window.print();
  };

  const calculateProgress = (checked: boolean[], total: number) => {
    return Math.round((checked.filter(Boolean).length / total) * 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient text-primary-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-4">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h1 className="font-bold">Cyber Safety Checklist</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Daily habits and essential tips to keep you safe from cyber frauds.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <Tabs defaultValue="daily" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="daily">Daily Tips</TabsTrigger>
                <TabsTrigger value="account">Account Security</TabsTrigger>
                <TabsTrigger value="device">Device Security</TabsTrigger>
                <TabsTrigger value="dos-donts">Do's & Don'ts</TabsTrigger>
              </TabsList>

              {/* Daily Tips */}
              <TabsContent value="daily">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Daily Safety Tips</h2>
                      <span className="text-sm text-muted-foreground">
                        {calculateProgress(dailyChecked, dailyTips.length)}% Complete
                      </span>
                    </div>
                    <div className="space-y-4">
                      {dailyTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <Checkbox
                            checked={dailyChecked[index] || false}
                            onCheckedChange={(checked) => {
                              const newChecked = [...dailyChecked];
                              newChecked[index] = checked as boolean;
                              setDailyChecked(newChecked);
                            }}
                            className="mt-1"
                          />
                          <label className="text-base cursor-pointer flex-grow">
                            {tip}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Account Security */}
              <TabsContent value="account">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Account Security Checklist</h2>
                      <span className="text-sm text-muted-foreground">
                        {calculateProgress(accountChecked, accountSecurity.length)}% Complete
                      </span>
                    </div>
                    <div className="space-y-4">
                      {accountSecurity.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <Checkbox
                            checked={accountChecked[index] || false}
                            onCheckedChange={(checked) => {
                              const newChecked = [...accountChecked];
                              newChecked[index] = checked as boolean;
                              setAccountChecked(newChecked);
                            }}
                            className="mt-1"
                          />
                          <label className="text-base cursor-pointer flex-grow">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Device Security */}
              <TabsContent value="device">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Device Security Checklist</h2>
                      <span className="text-sm text-muted-foreground">
                        {calculateProgress(deviceChecked, deviceSecurity.length)}% Complete
                      </span>
                    </div>
                    <div className="space-y-4">
                      {deviceSecurity.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <Checkbox
                            checked={deviceChecked[index] || false}
                            onCheckedChange={(checked) => {
                              const newChecked = [...deviceChecked];
                              newChecked[index] = checked as boolean;
                              setDeviceChecked(newChecked);
                            }}
                            className="mt-1"
                          />
                          <label className="text-base cursor-pointer flex-grow">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Do's and Don'ts */}
              <TabsContent value="dos-donts">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Do's */}
                  <Card className="border-success">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-success" />
                        Do's ✓
                      </h2>
                      <ul className="space-y-3">
                        {dos.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-base">
                            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Don'ts */}
                  <Card className="border-danger">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <XCircle className="h-6 w-6 text-danger" />
                        Don'ts ✗
                      </h2>
                      <ul className="space-y-3">
                        {donts.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-base">
                            <XCircle className="h-5 w-5 text-danger flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Print Button */}
            <div className="mt-8 text-center">
              <Button onClick={handlePrint} size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Print Checklist
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Print and share with family members
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Checklist;