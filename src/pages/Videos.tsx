import { useState } from "react";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, Video } from "lucide-react";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoCategories = {
    scamTypes: [
      {
        id: "otp-fraud-explained",
        title: "OTP Fraud: What You Need to Know",
        description: "Learn why you should never share OTP and how scammers use it to empty your account.",
        duration: "8:45",
        thumbnail: "https://youtu.be/qwFAKCy42pY?si=xOguiSiPbHIcBtms/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "High Risk"
      },
      {
        id: "upi-scams-guide",
        title: "UPI Payment Scams: Complete Guide",
        description: "Understanding QR code frauds, payment reversals, and how to use UPI safely.",
        duration: "10:20",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "High Risk"
      },
      {
        id: "voice-phishing",
        title: "Voice Phishing: 'Can You Hear Me?' Scam",
        description: "How criminals record your voice and use AI to create fake authorizations.",
        duration: "7:30",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "High Risk"
      },
      {
        id: "aadhaar-kyc-scams",
        title: "Aadhaar & KYC Scams Exposed",
        description: "Banks never ask for KYC updates over phone. Learn the truth.",
        duration: "9:15",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "High Risk"
      }
    ],
    safetyTips: [
      {
        id: "protecting-phone",
        title: "10 Ways to Secure Your Smartphone",
        description: "Essential phone security settings everyone should know.",
        duration: "12:00",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Prevention"
      },
      {
        id: "safe-online-shopping",
        title: "How to Shop Online Safely",
        description: "Identify fake shopping websites and apps before you lose money.",
        duration: "8:50",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Prevention"
      },
      {
        id: "password-security",
        title: "Creating Strong Passwords & 2FA",
        description: "Best practices for password management and two-factor authentication.",
        duration: "6:40",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Prevention"
      },
      {
        id: "spot-phishing",
        title: "How to Spot Phishing Attempts",
        description: "Identify fake emails, SMS, and calls trying to steal your information.",
        duration: "9:25",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Prevention"
      }
    ],
    realStories: [
      {
        id: "victim-story-1",
        title: "Real Story: Lost ₹2 Lakhs to OTP Scam",
        description: "A victim shares their experience and lessons learned.",
        duration: "11:30",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Case Study"
      },
      {
        id: "victim-story-2",
        title: "How I Got My Money Back After UPI Fraud",
        description: "Step-by-step process of reporting and recovering from fraud.",
        duration: "14:20",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Case Study"
      },
      {
        id: "victim-story-3",
        title: "Loan App Harassment: My Nightmare",
        description: "How predatory loan apps destroyed lives and what you can do.",
        duration: "16:45",
        thumbnail: "https://img.youtube.com/vi/qwFAKCy42pY/maxresdefault.jpg",
        videoId: "qwFAKCy42pY",
        category: "Case Study"
      }
    ]
  };

  const VideoCard = ({ video }: { video: any }) => (
    <Card 
      className="card-hover cursor-pointer" 
      onClick={() => setSelectedVideo(video.videoId)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video bg-muted">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <PlayCircle className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
            {video.duration}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg leading-tight flex-grow">
              {video.title}
            </h3>
            <Badge variant="outline" className="flex-shrink-0">
              {video.category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {video.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient text-primary-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-4">
            <Video className="h-16 w-16 mx-auto mb-4" />
            <h1 className="font-bold">Video Library</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Watch educational videos to understand scams better and learn how to protect yourself.
            </p>
          </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Video Grid */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto">
            <Tabs defaultValue="scam-types" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="scam-types">Scam Types</TabsTrigger>
                <TabsTrigger value="safety-tips">Safety Tips</TabsTrigger>
                <TabsTrigger value="real-stories">Real Stories</TabsTrigger>
              </TabsList>

              <TabsContent value="scam-types">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoCategories.scamTypes.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="safety-tips">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoCategories.safetyTips.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="real-stories">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoCategories.realStories.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;