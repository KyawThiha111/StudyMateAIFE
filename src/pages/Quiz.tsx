import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

function toTitle(slug: string) {
  return slug
    .split("-")
    .map((s) => (s.length > 2 ? s[0].toUpperCase() + s.slice(1) : s.toUpperCase()))
    .join(" ");
}

const Quiz = () => {
  const { lessonId = "" } = useParams();
  const readable = useMemo(() => toTitle(lessonId), [lessonId]);

  const questions = useMemo(() => {
    // Generate 10 placeholder questions related to the lesson topic
    return Array.from({ length: 10 }, (_, i) => ({
      id: `${lessonId}-q${i + 1}`,
      text: `${readable}: Question ${i + 1}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
    }));
  }, [lessonId, readable]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`Quiz: ${readable} | Assistant AI`}</title>
        <meta name="description" content={`Practice with 10 related questions for ${readable}.`} />
        <link rel="canonical" href={`/quiz/${lessonId}`} />
      </Helmet>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="container py-6 space-y-6">
            <section className="rounded-xl border p-6 bg-card">
              <h1 className="text-2xl md:text-3xl font-semibold">Quiz: {readable}</h1>
              <p className="text-muted-foreground mt-1">10 related questions. Choose the best answer for each.</p>
              <div className="mt-3">
                <Link to="/lessons" className="text-sm underline text-primary">← Back to Lessons</Link>
              </div>
            </section>

            <section className="space-y-4">
              {questions.map((q, idx) => (
                <Card key={q.id}>
                  <CardHeader>
                    <CardTitle className="text-base">{idx + 1}. {q.text}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup name={`q-${idx}`} className="grid gap-3">
                      {q.options.map((opt, oi) => {
                        const value = String.fromCharCode(65 + oi);
                        const id = `${q.id}-${value}`;
                        return (
                          <label key={id} htmlFor={id} className="flex items-center gap-3 rounded-md border p-3 hover:bg-accent cursor-pointer">
                            <RadioGroupItem id={id} value={value} />
                            <span className="text-sm">{opt}</span>
                          </label>
                        );
                      })}
                    </RadioGroup>
                  </CardContent>
                </Card>
              ))}

              <div className="flex items-center justify-end pt-2">
                <Button>Submit Quiz</Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
