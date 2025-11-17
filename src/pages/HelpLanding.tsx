import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, BookOpen, AlertTriangle, Phone } from "lucide-react";

const HelpLanding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Help & Support</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Looks like the item you clicked is unavailable. Here are quick ways to get help quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">Learn & Protect</h3>
                <p className="text-sm text-muted-foreground mb-4">Understand common scams, warning signs and prevention tips.</p>
                <Link to="/learn">
                  <Button className="w-full">Go to Learn & Protect</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">Report Fraud</h3>
                <p className="text-sm text-muted-foreground mb-4">Report incidents quickly to increase chances of recovery.</p>
                <Link to="/report">
                  <Button className="w-full variant-destructive">Report Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">Call the Helpline</h3>
                <p className="text-sm text-muted-foreground mb-4">Immediate assistance is available 24/7 via the national helpline.</p>
                <a href="tel:1930">
                  <Button className="w-full">Call 1930</Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">More Resources</h3>
                <p className="text-sm text-muted-foreground mb-4">Browse the full resources and tools available.</p>
                <Link to="/resources">
                  <Button className="w-full">View Resources</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-sm text-muted-foreground">
            <p>If you think this is a broken link, please let us know via the feedback form on the About page.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpLanding;
