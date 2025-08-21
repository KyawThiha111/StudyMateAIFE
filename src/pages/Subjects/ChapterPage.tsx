import ChaptersComponents from "@/components/Subjects/ChapterPage";
import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import MainChatbot2 from "@/components/ai/MainChatbot2";

const ChaptersPage = () => {
  const navigate = useNavigate();
  const { subjectname } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Study Dashboard | Assistant AI</title>
        <meta
          name="description"
          content="Track learning progress and chat with an AI tutor on the Assistant AI study dashboard."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />

          <main className="container py-6 space-y-6">
            {/* Chapters and Right Panel (AI + Upcoming Quizzes) */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chapters */}
              <div className="lg:col-span-2">
                <ChaptersComponents subjectname={subjectname} />
              </div>

              {/* Right Panel */}
              <div className="lg:col-span-1 flex flex-col h-full gap-6">
                {/* AI Assistant */}
                <div className="flex-1 flex flex-col justify-start overflow-auto">
                  <MainChatbot2 />
                </div>

                {/* Upcoming Quizzes */}
                <Card className="flex-shrink-0">
                  <CardHeader>
                    <CardTitle>Upcoming Quizzes</CardTitle>
                  </CardHeader>
                  <CardContent className="divide-y">
                    {[
                      {
                        subject: "Mathematics",
                        topic: "Calculus: Derivatives",
                        difficulty: "Hard",
                        time: "30 min",
                        questions: 15,
                      },
                      {
                        subject: "Science",
                        topic: "Physics: Newton's Laws",
                        difficulty: "Medium",
                        time: "20 min",
                        questions: 10,
                      },
                      {
                        subject: "History",
                        topic: "World War II",
                        difficulty: "Medium",
                        time: "40 min",
                        questions: 20,
                      },
                    ].map((q, i) => (
                      <div
                        key={i}
                        className="py-4 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="font-medium">{q.subject}</div>
                          <p className="text-sm text-muted-foreground">{q.topic}</p>
                          <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                            <span>{q.questions} questions</span>
                            <span>•</span>
                            <span>{q.time}</span>
                            <Badge variant="secondary">{q.difficulty}</Badge>
                          </div>
                        </div>
                        <Button onClick={() => navigate("/option/")}>
                          Start Quiz
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;
