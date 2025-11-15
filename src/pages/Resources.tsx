import { Download, FileText, Image as ImageIcon, Video, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const { t } = useLanguage();

  const pdfs = [
    { title: t("resources.pdf1"), size: "2.5 MB", icon: FileText },
    { title: t("resources.pdf2"), size: "1.8 MB", icon: FileText },
    { title: t("resources.pdf3"), size: "3.2 MB", icon: FileText },
    { title: t("resources.pdf4"), size: "2.1 MB", icon: FileText },
    { title: t("resources.pdf5"), size: "1.5 MB", icon: FileText }
  ];

  const images = [
    { title: t("resources.img1"), format: "1080x1080" },
    { title: t("resources.img2"), format: "1080x1080" },
    { title: t("resources.img3"), format: "1080x1080" },
    { title: t("resources.img4"), format: "1080x1080" },
    { title: t("resources.img5"), format: "1080x1080" }
  ];

  const videos = [
    { title: t("resources.video1"), duration: "5:30" },
    { title: t("resources.video2"), duration: "4:15" },
    { title: t("resources.video3"), duration: "6:45" },
    { title: t("resources.video4"), duration: "3:20" },
    { title: t("resources.video5"), duration: "7:10" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("resources.back")}
            </Button>
          </Link>

          <h1 className="text-foreground mb-4">{t("resources.title")}</h1>
          <p className="text-lg text-muted-foreground mb-12">{t("resources.subtitle")}</p>

          {/* PDF Posters Section */}
          <section className="mb-16">
            <h2 className="text-foreground mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {t("resources.pdfs")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfs.map((pdf, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{pdf.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pdf.size}</p>
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    {t("resources.download")}
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* WhatsApp Shareable Images Section */}
          <section className="mb-16">
            <h2 className="text-foreground mb-6 flex items-center gap-2">
              <ImageIcon className="h-6 w-6 text-success" />
              {t("resources.images")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-primary/50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{image.format}</p>
                    <div className="flex gap-2">
                      <Button className="flex-1 gap-2" size="sm">
                        <Download className="h-4 w-4" />
                        {t("resources.download")}
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        {t("resources.share")}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Tutorials Section */}
          <section>
            <h2 className="text-foreground mb-6 flex items-center gap-2">
              <Video className="h-6 w-6 text-destructive" />
              {t("resources.videos")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-destructive/20 to-warning/20 flex items-center justify-center">
                    <Video className="h-16 w-16 text-destructive/50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{video.duration}</p>
                    <Button className="w-full">
                      {t("resources.watch")}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
