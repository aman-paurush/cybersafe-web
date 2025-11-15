import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi" | "mr" | "gu" | "te" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // App
    "app.name": "CyberSafe",
    "app.tagline": "Stay Safe, Go Digital",
    
    // Navbar
    "nav.home": "Home",
    "nav.learn": "Learn",
    "nav.news": "News",
    "nav.report": "Report Fraud",
    "nav.videos": "Videos",
    "nav.quiz": "Quiz",
    "nav.checklist": "Checklist",
    "nav.about": "About",
    
    // Emergency Banner
    "emergency.text": "Been Scammed? Report Immediately!",
    "emergency.call": "Call 1930",
    "emergency.reportOnline": "Report Online",
    
    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.reportNow": "Report Now",
    "common.previous": "Previous",
    "common.next": "Next",
    
    // Home Page - Hero
    "home.hero.title": "Stay Safe from Cyber Frauds",
    "home.hero.subtitle": "Empowering rural communities with knowledge to identify, prevent, and report cyber scams. Learn about the latest fraud tactics and protect yourself and your loved ones.",
    "home.hero.startLearning": "Start Learning",
    "home.hero.reportFraud": "Report Fraud Now",
    "home.hero.scamTypes": "Scam Types Covered",
    "home.hero.helpline": "Helpline Support",
    "home.hero.freeResources": "Free Resources",
    "home.hero.offlineAccess": "Offline Access Available",
    
    // Quick Access
    "quickAccess.title": "Quick Access",
    "quickAccess.learn.title": "Learn About Scams",
    "quickAccess.learn.desc": "Understand different types of cyber frauds and how to identify them",
    "quickAccess.news.title": "Latest Fraud News",
    "quickAccess.news.desc": "Stay updated with recent cyber crime cases and alerts",
    "quickAccess.report.title": "Report Fraud",
    "quickAccess.report.desc": "Report cyber crimes immediately to authorities",
    "quickAccess.resources.title": "Resources",
    "quickAccess.resources.desc": "Download guides, posters, and educational materials",
    "quickAccess.checklist.title": "Safety Checklist",
    "quickAccess.checklist.desc": "Daily tips and dos & don'ts for cyber safety",
    "quickAccess.contacts.title": "Emergency Contacts",
    "quickAccess.contacts.desc": "Quick access to helpline numbers and support",
    
    // News
    "news.title": "Latest Fraud Alerts",
    "news.liveUpdates": "Live Updates",
    "news.readFull": "Read Full Article",
    
    // Mission
    "mission.title": "Our Mission",
    "mission.desc": "CyberSafe is dedicated to protecting rural communities from the growing threat of cyber fraud. We provide easy-to-understand education, real-time alerts, and immediate support to help you stay safe online.",
    "mission.free": "Free",
    "mission.freeDesc": "100% free resources and education for everyone",
    "mission.offline": "Offline",
    "mission.offlineDesc": "Access all content without internet connection",
    "mission.support": "24/7",
    "mission.supportDesc": "Round-the-clock support and reporting",
    
    // Footer
    "footer.tagline": "Empowering rural communities with cyber safety education and awareness",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.emergency": "Emergency Contacts",
    "footer.cyberCrime": "Cyber Crime Helpline: 1930",
    "footer.copyright": "CyberSafe. All rights reserved. | Protecting Rural India from Cyber Threats",
    "footer.availability": "Available offline via PWA | Works on 2G/3G networks"
  },
  hi: {
    // App
    "app.name": "CyberSafe",
    "app.tagline": "सुरक्षित रहें, डिजिटल बनें",
    
    // Navbar
    "nav.home": "होम",
    "nav.learn": "सीखें",
    "nav.news": "समाचार",
    "nav.report": "धोखाधड़ी की रिपोर्ट करें",
    "nav.videos": "वीडियो",
    "nav.quiz": "प्रश्नोत्तरी",
    "nav.checklist": "चेकलिस्ट",
    "nav.about": "हमारे बारे में",
    
    // Emergency Banner
    "emergency.text": "धोखाधड़ी हो गई? तुरंत रिपोर्ट करें!",
    "emergency.call": "1930 पर कॉल करें",
    "emergency.reportOnline": "ऑनलाइन रिपोर्ट करें",
    
    // Common
    "common.readMore": "और पढ़ें",
    "common.learnMore": "और जानें",
    "common.reportNow": "अभी रिपोर्ट करें",
    "common.previous": "पिछला",
    "common.next": "अगला",
    
    // Home Page - Hero
    "home.hero.title": "साइबर धोखाधड़ी से सुरक्षित रहें",
    "home.hero.subtitle": "साइबर घोटालों की पहचान करने, रोकने और रिपोर्ट करने के ज्ञान से ग्रामीण समुदायों को सशक्त बनाना। नवीनतम धोखाधड़ी के तरीकों के बारे में जानें और अपनी और अपने प्रियजनों की सुरक्षा करें।",
    "home.hero.startLearning": "सीखना शुरू करें",
    "home.hero.reportFraud": "अभी धोखाधड़ी की रिपोर्ट करें",
    "home.hero.scamTypes": "घोटाले के प्रकार कवर किए गए",
    "home.hero.helpline": "हेल्पलाइन सहायता",
    "home.hero.freeResources": "निःशुल्क संसाधन",
    "home.hero.offlineAccess": "ऑफलाइन एक्सेस उपलब्ध",
    
    // Quick Access
    "quickAccess.title": "त्वरित पहुंच",
    "quickAccess.learn.title": "घोटालों के बारे में सीखें",
    "quickAccess.learn.desc": "विभिन्न प्रकार की साइबर धोखाधड़ी को समझें और उनकी पहचान कैसे करें",
    "quickAccess.news.title": "नवीनतम धोखाधड़ी समाचार",
    "quickAccess.news.desc": "हाल के साइबर अपराध मामलों और अलर्ट के साथ अपडेट रहें",
    "quickAccess.report.title": "धोखाधड़ी की रिपोर्ट करें",
    "quickAccess.report.desc": "साइबर अपराधों की तुरंत अधिकारियों को रिपोर्ट करें",
    "quickAccess.resources.title": "संसाधन",
    "quickAccess.resources.desc": "गाइड, पोस्टर और शैक्षिक सामग्री डाउनलोड करें",
    "quickAccess.checklist.title": "सुरक्षा चेकलिस्ट",
    "quickAccess.checklist.desc": "साइबर सुरक्षा के लिए दैनिक टिप्स और क्या करें और क्या न करें",
    "quickAccess.contacts.title": "आपातकालीन संपर्क",
    "quickAccess.contacts.desc": "हेल्पलाइन नंबर और सहायता तक त्वरित पहुंच",
    
    // News
    "news.title": "नवीनतम धोखाधड़ी अलर्ट",
    "news.liveUpdates": "लाइव अपडेट",
    "news.readFull": "पूरा लेख पढ़ें",
    
    // Mission
    "mission.title": "हमारा मिशन",
    "mission.desc": "CyberSafe साइबर धोखाधड़ी के बढ़ते खतरे से ग्रामीण समुदायों की रक्षा के लिए समर्पित है। हम समझने में आसान शिक्षा, रीयल-टाइम अलर्ट और तत्काल सहायता प्रदान करते हैं ताकि आप ऑनलाइन सुरक्षित रह सकें।",
    "mission.free": "निःशुल्क",
    "mission.freeDesc": "सभी के लिए 100% निःशुल्क संसाधन और शिक्षा",
    "mission.offline": "ऑफलाइन",
    "mission.offlineDesc": "बिना इंटरनेट के सभी सामग्री तक पहुंच",
    "mission.support": "24/7",
    "mission.supportDesc": "चौबीसों घंटे सहायता और रिपोर्टिंग",
    
    // Footer
    "footer.tagline": "साइबर सुरक्षा शिक्षा और जागरूकता के साथ ग्रामीण समुदायों को सशक्त बनाना",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.resources": "संसाधन",
    "footer.emergency": "आपातकालीन संपर्क",
    "footer.cyberCrime": "साइबर अपराध हेल्पलाइन: 1930",
    "footer.copyright": "CyberSafe। सर्वाधिकार सुरक्षित। | ग्रामीण भारत को साइबर खतरों से बचाना",
    "footer.availability": "PWA के माध्यम से ऑफलाइन उपलब्ध | 2G/3G नेटवर्क पर काम करता है"
  },
  mr: {
    // App
    "app.name": "CyberSafe",
    "app.tagline": "सुरक्षित रहा, डिजिटल व्हा",
    
    // Navbar - Marathi
    "nav.home": "मुख्यपृष्ठ",
    "nav.learn": "शिका",
    "nav.news": "बातम्या",
    "nav.report": "फसवणूक नोंदवा",
    "nav.videos": "व्हिडिओ",
    "nav.quiz": "प्रश्नमंजुषा",
    "nav.checklist": "चेकलिस्ट",
    "nav.about": "आमच्याबद्दल",
    
    // Emergency Banner
    "emergency.text": "फसवणूक झाली? लगेच तक्रार नोंदवा!",
    "emergency.call": "1930 वर कॉल करा",
    "emergency.reportOnline": "ऑनलाइन तक्रार नोंदवा",
    
    // Common
    "common.readMore": "अधिक वाचा",
    "common.learnMore": "अधिक जाणून घ्या",
    "common.reportNow": "आता नोंदवा",
    "common.previous": "मागील",
    "common.next": "पुढील",
    
    // Home Page - Hero
    "home.hero.title": "सायबर फसवणुकीपासून सुरक्षित रहा",
    "home.hero.subtitle": "सायबर घोटाळे ओळखणे, प्रतिबंध करणे आणि नोंदवणे याबद्दल ज्ञानाने ग्रामीण समुदायांना सशक्त करणे। नवीनतम फसवणूक युक्तींबद्दल जाणून घ्या आणि स्वतःचे आणि आपल्या प्रियजनांचे संरक्षण करा।",
    "home.hero.startLearning": "शिकणे सुरू करा",
    "home.hero.reportFraud": "आता फसवणूक नोंदवा",
    "home.hero.scamTypes": "घोटाळ्याचे प्रकार कव्हर केले",
    "home.hero.helpline": "हेल्पलाइन समर्थन",
    "home.hero.freeResources": "मोफत संसाधने",
    "home.hero.offlineAccess": "ऑफलाइन प्रवेश उपलब्ध",
    
    // Quick Access
    "quickAccess.title": "द्रुत प्रवेश",
    "quickAccess.learn.title": "घोटाळ्यांबद्दल शिका",
    "quickAccess.learn.desc": "विविध प्रकारच्या सायबर फसवणूक समजून घ्या आणि त्यांची ओळख कशी करावी",
    "quickAccess.news.title": "ताज्या फसवणूक बातम्या",
    "quickAccess.news.desc": "अलीकडील सायबर गुन्हे आणि सूचनांसह अपडेट रहा",
    "quickAccess.report.title": "फसवणूक नोंदवा",
    "quickAccess.report.desc": "सायबर गुन्ह्यांची ताबडतोब अधिकाऱ्यांना नोंद करा",
    "quickAccess.resources.title": "संसाधने",
    "quickAccess.resources.desc": "मार्गदर्शक, पोस्टर आणि शैक्षणिक साहित्य डाउनलोड करा",
    "quickAccess.checklist.title": "सुरक्षा चेकलिस्ट",
    "quickAccess.checklist.desc": "सायबर सुरक्षेसाठी दैनिक टिप्स आणि काय करावे आणि काय करू नये",
    "quickAccess.contacts.title": "आणीबाणी संपर्क",
    "quickAccess.contacts.desc": "हेल्पलाइन नंबर आणि समर्थनासाठी द्रुत प्रवेش",
    
    // News
    "news.title": "ताज्या फसवणूक सूचना",
    "news.liveUpdates": "थेट अपडेट",
    "news.readFull": "संपूर्ण लेख वाचा",
    
    // Mission
    "mission.title": "आमचे ध्येय",
    "mission.desc": "CyberSafe सायबर फसवणुकीच्या वाढत्या धोक्यापासून ग्रामीण समुदायांचे संरक्षण करण्यासाठी समर्पित आहे। आम्ही समजण्यास सोपे शिक्षण, रिअल-टाइम अलर्ट आणि तात्काळ समर्थन प्रदान करतो जेणेकरून तुम्ही ऑनलाइन सुरक्षित राहू शकाल।",
    "mission.free": "मोफत",
    "mission.freeDesc": "प्रत्येकासाठी 100% मोफत संसाधने आणि शिक्षण",
    "mission.offline": "ऑफलाइन",
    "mission.offlineDesc": "इंटरनेटशिवाय सर्व सामग्रीमध्ये प्रवेश",
    "mission.support": "24/7",
    "mission.supportDesc": "चोवीस तास समर्थन आणि अहवाल",
    
    // Footer
    "footer.tagline": "सायबर सुरक्षा शिक्षण आणि जागरूकतेसह ग्रामीण समुदायांना सशक्त करत आहोत",
    "footer.quickLinks": "द्रुत दुवे",
    "footer.resources": "साधने",
    "footer.emergency": "आणीबाणी संपर्क",
    "footer.cyberCrime": "सायबर गुन्हा हेल्पलाइन: 1930",
    "footer.copyright": "CyberSafe. सर्व हक्क राखीव. | ग्रामीण भारताचे सायबर धोक्यांपासून संरक्षण",
    "footer.availability": "PWA द्वारे ऑफलाइन उपलब्ध | 2G/3G नेटवर्कवर कार्य करते"
  },
  gu: {
    // App
    "app.name": "CyberSafe",
    "app.tagline": "સુરક્ષિત રહો, ડિજિટલ બનો",
    
    // Navbar - Gujarati
    "nav.home": "હોમ",
    "nav.learn": "શીખો",
    "nav.news": "સમાચાર",
    "nav.report": "છેતરપિંડીની જાણ કરો",
    "nav.videos": "વિડિયો",
    "nav.quiz": "ક્વિઝ",
    "nav.checklist": "ચેકલિસ્ટ",
    "nav.about": "અમારા વિશે",
    
    // Emergency Banner
    "emergency.text": "છેતરપિંડી થઈ? તાત્કાલિક જાણ કરો!",
    "emergency.call": "1930 પર કૉલ કરો",
    "emergency.reportOnline": "ઓનલાઈન જાણ કરો",
    
    // Common
    "common.readMore": "વધુ વાંચો",
    "common.learnMore": "વધુ જાણો",
    "common.reportNow": "હમણાં જાણ કરો",
    "common.previous": "પાછલું",
    "common.next": "આગળ",
    
    // Home Page - Hero
    "home.hero.title": "સાયબર છેતરપિંડીથી સુરક્ષિત રહો",
    "home.hero.subtitle": "સાયબર કૌભાંડને ઓળખવા, અટકાવવા અને જાણ કરવા માટેના જ્ઞાનથી ગ્રામીણ સમુદાયોને સશક્ત બનાવવું. નવીનતમ છેતરપિંડી યુક્તિઓ વિશે જાણો અને તમારી અને તમારા પ્રિયજનોની સુરક્ષા કરો।",
    "home.hero.startLearning": "શીખવાનું શરૂ કરો",
    "home.hero.reportFraud": "હમણાં છેતરપિંડીની જાણ કરો",
    "home.hero.scamTypes": "કૌભાંડના પ્રકારો આવરી લીધા",
    "home.hero.helpline": "હેલ્પલાઈન સપોર્ટ",
    "home.hero.freeResources": "મફત સંસાધનો",
    "home.hero.offlineAccess": "ઓફલાઈન એક્સેસ ઉપલબ્ધ",
    
    // Quick Access
    "quickAccess.title": "ઝડપી પહોંચ",
    "quickAccess.learn.title": "કૌભાંડ વિશે શીખો",
    "quickAccess.learn.desc": "વિવિધ પ્રકારની સાયબર છેતરપિંડીને સમજો અને તેમને કેવી રીતે ઓળખવી",
    "quickAccess.news.title": "તાજા છેતરપિંડી સમાચાર",
    "quickAccess.news.desc": "તાજેતરના સાયબર ગુના કેસો અને ચેતવણીઓ સાથે અપડેટ રહો",
    "quickAccess.report.title": "છેતરપિંડીની જાણ કરો",
    "quickAccess.report.desc": "સાયબર ગુનાઓની તાત્કાલિક સત્તાવાળાઓને જાણ કરો",
    "quickAccess.resources.title": "સંસાધનો",
    "quickAccess.resources.desc": "માર્ગદર્શિકાઓ, પોસ્ટરો અને શૈક્ષણિક સામગ્રી ડાઉનલોડ કરો",
    "quickAccess.checklist.title": "સુરક્ષા ચેકલિસ્ટ",
    "quickAccess.checklist.desc": "સાયબર સુરક્ષા માટે દૈનિક ટિપ્સ અને શું કરવું અને શું ન કરવું",
    "quickAccess.contacts.title": "કટોકટી સંપર્કો",
    "quickAccess.contacts.desc": "હેલ્પલાઈન નંબરો અને સપોર્ટ માટે ઝડપી પહોંચ",
    
    // News
    "news.title": "તાજી છેતરપિંડી ચેતવણીઓ",
    "news.liveUpdates": "લાઈવ અપડેટ્સ",
    "news.readFull": "સંપૂર્ણ લેખ વાંચો",
    
    // Mission
    "mission.title": "અમારું મિશન",
    "mission.desc": "CyberSafe સાયબર છેતરપિંડીના વધતા ખતરાથી ગ્રામીણ સમુદાયોની સુરક્ષા માટે સમર્પિત છે. અમે સમજવામાં સરળ શિક્ષણ, રિયલ-ટાઇમ અલર્ટ અને તાત્કાલિક સહાય પ્રદાન કરીએ છીએ જેથી તમે ઓનલાઇન સુરક્ષિત રહી શકો।",
    "mission.free": "મફત",
    "mission.freeDesc": "દરેક માટે 100% મફત સંસાધનો અને શિક્ષણ",
    "mission.offline": "ઓફલાઈન",
    "mission.offlineDesc": "ઈન્ટરનેટ વિના તમામ સામગ્રીની ઍક્સેસ",
    "mission.support": "24/7",
    "mission.supportDesc": "ચોવીસ કલાક સહાય અને રિપોર્ટિંગ",
    
    // Footer
    "footer.tagline": "સાયબર સુરક્ષા શિક્ષણ અને જાગૃતિ સાથે ગ્રામીણ સમુદાયોને સશક્ત બનાવવું",
    "footer.quickLinks": "ઝડપી લિંક્સ",
    "footer.resources": "સંસાધનો",
    "footer.emergency": "કટોકટી સંપર્કો",
    "footer.cyberCrime": "સાયબર અપરાધ હેલ્પલાઇન: 1930",
    "footer.copyright": "CyberSafe. સર્વ હક્કો અનામત. | ગ્રામીણ ભારતને સાયબર ખતરાઓથી સુરક્ષિત રાખવું",
    "footer.availability": "PWA દ્વારા ઓફલાઈન ઉપલબ્ધ | 2G/3G નેટવર્ક પર કામ કરે છે"
  },
  te: {
    // App
    "app.name": "CyberSafe",
    "app.tagline": "సురక్షితంగా ఉండండి, డిజిటల్ అవ్వండి",
    
    // Navbar - Telugu
    "nav.home": "హోమ్",
    "nav.learn": "నేర్చుకోండి",
    "nav.news": "వార్తలు",
    "nav.report": "మోసాన్ని నివేదించండి",
    "nav.videos": "వీడియోలు",
    "nav.quiz": "క్విజ్",
    "nav.checklist": "చెక్‌లిస్ట్",
    "nav.about": "మా గురించి",
    
    // Emergency Banner
    "emergency.text": "మోసం జరిగిందా? వెంటనే నివేదించండి!",
    "emergency.call": "1930కి కాల్ చేయండి",
    "emergency.reportOnline": "ఆన్‌లైన్ నివేదించండి",
    
    // Common
    "common.readMore": "మరింత చదవండి",
    "common.learnMore": "మరింత తెలుసుకోండి",
    "common.reportNow": "ఇప్పుడే నివేదించండి",
    "common.previous": "మునుపటి",
    "common.next": "తరువాత",
    
    // Home Page - Hero
    "home.hero.title": "సైబర్ మోసాల से सुरक्षితంగా ఉండండి",
    "home.hero.subtitle": "సైబర్ స్కామ్‌లను గుర్తించడం, నివారించడం మరియు నివేదించడంలో జ్ఞానంతో గ్రామీణ సమాజాలను శక్తివంతం చేయడం. తాజా మోస వ్యూహాల గురించి తెలుసుకోండి మరియు మిమ్మల్ని మరియు మీ ప్రియమైన వారిని రక్షించుకోండి.",
    "home.hero.startLearning": "నేర్చుకోవడం ప్రారంభించండి",
    "home.hero.reportFraud": "ఇప్పుడే మోసాన్ని నివేదించండి",
    "home.hero.scamTypes": "స్కామ్ రకాలు కవర్ చేయబడ్డాయి",
    "home.hero.helpline": "హెల్ప్‌లైన్ మద్దతు",
    "home.hero.freeResources": "ఉచిత వనరులు",
    "home.hero.offlineAccess": "ఆఫ్‌లైన్ యాక్సెస్ అందుబాటులో ఉంది",
    
    // Quick Access
    "quickAccess.title": "త్వరిత యాక్సెస్",
    "quickAccess.learn.title": "స్కామ్‌ల గురించి తెలుసుకోండి",
    "quickAccess.learn.desc": "వివిధ రకాల సైబర్ మోసాలను అర్థం చేసుకోండి మరియు వాటిని ఎలా గుర్తించాలి",
    "quickAccess.news.title": "తాజా మోసం వార్తలు",
    "quickAccess.news.desc": "ఇటీవలి సైబర్ క్రైమ్ కేసులు మరియు హెచ్చరికలతో నవీకరించబడండి",
    "quickAccess.report.title": "మోసాన్ని నివేదించండి",
    "quickAccess.report.desc": "సైబర్ నేరాలను వెంటనే అధికారులకు నివేదించండి",
    "quickAccess.resources.title": "వనరులు",
    "quickAccess.resources.desc": "గైడ్‌లు, పోస్టర్లు మరియు విద్యా సామగ్రిని డౌన్‌లోడ్ చేసుకోండి",
    "quickAccess.checklist.title": "భద్రతా చెక్‌లిస్ట్",
    "quickAccess.checklist.desc": "సైబర్ భద్రత కోసం రోజువారీ చిట్కాలు మరియు చేయవలసినవి మరియు చేయకూడనివి",
    "quickAccess.contacts.title": "అత్యవసర పరిచయాలు",
    "quickAccess.contacts.desc": "హెల్ప్‌లైన్ నంబర్‌లు మరియు మద్దతు కోసం త్వరిత యాక్సెస్",
    
    // News
    "news.title": "తాజా మోస హెచ్చరికలు",
    "news.liveUpdates": "ప్రత్యక్ష నవీకరణలు",
    "news.readFull": "పూర్తి వ్యాసం చదవండి",
    
    // Mission
    "mission.title": "మా మిషన్",
    "mission.desc": "CyberSafe పెరుగుతున్న సైబర్ మోసం ముప్పు నుండి గ్రామీణ సమాజాలను రక్షించడానికి అంకితం చేయబడింది. మేము అర్థం చేసుకోవడానికి సులభమైన విద్య, రియల్-టైమ్ హెచ్చరికలు మరియు మీరు ఆన్‌లైన్‌లో సురక్షితంగా ఉండటానికి తక్షణ మద్దతును అందిస్తాము.",
    "mission.free": "ఉచితం",
    "mission.freeDesc": "అందరికీ 100% ఉచిత వనరులు మరియు విద్య",
    "mission.offline": "ఆఫ్‌లైన్",
    "mission.offlineDesc": "ఇంటర్నెట్ లేకుండా అన్ని కంటెంట్‌ను యాక్సెస్ చేయండి",
    "mission.support": "24/7",
    "mission.supportDesc": "గడియారం చుట్టూ మద్దతు మరియు నివేదన",
    
    // Footer
    "footer.tagline": "సైబర్ భద్రతా విద్య మరియు అవగాహనతో గ్రామీణ సమాజాలను శక్తివంతం చేయడం",
    "footer.quickLinks": "త్వరిత లింక్‌లు",
    "footer.resources": "వనరులు",
    "footer.emergency": "అత్యవసర పరిచయాలు",
    "footer.cyberCrime": "సైబర్ క్రైమ్ హెల్ప్‌లైన్: 1930",
    "footer.copyright": "CyberSafe. అన్ని హక్కులు రక్షించబడ్డాయి. | గ్రామీణ భారతదేశాన్ని సైబర్ ముప్పుల నుండి రక్షించడం",
    "footer.availability": "PWA ద్వారా ఆఫ్‌లైన్‌లో అందుబాటులో ఉంది | 2G/3G నెట్‌వర్క్‌లలో పని చేస్తుంది"
  },
  ta: {
    // App
    "app.name": "CyberSafe",
    "app.tagline": "பாதுகாப்பாக இருங்கள், டிஜிட்டலாக மாறுங்கள்",
    
    // Navbar - Tamil
    "nav.home": "முகப்பு",
    "nav.learn": "கற்றுக்கொள்ளுங்கள்",
    "nav.news": "செய்திகள்",
    "nav.report": "மோசடியைப் புகாரளிக்கவும்",
    "nav.videos": "வீடியோக்கள்",
    "nav.quiz": "வினாடி வினா",
    "nav.checklist": "சரிபார்ப்புப் பட்டியல்",
    "nav.about": "எங்களைப் பற்றி",
    
    // Emergency Banner
    "emergency.text": "மோசடி செய்யப்பட்டதா? உடனடியாகப் புகாரளிக்கவும்!",
    "emergency.call": "1930 ஐ அழைக்கவும்",
    "emergency.reportOnline": "ஆன்லைனில் புகாரளிக்கவும்",
    
    // Common
    "common.readMore": "மேலும் படிக்கவும்",
    "common.learnMore": "மேலும் அறிக",
    "common.reportNow": "இப்போதே புகாரளிக்கவும்",
    "common.previous": "முந்தைய",
    "common.next": "அடுத்தது",
    
    // Home Page - Hero
    "home.hero.title": "சைபர் மோசடிகளில் இருந்து பாதுகாப்பாக இருங்கள்",
    "home.hero.subtitle": "சைபர் மோசடிகளை அடையாளம் காணவும், தடுக்கவும் மற்றும் புகாரளிக்கவும் அறிவுடன் கிராமப்புற சமூகங்களை வலுப்படுத்துதல். சமீபத்திய மோசடி தந்திரங்களைப் பற்றி அறிந்து உங்களையும் உங்கள் அன்புக்குரியவர்களையும் பாதுகாத்துக்கொள்ளுங்கள்.",
    "home.hero.startLearning": "கற்றலைத் தொடங்குங்கள்",
    "home.hero.reportFraud": "இப்போதே மோசடியைப் புகாரளிக்கவும்",
    "home.hero.scamTypes": "மோசடி வகைகள் உள்ளடக்கப்பட்டுள்ளன",
    "home.hero.helpline": "உதவி எண் ஆதரவு",
    "home.hero.freeResources": "இலவச வளங்கள்",
    "home.hero.offlineAccess": "ஆஃப்லைன் அணுகல் கிடைக்கிறது",
    
    // Quick Access
    "quickAccess.title": "விரைவு அணுகல்",
    "quickAccess.learn.title": "மோசடிகளைப் பற்றி அறிக",
    "quickAccess.learn.desc": "பல்வேறு வகையான சைபர் மோசடிகளைப் புரிந்து கொள்ளுங்கள் மற்றும் அவற்றை எவ்வாறு அடையாளம் காண்பது",
    "quickAccess.news.title": "சமீபத்திய மோசடி செய்திகள்",
    "quickAccess.news.desc": "சமீபத்திய சைபர் குற்ற வழக்குகள் மற்றும் எச்சரிக்கைகளுடன் புதுப்பித்த நிலையில் இருங்கள்",
    "quickAccess.report.title": "மோசடியைப் புகாரளிக்கவும்",
    "quickAccess.report.desc": "சைபர் குற்றங்களை உடனடியாக அதிகாரிகளுக்குப் புகாரளிக்கவும்",
    "quickAccess.resources.title": "வளங்கள்",
    "quickAccess.resources.desc": "வழிகாட்டிகள், சுவரொட்டிகள் மற்றும் கல்விப் பொருட்களைப் பதிவிறக்கவும்",
    "quickAccess.checklist.title": "பாதுகாப்புச் சரிபார்ப்புப் பட்டியல்",
    "quickAccess.checklist.desc": "சைபர் பாதுகாப்பிற்கான தினசரி குறிப்புகள் மற்றும் செய்ய வேண்டியவை மற்றும் செய்யக்கூடாதவை",
    "quickAccess.contacts.title": "அவசர தொடர்புகள்",
    "quickAccess.contacts.desc": "உதவி எண்கள் மற்றும் ஆதரவிற்கான விரைவு அணுகல்",
    
    // News
    "news.title": "சமீபத்திய மோசடி எச்சரிக்கைகள்",
    "news.liveUpdates": "நேரடி புதுப்பிப்புகள்",
    "news.readFull": "முழு கட்டுரையைப் படிக்கவும்",
    
    // Mission
    "mission.title": "எங்கள் நோக்கம்",
    "mission.desc": "CyberSafe வளர்ந்து வரும் சைபர் மோசடி அச்சுறுத்தலில் இருந்து கிராமப்புற சமூகங்களைப் பாதுகாப்பதற்கு அர்ப்பணிக்கப்பட்டுள்ளது. நீங்கள் ஆன்லைனில் பாதுகாப்பாக இருக்க, புரிந்துகொள்ள எளிதான கல்வி, நிகழ்நேர எச்சரிக்கைகள் மற்றும் உடனடி ஆதரவை நாங்கள் வழங்குகிறோம்.",
    "mission.free": "இலவசம்",
    "mission.freeDesc": "அனைவருக்கும் 100% இலவச வளங்கள் மற்றும் கல்வி",
    "mission.offline": "ஆஃப்லைன்",
    "mission.offlineDesc": "இணையம் இல்லாமல் அனைத்து உள்ளடக்கத்தையும் அணுகவும்",
    "mission.support": "24/7",
    "mission.supportDesc": "நாள் முழுவதும் ஆதரவு மற்றும் புகாரளித்தல்",
    
    // Footer
    "footer.tagline": "சைபர் பாதுகாப்பு கல்வி மற்றும் விழிப்புணர்வுடன் கிராமப்புற சமூகங்களை வலுப்படுத்துதல்",
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.resources": "வளங்கள்",
    "footer.emergency": "அவசர தொடர்புகள்",
    "footer.cyberCrime": "சைபர் குற்ற உதவி எண்: 1930",
    "footer.copyright": "CyberSafe. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. | கிராமப்புற இந்தியாவை சைபர் அச்சுறுத்தல்களில் இருந்து பாதுகாத்தல்",
    "footer.availability": "PWA வழியாக ஆஃப்லைனில் கிடைக்கிறது | 2G/3G நெட்வொர்க்குகளில் வேலை செய்கிறது"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};