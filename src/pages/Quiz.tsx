import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface QuizProps {
  subject: string;
  chapter: string;
  topic: string;
  option: string; // "easy", "medium", "hard"
}

export default function Quiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [searchParams] = useSearchParams();

  const subject = searchParams.get("subject");
  const chapter = searchParams.get("chapter");
  const topic = searchParams.get("topic");
  const option = searchParams.get('option');
  const fetchQuiz = async () => {
    setLoading(true);
    setShowResults(false);
    setUserAnswers({});
    try {
      const res = await axios.get("https://hackathon-20uq.onrender.com/api/quizes", {
        params: { subject, chapter, topic, option },
      });

      let parsed = res.data.quizes;
      if (typeof parsed === "string") {
        try {
          parsed = JSON.parse(parsed);
        } catch (e) {
          console.error("Invalid JSON from API:", parsed);
          parsed = [];
        }
      }
      setQuestions(parsed);
    } catch (err) {
      console.error("Failed to fetch quiz", err);
    }
    setLoading(false);
  };

  const handleSelect = (qIndex: number, choice: string) => {
    setUserAnswers((prev) => ({ ...prev, [qIndex]: choice }));
  };

  const correctCount = questions.reduce((count, q, idx) => {
    return userAnswers[idx] === q.answer ? count + 1 : count;
  }, 0);

  const scorePercent = ((correctCount / questions.length) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`Quiz | Assistant AI`}</title>
      </Helmet>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar/>
          <main className="container py-6 space-y-6">

            <section className="rounded-xl border p-6 bg-card shadow-sm">
              <h1 className="text-2xl font-bold">Topic Quiz</h1>
              <p className="text-muted-foreground mt-2">Test your knowledge on this topic.</p>
              <Button onClick={fetchQuiz} disabled={loading} className="mt-4">
                {loading ? "Loading..." : "📋 Take Quiz"}
              </Button>
            </section>

            {questions.length > 0 && (
              <section className="space-y-6">
                {questions.map((q, i) => {
                  const isCorrect = q.answer === userAnswers[i];
                  return (
                    <Card key={i} className="border rounded-lg shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                          {i + 1}. {q.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {q.options.map((opt, j) => {
                          const isSelected = userAnswers[i] === opt;
                          const isRightAnswer = q.answer === opt;

                          return (
                            <button
                              key={j}
                              onClick={() => handleSelect(i, opt)}
                              disabled={showResults}
                              className={`block w-full text-left p-3 rounded-md border transition-all
                                ${isSelected ? "border-blue-500 bg-blue-50" : "border"}
                                ${showResults && isRightAnswer ? "bg-green-100 border-green-500" : ""}
                                ${showResults && isSelected && !isRightAnswer ? "bg-red-100 border-red-400" : ""}
                              `}
                            >
                              {opt}
                            </button>
                          );
                        })}

                        {showResults && (
                          <div className={`text-sm mt-2 ${isCorrect ? "text-green-600" : "text-red-500"}`}>
                            {isCorrect ? "✅ Correct" : `❌ Correct answer: ${q.answer}`}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}

                {!showResults ? (
                  <div className="flex justify-end">
                    <Button onClick={() => setShowResults(true)} className="mt-4">
                      Check Answers
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-lg border p-6 bg-muted">
                    <h2 className="text-xl font-semibold">📊 Results</h2>
                    <p className="mt-2 text-base">
                      You got <strong>{correctCount}</strong> out of <strong>{questions.length}</strong> correct.
                    </p>
                    <p className="text-muted-foreground">Score: {scorePercent}%</p>
                  </div>
                )}
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}



