import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SafetyScore = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: t("safetyScore.q1.question"),
      options: [
        { text: t("safetyScore.q1.a"), score: 10 },
        { text: t("safetyScore.q1.b"), score: 5 },
        { text: t("safetyScore.q1.c"), score: 0 }
      ]
    },
    {
      question: t("safetyScore.q2.question"),
      options: [
        { text: t("safetyScore.q2.a"), score: 10 },
        { text: t("safetyScore.q2.b"), score: 0 },
        { text: t("safetyScore.q2.c"), score: 5 }
      ]
    },
    {
      question: t("safetyScore.q3.question"),
      options: [
        { text: t("safetyScore.q3.a"), score: 10 },
        { text: t("safetyScore.q3.b"), score: 5 },
        { text: t("safetyScore.q3.c"), score: 0 }
      ]
    },
    {
      question: t("safetyScore.q4.question"),
      options: [
        { text: t("safetyScore.q4.a"), score: 10 },
        { text: t("safetyScore.q4.b"), score: 0 },
        { text: t("safetyScore.q4.c"), score: 5 }
      ]
    },
    {
      question: t("safetyScore.q5.question"),
      options: [
        { text: t("safetyScore.q5.a"), score: 10 },
        { text: t("safetyScore.q5.b"), score: 0 },
        { text: t("safetyScore.q5.c"), score: 5 }
      ]
    },
    {
      question: t("safetyScore.q6.question"),
      options: [
        { text: t("safetyScore.q6.a"), score: 10 },
        { text: t("safetyScore.q6.b"), score: 5 },
        { text: t("safetyScore.q6.c"), score: 0 }
      ]
    },
    {
      question: t("safetyScore.q7.question"),
      options: [
        { text: t("safetyScore.q7.a"), score: 0 },
        { text: t("safetyScore.q7.b"), score: 10 },
        { text: t("safetyScore.q7.c"), score: 5 }
      ]
    },
    {
      question: t("safetyScore.q8.question"),
      options: [
        { text: t("safetyScore.q8.a"), score: 10 },
        { text: t("safetyScore.q8.b"), score: 5 },
        { text: t("safetyScore.q8.c"), score: 0 }
      ]
    },
    {
      question: t("safetyScore.q9.question"),
      options: [
        { text: t("safetyScore.q9.a"), score: 0 },
        { text: t("safetyScore.q9.b"), score: 5 },
        { text: t("safetyScore.q9.c"), score: 10 }
      ]
    },
    {
      question: t("safetyScore.q10.question"),
      options: [
        { text: t("safetyScore.q10.a"), score: 10 },
        { text: t("safetyScore.q10.b"), score: 0 },
        { text: t("safetyScore.q10.c"), score: 5 }
      ]
    }
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const percentage = (totalScore / (questions.length * 10)) * 100;

  const getScoreLevel = () => {
    if (percentage >= 80) return { emoji: "🏆", title: t("safetyScore.result.champion"), color: "text-success" };
    if (percentage >= 60) return { emoji: "🎯", title: t("safetyScore.result.good"), color: "text-primary" };
    if (percentage >= 40) return { emoji: "⚠️", title: t("safetyScore.result.risky"), color: "text-warning" };
    return { emoji: "🚨", title: t("safetyScore.result.danger"), color: "text-destructive" };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/learn">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("safetyScore.back")}
            </Button>
          </Link>

          <h1 className="text-foreground mb-8">{t("safetyScore.title")}</h1>

          {!showResult ? (
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {t("safetyScore.progress")}: {currentQuestion + 1} / {questions.length}
                </div>
                <div className="w-full bg-accent/30 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-foreground mb-6">
                {questions[currentQuestion].question}
              </h2>

              <RadioGroup value={selectedOption?.toString()} onValueChange={(value) => setSelectedOption(parseInt(value))}>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-accent/50 cursor-pointer">
                      <RadioGroupItem value={option.score.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <Button
                onClick={handleNext}
                disabled={selectedOption === null}
                size="lg"
                className="w-full mt-8"
              >
                {currentQuestion < questions.length - 1 ? t("safetyScore.next") : t("safetyScore.finish")}
              </Button>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg text-center space-y-6">
              <div className="text-8xl mb-4">{getScoreLevel().emoji}</div>
              <h2 className={`text-3xl font-bold ${getScoreLevel().color}`}>
                {getScoreLevel().title}
              </h2>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-foreground">{percentage.toFixed(0)}%</p>
                <p className="text-muted-foreground">{t("safetyScore.yourScore")}: {totalScore} / {questions.length * 10}</p>
              </div>

              <div className="bg-accent/30 p-6 rounded-lg text-left space-y-4 mt-8">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {t("safetyScore.tips.title")}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("safetyScore.tips.tip1")}</li>
                  <li>• {t("safetyScore.tips.tip2")}</li>
                  <li>• {t("safetyScore.tips.tip3")}</li>
                  <li>• {t("safetyScore.tips.tip4")}</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResult(false);
                  setSelectedOption(null);
                }} size="lg" variant="outline" className="flex-1">
                  {t("safetyScore.restart")}
                </Button>
                <Link to="/learn" className="flex-1">
                  <Button size="lg" className="w-full">
                    {t("safetyScore.learnMore")}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SafetyScore;
