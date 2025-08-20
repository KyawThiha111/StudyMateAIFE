import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { GradientSpotlight } from "@/components/visual/GradientSpotlight";
import { GeminiChat } from "@/components/ai/GeminiChat";
import { useNavigate } from "react-router-dom";
import {GeminiChat2} from "@/components/ai/GeminiChat2"
const weekly = [
  { day: "Mon", time: 2 },
  { day: "Tue", time: 3 },
  { day: "Wed", time: 1.2 },
  { day: "Thu", time: 4 },
  { day: "Fri", time: 3.6 },
  { day: "Sat", time: 2.4 },
  { day: "Sun", time: 12 },
];

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Study Dashboard | Assistant AI</title>
        <meta name="description" content="Track learning progress and chat with an AI tutor on the Assistant AI study dashboard." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="container py-6 space-y-6">
            <section className="relative overflow-hidden rounded-xl border p-6 bg-card">
              <GradientSpotlight />
              <h1 className="text-2xl md:text-3xl font-semibold">AI Study Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back! You have 2 pending quizzes and 3 recommended topics</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="secondary">Study Streak • 7 days</Badge>
                <Badge variant="secondary">Total Time • 18.5 hours</Badge>
                <Badge variant="secondary">Achievements • 12</Badge>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Mathematics", value: 75 },
                      { label: "Science", value: 60 },
                      { label: "History", value: 45 },
                      { label: "Literature", value: 80 }
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{s.label}</span>
                          <span className="text-sm font-medium">{s.value}%</span>
                        </div>
                        <Progress value={s.value} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Weekly Study Time</p>
                    <ChartContainer
                      config={{ time: { label: "Hours", color: "hsl(var(--primary))" } }}
                      className="h-64"
                    >
                      <AreaChart data={weekly} margin={{ left: 12, right: 12 }}>
                        <defs>
                          <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="day" tickLine={false} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                        <Area type="monotone" dataKey="time" stroke="hsl(var(--primary))" fill="url(#fillArea)" />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:col-span-1">
                {/* AI Assistant panel */}
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-3">Your personalized study helper</p>
                    <Button asChild variant="hero" className="w-full mb-4">
                      <a href="#assistant">Start a conversation</a>
                    </Button>
                    {/* Mount the chat below */}
                    <div id="assistant" />
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Upcoming Quizzes</CardTitle>
                </CardHeader>
                <CardContent className="divide-y">
                  {[
                    { subject: "Mathematics", topic: "Calculus: Derivatives", difficulty: "Hard", time: "30 min", questions: 15 },
                    { subject: "Science", topic: "Physics: Newton's Laws", difficulty: "Medium", time: "20 min", questions: 10 },
                    { subject: "History", topic: "World War II", difficulty: "Medium", time: "40 min", questions: 20 },
                  ].map((q, i) => (
                    <div key={i} className="py-4 flex items-center justify-between gap-4">
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
                      <Button onClick={() => navigate("/option/")}>Start Quiz</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Advanced Calculus", meta: "8 weeks • Advanced" },
                    { title: "Quantum Physics Basics", meta: "10 weeks • Intermediate" },
                    { title: "Creative Writing", meta: "6 weeks • Intermediate" },
                  ].map((c, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="font-medium">{c.title}</div>
                      <p className="text-sm text-muted-foreground">{c.meta}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Inline Chat Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-start-3">
                <GeminiChat2 />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
