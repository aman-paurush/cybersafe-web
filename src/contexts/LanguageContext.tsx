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
    "nav.reportScam": "Report Scam",
    "nav.videos": "Videos",
    "nav.quiz": "Quiz",
    "nav.checklist": "Checklist",
    "nav.resources": "Resources",
    "nav.about": "About",
    
    // Emergency Banner
    "emergency.text": "Been Scammed? Report Immediately!",
    "emergency.call": "Call 1930",
    "emergency.reportOnline": "Report Online",
    "emergency.title": "Been Scammed? Report Immediately!",
    "emergency.subtitle": "Call 1930 or report online",
    "emergency.report": "Report Now",
    "emergency.cybercrime": "Cyber Crime Helpline",
    "emergency.portal": "Cybercrime Portal",
    "emergency.share": "Share Info",
    "emergency.shareDesc": "Share with friends & family",
    
    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.reportNow": "Report Now",
    "common.previous": "Previous",
    "common.next": "Next",
    
    // Install Button
    "install.button": "Install App",
    
    // Resources Page
    "resources.title": "Safety Resources & Materials",
    "resources.subtitle": "Download educational materials, posters, and guides to help protect yourself and your community",
    "resources.back": "Back",
    "resources.pdfs": "Educational Guides & Posters",
    "resources.pdf1": "Cyber Safety Awareness Guide",
    "resources.pdf2": "Common Scams & How to Avoid Them",
    "resources.pdf3": "Digital Payment Safety Tips",
    "resources.pdf4": "Password Security Best Practices",
    "resources.pdf5": "Online Banking Protection Guide",
    "resources.images": "WhatsApp Shareable Awareness Posts",
    "resources.img1": "Phishing Scam Alert",
    "resources.img2": "OTP Safety Reminder",
    "resources.img3": "Fake Job Offer Warning",
    "resources.img4": "UPI Fraud Prevention",
    "resources.img5": "Mobile Banking Safety",
    "resources.videos": "Video Tutorials",
    "resources.video1": "How to Identify Phishing Emails",
    "resources.video2": "Protecting Your Mobile Wallet",
    "resources.video3": "Online Shopping Safety Guide",
    "resources.video4": "Social Media Privacy Settings",
    "resources.video5": "What to Do If You're Scammed",
    "resources.download": "Download",
    "resources.share": "Share",
    "resources.watch": "Watch Video",
    
    // Saved News Page
    "saved.back": "Back",
    "saved.title": "Saved Articles",
    "saved.empty": "No saved articles yet. Start bookmarking helpful articles!",
    
    // Videos Page
    "videos.title": "Video Library",
    "videos.subtitle": "Watch educational videos to understand scams better and learn how to protect yourself.",
    "videos.scamTypes": "Scam Types",
    "videos.safetyTips": "Safety Tips",
    "videos.realStories": "Real Stories",
    
    // Scam Type Videos
    "videos.otp": "OTP Fraud: What You Need to Know",
    "videos.otpDesc": "Learn why you should never share OTP and how scammers use it to empty your account.",
    "videos.upi": "UPI Payment Scams: Complete Guide",
    "videos.upiDesc": "Understanding QR code frauds, payment reversals, and how to use UPI safely.",
    "videos.voicePhishing": "Voice Phishing: 'Can You Hear Me?' Scam",
    "videos.voicePhishingDesc": "How criminals record your voice and use AI to create fake authorizations.",
    "videos.aadhaar": "Aadhaar & KYC Scams Exposed",
    "videos.aadhaarDesc": "Banks never ask for KYC updates over phone. Learn the truth.",
    
    // Safety Tips Videos
    "videos.phoneSecure": "10 Ways to Secure Your Smartphone",
    "videos.phoneSecureDesc": "Essential phone security settings everyone should know.",
    "videos.onlineShopping": "How to Shop Online Safely",
    "videos.onlineShoppingDesc": "Identify fake shopping websites and apps before you lose money.",
    "videos.password": "Creating Strong Passwords & 2FA",
    "videos.passwordDesc": "Best practices for password management and two-factor authentication.",
    "videos.spotPhishing": "How to Spot Phishing Attempts",
    "videos.spotPhishingDesc": "Identify fake emails, SMS, and calls trying to steal your information.",
    
    // Real Stories Videos
    "videos.story1": "Real Story: Lost ₹2 Lakhs to OTP Scam",
    "videos.story1Desc": "A victim shares their experience and lessons learned.",
    "videos.story2": "How I Got My Money Back After UPI Fraud",
    "videos.story2Desc": "Step-by-step process of reporting and recovering from fraud.",
    "videos.story3": "Loan App Harassment: My Nightmare",
    "videos.story3Desc": "How predatory loan apps destroyed lives and what you can do.",
    
    // Home Page - Hero
    "home.hero.title": "Stay Safe from Cyber Frauds",
    "home.hero.subtitle": "Empowering rural communities with knowledge to identify, prevent, and report cyber scams. Learn about the latest fraud tactics and protect yourself and your loved ones.",
    "home.hero.startLearning": "Start Learning",
    "home.hero.reportFraud": "Report Fraud Now",
    "home.hero.scamTypes": "Scam Types Covered",
    "home.hero.helpline": "Helpline Support",
    "home.hero.freeResources": "Free Resources",
    "home.hero.offlineAccess": "Offline Access Available",
    "home.hero.badge": "Trusted by Thousands",
    
    // Home Page - Features
    "home.features.title": "Why Choose Community Connect?",
    "home.features.subtitle": "A comprehensive cybersecurity awareness platform built for you",
    "home.features.fast.title": "Fast & Offline",
    "home.features.fast.desc": "Access cybersecurity content anytime, anywhere, without internet connection",
    "home.features.trusted.title": "Expert Curated",
    "home.features.trusted.desc": "Content developed by cybersecurity experts and verified resources",
    "home.features.multilingual.title": "Multilingual",
    "home.features.multilingual.desc": "Available in 6+ languages to reach diverse communities",
    "home.features.free.title": "100% Free",
    "home.features.free.desc": "No subscriptions, no hidden costs - completely free cybersecurity education",
    "home.features.interactive.title": "Interactive Learning",
    "home.features.interactive.desc": "Engage with quizzes, checklists, and real-world scenarios",
    "home.features.community.title": "Community Driven",
    "home.features.community.desc": "Join thousands protecting themselves from cyber threats",
    
    // Home Page - Latest News
    "home.latestNews": "Latest Security News",
    "home.latestNewsDesc": "Stay updated with the latest cybersecurity alerts and awareness tips",
    
    // Home Page - CTA
    "home.cta.title": "Ready to Secure Your Digital Life?",
    "home.cta.subtitle": "Start learning about cybersecurity threats and best practices today",
    
    // Quick Access
    "quickAccess.title": "Quick Access",
    "quickAccess.subtitle": "Quick access to all essential cybersecurity resources and tools",
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
    
    // Help Menu
    "help.menu.title": "Help & Support",
    "help.menu.call": "Call 1930",
    "help.menu.report": "Report Fraud",
    "help.menu.learn": "Learn & Protect",
    "help.menu.audio": "Listen Audio",
    "help.menu.audio.text": "Need help? Call 1930 to report cyber crime or visit cybercrime.gov.in for online reporting. Stay safe and aware of cyber threats.",
    "help.menu.darkMode": "Dark Mode",
    "help.menu.lightMode": "Light Mode",
    
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
    "nav.reportScam": "स्कैम रिपोर्ट करें",
    "nav.videos": "वीडियो",
    "nav.quiz": "प्रश्नोत्तरी",
    "nav.checklist": "चेकलिस्ट",
    "nav.resources": "संसाधन",
    "nav.about": "हमारे बारे में",
    
    // Emergency Banner
    "emergency.text": "धोखाधड़ी हो गई? तुरंत रिपोर्ट करें!",
    "emergency.call": "1930 पर कॉल करें",
    "emergency.reportOnline": "ऑनलाइन रिपोर्ट करें",
    "emergency.title": "धोखाधड़ी हो गई? तुरंत रिपोर्ट करें!",
    "emergency.subtitle": "1930 पर कॉल करें या ऑनलाइन रिपोर्ट करें",
    "emergency.report": "अभी रिपोर्ट करें",
    "emergency.cybercrime": "साइबर अपराध हेल्पलाइन",
    "emergency.portal": "साइबरक्राइम पोर्टल",
    "emergency.share": "जानकारी साझा करें",
    "emergency.shareDesc": "दोस्तों और परिवार के साथ साझा करें",
    
    // Common
    "common.readMore": "और पढ़ें",
    "common.learnMore": "और जानें",
    "common.reportNow": "अभी रिपोर्ट करें",
    "common.previous": "पिछला",
    "common.next": "अगला",
    
    // Install Button
    "install.button": "ऐप्लिकेशन इंस्टॉल करें",
    
    // Resources Page
    "resources.title": "सुरक्षा संसाधन और सामग्री",
    "resources.subtitle": "अपने और अपने समुदाय की सुरक्षा में मदद के लिए शैक्षिक सामग्री, पोस्टर और गाइड डाउनलोड करें",
    "resources.back": "वापस",
    "resources.pdfs": "शैक्षिक गाइड और पोस्टर",
    "resources.pdf1": "साइबर सुरक्षा जागरूकता गाइड",
    "resources.pdf2": "सामान्य घोटाले और उनसे बचने के तरीके",
    "resources.pdf3": "डिजिटल भुगतान सुरक्षा सुझाव",
    "resources.pdf4": "पासवर्ड सुरक्षा सर्वोत्तम प्रथाएं",
    "resources.pdf5": "ऑनलाइन बैंकिंग सुरक्षा गाइड",
    "resources.images": "व्हाट्सएप साझा करने योग्य जागरूकता पोस्ट",
    "resources.img1": "फिशिंग घोटाले की चेतावनी",
    "resources.img2": "OTP सुरक्षा अनुस्मारक",
    "resources.img3": "नकली नौकरी की चेतावनी",
    "resources.img4": "UPI धोखाधड़ी रोकथाम",
    "resources.img5": "मोबाइल बैंकिंग सुरक्षा",
    "resources.videos": "वीडियो ट्यूटोरियल",
    "resources.video1": "फिशिंग ईमेल की पहचान कैसे करें",
    "resources.video2": "अपने मोबाइल वॉलेट की सुरक्षा करना",
    "resources.video3": "ऑनलाइन खरीदारी सुरक्षा गाइड",
    "resources.video4": "सोशल मीडिया गोपनीयता सेटिंग्स",
    "resources.video5": "यदि आप धोखाधड़ी के शिकार हुए तो क्या करें",
    "resources.download": "डाउनलोड करें",
    "resources.share": "साझा करें",
    "resources.watch": "वीडियो देखें",
    
    // Saved News Page
    "saved.back": "वापस",
    "saved.title": "सहेजे गए लेख",
    "saved.empty": "अभी कोई सहेजा गया लेख नहीं। सहायक लेखों को बुकमार्क करना शुरू करें!",
    
    // Videos Page
    "videos.title": "वीडियो पुस्तकालय",
    "videos.subtitle": "घोटालों को बेहतर तरीके से समझने और स्वयं को सुरक्षित रखने के तरीकों को सीखने के लिए शैक्षणिक वीडियो देखें।",
    "videos.scamTypes": "घोटाले के प्रकार",
    "videos.safetyTips": "सुरक्षा सुझाव",
    "videos.realStories": "वास्तविक कहानियां",
    
    // Scam Type Videos
    "videos.otp": "OTP धोखाधड़ी: आपको क्या जानना चाहिए",
    "videos.otpDesc": "जानें कि आपको OTP कभी क्यों साझा नहीं करना चाहिए और स्कैमर इसका उपयोग करके आपके खाते को कैसे खाली कर सकते हैं।",
    "videos.upi": "UPI भुगतान घोटाले: संपूर्ण गाइड",
    "videos.upiDesc": "QR कोड धोखाधड़ी, भुगतान रिवर्सल और UPI सुरक्षित रूप से उपयोग करने को समझें।",
    "videos.voicePhishing": "वॉइस फिशिंग: 'क्या आप सुन सकते हैं?' घोटाला",
    "videos.voicePhishingDesc": "अपराधी कैसे आपकी आवाज़ रिकॉर्ड करते हैं और नकली प्राधिकरण बनाने के लिए AI का उपयोग करते हैं।",
    "videos.aadhaar": "आधार और KYC घोटाले उजागर",
    "videos.aadhaarDesc": "बैंक कभी भी फोन पर KYC अपडेट नहीं मांगते। सच जानें।",
    
    // Safety Tips Videos
    "videos.phoneSecure": "आपके स्मार्टफोन को सुरक्षित करने के 10 तरीके",
    "videos.phoneSecureDesc": "आवश्यक फोन सुरक्षा सेटिंग्स जो सभी को पता होनी चाहिए।",
    "videos.onlineShopping": "ऑनलाइन सुरक्षित रूप से कैसे खरीदें",
    "videos.onlineShoppingDesc": "पैसा खोने से पहले नकली खरीदारी वेबसाइटों और ऐप्स की पहचान करें।",
    "videos.password": "मजबूत पासवर्ड और 2FA बनाना",
    "videos.passwordDesc": "पासवर्ड प्रबंधन और दो-कारक प्रमाणीकरण के लिए सर्वोत्तम प्रथाएं।",
    "videos.spotPhishing": "फिशिंग प्रयासों की पहचान कैसे करें",
    "videos.spotPhishingDesc": "नकली ईमेल, एसएमएस और कॉल की पहचान करें जो आपकी जानकारी चोरी करने का प्रयास कर रहे हैं।",
    
    // Real Stories Videos
    "videos.story1": "वास्तविक कहानी: OTP घोटाले में 2 लाख रुपये खो गए",
    "videos.story1Desc": "एक पीड़ित अपने अनुभव और सीखे गए पाठों को साझा करता है।",
    "videos.story2": "UPI धोखाधड़ी के बाद मुझे अपनी रकम कैसे वापस मिली",
    "videos.story2Desc": "धोखाधड़ी की रिपोर्ट करने और उससे उबरने की चरण-दर-चरण प्रक्रिया।",
    "videos.story3": "ऋण ऐप उत्पीड़न: मेरी दुःस्वप्न",
    "videos.story3Desc": "शिकारी ऋण ऐप्स ने जीवन को कैसे बर्बाद किया और आप क्या कर सकते हैं।",
    
    // Home Page - Hero
    "home.hero.title": "साइबर धोखाधड़ी से सुरक्षित रहें",
    "home.hero.subtitle": "साइबर घोटालों की पहचान करने, रोकने और रिपोर्ट करने के ज्ञान से ग्रामीण समुदायों को सशक्त बनाना। नवीनतम धोखाधड़ी के तरीकों के बारे में जानें और अपनी और अपने प्रियजनों की सुरक्षा करें।",
    "home.hero.startLearning": "सीखना शुरू करें",
    "home.hero.reportFraud": "अभी धोखाधड़ी की रिपोर्ट करें",
    "home.hero.scamTypes": "घोटाले के प्रकार कवर किए गए",
    "home.hero.helpline": "हेल्पलाइन सहायता",
    "home.hero.freeResources": "निःशुल्क संसाधन",
    "home.hero.offlineAccess": "ऑफलाइन एक्सेस उपलब्ध",
    "home.hero.badge": "हजारों से विश्वस्त",
    
    // Home Page - Features
    "home.features.title": "कम्युनिटी कनेक्ट क्यों चुनें?",
    "home.features.subtitle": "आपके लिए बनाया गया व्यापक साइबर सुरक्षा जागरूकता मंच",
    "home.features.fast.title": "तेज़ और ऑफलाइन",
    "home.features.fast.desc": "किसी भी समय, कहीं भी साइबर सुरक्षा सामग्री तक पहुंचें, बिना इंटरनेट कनेक्शन के",
    "home.features.trusted.title": "विशेषज्ञ द्वारा क्यूरेटेड",
    "home.features.trusted.desc": "साइबर सुरक्षा विशेषज्ञों द्वारा विकसित सामग्री और सत्यापित संसाधन",
    "home.features.multilingual.title": "बहुभाषी",
    "home.features.multilingual.desc": "विविध समुदायों तक पहुंचने के लिए 6+ भाषाओं में उपलब्ध",
    "home.features.free.title": "100% निःशुल्क",
    "home.features.free.desc": "कोई सदस्यता नहीं, कोई छिपी लागत नहीं - पूरी तरह से निःशुल्क साइबर सुरक्षा शिक्षा",
    "home.features.interactive.title": "इंटरैक्टिव शिक्षा",
    "home.features.interactive.desc": "क्विज़, चेकलिस्ट और वास्तविक दुनिया के परिदृश्यों के साथ जुड़ें",
    "home.features.community.title": "समुदाय संचालित",
    "home.features.community.desc": "हजारों लोगों के साथ जुड़ें जो स्वयं को साइबर खतरों से बचा रहे हैं",
    
    // Home Page - Latest News
    "home.latestNews": "नवीनतम सुरक्षा समाचार",
    "home.latestNewsDesc": "नवीनतम साइबर सुरक्षा अलर्ट और जागरूकता सुझावों के साथ अपडेट रहें",
    
    // Home Page - CTA
    "home.cta.title": "अपने डिजिटल जीवन को सुरक्षित करने के लिए तैयार?",
    "home.cta.subtitle": "आज ही साइबर सुरक्षा खतरों और सर्वोत्तम प्रथाओं के बारे में जानना शुरू करें",
    
    // Quick Access
    "quickAccess.title": "त्वरित पहुंच",
    "quickAccess.subtitle": "सभी आवश्यक साइबर सुरक्षा संसाधनों और उपकरणों तक त्वरित पहुंच",
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
    
    // Help Menu
    "help.menu.title": "मदद और समर्थन",
    "help.menu.call": "1930 पर कॉल करें",
    "help.menu.report": "धोखाधड़ी की रिपोर्ट करें",
    "help.menu.learn": "सीखें और सुरक्षित रहें",
    "help.menu.audio": "ऑडियो सुनें",
    "help.menu.audio.text": "मदद की जरूरत है? साइबर अपराध की रिपोर्ट करने के लिए 1930 पर कॉल करें या ऑनलाइन रिपोर्टिंग के लिए cybercrime.gov.in पर जाएं। सुरक्षित रहें और साइबर खतरों के बारे में जागरूक रहें।",
    "help.menu.darkMode": "डार्क मोड",
    "help.menu.lightMode": "लाइट मोड",
    
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
    "nav.reportScam": "फसवणूक नोंदवा",
    "nav.videos": "व्हिडिओ",
    "nav.quiz": "प्रश्नमंजुषा",
    "nav.checklist": "चेकलिस्ट",
    "nav.resources": "संसाधने",
    "nav.about": "आमच्याबद्दल",
    
    // Emergency Banner
    "emergency.text": "फसवणूक झाली? लगेच तक्रार नोंदवा!",
    "emergency.call": "1930 वर कॉल करा",
    "emergency.reportOnline": "ऑनलाइन तक्रार नोंदवा",
    "emergency.title": "फसवणूक झाली? लगेच तक्रार नोंदवा!",
    "emergency.subtitle": "1930 वर कॉल करा किंवा ऑनलाइन तक्रार नोंदवा",
    "emergency.report": "आता नोंदवा",
    "emergency.cybercrime": "सायबर गुन्हा हेल्पलाइन",
    "emergency.portal": "सायबरक्राइम पोर्टल",
    "emergency.share": "माहिती शेअर करा",
    "emergency.shareDesc": "मित्र आणि कुटुंबासह शेअर करा",
    
    // Common
    "common.readMore": "अधिक वाचा",
    "common.learnMore": "अधिक जाणून घ्या",
    "common.reportNow": "आता नोंदवा",
    "common.previous": "मागील",
    "common.next": "पुढील",
    
    // Install Button
    "install.button": "अॅप्लिकेशन इंस्टॉल करा",
    
    // Resources Page
    "resources.title": "सुरक्षा संसाधन आणि साहित्य",
    "resources.subtitle": "तुम्हाला आणि तुमच्या समुदायाला संरक्षित ठेवण्यात मदत करण्यासाठी शैक्षणिक सामग्री, पोस्टर आणि गाइड डाउनलोड करा",
    "resources.back": "मागे",
    "resources.pdfs": "शैक्षणिक गाइड आणि पोस्टर",
    "resources.pdf1": "साइबर सुरक्षा जागरूकता गाइड",
    "resources.pdf2": "सामान्य फसवणूक आणि त्यांच्यापासून कसे बचावे",
    "resources.pdf3": "डिजिटल पेमेंट सुरक्षा सुझाव",
    "resources.pdf4": "पासवर्ड सुरक्षा सर्वोत्तम पद्धती",
    "resources.pdf5": "ऑनलाइन बँकिंग संरक्षण गाइड",
    "resources.images": "व्हाट्सअँप शेयरेबल जागरूकता पोस्ट",
    "resources.img1": "फिशिंग घोटाळा सूचना",
    "resources.img2": "OTP सुरक्षा स्मरणपत्र",
    "resources.img3": "नकली नोकरीची चेतावणी",
    "resources.img4": "UPI जाचार प्रतिबंध",
    "resources.img5": "मोबाइल बँकिंग सुरक्षा",
    "resources.videos": "व्हिडिओ ट्यूटोरियल",
    "resources.video1": "फिशिंग ईमेलची ओळख कसे करावी",
    "resources.video2": "तुमच्या मोबाइल वॉलेटचे संरक्षण करणे",
    "resources.video3": "ऑनलाइन शॉपिंग सुरक्षा गाइड",
    "resources.video4": "सोशल मीडिया गोपनीयता सेटिंग्ज",
    "resources.video5": "तुम्ही फसवल्यास काय करावे",
    "resources.download": "डाउनलोड करा",
    "resources.share": "शेअर करा",
    "resources.watch": "व्हिडिओ पहा",
    
    // Saved News Page
    "saved.back": "मागे",
    "saved.title": "सहेजलेले लेख",
    "saved.empty": "अद्याप कोणतेही सहेजलेले लेख नाहीत. उपयुक्त लेख बुकमार्क करण्यास सुरू करा!",
    
    // Videos Page
    "videos.title": "व्हिडिओ लायब्रेरी",
    "videos.subtitle": "घोटाळे बेहतर समजण्यासाठी आणि स्वतःला सुरक्षित ठेवण्याचे मार्ग शिकण्यासाठी शैक्षणिक व्हिडिओ पहा।",
    "videos.scamTypes": "घोटाळ्याचे प्रकार",
    "videos.safetyTips": "सुरक्षा सुझाव",
    "videos.realStories": "वास्तविक कहानी",
    
    // Scam Type Videos
    "videos.otp": "OTP जाचार: तुम्हाला काय जाणून घ्यावे",
    "videos.otpDesc": "तुम्हाला OTP कधीच साझा का करू नये आणि स्कॅमर तुमचे खाते कसे रिकामे करतात।",
    "videos.upi": "UPI पेमेंट घोटाले: संपूर्ण मार्गदर्शन",
    "videos.upiDesc": "QR कोड जाचार, पेमेंट रिव्हर्सल आणि UPI सुरक्षितपणे वापर करणे समजून घ्या।",
    "videos.voicePhishing": "व्हॉईस फिशिंग: 'तू ऐकू शकतोस का?' घोटाळा",
    "videos.voicePhishingDesc": "अपराधी तुमची आवाज कसे रेकॉर्ड करतात आणि नकली प्राधिकरण बनवण्यासाठी AI वापरतात।",
    "videos.aadhaar": "आधार आणि KYC घोटाले उघड",
    "videos.aadhaarDesc": "बँकेकडून कधीच फोनवर KYC अपडेट मागवले जात नाहीत। सत्य जाणून घ्या।",
    
    // Safety Tips Videos
    "videos.phoneSecure": "तुमच्या स्मार्टफोनला सुरक्षित करण्याचे 10 मार्ग",
    "videos.phoneSecureDesc": "आवश्यक फोन सुरक्षा सेटिंग्ज सर्वांनी जाणून घ्यावेत।",
    "videos.onlineShopping": "ऑनलाइनवर सुरक्षितपणे कसे खरेदी करावी",
    "videos.onlineShoppingDesc": "पैसे गमवण्यापूर्वी खोट्या शॉपिंग वेबसाइट्स आणि अॅप्स ओळखा।",
    "videos.password": "मजबूत पासवर्ड आणि 2FA तयार करणे",
    "videos.passwordDesc": "पासवर्ड व्यवस्थापन आणि द्विपक्षीय प्रमाणीकरणासाठी सर्वोत्तम पद्धती।",
    "videos.spotPhishing": "फिशिंग प्रयत्नांची ओळख कसे करावी",
    "videos.spotPhishingDesc": "खोटी ईमेल, SMS आणि कॉल ओळखा जे तुमची माहिती चोरू पाहात आहेत।",
    
    // Real Stories Videos
    "videos.story1": "वास्तविक कहानी: OTP घोटाळ्यात 2 लाख रुपये गमवले",
    "videos.story1Desc": "एक पीडित त्यांचा अनुभव आणि शिकलेल्या धड्यांचे वाटप करतो।",
    "videos.story2": "UPI जाचारानंतर मला माझे पैसे कसे परत मिळाले",
    "videos.story2Desc": "जाचारची तक्रार करण्याची आणि तरीसही उबरण्याची चरण-दर-चरण प्रक्रिया।",
    "videos.story3": "कर्ज अॅप्लिकेशन छळ: माझा दुःस्वप्न",
    "videos.story3Desc": "शिकारी कर्ज अॅप्स जीवन कसे बर्बाद करतात आणि तुम्ही काय करू शकता।",
    
    // Home Page - Hero
    "home.hero.title": "सायबर फसवणुकीपासून सुरक्षित रहा",
    "home.hero.subtitle": "सायबर घोटाळे ओळखणे, प्रतिबंध करणे आणि नोंदवणे याबद्दल ज्ञानाने ग्रामीण समुदायांना सशक्त करणे। नवीनतम फसवणूक युक्तींबद्दल जाणून घ्या आणि स्वतःचे आणि आपल्या प्रियजनांचे संरक्षण करा।",
    "home.hero.startLearning": "शिकणे सुरू करा",
    "home.hero.reportFraud": "आता फसवणूक नोंदवा",
    "home.hero.scamTypes": "घोटाळ्याचे प्रकार कव्हर केले",
    "home.hero.helpline": "हेल्पलाइन समर्थन",
    "home.hero.freeResources": "मोफत संसाधने",
    "home.hero.offlineAccess": "ऑफलाइन प्रवेश उपलब्ध",
    "home.hero.badge": "हजारोंद्वारे विश्वस्त",
    
    // Home Page - Features
    "home.features.title": "कम्युनिटी कनेक्ट का निवडा?",
    "home.features.subtitle": "तुमच्यासाठी तयार व्यापक सायबर सुरक्षा जागरूकता प्लॅटफॉर्म",
    "home.features.fast.title": "जलद आणि ऑफलाइन",
    "home.features.fast.desc": "कधीही, कोठेही सायबर सुरक्षा सामग्रीमध्ये प्रवेश करा, इंटरनेट कनेक्शनशिवाय",
    "home.features.trusted.title": "विशेषज्ञ द्वारे क्यूरेटेड",
    "home.features.trusted.desc": "साइबर सुरक्षा तज्ञांद्वारे विकसित सामग्री आणि सत्यापित संसाधन",
    "home.features.multilingual.title": "बहुभाषिक",
    "home.features.multilingual.desc": "विविध समुदायांपर्यंत पोहोचण्यासाठी 6+ भाषांमध्ये उपलब्ध",
    "home.features.free.title": "100% मोफत",
    "home.features.free.desc": "कोणतेही सदस्यता नाही, कोणत्याही लपलेल्या खर्चाची नाही - पूर्णपणे विनामूल्य सायबर सुरक्षा शिक्षा",
    "home.features.interactive.title": "इंटरैक्टिव शिक्षण",
    "home.features.interactive.desc": "क्विज, चेकलिस्ट आणि वास्तविक दुनियाच्या परिस्थितीसह जुळवा",
    "home.features.community.title": "समुदाय संचालित",
    "home.features.community.desc": "हजारो लोकांसोबत सायबर धोक्यांपासून स्वतःचे संरक्षण करण्याचा प्रयत्न करा",
    
    // Home Page - Latest News
    "home.latestNews": "नवीनतम सुरक्षा बातम्या",
    "home.latestNewsDesc": "नवीनतम सायबर सुरक्षा अलर्ट आणि जागरूकता सुझावांसह अपडेट रहा",
    
    // Home Page - CTA
    "home.cta.title": "तुमच्या डिजिटल जीवनला सुरक्षित करण्यासाठी तयार?",
    "home.cta.subtitle": "आज सायबर सुरक्षा धोक्या आणि सर्वोत्तम पद्धती शिकणे सुरू करा",
    
    // Quick Access
    "quickAccess.title": "द्रुत प्रवेश",
    "quickAccess.subtitle": "सर्व आवश्यक सायबर सुरक्षा संसाधन आणि उपकरणांमध्ये द्रुत प्रवेश",
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
    
    // Help Menu
    "help.menu.title": "मदत आणि समर्थन",
    "help.menu.call": "1930 वर कॉल करा",
    "help.menu.report": "फसवणूक नोंदवा",
    "help.menu.learn": "शिका आणि सुरक्षित रहा",
    "help.menu.audio": "ऑडियो ऐका",
    "help.menu.audio.text": "मदतीची आवश्यकता? सायबर अपराधाची नोंदणी करण्यासाठी 1930 वर कॉल करा किंवा ऑनलाइन नोंदणीसाठी cybercrime.gov.in ला भेट द्या। सुरक्षित रहा आणि सायबर धोक्यांबद्दल सचेत रहा।",
    "help.menu.darkMode": "डार्क मोड",
    "help.menu.lightMode": "लाइट मोड",
    
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
    "nav.reportScam": "છેતરપિંડીની જાણ કરો",
    "nav.videos": "વિડિયો",
    "nav.quiz": "ક્વિઝ",
    "nav.checklist": "ચેકલિસ્ટ",
    "nav.resources": "સંસાધનો",
    "nav.about": "અમારા વિશે",
    
    // Emergency Banner
    "emergency.text": "છેતરપિંડી થઈ? તાત્કાલિક જાણ કરો!",
    "emergency.call": "1930 પર કૉલ કરો",
    "emergency.reportOnline": "ઓનલાઈન જાણ કરો",
    "emergency.title": "છેતરપિંડી થઈ? તાત્કાલિક જાણ કરો!",
    "emergency.subtitle": "1930 પર કૉલ કરો અથવા ઓનલાઈન જાણ કરો",
    "emergency.report": "હમણાં જાણ કરો",
    "emergency.cybercrime": "સાયબર ગુનાહ હેલ્પલાઈન",
    "emergency.portal": "સાયબરક્રાઇમ પોર્ટલ",
    "emergency.share": "માહિતી શેર કરો",
    "emergency.shareDesc": "મિત્રો અને પરિવાર સાથે શેર કરો",
    
    // Common
    "common.readMore": "વધુ વાંચો",
    "common.learnMore": "વધુ જાણો",
    "common.reportNow": "હમણાં જાણ કરો",
    "common.previous": "પાછલું",
    "common.next": "આગળ",
    
    // Install Button
    "install.button": "ઍપ્લિકેશન ઇન્સ્ટોલ કરો",
    
    // Resources Page
    "resources.title": "સુરક્ષા સંસાધનો અને સામગ્રી",
    "resources.subtitle": "તમારી અને તમારા સમુદાયની સુરક્ષા માટે શૈક્ષણિક સામગ્રી, પોસ્ટર અને ગાઇડ ડાઉનલોડ કરો",
    "resources.back": "પાછો",
    "resources.pdfs": "શૈક્ષણિક ગાઇડ અને પોસ્ટર",
    "resources.pdf1": "સાયબર સુરક્ષા જાગૃતિ ગાઇડ",
    "resources.pdf2": "સામાન્ય છેતરપિંડી અને તેમને કેવી રીતે ટાળવી",
    "resources.pdf3": "ડિજિટલ પેમેન્ટ સુરક્ષા ટિપ્સ",
    "resources.pdf4": "પાસવર્ડ સુરક્ષા શ્રેષ્ઠ પ્રથાઓ",
    "resources.pdf5": "ઓનલાઈન બેંકિંગ સુરક્ષા ગાઇડ",
    "resources.images": "વ્હાટ્સঅ્યાપ શેર કરી શકાય તેવી જાગૃતિ પોસ્ટ",
    "resources.img1": "ફિશિંગ છેતરપિંડી એલર્ટ",
    "resources.img2": "OTP સુરક્ષા રીમાઇન્ડર",
    "resources.img3": "નકલી નોકરીની ચેતવણી",
    "resources.img4": "UPI જાચાર નિવારણ",
    "resources.img5": "મોબાઇલ બેંકિંગ સુરક્ષા",
    "resources.videos": "વીડિયો ટ્યુટોરિયલ",
    "resources.video1": "ફિશિંગ ઇમેલ્સ કેવી રીતે ઓળખવી",
    "resources.video2": "તમારા મોબાઈલ વૉલેટને સુરક્ષિત કરવું",
    "resources.video3": "ઓનલાઈન શોપિંગ સુરક્ષા ગાઇડ",
    "resources.video4": "સોશ્યલ મીડિયા ગોપનીયતા સેટિંગ્સ",
    "resources.video5": "જો તમે છેતરાયા તો શું કરવું",
    "resources.download": "ડાઉનલોડ કરો",
    "resources.share": "શેર કરો",
    "resources.watch": "વીડિયો જુઓ",
    
    // Saved News Page
    "saved.back": "પાછો",
    "saved.title": "સંગ્રહિત લેખો",
    "saved.empty": "હજુ કોઈ સંગ્રહિત લેખ નથી. મદદરૂપ લેખો બુકમાર્ક કરવા શરૂ કરો!",
    
    // Videos Page
    "videos.title": "વીડિયો લાઇબ્રેરી",
    "videos.subtitle": "છેતરપિંડીને વધુ સારી રીતે સમજવા અને તમારી જાતને સુરક્ષિત રાખવા તે શીખવા માટે શૈક્ષણિક વીડિયો જુઓ।",
    "videos.scamTypes": "છેતરપિંડીના પ્રકાર",
    "videos.safetyTips": "સુરક્ષા ટીપ્સ",
    "videos.realStories": "વાસ્તવિક વાર્તાઓ",
    
    // Scam Type Videos
    "videos.otp": "OTP છેતરપિંડી: તમે શું જાણવું જોઈએ",
    "videos.otpDesc": "શીખો કે તમે OTP શા માટે ક્યારેય શેર ન કરવું જોઈએ અને સ્કેમર્સ તમારા ખાતાને કેવી રીતે ખાલી કરે છે।",
    "videos.upi": "UPI પેમેન્ટ છેતરપિંડી: સંપૂર્ણ માર્ગદર્શન",
    "videos.upiDesc": "QR કોડ જાચાર, પેમેન્ટ રિવર્સલ અને UPI સુરક્ષિત રીતે કેવી રીતે ઉપયોગ કરવું તે સમજો।",
    "videos.voicePhishing": "વોઈસ ફિશિંગ: 'શું તમે મને સાંભળી શકો છો?' છેતરપિંડી",
    "videos.voicePhishingDesc": "ગુનેગાર કેવી રીતે તમારો અવાજ રેકોર્ડ કરે છે અને કૃત્રિમ બુદ્ધિમત્તાનો ઉપયોગ કરીને નકલી અધિકાર બનાવે છે।",
    "videos.aadhaar": "આધાર અને KYC છેતરપિંડી બહાર",
    "videos.aadhaarDesc": "બેંકો ક્યારેય ફોન પર KYC અપડેટ માટે પૂછતા નથી। સત્ય જાણો।",
    
    // Safety Tips Videos
    "videos.phoneSecure": "તમારા સ્માર્ટફોનને સુરક્ષિત કરવાના 10 તરીકા",
    "videos.phoneSecureDesc": "આવશ્યક ફોન સુરક્ષા સેટિંગ્સ દરેકે જાણવી જોઈએ।",
    "videos.onlineShopping": "ઓનલાઈનમાં સુરક્ષિત રીતે કેવી રીતે શોપિંગ કરવી",
    "videos.onlineShoppingDesc": "પૈસા ગુમાવતા પહેલા નકલી શોપિંગ વેબસાઇટ્સ અને એપ્પ્લિકેશનો ઓળખો।",
    "videos.password": "મજબૂત પાસવર્ડ અને 2FA બનાવવું",
    "videos.passwordDesc": "પાસવર્ડ ম્યુનેજમેન્ટ અને દ્વિ-પરિબળ પ્રમાણીકરણ માટે શ્રેષ્ઠ પ્રથાઓ।",
    "videos.spotPhishing": "ફિશિંગ પ્રયાસોને કેવી રીતે શોધવું",
    "videos.spotPhishingDesc": "નકલી ઈમેલ્સ, SMS અને કૉલ્સ ઓળખો જે તમારી માહિતી ચોરીનો પ્રયાસ કરી રહ્યાં છે।",
    
    // Real Stories Videos
    "videos.story1": "વાસ્તવિક વાર્તા: OTP છેતરપિંડીમાં ₹2 લાખ ગુમાવ્યા",
    "videos.story1Desc": "એક પીડિત તેમનો અનુભવ અને શીખેલા પાઠો શેર કરે છે।",
    "videos.story2": "UPI જાચારután મને મારા પૈસા કેવી રીતે પાછા મળ્યા",
    "videos.story2Desc": "છેતરપિંડી કરવાની અને તેમાંથી સુધરવાની પગલાં પગલા પ્રક્રિયા।",
    "videos.story3": "લોન એપ હેરાનગીરી: મારો દુઃસ્વપ્ન",
    "videos.story3Desc": "શિકારી લોન એપ્સ જીવનને કેવી રીતે બરબાદ કરે છે અને તમે શું કરી શકો છો।",
    
    // Home Page - Hero
    "home.hero.title": "સાયબર છેતરપિંડીથી સુરક્ષિત રહો",
    "home.hero.subtitle": "સાયબર કૌભાંડને ઓળખવા, અટકાવવા અને જાણ કરવા માટેના જ્ઞાનથી ગ્રામીણ સમુદાયોને સશક્ત બનાવવું. નવીનતમ છેતરપિંડી યુક્તિઓ વિશે જાણો અને તમારી અને તમારા પ્રિયજનોની સુરક્ષા કરો।",
    "home.hero.startLearning": "શીખવાનું શરૂ કરો",
    "home.hero.reportFraud": "હમણાં છેતરપિંડીની જાણ કરો",
    "home.hero.scamTypes": "કૌભાંડના પ્રકારો આવરી લીધા",
    "home.hero.helpline": "હેલ્પલાઈન સપોર્ટ",
    "home.hero.freeResources": "મફત સંસાધનો",
    "home.hero.offlineAccess": "ઓફલાઈન એક્સેસ ઉપલબ્ધ",
    "home.hero.badge": "હજારો દ્વારા વિશ્વાસ",
    
    // Home Page - Features
    "home.features.title": "કમ્યુનિટી કનેક્ટ શા માટે પસંદ કરો?",
    "home.features.subtitle": "તમારા માટે બનાયેલ વ્યાપક સાયબર સુરક્ષા જાગૃતિ પ્લેટફોર્મ",
    "home.features.fast.title": "ઝડપી અને ઓફલાઈન",
    "home.features.fast.desc": "ઈન્ટરનેટ કનેક્શન વિના, કંઈ સમયે, કોઈ જગ્યાએ સાયબર સુરક્ષા સામગ્રી ઍક્સેસ કરો",
    "home.features.trusted.title": "વિશેષજ્ઞ દ્વારા પસંદ કરાયેલ",
    "home.features.trusted.desc": "સાયબર સુરક્ષા વિશેષજ્ઞો દ્વારા વિકસિત સામગ્રી અને ચકાસાયેલ સંસાધનો",
    "home.features.multilingual.title": "બહુ-ભાષી",
    "home.features.multilingual.desc": "વૈવિધ્યશીલ સમુદાયો સુધી પહોંચવા માટે 6+ ભાષાઓમાં ઉપલબ્ધ",
    "home.features.free.title": "100% મફત",
    "home.features.free.desc": "કોઈ સબ્સક્રિપ્શન નથી, કોઈ છુપાયેલ ખર્ચ નથી - સંપૂર્ણ મફત સાયબર સુરક્ષા શિક્ષા",
    "home.features.interactive.title": "ઇંટરેક્ટિવ શિક્ષણ",
    "home.features.interactive.desc": "ક્વિઝ, ચેકલિસ્ટ અને વાસ્તવિક-વિશ્વ દૃશ્યો સાથે સંલગ્ન કરો",
    "home.features.community.title": "સમુદાય સંચાલિત",
    "home.features.community.desc": "હજારો લોકો સાથે સાયબર ધમકીથી પોતાને સુરક્ષિત કરવાનો પ્રયાસ કરો",
    
    // Home Page - Latest News
    "home.latestNews": "સંવાદ સુરક્ષા સમાચાર",
    "home.latestNewsDesc": "સર્વશેષ સાયબર સુરક્ષા ચેતવણી અને જાગૃતિ ટીપ્સ સાથે અપડેટ રહો",
    
    // Home Page - CTA
    "home.cta.title": "તમારી ડિજિટલ જીવન સુરક્ષિત કરવા માટે તૈયાર?",
    "home.cta.subtitle": "આજ સાયબર સુરક્ષા ધમકી અને શ્રેષ્ઠ પ્રાણવશુક્તિઓ વિશે શીખવાનું શરૂ કરો",
    
    // Quick Access
    "quickAccess.title": "ઝડપી પહોંચ",
    "quickAccess.subtitle": "તમામ આવશ્યક સાયબર સુરક્ષા સંસાધનો અને સાધનો સુધી ઝડપી પહોંચ",
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
    
    // Help Menu
    "help.menu.title": "મદદ અને સહાય",
    "help.menu.call": "1930 પર કૉલ કરો",
    "help.menu.report": "છેતરપિંડીની જણતર કરો",
    "help.menu.learn": "શીખો અને સુરક્ષિત રહો",
    "help.menu.audio": "ઑડિયો સાંભળો",
    "help.menu.audio.text": "મદદની જરૂર છે? સાઇબર ગુનોનો અહેવાલ આપવા માટે 1930 પર કૉલ કરો અથવા ઑનલાઇન અહેવાલ માટે cybercrime.gov.in ની મુલાકાત લો. સુરક્ષિત રહો અને સાઇબર ધમકીઓ વિશે સાવચેત રહો.",
    "help.menu.darkMode": "ડાર્ક મોડ",
    "help.menu.lightMode": "લાઈટ મોડ",
    
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
    "nav.reportScam": "మోసాన్ని నివేదించండి",
    "nav.videos": "వీడియోలు",
    "nav.quiz": "క్విజ్",
    "nav.checklist": "చెక్‌లిస్ట్",
    "nav.resources": "వనరులు",
    "nav.about": "మా గురించి",
    
    // Emergency Banner
    "emergency.text": "మోసం జరిగిందా? వెంటనే నివేదించండి!",
    "emergency.call": "1930కి కాల్ చేయండి",
    "emergency.reportOnline": "ఆన్‌లైన్ నివేదించండి",
    "emergency.title": "మోసం జరిగిందా? వెంటనే నివేదించండి!",
    "emergency.subtitle": "1930కి కాల్ చేయండి లేదా ఆన్‌లైన్‌లో నివేదించండి",
    "emergency.report": "ఇప్పుడే నివేదించండి",
    "emergency.cybercrime": "సైబర్ క్రైమ్ హెల్ప్‌లైన్",
    "emergency.portal": "సైబర్‌క్రైమ్ పోర్టల్",
    "emergency.share": "సమాచారాన్ని భాగస్వామ్యం చేయండి",
    "emergency.shareDesc": "స్నేహితులు మరియు కుటుంబం తో భాగస్వామ్యం చేయండి",
    
    // Common
    "common.readMore": "మరింత చదవండి",
    "common.learnMore": "మరింత తెలుసుకోండి",
    "common.reportNow": "ఇప్పుడే నివేదించండి",
    "common.previous": "మునుపటి",
    "common.next": "తరువాత",
    
    // Install Button
    "install.button": "అప్‌లికేషన్‌ను ఇన్‌స్టాల్ చేయండి",
    
    // Resources Page
    "resources.title": "సేఫ్టీ రిసోర్సెస్ మరియు విషయాలు",
    "resources.subtitle": "మిమ్మల్ని మరియు మీ సమాజాన్ని రక్షించడానికి విద్యా సామగ్రి, పోస్టర్‌లు మరియు గైడ్‌లను డౌన్‌లోడ్ చేసుకోండి",
    "resources.back": "వెనుకకు",
    "resources.pdfs": "విద్యా గైడ్‌లు మరియు పోస్టర్‌లు",
    "resources.pdf1": "సైబర్ సేఫ్టీ సচేతన గైడ్",
    "resources.pdf2": "సాధారణ స్కామ్‌లు మరియు వాటిని ఎలా తప్పించాలి",
    "resources.pdf3": "డిజిటల్ పేమెంట్ సేఫ్టీ టిప్‌లు",
    "resources.pdf4": "పాస్‌వర్డ్ సెక్యూరిటీ బెస్ట్ ప్రాక్టీసెస్",
    "resources.pdf5": "ఆన్‌లైన్ బ్యాంకింగ్ సుરక్షా గైడ్",
    "resources.images": "వాట్సঅ్యాప్ షేర్ చేయదగిన సచేతన పోస్టులు",
    "resources.img1": "ఫిషింగ్ స్కామ్ అలర్ట్",
    "resources.img2": "OTP సేఫ్టీ రిమైండర్",
    "resources.img3": "నకిలీ ఉద్యోగ హెచ్చరిక",
    "resources.img4": "UPI అల్లర్జీ నివారణ",
    "resources.img5": "మొబైల్ బ్యాంకింగ్ సేఫ్టీ",
    "resources.videos": "వీడియో ట్యూటోరియల్‌లు",
    "resources.video1": "ఫిషింగ్ ఇమెయిల్‌లను ఎలా గుర్తించాలి",
    "resources.video2": "మీ మొబైల్ వాలెట్‌ను రక్షించుకోవడం",
    "resources.video3": "ఆన్‌లైన్ షాపింగ్ సేఫ్టీ గైడ్",
    "resources.video4": "సోషల్ మీడియా ప్రైవసీ సెట్టింగ్‌లు",
    "resources.video5": "మీరు డ騙ా పాలైతే ఎవరు చేయాలి",
    "resources.download": "డౌన్‌లోడ్ చేయండి",
    "resources.share": "భాగస్వామ్యం చేయండి",
    "resources.watch": "వీడియో చూడండి",
    
    // Saved News Page
    "saved.back": "వెనుకకు",
    "saved.title": "సేవ్ చేసిన కథనాలు",
    "saved.empty": "ఇంకా సేవ్ చేసిన కథనాలు లేవు. సహాయక కథనాలను బుక్‌మార్క్ చేయడం ప్రారంభించండి!",
    
    // Videos Page
    "videos.title": "వీడియో లైబ్రరీ",
    "videos.subtitle": "స్కామ్‌లను బాగా అర్థం చేసుకోవడానికి మరియు మిమ్మల్ని రక్షించుకోవడం ఎలాగో నేర్చుకోవడానికి విద్యా వీడియోలు చూడండి.",
    "videos.scamTypes": "స్కామ్ రకాలు",
    "videos.safetyTips": "సేఫ్టీ టిప్‌లు",
    "videos.realStories": "నిజమైన కథలు",
    
    // Scam Type Videos
    "videos.otp": "OTP మోసం: మీరు తెలుసుకోవలసిన విషయం",
    "videos.otpDesc": "OTP ను ఎందుకు ఎప్పుడూ భాగస్వామ్యం చేయకూడదు మరియు స్కేమర్‌లు మీ ఖాతాను ఎలా ఖాళీ చేస్తారో తెలుసుకోండి.",
    "videos.upi": "UPI పేమెంట్ స్కామ్‌లు: సంపూర్ణ గైడ్",
    "videos.upiDesc": "QR కోడ్ మోసాలు, పేమెంట్ రిటర్నలు మరియు UPI సురక్షితంగా ఎలా ఉపయోగించాలో అర్థం చేసుకోండి.",
    "videos.voicePhishing": "వాయిస్ ఫిషింగ్: 'మీరు నన్ను విన్నారా?' స్కామ్",
    "videos.voicePhishingDesc": "నేరస్థులు మీ వాయిస్‌ను ఎలా రికార్డ్ చేస్తారు మరియు నకిలీ అధికారాలను సృష్టించడానికి AI ఎలా ఉపయోగిస్తారు.",
    "videos.aadhaar": "ఆధార్ & KYC స్కామ్‌లు బహిర్గతమైనవి",
    "videos.aadhaarDesc": "బ్యాంకులు ఫోన్‌పై KYC అపడేట్‌ల కోసం ఎప్పుడూ అడగవు. సత్యం తెలుసుకోండి.",
    
    // Safety Tips Videos
    "videos.phoneSecure": "మీ స్మార్టఫోన్‌ను సురక్షితం చేయడానికి 10 మార్గాలు",
    "videos.phoneSecureDesc": "ప్రతిఒక్కరు తెలుసుకోవలసిన ముఖ్యమైన ఫోన్ సెక్యూరిటీ సెట్టింగ్‌లు.",
    "videos.onlineShopping": "ఆన్‌లైన్‌లో సురక్షితంగా ఎలా కొనడాలి",
    "videos.onlineShoppingDesc": "మీరు డబ్బు కోల్పోయే ముందు నకిలీ షాపింగ్ వెబ్‌సైట్‌లు మరియు యాప్‌లను గుర్తించండి.",
    "videos.password": "బలమైన పాస్‌వర్డ్‌లు & 2FA సృష్టించడం",
    "videos.passwordDesc": "పాస్‌వర్డ్ నిర్వహణ మరియు రెండు-ఫ్యాక్టర్ ప్రమాణీకరణ కోసం సరైన పద్ధతులు.",
    "videos.spotPhishing": "ఫిషింగ్ ప్రయత్నాలను ఎలా గుర్తించాలి",
    "videos.spotPhishingDesc": "మీ సమాచారాన్ని దొంగిలించడానికి ప్రయత్నిస్తున్న నకిలీ ఈమెయిల్‌లు, SMS లు మరియు కాల్‌లను గుర్తించండి.",
    
    // Real Stories Videos
    "videos.story1": "నిజమైన కథ: OTP స్కామ్‌లో ₹2 లక్ష తగ్గిపోయాయి",
    "videos.story1Desc": "ఒక బాధితుడు తన అనుభవం మరియు నేర్చిన పాఠాలను పంచుకుంటాడు.",
    "videos.story2": "UPI మోసం తర్వాత నాకు నా డబ్బు ఎలా తిరిగి వచ్చింది",
    "videos.story2Desc": "రిపోర్ట్ చేయడం మరియు మోసం నుండి కోలుకోవడం యొక్క దశ-దశా ప్రక్రియ.",
    "videos.story3": "లోన్ ఆ్యప్騷扰: నా రాత్రిమార చవళ్లు",
    "videos.story3Desc": "ఆక్రమణాత్మక కర్ణ యాప్‌లు జీవితాలను ఎలా నాశనం చేసిన్నాయి మరియు మీరు ఏమి చేయవచ్చు.",
    
    // Home Page - Hero
    "home.hero.title": "సైబర్ మోసాల से सुरक्षితంగా ఉండండి",
    "home.hero.subtitle": "సైబర్ స్కామ్‌లను గుర్తించడం, నివారించడం మరియు నివేదించడంలో జ్ఞానంతో గ్రామీణ సమాజాలను శక్తివంతం చేయడం. తాజా మోస వ్యూహాల గురించి తెలుసుకోండి మరియు మిమ్మల్ని మరియు మీ ప్రియమైన వారిని రక్షించుకోండి.",
    "home.hero.startLearning": "నేర్చుకోవడం ప్రారంభించండి",
    "home.hero.reportFraud": "ఇప్పుడే మోసాన్ని నివేదించండి",
    "home.hero.scamTypes": "స్కామ్ రకాలు కవర్ చేయబడ్డాయి",
    "home.hero.helpline": "హెల్ప్‌లైన్ మద్దతు",
    "home.hero.freeResources": "ఉచిత వనరులు",
    "home.hero.offlineAccess": "ఆఫ్‌లైన్ యాక్సెస్ అందుబాటులో ఉంది",
    "home.hero.badge": "వేలాది మందిచే విశ్వస్త",
    
    // Home Page - Features
    "home.features.title": "కమ్యూనిటీ కనెక్ట్ ఎందుకు ఎంచుకోవాలి?",
    "home.features.subtitle": "మీకు నిర్మించిన సమగ్ర సైబర్ భద్రత జాగృతి ప్ల్యాట్‌ఫార్మ్",
    "home.features.fast.title": "వేగవంతమైనది & ఆఫ్‌లైన్",
    "home.features.fast.desc": "ఇంటర్నెట్ కనెక్షన్ లేకుండా, ఎప్పుడైనా, ఎక్కడైనా సైబర్ భద్రత సామగ్రిని ఆక్సెస్ చేయండి",
    "home.features.trusted.title": "నిపుణుడు క్యూరేట్",
    "home.features.trusted.desc": "సైబర్ భద్రత నిపుణుల ద్వారా తయారు చేసిన సామగ్రి మరియు ధృవీకరించిన వనరులు",
    "home.features.multilingual.title": "బహుభాషా",
    "home.features.multilingual.desc": "విభిన్న సమాజాలకు చేరువయ్యేందుకు 6+ భాషలలో అందుబాటులో ఉంది",
    "home.features.free.title": "100% ఉచితం",
    "home.features.free.desc": "సభ్యపద లేదు, లొకెడ ఖర్చులు లేదు - పూర్తిగా ఉచిత సైబర్ భద్రత విద్య",
    "home.features.interactive.title": "ఇంటరాక్టివ్ లర్నింగ్",
    "home.features.interactive.desc": "క్విజ్‌లు, చెక్‌లిస్ట్‌లు మరియు వాస్తవ-ప్రపంచ దృశ్యాలతో ఎన్గేజ్ చేయండి",
    "home.features.community.title": "సమాజం-నడిచిన",
    "home.features.community.desc": "సైబర్ ఆపత్తుల నుండి తమను తాము రక్షించుకోవడానికి వేలాది నిర్ణయం కూడా భాగస్వామ్యం చేయండి",
    
    // Home Page - Latest News
    "home.latestNews": "తాజా భద్రత సమాచారం",
    "home.latestNewsDesc": "తాజా సైబర్ భద్రత చెతవణి మరియు జాగృతి చిట్కాలతో నవీకరించుకోండి",
    
    // Home Page - CTA
    "home.cta.title": "మీ డిజిటల్ జీవనాన్ని సురక్షితం చేయడానికి సిద్ధమైనారా?",
    "home.cta.subtitle": "ఈరోజు సైబర్ భద్రత ఆపత్తులు మరియు సర్వోత్తమ పద్ధతుల గురించి తెలుసుకోవడం ప్రారంభించండి",
    
    // Quick Access
    "quickAccess.title": "త్వరిత యాక్సెస్",
    "quickAccess.subtitle": "అన్ని ముఖ్యమైన సైబర్ భద్రత వనరులు మరియు సాధనాల కు త్వరిత ఆక్సెస్",
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
    
    // Help Menu
    "help.menu.title": "సహాయం మరియు మద్దతు",
    "help.menu.call": "1930 కు కాల్ చేయండి",
    "help.menu.report": "మోసాన్ని నివేదించండి",
    "help.menu.learn": "నేర్చుకోండి మరియు సుरక్షిత ఉండండి",
    "help.menu.audio": "ఆడియోను వినండి",
    "help.menu.audio.text": "సహాయం కావాలా? సైబర్ నేరాన్ని నివేదించడానికి 1930కు కాల్ చేయండి లేదా ఆన్‌లైన్ నివేదనకు cybercrime.gov.in సందర్శించండి. సురక్షితంగా ఉండండి మరియు సైబర్ ఆపత్తుల గురించి సచేతంగా ఉండండి.",
    "help.menu.darkMode": "ఇతివృత్తం మోడ్",
    "help.menu.lightMode": "లైట్ మోడ్",
    
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
    "nav.reportScam": "மோசடியைப் புகாரளிக்கவும்",
    "nav.videos": "வீடியோக்கள்",
    "nav.quiz": "வினாடி வினா",
    "nav.checklist": "சரிபார்ப்புப் பட்டியல்",
    "nav.resources": "வளங்கள்",
    "nav.about": "எங்களைப் பற்றி",
    
    // Emergency Banner
    "emergency.text": "மோசடி செய்யப்பட்டதா? உடனடியாகப் புகாரளிக்கவும்!",
    "emergency.call": "1930 ஐ அழைக்கவும்",
    "emergency.reportOnline": "ஆன்லைனில் புகாரளிக்கவும்",
    "emergency.title": "மோசடி செய்யப்பட்டதா? உடனடியாகப் புகாரளிக்கவும்!",
    "emergency.subtitle": "1930 இல் அழைக்கவும் அல்லது ஆன்லைனில் புகாரளிக்கவும்",
    "emergency.report": "இப்போதே புகாரளிக்கவும்",
    "emergency.cybercrime": "சைபர் குற்ற உதவி எண்",
    "emergency.portal": "சைபர்க்ரைம் போர்டல்",
    "emergency.share": "தகவல் பகிரவும்",
    "emergency.shareDesc": "நண்பர்கள் மற்றும் குடும்பத்துடன் பகிரவும்",
    
    // Common
    "common.readMore": "மேலும் படிக்கவும்",
    "common.learnMore": "மேலும் அறிக",
    "common.reportNow": "இப்போதே புகாரளிக்கவும்",
    "common.previous": "முந்தைய",
    "common.next": "அடுத்தது",
    
    // Install Button
    "install.button": "பயன்பாட்டை நிறுவவும்",
    
    // Resources Page
    "resources.title": "பாதுகாப்பு வளங்கள் மற்றும் பொருட்கள்",
    "resources.subtitle": "உங்களையும் உங்கள் சமூகத்தையும் பாதுகாப்பாக வைக்க கல்வி பொருட்கள், போஸ்டர்கள் மற்றும் வழிகாட்டிகளை பதிவிறக்கவும்",
    "resources.back": "முந்தையது",
    "resources.pdfs": "கல்வி வழிகாட்டிகள் மற்றும் போஸ்டர்கள்",
    "resources.pdf1": "சைபர் பாதுகாப்பு விழிப்புணர்வு வழிகாட்டி",
    "resources.pdf2": "பொதுவான மோசடிகள் மற்றும் அவற்றை தவிர்ப்பது எப்படி",
    "resources.pdf3": "டிஜிटல் பেமெண்ட் பாதுகாப்பு குறிப்புகள்",
    "resources.pdf4": "கடவுச்சொல் பாதுகாப்பு சிறந்த நடைமுறைகள்",
    "resources.pdf5": "ஆன்லைன் பேங்கிங் பாதுகாப்பு வழிகாட்டி",
    "resources.images": "WhatsApp பகிரக்கூடிய விழிப்புணர்வு பதிவுகள்",
    "resources.img1": "ஃபிஷிங் மோசடி எச்சரிக்கை",
    "resources.img2": "OTP பாதுகாப்பு நினைவூட்டல்",
    "resources.img3": "போலி வேலையான் எச்சரிக்கை",
    "resources.img4": "UPI மோசடி தடுப்பு",
    "resources.img5": "மொபைல் ব్యాங்கிङ్ పాதుకాప్పు",
    "resources.videos": "வீடியோ பயிற்சிகள்",
    "resources.video1": "ஃபிஷிங் மின்னஞ்சல்களை எப்படி அடையாளம் காணவேண்டும்",
    "resources.video2": "உங்கள் மொபைல் பணப்பை பாதுகாப்பாக வைத்தல்",
    "resources.video3": "ஆன்லைன் ஷாப்பிங் பாதுகாப்பு வழிகாட்டி",
    "resources.video4": "சோஷ்யல் மீடியா தனியுரிமை அமைப்புகள்",
    "resources.video5": "நீங்கள் மோசடிக்கு ஆளானால் என்ன செய்வது",
    "resources.download": "பதிவிறக்கவும்",
    "resources.share": "பகிர்ந்து கொள்ளவும்",
    "resources.watch": "வீடியோவைப் பாருங்கள்",
    
    // Saved News Page
    "saved.back": "முந்தையது",
    "saved.title": "சேமிக்கப்பட்ட கட்டுரைகள்",
    "saved.empty": "இன்னும் சேமிக்கப்பட்ட கட்டுரைகள் இல்லை. உதவிகரமான கட்டுரைகளைப் புத்தகக்குறிப்பு செய்யத் தொடங்குங்கள்!",
    
    // Videos Page
    "videos.title": "வீடியో நூலகம்",
    "videos.subtitle": "மோசடிகளை நன்கு புரிந்துகொள்ள மற்றும் உங்களை எவ்வாறு பாதுகாத்துக்கொள்வது என்பதை அறிய கல்வி வீடியोக்களைப் பாருங்கள்.",
    "videos.scamTypes": "மோசடியின் வகைகள்",
    "videos.safetyTips": "பாதுகாப்பு குறிப்புகள்",
    "videos.realStories": "உண்மையான கதைகள்",
    
    // Scam Type Videos
    "videos.otp": "OTP மோசடி: நீங்கள் தெரிந்துகொள்ள வேண்டியவை",
    "videos.otpDesc": "OTP ஐ ஏன் ஒருபோதும் பகிரக்கூடாது என்றும், மோசக்காரர்கள் உங்கள் கணக்கை எவ்வாறு காலி செய்கிறார்கள் என்பதையும் அறிக.",
    "videos.upi": "UPI பேமெண்ட் மோசடிகள்: முழுமையான வழிகாட்டி",
    "videos.upiDesc": "QR கோட் மோசங்கள், பேமெண்ட் ரிவர்சல்கள் மற்றும் UPI ஐ பாதுகாப்பாக பயன்படுத்துவதைப் புரிந்துகொள்ளுங்கள்.",
    "videos.voicePhishing": "வாக்கு ஃபிशிங்: 'நீங்கள் என்னைக் கேட்க முடிகிறதா?' மோசடி",
    "videos.voicePhishingDesc": "குற்றவாளிகள் உங்கள் குரலை எவ்வாறு பதிவுசெய்கிறார்கள் மற்றும் போலி அங்கீகாரங்களை உருவாக்க AI ஐ எவ்வாறு பயன்படுத்துகிறார்கள்.",
    "videos.aadhaar": "ஆதாரும் KYC மோசடிகளும் வெளிப்படுத்தப்பட்டுள்ளன",
    "videos.aadhaarDesc": "வங்கிகள் ஒருபோதும் ஃபோனில் KYC அப்டேட்களைக் கேட்பதில்லை. உண்மையை அறிக.",
    
    // Safety Tips Videos
    "videos.phoneSecure": "உங்கள் ஸ்மார্ட்ஃபோனைப் பாதுகாக்க 10 வழிகள்",
    "videos.phoneSecureDesc": "எல்லோரும் தெரிந்துகொள்ள வேண்டிய முக்கிய ஃபோன் பாதுகாப்பு அமைப்புகள்.",
    "videos.onlineShopping": "ஆன்லைனில் பாதுகாப்பாக எவ்வாறு வாங்குவது",
    "videos.onlineShoppingDesc": "பணம் இழப்பதற்கு முன் போலி ஷாப்பிங் வெப்சைட்கள் மற்றும் ஆப்ஸைக் கண்டறியுங்கள்.",
    "videos.password": "வலுவான கடவுசொற்கள் மற்றும் 2FA உருவாக்குதல்",
    "videos.passwordDesc": "கடவுச்சொல் நிர்வாகம் மற்றும் இரண்டு-ஃபேக்டர் அங்கீகாரத்திற்கான சிறந்த நடைமுறைகள்.",
    "videos.spotPhishing": "ஃபிஷிங் முயற்சிகளை எவ்வாறு கண்டறியவேண்டும்",
    "videos.spotPhishingDesc": "உங்கள் தகவலை திருட முயற்சிக்கும் போலி மின்னஞ்சல்கள், SMS கள் மற்றும் அழைப்புகளைக் கண்டறியுங்கள்.",
    
    // Real Stories Videos
    "videos.story1": "உண்மையான கதை: OTP மோசடியில் ₹2 லக்ஷம் இழந்தது",
    "videos.story1Desc": "ஒரு பாதிக்கப்பட்டவர் தனது அனுபவம் மற்றும் கற்ற பாடங்களைப் பகிர்ந்துகொள்கிறார்.",
    "videos.story2": "UPI மோசடிக்குப் பிறகு எனக்கு என் பணம் எவ்வாறு வெளிவந்தது",
    "videos.story2Desc": "மோசடியைப் புகாரளிப்பதற்கும் அதிலிருந்து மீண்டுவருவதற்கும் ஆப்-பை-ஸ்டெப் செயல்முறை.",
    "videos.story3": "கடன் ஆப்騚தியாதல்: என் கனவு",
    "videos.story3Desc": "ஆக்ரமணத் தன்மை கொண்ட கடன் ஆப்ஸ் வாழ்க்கையை எவ்வாறு அழித்தன மற்றும் நீங்கள் என்ன செய்யலாம்.",
    
    // Home Page - Hero
    "home.hero.title": "சைபர் மோசடிகளில் இருந்து பாதுகாப்பாக இருங்கள்",
    "home.hero.subtitle": "சைபர் மோசடிகளை அடையாளம் காணவும், தடுக்கவும் மற்றும் புகாரளிக்கவும் அறிவுடன் கிராமப்புற சமூகங்களை வலுப்படுத்துதல். சமீபத்திய மோசடி தந்திரங்களைப் பற்றி அறிந்து உங்களையும் உங்கள் அன்புக்குரியவர்களையும் பாதுகாத்துக்கொள்ளுங்கள்.",
    "home.hero.startLearning": "கற்றலைத் தொடங்குங்கள்",
    "home.hero.reportFraud": "இப்போதே மோசடியைப் புகாரளிக்கவும்",
    "home.hero.scamTypes": "மோசடி வகைகள் உள்ளடக்கப்பட்டுள்ளன",
    "home.hero.helpline": "உதவி எண் ஆதரவு",
    "home.hero.freeResources": "இலவச வளங்கள்",
    "home.hero.offlineAccess": "ஆஃப்லைன் அணுகல் கிடைக்கிறது",
    "home.hero.badge": "ஆயிரக்கணக்கானவர்களால் நம்பிக்கை உண்டு",
    
    // Home Page - Features
    "home.features.title": "கமியூனிட்டி கனெக்ட்டை ஏன் தேர்வு செய்ய வேண்டும்?",
    "home.features.subtitle": "உங்களுக்காக கட்டப்பட்ட ব்यापक சைபர் பாதுகாப்பு விழிப்புணர்வு தளம்",
    "home.features.fast.title": "வேகம் & ஆஃப்லைன்",
    "home.features.fast.desc": "இணையப் பংழக தேவை இல்லாமல், எப்போ வேண்டுமானாலும், எங்கு வேண்டுமானாலும் சைபர் பாதுகாப்பு உள்ளடக்கத்தை அணுகவும்",
    "home.features.trusted.title": "நிபுணர் தேர்ந்தெடுக்கப்பட்ட",
    "home.features.trusted.desc": "சைபர் பாதுகாப்பு நிபுணர்களால் உருவாக்கப்பட்ட உள்ளடக்கம் மற்றும் যাচைக்கப்பட்ட வளங்கள்",
    "home.features.multilingual.title": "பலபாষைவாய்",
    "home.features.multilingual.desc": "பல்வேறு சமூகங்களை சேர்ந்து கொள்ள 6+ மொழிகளில் கிடைக்கிறது",
    "home.features.free.title": "100% இலவசம்",
    "home.features.free.desc": "எந்த சந்தா இல்லை, எந்த மறைக்கப்பட்ட செலவு இல்லை - முற்றிலும் இலவச சைபர் பாதுகாப்பு கல்வி",
    "home.features.interactive.title": "ஈடுபடுத்தக்கூடிய கற்றல்",
    "home.features.interactive.desc": "குயிజ், செக்லிஸ்ட் மற்றும் உண்மையான-உலக情ற்றுக்கொள்ளுக்களுடன் ஈடுபடுங்கள்",
    "home.features.community.title": "சமூக-தலைமையிலான",
    "home.features.community.desc": "சைபர் அச்சுறுத்தல்கள் இருந்து தங்களைத் தாங்களே கொள்ளைக்கு ஆயிரக்கணக்கான மக்களுடன் சேர்ந்து கொள்ளுங்கள்",
    
    // Home Page - Latest News
    "home.latestNews": "சமீபத்திய பாதுகாப்பு செய்திகள்",
    "home.latestNewsDesc": "சமீபத்திய சைபர் பாதுகாப்பு எச்சரிக்கைகள் மற்றும் விழிப்புணர்வு குறிப்புகளுடன் அப்டேட் ஆக இருங்கள்",
    
    // Home Page - CTA
    "home.cta.title": "உங்கள் டிജிட்டல் வாழ்க்கையை பாதுகாப்பு செய்ய தயாரா?",
    "home.cta.subtitle": "சைபர் பாதுகாப்பு அச்சுறுத்தல்கள் மற்றும் சிறந்த பயிற்சி பற்றி இன்று கற்றல் தொடங்குங்கள்",
    
    // Quick Access
    "quickAccess.title": "விரைவான அணுகல்",
    "quickAccess.subtitle": "அனைத்து அத்யாவசிய சைபர் பாதுகாப்பு வளங்கள் மற்றும் கருவிகளுக்கு விரைவான அணுகல்",
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
    
    // Help Menu
    "help.menu.title": "உதவி & ஆதரவு",
    "help.menu.call": "1930 ஐ அழைக்கவும்",
    "help.menu.report": "மோசடியை புகாரளிக்கவும்",
    "help.menu.learn": "கற்றுக்கொள்ளுங்கள் & பாதுகாப்பு",
    "help.menu.audio": "ஆடியோ கேளுங்கள்",
    "help.menu.audio.text": "சைபர் மோசடிகளை பற்றி கற்றுக்கொண்டு, உங்களை பாதுகாத்துக்கொள்ளுங்கள். சைபர் குற்ற புகாரளித்தல்: ecrime.gov.in ஐ பார்வையிடவும் அல்லது 1930 ஐ அழைக்கவும்.",
    "help.menu.darkMode": "இருண்ட பயன்முறை",
    "help.menu.lightMode": "ஒளி பயன்முறை",
    
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