import { useState } from "react";
import { CheckCircle2, XCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SpotTheScam = () => {
  const { t } = useLanguage();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const scenarios = [
    {
      id: 1,
      message: t("spotScam.scenario1.message"),
      isScam: true,
      explanation: t("spotScam.scenario1.explanation")
    },
    {
      id: 2,
      message: t("spotScam.scenario2.message"),
      isScam: true,
      explanation: t("spotScam.scenario2.explanation")
    },
    {
      id: 3,
      message: t("spotScam.scenario3.message"),
      isScam: false,
      explanation: t("spotScam.scenario3.explanation")
    },
    {
      id: 4,
      message: t("spotScam.scenario4.message"),
      isScam: true,
      explanation: t("spotScam.scenario4.explanation")
    },
    {
      id: 5,
      message: t("spotScam.scenario5.message"),
      isScam: true,
      explanation: t("spotScam.scenario5.explanation")
    }
  ];

  const handleAnswer = (answer: boolean) => {
    setUserAnswer(answer);
    setAnswered(true);
    if (answer === scenarios[currentScenario].isScam) {
      setScore(score + 1);
    }
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setAnswered(false);
      setUserAnswer(null);
    }
  };

  const restart = () => {
    setCurrentScenario(0);
    setAnswered(false);
    setUserAnswer(null);
    setScore(0);
  };

  const isCorrect = answered && userAnswer === scenarios[currentScenario].isScam;
  const isFinished = currentScenario === scenarios.length - 1 && answered;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/learn">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("spotScam.back")}
            </Button>
          </Link>

          <h1 className="text-foreground mb-8">{t("spotScam.title")}</h1>

          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">
                {t("spotScam.progress")}: {currentScenario + 1} / {scenarios.length}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {t("spotScam.score")}: {score} / {scenarios.length}
              </div>
            </div>

            {!isFinished ? (
              <>
                <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-lg mb-8">
                  <p className="text-lg text-foreground whitespace-pre-line">{scenarios[currentScenario].message}</p>
                </div>

                {!answered ? (
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => handleAnswer(true)}
                      size="lg"
                      className="bg-destructive hover:bg-destructive/90 text-white"
                    >
                      <XCircle className="mr-2 h-5 w-5" />
                      {t("spotScam.scam")}
                    </Button>
                    <Button
                      onClick={() => handleAnswer(false)}
                      size="lg"
                      className="bg-success hover:bg-success/90 text-white"
                    >
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      {t("spotScam.safe")}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className={`p-6 rounded-lg ${isCorrect ? 'bg-success/10 border-2 border-success' : 'bg-destructive/10 border-2 border-destructive'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="h-8 w-8 text-success" />
                            <h3 className="text-xl font-bold text-success">{t("spotScam.correct")}</h3>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-8 w-8 text-destructive" />
                            <h3 className="text-xl font-bold text-destructive">{t("spotScam.incorrect")}</h3>
                          </>
                        )}
                      </div>
                      <p className="text-foreground">{scenarios[currentScenario].explanation}</p>
                    </div>

                    <Button onClick={nextScenario} size="lg" className="w-full">
                      {t("spotScam.next")}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">
                  {score === scenarios.length ? "🏆" : score >= 4 ? "🎯" : score >= 3 ? "👍" : "📚"}
                </div>
                <h2 className="text-foreground">
                  {score === scenarios.length ? t("spotScam.result.perfect") :
                   score >= 4 ? t("spotScam.result.great") :
                   score >= 3 ? t("spotScam.result.good") :
                   t("spotScam.result.needsPractice")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("spotScam.finalScore")}: {score} / {scenarios.length}
                </p>
                <Button onClick={restart} size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  {t("spotScam.restart")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpotTheScam;
