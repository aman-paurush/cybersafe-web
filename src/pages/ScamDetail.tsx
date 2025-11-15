import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, CheckCircle, XCircle, PlayCircle, ArrowLeft, BookOpen } from "lucide-react";
import { useState } from "react";

const ScamDetail = () => {
  const { scamId } = useParams();
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const scamData: Record<string, any> = {
    "aadhaar-kyc": {
      title: "Aadhaar & KYC Scams",
      severity: "High",
      description: "Fraudsters exploit bank verification processes by calling victims pretending to be bank officials. They claim your KYC (Know Your Customer) is incomplete or your account will be blocked, then trick you into sharing sensitive information or installing remote access apps.",
      examples: [
        "A call claiming your Aadhaar is delinked from your bank account",
        "SMS saying KYC will expire and account will be frozen",
        "Fake bank representatives asking you to update KYC via a link",
        "Requests to install 'bank verification apps' that are actually malware"
      ],
      warningSigns: [
        "Urgent threats about account closure or freezing",
        "Requests to share Aadhaar number, OTP, or CVV",
        "Links sent via SMS or WhatsApp to 'update KYC'",
        "Asking you to install any app for verification",
        "Caller claims to be from RBI, UIDAI, or your bank"
      ],
      prevention: [
        "Banks NEVER ask for Aadhaar, OTP, PIN, or CVV over phone",
        "KYC updates are done at bank branches, not over phone",
        "Never click links from unknown SMS or messages",
        "Don't install apps from unknown sources",
        "Verify by calling your bank's official number independently"
      ],
      whatToDo: [
        "Hang up immediately if someone asks for OTP or PIN",
        "Report to Cyber Crime Helpline: 1930",
        "Visit cybercrime.gov.in to file a complaint",
        "Inform your bank immediately",
        "Change your passwords and PINs",
        "Check your bank statements for unauthorized transactions"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "A person calls claiming to be from your bank and says your KYC needs urgent update. What should you do?",
          options: [
            "Share my Aadhaar details immediately",
            "Hang up and call the bank's official number",
            "Click the link they send via SMS",
            "Share OTP to verify my identity"
          ],
          correct: 1
        },
        {
          question: "Your bank will NEVER ask you for:",
          options: [
            "Your account number",
            "Your branch location",
            "OTP, PIN, or CVV",
            "Your name"
          ],
          correct: 2
        },
        {
          question: "You receive an SMS with a link to 'update your KYC urgently'. What should you do?",
          options: [
            "Click the link immediately",
            "Ignore and delete the message",
            "Forward it to friends",
            "Reply with my details"
          ],
          correct: 1
        }
      ]
    },
    "voice-phishing": {
      title: "Voice Phishing Calls",
      severity: "High",
      description: "'Do you recognize me?' scams where criminals call you pretending to be your relative, friend, or colleague. They record your voice saying 'Yes' or 'I agree', then use AI to create fake voice recordings for identity theft or fraudulent transactions.",
      examples: [
        "Unknown caller asks 'Can you hear me?' to record your 'Yes'",
        "Someone pretending to be old friend asks 'Do you remember me?'",
        "Fake survey calls asking you to confirm personal details verbally",
        "Scammer posing as boss/manager asking for urgent help"
      ],
      warningSigns: [
        "Unknown number asking vague questions to make you speak",
        "Caller trying hard to make you say 'Yes' or 'I agree'",
        "Rushed conversations with urgency",
        "Questions that seem designed to record your voice",
        "Caller claims emergency but can't provide specific details"
      ],
      prevention: [
        "Don't say 'Yes' to unknown callers - use 'I can hear you'",
        "Ask specific questions to verify caller's identity",
        "Call back on known numbers instead of trusting caller ID",
        "Be skeptical of emergency requests over phone",
        "Never confirm financial transactions verbally with unknown callers"
      ],
      whatToDo: [
        "Hang up if you suspect voice recording attempt",
        "Verify caller through alternative channels",
        "Report to 1930 if you've been targeted",
        "Alert your contacts about the scam",
        "Inform your bank about potential voice phishing"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "An unknown caller asks 'Can you hear me?' What should you respond?",
          options: [
            "'Yes' loudly and clearly",
            "'I can hear you' or hang up",
            "'Yes, who is this?'",
            "Stay silent"
          ],
          correct: 1
        },
        {
          question: "Why do scammers want to record you saying 'Yes'?",
          options: [
            "To verify you're real",
            "To create fake voice authorization for transactions",
            "For survey purposes",
            "No specific reason"
          ],
          correct: 1
        },
        {
          question: "Someone claiming to be your old friend calls but can't recall specific memories. What should you do?",
          options: [
            "Share my current details to help them remember",
            "End the call and verify through other means",
            "Keep talking to figure out who they are",
            "Give them my address to meet"
          ],
          correct: 1
        }
      ]
    },
    "shopping-scams": {
      title: "Fake Shopping & Malicious Apps",
      severity: "Medium",
      description: "Social media ads promoting products at unbelievably low prices lead to fake shopping sites or force you to download APK files. These apps steal your banking credentials, contacts, photos, and other personal data.",
      examples: [
        "Facebook/Instagram ads for designer shoes at 90% discount",
        "WhatsApp forwards about 'clearance sales' with APK download links",
        "Fake shopping apps asking for excessive permissions",
        "Too-good-to-be-true deals requiring app installation"
      ],
      warningSigns: [
        "Prices too low to be realistic (80-90% off branded items)",
        "Website forces you to download an APK file",
        "App asks for permissions to contacts, SMS, storage, camera",
        "No payment through official app stores",
        "Poor website design with grammatical errors",
        "No customer reviews or social proof"
      ],
      prevention: [
        "Never download APK files from unknown sources",
        "Shop only from verified apps (Google Play Store, official apps)",
        "Research seller before buying - check reviews",
        "If deal seems too good, it's probably a scam",
        "Use credit cards or COD, avoid direct bank transfers",
        "Check app permissions before installation"
      ],
      whatToDo: [
        "Uninstall suspicious apps immediately",
        "Run antivirus scan on your phone",
        "Change all banking passwords",
        "Inform your bank about the incident",
        "Report to cybercrime.gov.in",
        "Warn others about the fake ad/website"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "You see a Facebook ad for iPhone at ₹5,000. What should you do?",
          options: [
            "Buy immediately before stock runs out",
            "Recognize it as too good to be true - it's a scam",
            "Share with friends",
            "Download the app to check"
          ],
          correct: 1
        },
        {
          question: "A shopping app asks permission to read your SMS. Should you allow it?",
          options: [
            "Yes, it's normal for shopping apps",
            "No, this is suspicious and unnecessary",
            "Yes, for OTP verification",
            "Doesn't matter"
          ],
          correct: 1
        },
        {
          question: "What's the safest way to shop online?",
          options: [
            "Download APK files from social media",
            "Use apps from official app stores only",
            "Click on all discount ads",
            "Share banking details on any website"
          ],
          correct: 1
        }
      ]
    },
    "bank-calls": {
      title: "Fake Bank Calls",
      severity: "High",
      description: "Scammers pose as bank officials and threaten that your account will be blocked or closed unless you immediately share OTP, update KYC, or verify transactions. They create panic to make you act without thinking.",
      examples: [
        "Call threatening account closure within 24 hours",
        "Fake alerts about suspicious transactions requiring immediate verification",
        "Claims that your debit/credit card will be blocked",
        "Requests to verify your identity by sharing OTP"
      ],
      warningSigns: [
        "High pressure tactics and threats",
        "Asking for OTP, PIN, CVV, or passwords",
        "Claims of urgent verification needed",
        "Unknown number claiming to be from bank",
        "Asking you to call a different number"
      ],
      prevention: [
        "Know that banks NEVER ask for OTP, PIN, or CVV",
        "Don't panic - verify by calling official bank number",
        "Banks don't threaten immediate account closure",
        "Check official bank app for any alerts",
        "Note the caller's number and report it"
      ],
      whatToDo: [
        "Hang up immediately",
        "Call your bank's official customer care",
        "Report the number to 1930",
        "File complaint at cybercrime.gov.in",
        "Alert your family and friends",
        "Check your account for unauthorized activity"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "Bank official calls saying your account will be blocked unless you share OTP now. What do you do?",
          options: [
            "Share OTP to save my account",
            "Hang up - banks never ask for OTP",
            "Ask them to email me",
            "Give half the OTP"
          ],
          correct: 1
        },
        {
          question: "How do banks typically communicate important account information?",
          options: [
            "Through urgent phone calls",
            "Via official app notifications and registered email",
            "Through WhatsApp messages",
            "By asking for PIN verification"
          ],
          correct: 1
        },
        {
          question: "What should you do if you accidentally shared OTP with a scammer?",
          options: [
            "Wait and see what happens",
            "Immediately call bank and block account/cards",
            "Share password too so they can fix it",
            "Nothing, OTP expires anyway"
          ],
          correct: 1
        }
      ]
    },
    "otp-fraud": {
      title: "OTP Frauds",
      severity: "Critical",
      description: "One-Time Password (OTP) is like the key to your bank account. Scammers use various tricks to obtain your OTP - from fake verification calls to phishing messages. Once they have your OTP, they can empty your account within minutes.",
      examples: [
        "Call claiming to 'cancel' a transaction - needs OTP to stop it",
        "SMS with fake links asking to 'verify' by entering OTP",
        "Scammer claims you'll receive money - just share OTP to confirm",
        "Fake prize/lottery win requiring OTP for verification"
      ],
      warningSigns: [
        "Anyone asking for OTP over phone, SMS, or email",
        "Claim that OTP is needed to receive money (FALSE)",
        "Urgency to share OTP before it expires",
        "Requests to forward OTP received via SMS",
        "Fake customer support asking for OTP"
      ],
      prevention: [
        "GOLDEN RULE: NEVER share OTP with anyone, ever",
        "OTP is only for you to enter on trusted websites/apps",
        "Banks/companies will NEVER ask for OTP",
        "Receiving money does NOT require OTP",
        "Don't share screenshots of OTP",
        "Enable two-factor authentication on all accounts"
      ],
      whatToDo: [
        "If OTP shared: Immediately call bank and block cards/account",
        "Change all passwords and PINs immediately",
        "Report to 1930 within minutes",
        "File FIR at cybercrime.gov.in",
        "Check bank statements for fraudulent transactions",
        "Enable transaction alerts on your mobile"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "When should you share your OTP with someone?",
          options: [
            "When bank asks to verify",
            "When receiving money",
            "NEVER - OTP is only for you",
            "When customer care requests it"
          ],
          correct: 2
        },
        {
          question: "Someone says they'll send ₹10,000 but need OTP to process. Is this real?",
          options: [
            "Yes, OTP is needed to receive money",
            "No - receiving money NEVER requires OTP",
            "Maybe, depends on the bank",
            "Yes, for UPI transfers"
          ],
          correct: 1
        },
        {
          question: "What is OTP used for?",
          options: [
            "To receive money",
            "To cancel transactions",
            "To authorize transactions you initiate yourself",
            "To help customer support"
          ],
          correct: 2
        }
      ]
    },
    "upi-scams": {
      title: "UPI Payment Scams",
      severity: "High",
      description: "UPI has made payments easy, but scammers exploit this convenience through fake QR codes, phishing for UPI PINs, fake refund calls, and payment reversal scams. Understanding how UPI works is crucial to protect yourself.",
      examples: [
        "Fake payment QR codes in shops/restaurants",
        "Scammer sends request and claims it's for receiving money",
        "Fake refund calls asking for UPI PIN to process refund",
        "WhatsApp scams asking to scan QR for prizes/gifts",
        "Collect request disguised as payment confirmation"
      ],
      warningSigns: [
        "Anyone asking for UPI PIN (even for refunds)",
        "Pressure to scan unknown QR codes",
        "Collect money requests claiming to be payment",
        "Refund requests via unofficial channels",
        "Screenshots of payment asking you to confirm by entering PIN"
      ],
      prevention: [
        "NEVER share UPI PIN with anyone",
        "Verify QR codes before scanning (check merchant name)",
        "Know: Receiving money NEVER needs PIN",
        "Only accept payment requests you initiated",
        "Check transaction details before confirming",
        "Use UPI apps with transaction limits set"
      ],
      whatToDo: [
        "Contact bank immediately if money debited",
        "Report to UPI app support",
        "Call 1930 for cybercrime helpline",
        "File complaint at cybercrime.gov.in",
        "Change UPI PIN immediately",
        "Enable transaction notifications"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "Someone sends you a QR code on WhatsApp claiming you'll receive ₹5,000 by scanning it. Should you scan?",
          options: [
            "Yes, to receive the money",
            "No - this is a scam to make you pay instead",
            "Yes, but don't enter PIN",
            "Ask them to send again"
          ],
          correct: 1
        },
        {
          question: "Do you need to enter UPI PIN to receive money?",
          options: [
            "Yes, always",
            "No - receiving money NEVER requires PIN",
            "Sometimes, depending on amount",
            "Only for large amounts"
          ],
          correct: 1
        },
        {
          question: "What's the difference between Pay and Request in UPI?",
          options: [
            "Both send money",
            "Pay sends money, Request asks others to send you money",
            "No difference",
            "Request is for refunds"
          ],
          correct: 1
        }
      ]
    },
    "loan-apps": {
      title: "Loan App Frauds",
      severity: "Medium",
      description: "Predatory loan apps promising instant loans with minimal documentation trap users in debt cycles with hidden charges, extremely high interest rates, and harassment tactics. They also steal personal data from your phone.",
      examples: [
        "Apps promising instant ₹50,000 loan with no documents",
        "Loan apps requiring access to contacts, photos, and SMS",
        "Hidden processing fees deducted from loan amount",
        "Harassment calls to your contacts if payment delayed",
        "Interest rates of 30-100% per year (illegal)"
      ],
      warningSigns: [
        "Too-easy approval process",
        "Requests for excessive phone permissions",
        "No physical office address",
        "Unclear terms and hidden charges",
        "Pressure to install app from outside Play Store",
        "Threats and harassment for payment"
      ],
      prevention: [
        "Use only RBI-approved lending apps",
        "Read all terms and conditions carefully",
        "Calculate total repayment before accepting",
        "Don't give access to contacts/photos/gallery",
        "Check reviews and complaints online",
        "Prefer bank loans over instant loan apps"
      ],
      whatToDo: [
        "Report harassment to police and cybercrime.gov.in",
        "File complaint with RBI ombudsman",
        "Document all threats and messages",
        "Block and uninstall predatory apps",
        "Seek help from consumer forums",
        "Warn others about the fraudulent app"
      ],
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "A loan app asks for access to your contacts and photo gallery. Should you allow it?",
          options: [
            "Yes, it's standard procedure",
            "No - this is suspicious and unnecessary",
            "Yes, only for loan approval",
            "Doesn't matter"
          ],
          correct: 1
        },
        {
          question: "What is a red flag for predatory loan apps?",
          options: [
            "Detailed documentation required",
            "Clear terms and conditions",
            "Harassment of your contacts for payment",
            "RBI approval displayed"
          ],
          correct: 2
        },
        {
          question: "Where can you check if a lending app is legitimate?",
          options: [
            "Just trust the app reviews",
            "Check RBI's list of authorized digital lenders",
            "Ask friends",
            "Look at app downloads"
          ],
          correct: 1
        }
      ]
    }
  };

  const scam = scamData[scamId || ""];

  if (!scam) {
    return (
      <div className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Scam Type Not Found</h1>
            <Link to="/learn">
              <Button>Back to Learn</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === scam.quiz[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < scam.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient text-primary-foreground py-12 px-4">
          <div className="container mx-auto">
            <Link to="/learn" className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>
            <div className="flex items-start gap-4 flex-wrap">
              <h1 className="font-bold flex-grow">{scam.title}</h1>
              <Badge variant="destructive" className="text-lg px-4 py-1">
                {scam.severity} Risk
              </Badge>
            </div>
            <p className="text-lg mt-4 opacity-95 max-w-4xl">
              {scam.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 space-y-8">
          {/* Real Examples */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Real Examples
              </h2>
              <ul className="space-y-2">
                {scam.examples.map((example: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Warning Signs */}
          <Card className="border-warning">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                Warning Signs (Red Flags)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {scam.warningSigns.map((sign: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 bg-warning-light p-3 rounded">
                    <XCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prevention Tips */}
          <Card className="border-success">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-success" />
                How to Protect Yourself
              </h2>
              <div className="space-y-3">
                {scam.prevention.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 bg-success-light p-3 rounded">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What to Do */}
          <Card className="border-danger">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                What to Do If You're Targeted or Scammed
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {scam.whatToDo.map((step: string, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>Step {index + 1}: {step.split(':')[0]}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">{step}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Video Tutorial */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <PlayCircle className="h-6 w-6 text-primary" />
                Video Tutorial
              </h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${scam.videoId}`}
                  title="Scam awareness video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          {/* Interactive Quiz */}
          <Card className="border-primary">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Test Your Knowledge</h2>
              
              {!quizStarted ? (
                <div className="text-center py-8">
                  <p className="text-lg mb-6">Take this quick quiz to check your understanding!</p>
                  <Button onClick={() => setQuizStarted(true)} size="lg">
                    Start Quiz
                  </Button>
                </div>
              ) : showResult ? (
                <div className="text-center py-8">
                  <h3 className="text-3xl font-bold mb-4">
                    Quiz Complete! 🎉
                  </h3>
                  <p className="text-2xl mb-2">
                    Your Score: {score} / {scam.quiz.length}
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    {score === scam.quiz.length 
                      ? "Perfect! You're well-protected against this scam!" 
                      : score >= scam.quiz.length / 2 
                      ? "Good job! Review the content to improve further." 
                      : "Consider reviewing the material again to better protect yourself."}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={resetQuiz}>Retake Quiz</Button>
                    <Link to="/learn">
                      <Button variant="outline">Back to Learn</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Question {currentQuestion + 1} of {scam.quiz.length}
                    </span>
                    <span className="font-semibold">
                      Score: {score}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold">
                    {scam.quiz[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {scam.quiz[currentQuestion].options.map((option: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          selectedAnswer === index 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleNextQuestion} 
                    disabled={selectedAnswer === null}
                    className="w-full"
                  >
                    {currentQuestion < scam.quiz.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScamDetail;