import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: "What should you do if someone calls claiming to be from your bank and asks for your OTP?",
      options: [
        "Share the OTP to verify your account",
        "Hang up and call your bank's official number",
        "Ask them to send an email first",
        "Share only half of the OTP"
      ],
      correct: 1,
      explanation: "Banks NEVER ask for OTP. Always hang up and verify by calling the official number yourself."
    },
    {
      question: "You receive an SMS with a link to update your KYC urgently. What's the best action?",
      options: [
        "Click immediately to avoid account blocking",
        "Ignore and delete - visit bank branch if needed",
        "Forward to friends for advice",
        "Reply with your Aadhaar number"
      ],
      correct: 1,
      explanation: "KYC updates are never done through SMS links. Always visit your bank branch or use official banking app."
    },
    {
      question: "Do you need to enter your UPI PIN to receive money?",
      options: [
        "Yes, always",
        "No, receiving money never requires PIN",
        "Only for large amounts",
        "Sometimes, depending on the bank"
      ],
      correct: 1,
      explanation: "You NEVER need to enter PIN to receive money. PIN is only for sending money."
    },
    {
      question: "A shopping app asks for permission to access your contacts and SMS. Should you allow it?",
      options: [
        "Yes, it's standard for all apps",
        "No, this is suspicious and unnecessary",
        "Yes, but only for contacts",
        "Doesn't matter"
      ],
      correct: 1,
      explanation: "Shopping apps don't need access to contacts or SMS. This is a red flag for data theft."
    },
    {
      question: "Someone sends you a QR code on WhatsApp saying you'll win ₹10,000 by scanning it. What do you do?",
      options: [
        "Scan it immediately",
        "Recognize it as a scam - scanning makes you pay",
        "Share with family first",
        "Ask for prize details"
      ],
      correct: 1,
      explanation: "QR codes sent randomly are payment requests disguised as prizes. Never scan unknown QR codes."
    },
    {
      question: "An unknown caller asks 'Can you hear me?' What should you say?",
      options: [
        "Yes",
        "I can hear you (or hang up)",
        "Yes, who is this?",
        "Hello"
      ],
      correct: 1,
      explanation: "Scammers record your 'Yes' for voice authentication fraud. Never say 'Yes' to unknown callers."
    },
    {
      question: "What is the national cybercrime helpline number in India?",
      options: [
        "100",
        "1930",
        "1091",
        "112"
      ],
      correct: 1,
      explanation: "1930 is the national cybercrime helpline. Save this number and report all cyber frauds immediately."
    },
    {
      question: "A loan app promises instant ₹50,000 with no documents. Red flag?",
      options: [
        "No, it's just modern lending",
        "Yes - legitimate loans require documentation",
        "Maybe, need to check reviews",
        "No, if it's on Play Store"
      ],
      correct: 1,
      explanation: "Instant loans with no documents are predatory apps. They charge hidden fees and harass borrowers."
    },
    {
      question: "What should you NEVER share with anyone, including bank officials?",
      options: [
        "Account number",
        "Branch name",
        "OTP, PIN, CVV, Password",
        "Your name"
      ],
      correct: 2,
      explanation: "OTP, PIN, CVV, and passwords are confidential. No legitimate entity will ever ask for these."
    },
    {
      question: "You accidentally shared your OTP with a scammer. What's the FIRST thing to do?",
      options: [
        "Wait and see what happens",
        "Immediately call bank and block account/cards",
        "Change email password",
        "File police complaint first"
      ],
      correct: 1,
      explanation: "Time is critical. Call your bank immediately to block your account and cards to prevent money loss."
    }
  ];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer!];
    setAnswers(newAnswers);
    
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { text: "Excellent! You're well-protected!", color: "text-success" };
    if (percentage >= 70) return { text: "Good job! A few areas to review.", color: "text-primary" };
    if (percentage >= 50) return { text: "Fair. Please review the learning materials.", color: "text-warning" };
    return { text: "Needs improvement. Study the scam types carefully.", color: "text-danger" };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-gradient text-primary-foreground py-16 px-4">
          <div className="container mx-auto text-center space-y-4">
            <h1 className="font-bold">Cyber Safety Quiz</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              Test your knowledge about cyber scams and learn how to protect yourself.
            </p>
          </div>
        </section>

        {/* Quiz Content */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            {!showResult ? (
              <Card>
                <CardContent className="p-8">
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="font-semibold">Score: {score}</span>
                    </div>
                    <Progress value={((currentQuestion + 1) / questions.length) * 100} />
                  </div>

                  {/* Question */}
                  <h2 className="text-2xl font-bold mb-6">
                    {questions[currentQuestion].question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          selectedAnswer === index 
                            ? 'border-primary bg-primary/10 font-medium' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <Button 
                    onClick={handleNextQuestion} 
                    disabled={selectedAnswer === null}
                    className="w-full"
                    size="lg"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Quiz Complete! 🎉</h2>
                  
                  <div className="my-8">
                    <div className="text-6xl font-bold text-primary mb-2">
                      {score}/{questions.length}
                    </div>
                    <p className={`text-2xl font-semibold ${getScoreMessage().color}`}>
                      {getScoreMessage().text}
                    </p>
                  </div>

                  {/* Review Answers */}
                  <div className="mb-8 text-left">
                    <h3 className="text-xl font-bold mb-4">Review Your Answers</h3>
                    <div className="space-y-4">
                      {questions.map((q, index) => (
                        <div key={index} className="p-4 bg-muted rounded-lg">
                          <div className="flex items-start gap-2 mb-2">
                            <span className="font-semibold">Q{index + 1}:</span>
                            <span className="flex-grow">{q.question}</span>
                            <Badge variant={answers[index] === q.correct ? "default" : "destructive"}>
                              {answers[index] === q.correct ? "✓ Correct" : "✗ Wrong"}
                            </Badge>
                          </div>
                          {answers[index] !== q.correct && (
                            <div className="ml-6 mt-2 text-sm">
                              <p className="text-muted-foreground mb-1">
                                <strong>Your answer:</strong> {q.options[answers[index]]}
                              </p>
                              <p className="text-success">
                                <strong>Correct answer:</strong> {q.options[q.correct]}
                              </p>
                              <p className="text-muted-foreground mt-1">
                                <strong>Why:</strong> {q.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetQuiz} size="lg">
                      Retake Quiz
                    </Button>
                    <Link to="/learn">
                      <Button variant="outline" size="lg">
                        Continue Learning
                      </Button>
                    </Link>
                    <Link to="/checklist">
                      <Button variant="secondary" size="lg">
                        View Safety Checklist
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;