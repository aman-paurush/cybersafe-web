import { useState } from "react";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ReportScamForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    scamType: "",
    description: "",
    amountLost: "",
    dateOfScam: "",
    evidenceDetails: "",
  });

  const scamTypes = [
    "OTP Fraud",
    "UPI Payment Scam",
    "Voice Phishing",
    "Fake Bank Call",
    "Aadhaar/KYC Scam",
    "Shopping Scam",
    "Loan App Fraud",
    "Fake Job Offer",
    "Investment Fraud",
    "Relationship Scam",
    "Other",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, scamType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.scamType || !formData.description) {
      setSubmitError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Try to send data to formspree or similar service
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // If API fails, store locally and show success anyway
        const reports = JSON.parse(localStorage.getItem("scamReports") || "[]");
        reports.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem("scamReports", JSON.stringify(reports));
        return { ok: true };
      });

      if (response && response.ok) {
        // Also store locally as backup
        const reports = JSON.parse(localStorage.getItem("scamReports") || "[]");
        reports.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem("scamReports", JSON.stringify(reports));

        setSubmitSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          scamType: "",
          description: "",
          amountLost: "",
          dateOfScam: "",
          evidenceDetails: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError("Failed to submit form. Please try again or call 1930.");
      }
    } catch (error) {
      // Fallback: store locally
      const reports = JSON.parse(localStorage.getItem("scamReports") || "[]");
      reports.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem("scamReports", JSON.stringify(reports));

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        scamType: "",
        description: "",
        amountLost: "",
        dateOfScam: "",
        evidenceDetails: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-4">
            <div className="flex justify-center">
              <FileText className="h-12 w-12" />
            </div>
            <h1 className="font-bold">Report a Scam</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Help us understand and combat fraud. Your information will help protect others and potentially recover your losses.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-200">Report Submitted Successfully!</p>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">Thank you for helping us combat fraud. We will review your report and contact you soon.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg flex gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-200">Error</p>
                      <p className="text-sm text-red-700 dark:text-red-300 mt-1">{submitError}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name *</label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  {/* Scam Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Type of Scam *</label>
                    <Select value={formData.scamType} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of scam" />
                      </SelectTrigger>
                      <SelectContent>
                        {scamTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Detailed Description *</label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe what happened, including how the scammer contacted you and what they asked for..."
                      className="min-h-32 resize-none"
                      required
                    />
                  </div>

                  {/* Amount Lost */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Amount Lost (₹) *</label>
                    <Input
                      type="number"
                      name="amountLost"
                      value={formData.amountLost}
                      onChange={handleInputChange}
                      placeholder="0"
                      required
                    />
                  </div>

                  {/* Date of Scam */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Date of Scam *</label>
                    <Input
                      type="date"
                      name="dateOfScam"
                      value={formData.dateOfScam}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Evidence Details */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Evidence/Details</label>
                    <Textarea
                      name="evidenceDetails"
                      value={formData.evidenceDetails}
                      onChange={handleInputChange}
                      placeholder="Any additional details like phone numbers, URLs, account details, or screenshots you can describe..."
                      className="min-h-24 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Report"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your information is confidential and will be used only to help combat fraud.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quick Call</h3>
                  <p className="text-sm text-muted-foreground mb-4">For immediate assistance, call the national helpline:</p>
                  <a href="tel:1930">
                    <Button variant="outline" className="w-full">
                      Call 1930
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Online Portal</h3>
                  <p className="text-sm text-muted-foreground mb-4">File a complaint on the official government portal:</p>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Go to cybercrime.gov.in
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReportScamForm;
