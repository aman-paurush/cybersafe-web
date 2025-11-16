import { Shield, Mail, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">{t("app.name")}</span>
            </div>
            <p className="text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li><Link to="/learn" className="text-muted-foreground hover:text-primary smooth-transition">{t("nav.learn")}</Link></li>
              <li><Link to="/report" className="text-muted-foreground hover:text-primary smooth-transition">{t("nav.report")}</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary smooth-transition">{t("nav.about")}</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary smooth-transition">FAQ</Link></li>
              <li><Link to="/glossary" className="text-muted-foreground hover:text-primary smooth-transition">Glossary</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary smooth-transition">{t("quickAccess.resources.title")}</Link></li>
              <li><Link to="/checklist" className="text-muted-foreground hover:text-primary smooth-transition">{t("nav.checklist")}</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-primary smooth-transition">{t("nav.videos")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t("footer.emergency")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-danger" />
                <a href="tel:1930" className="text-muted-foreground hover:text-primary smooth-transition">
                  {t("footer.cyberCrime")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-primary" />
                <a 
                  href="https://cybercrime.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  cybercrime.gov.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@cybersafe.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 {t("footer.copyright")}</p>
          <p className="mt-2 text-sm">{t("footer.availability")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
