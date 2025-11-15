export interface NewsArticle {
  id: string;
  headline: string;
  summary: string;
  date: string;
  category: string;
  readTime: string;
  fullContent: string;
  warningSign: string[];
  protection: string[];
  incident: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "aadhaar-kyc-scam-2025",
    headline: "नई Aadhaar KYC धोखाधड़ी: 500+ लोग ठगे | New Aadhaar Scam Alert",
    date: "October 28, 2025",
    category: "KYC Fraud",
    readTime: "3 min",
    summary: "Fraudsters claiming to be bank officials ask for Aadhaar details to 'update KYC'",
    fullContent: `
**Scam Details:** Fraudsters call victims pretending to be from major banks (SBI, HDFC, ICICI). They claim your KYC is incomplete and your account will be blocked within 24 hours. They ask for:
- Aadhaar card number
- Date of birth verification
- OTP sent to your phone

**How They Steal:**
They use your Aadhaar number and DOB to access your bank account through vulnerabilities in the verification system. Once they get the OTP, they can complete unauthorized transactions.
    `,
    warningSign: [
      "Urgency ('Account will close today!')",
      "Asking for Aadhaar OTP",
      "Phone call for KYC (banks send letters)",
      "Requests for card details"
    ],
    protection: [
      "Banks NEVER call for KYC updates",
      "Never share Aadhaar OTP with anyone",
      "Visit bank branch in person for KYC",
      "Report to 1930 immediately if targeted"
    ],
    incident: "In Uttar Pradesh, 500+ people lost ₹2-5 lakh each to this scam in October 2025."
  },
  {
    id: "voice-phishing-2025",
    headline: "सावधान: 'मुझे पहचाना?' स्कैम से बचें | Beware: Voice Recognition Scam",
    date: "October 27, 2025",
    category: "Voice Phishing",
    readTime: "4 min",
    summary: "Fraudsters recording your voice to create fake identity and access bank accounts",
    fullContent: `
**Scam Details:** Scammers call and ask 'Do you recognize me?' or 'Can you hear me?'. They record your voice saying 'Yes' or 'I can hear you' and use AI to create fake audio for:
- Bank authentication calls
- OTP verification
- Emergency calls to family members asking for money

**How They Steal:**
The recorded voice is used to bypass voice authentication systems in banking apps and convince family members that you're in trouble and need urgent money transfer.
    `,
    warningSign: [
      "Unknown caller asking 'Can you hear me?'",
      "Questions designed to make you say 'Yes'",
      "Poor call quality (often international numbers)",
      "Unusual questions about your availability"
    ],
    protection: [
      "Never answer unknown calls with 'Yes'",
      "Use 'Hello' or 'Who is this?' instead",
      "Don't engage with suspicious callers",
      "Enable caller ID and spam protection",
      "Inform family members about this scam"
    ],
    incident: "In Maharashtra, 200+ cases reported where voice was used to scam elderly parents out of ₹1-3 lakhs."
  },
  {
    id: "fake-shopping-facebook-2025",
    headline: "Facebook विज्ञापन से नकली शॉपिंग ऐप | Fake Shopping Apps via Social Media",
    date: "October 25, 2025",
    category: "Shopping Fraud",
    readTime: "5 min",
    summary: "Attractive deals on social media leading to malicious APK downloads that steal banking data",
    fullContent: `
**Scam Details:** Fraudsters create fake Facebook/Instagram ads showing amazing discounts (90% off on electronics, branded clothes, etc.). When you click:
- Redirected to fake website
- Asked to download APK file
- App asks for dangerous permissions (SMS, contacts, camera)
- Steals banking OTPs and passwords from your phone

**How They Steal:**
The malicious APK installs spyware that reads all your SMS messages, including bank OTPs. It can also access your WhatsApp, gallery, and banking apps to steal credentials.
    `,
    warningSign: [
      "Deals that seem too good to be true",
      "Asks to download APK instead of using Play Store",
      "Requests excessive permissions",
      "Poor website design with spelling mistakes",
      "No customer service contact"
    ],
    protection: [
      "Shop ONLY from Google Play Store or official websites",
      "Never download APK files from unknown sources",
      "Check website reviews and seller ratings",
      "Use credit cards (better fraud protection) instead of debit cards",
      "Enable Google Play Protect on your phone"
    ],
    incident: "Karnataka Cyber Police arrested a gang that stole ₹50 lakhs from 300+ victims through fake shopping apps."
  },
  {
    id: "bank-kyc-update-call-2025",
    headline: "बैंक KYC अपडेट कॉल स्कैम बढ़ रहा | Bank KYC Update Scam Rising",
    date: "October 24, 2025",
    category: "Banking Fraud",
    readTime: "4 min",
    summary: "Fake bank calls threatening account closure if KYC not updated immediately",
    fullContent: `
**Scam Details:** Scammers call from numbers that appear as your bank's customer care (using caller ID spoofing). They claim:
- Your KYC has expired
- Account will be frozen/closed today
- Need to update Aadhaar/PAN immediately
- Send link or ask you to download 'security app'

**How They Steal:**
The link leads to fake banking website or malicious app that steals your internet banking credentials, card details, and OTPs. Some scammers use screen sharing apps to remotely access your phone.
    `,
    warningSign: [
      "Unexpected calls about KYC urgency",
      "Threats of immediate account closure",
      "Asks for OTP, PIN, CVV, or full card number",
      "Requests to download apps or click links",
      "Asks to enable screen sharing"
    ],
    protection: [
      "Banks send physical letters for KYC, not urgent calls",
      "Visit branch physically for any updates",
      "Never share OTP, PIN, or CVV with anyone",
      "Don't download apps from links sent via SMS/WhatsApp",
      "Call bank's official number to verify"
    ],
    incident: "Delhi Police reported 1000+ cases with total losses of ₹15 crores in September 2025 alone."
  },
  {
    id: "upi-qr-code-scam-2025",
    headline: "UPI QR कोड धोखाधड़ी: ऐसे बचें | UPI QR Code Scam: How to Avoid",
    date: "October 23, 2025",
    category: "UPI Fraud",
    readTime: "3 min",
    summary: "Fraudsters switching payment QR codes to steal money during online transactions",
    fullContent: `
**Scam Details:** Multiple UPI scam methods:
1. **Wrong QR Code**: Scammers pose as online sellers, send fake QR code for payment. Instead of receiving money, you end up sending it.
2. **QR Code Replacement**: Fraudsters replace restaurant/shop QR codes with their own.
3. **Refund Scam**: Fake customer service calls asking you to scan QR code to receive refund. You actually send money instead.

**How They Steal:**
QR codes can be for both sending and receiving money. Scammers trick victims into scanning payment collection QR codes instead of payment request codes.
    `,
    warningSign: [
      "Seller asks you to scan QR code for payment (should be payment link)",
      "Amount not pre-filled in QR code",
      "QR code asks for UPI PIN (legitimate ones don't)",
      "Refund calls asking to scan QR code"
    ],
    protection: [
      "Always verify QR code shows 'PAY TO' not 'COLLECT FROM'",
      "Check recipient name before confirming",
      "Never scan QR codes for receiving refunds",
      "Use UPI payment links for safer transactions",
      "Save screenshots of all QR code payments"
    ],
    incident: "Mumbai Police arrested gang that stole ₹25 lakhs by replacing QR codes in 50+ restaurants."
  },
  {
    id: "loan-app-fraud-2025",
    headline: "लोन ऐप धोखाधड़ी: तुरंत लोन का झांसा | Loan App Fraud Alert",
    date: "October 22, 2025",
    category: "Loan Fraud",
    readTime: "5 min",
    summary: "Predatory lending apps stealing personal data and harassing victims",
    fullContent: `
**Scam Details:** Illegal loan apps promise instant loans but:
- Charge 300-500% annual interest rates
- Demand access to contacts, gallery, SMS, location
- Deduct huge processing fees (30-40% of loan)
- Threaten and harass using your contact list
- Morph your photos and send to contacts
- Charge hidden penalties and late fees

**How They Steal:**
Apps access your entire phone data, photos, and contacts. They use this information for blackmail, threatening to send morphed photos to your family/friends if you don't repay with exorbitant interest.
    `,
    warningSign: [
      "Instant approval without credit check",
      "Asks for excessive permissions",
      "Not listed on RBI's registered lenders list",
      "Hidden charges and unclear terms",
      "Aggressive recovery tactics"
    ],
    protection: [
      "ONLY use RBI-approved lending apps",
      "Never grant unnecessary permissions",
      "Read all terms and conditions carefully",
      "Check interest rates and processing fees",
      "Report harassment to cybercrime portal immediately",
      "File complaint with RBI Ombudsman"
    ],
    incident: "Telangana: 100+ people reported harassment, 3 suicides linked to loan app threats. Police arrested Chinese nationals running these apps."
  },
  {
    id: "investment-scam-2025",
    headline: "निवेश घोटाला: WhatsApp ग्रुप से सावधान | Investment Scam via WhatsApp",
    date: "October 21, 2025",
    category: "Investment Fraud",
    readTime: "4 min",
    summary: "Fake investment groups promising guaranteed returns through stock tips and trading",
    fullContent: `
**Scam Details:** Fraudsters add you to WhatsApp groups showing:
- Screenshots of huge profits (fake)
- Stock market 'tips' that seem to work initially
- Cryptocurrency investment opportunities
- Trading platform apps to download
- Initial small profits to gain trust, then ask for big investment

**How They Steal:**
They let you withdraw small amounts initially to build trust. Once you invest a large sum, the app/website disappears, or they block withdrawals citing various fake reasons.
    `,
    warningSign: [
      "Unsolicited addition to investment groups",
      "Guaranteed high returns (15-20% monthly)",
      "Celebrity endorsements (usually fake)",
      "Pressure to invest quickly",
      "Unregistered platforms/apps"
    ],
    protection: [
      "Verify platform is registered with SEBI",
      "No legitimate investment guarantees returns",
      "Don't trust strangers in WhatsApp groups",
      "Research company thoroughly",
      "Consult certified financial advisor"
    ],
    incident: "Gujarat: ₹100 crore scam busted where 5000+ investors lost money in fake crypto trading app."
  },
  {
    id: "lottery-prize-scam-2025",
    headline: "लॉटरी और इनाम धोखाधड़ी चेतावनी | Lottery & Prize Scam Warning",
    date: "October 20, 2025",
    category: "Prize Fraud",
    readTime: "3 min",
    summary: "Fake lottery wins and prize announcements asking for fees before releasing money",
    fullContent: `
**Scam Details:** You receive message/call claiming:
- Won KBC/reality show lottery
- Selected for government scheme benefits
- Prize from online shopping (Amazon, Flipkart)
- Need to pay processing fee/tax to claim prize
- Usually Rs. 2000-10000 'fees' for crores of rupees prize

**How They Steal:**
After paying fees, they ask for more money citing additional taxes, charges. They may also steal banking details during the process. No actual prize exists.
    `,
    warningSign: [
      "Never participated in lottery but won",
      "Asked to pay fees to claim prize",
      "Urgency to pay within hours",
      "Poor grammar in messages",
      "Requests for bank details"
    ],
    protection: [
      "Legitimate lotteries NEVER ask for fees",
      "Verify through official website/customer care",
      "No prize without participation",
      "Don't share banking details",
      "Report on cybercrime portal"
    ],
    incident: "Rajasthan: Senior citizen lost ₹5 lakhs paying fake taxes to claim ₹50 lakh 'KBC prize'."
  },
  {
    id: "job-offer-scam-2025",
    headline: "नौकरी का फर्जी ऑफर स्कैम | Fake Job Offer Scam",
    date: "October 19, 2025",
    category: "Job Fraud",
    readTime: "4 min",
    summary: "Fake job offers asking for registration fees, security deposits, or training charges",
    fullContent: `
**Scam Details:** Fraudsters post fake job openings on WhatsApp, Telegram:
- Work from home with high salary
- Data entry, form filling, product review jobs
- Ask for registration/training fees (₹500-5000)
- Request security deposit
- After payment, either ghost you or assign impossible targets
- Never pay promised salary

**How They Steal:**
Collect fees from thousands of job seekers. Some also steal personal data including Aadhaar, PAN for identity theft. May force you to recruit others in pyramid scheme.
    `,
    warningSign: [
      "Job offer without interview",
      "Asks for upfront payment",
      "Too high salary for simple work",
      "Vague job description",
      "Communication only via WhatsApp/Telegram",
      "Company not registered/unverifiable"
    ],
    protection: [
      "Never pay for job opportunities",
      "Verify company on official websites",
      "Check company registration on MCA portal",
      "Interview should be professional",
      "Research company reviews online",
      "Report fake job posts"
    ],
    incident: "Tamil Nadu: Fake job placement company collected ₹2 crores from 5000+ job seekers, arrested by police."
  },
  {
    id: "courier-customs-scam-2025",
    headline: "कूरियर कस्टम्स स्कैम: FedEx/DHL नाम पर ठगी | Courier Customs Fraud",
    date: "October 18, 2025",
    category: "Courier Fraud",
    readTime: "4 min",
    summary: "Fake calls from courier companies about customs clearance and illegal parcels",
    fullContent: `
**Scam Details:** Scammers impersonate FedEx, DHL, India Post:
- Call about parcel with illegal items (drugs, fake passport)
- Claim police case will be filed
- Transfer to fake police/customs officer
- Demand money for clearance or to avoid arrest
- May ask for Aadhaar, bank details for 'verification'
- Use scare tactics to pressure immediate payment

**How They Steal:**
Create panic by mentioning police cases, arrests. Victims transfer money fearing legal trouble. Some scams involve video calls with people in fake police uniforms to appear legitimate.
    `,
    warningSign: [
      "Unexpected parcel notification",
      "Threats of legal action",
      "Demand immediate payment",
      "Transfer to multiple 'officers'",
      "Asks to keep conversation confidential"
    ],
    protection: [
      "Courier companies NEVER call about illegal items",
      "Verify by calling official customer care",
      "Police doesn't ask for money on phone",
      "Don't panic, disconnect call",
      "File complaint if threatened"
    ],
    incident: "Bengaluru: Doctor lost ₹10 lakhs in fake customs clearance scam, believing his Aadhaar was misused for drug trafficking."
  }
];
