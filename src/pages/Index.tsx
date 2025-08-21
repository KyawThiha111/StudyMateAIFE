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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
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
  const CSoverallProgressValue = useSelector((state:RootState)=>state.csoverallprogress.computerScience)
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
              <h1 className="text-2xl md:text-3xl font-semibold">Study Mate AI</h1>
              <p className="text-muted-foreground mt-1"></p>
              {/* <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="secondary">Study Streak • 7 days</Badge>
                <Badge variant="secondary">Total Time • 18.5 hours</Badge>
                <Badge variant="secondary">Achievements • 12</Badge>
              </div> */}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "CS", value: CSoverallProgressValue },
                     
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

                  {/* <div>
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
                  </div> */}
                </CardContent>
              </Card>
              <div className="lg:col-span-1">
                {/* AI Assistant panel */}
                {/* <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-3">Your personalized study helper</p>
                    <Button asChild variant="hero" className="w-full mb-4">
                      <a href="#assistant">Start a conversation</a>
                    </Button>
                    {/* Mount the chat below */}
                    {/* <div id="assistant" />
                  </CardContent>
                </Card> */} 
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Upcoming Quizzes */}
  <Card className="lg:col-span-2">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">📅 Upcoming Quizzes</CardTitle>
    </CardHeader>
    <CardContent className="divide-y">
      {[
        { subject: "IT Fundamentals", topic: "Introduction to Computer Systems", difficulty: "Easy", time: "30 min", questions: 15 },
        { subject: "Computer Science",topic:"What is Computer Science",  difficulty: "Medium", time: "20 min", questions: 10 },
        { subject: "Programming", topic: "JavaScript Basics", difficulty: "Medium", time: "40 min", questions: 20 },
      ].map((q, i) => (
        <div
          key={i}
          className="py-4 flex items-center justify-between gap-4 transition hover:bg-muted/30 rounded-lg px-3"
        >
          <div>
            <div className="font-semibold text-base">{q.subject}</div>
            <p className="text-sm text-muted-foreground">{q.topic}</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
             
              <Badge
                variant={q.difficulty === "Hard" ? "destructive" : q.difficulty === "Medium" ? "secondary" : "outline"}
              >
                {q.difficulty}
              </Badge>
            </div>
          </div>
          <Button size="sm" onClick={() => navigate("/option/")}>Start</Button>
        </div>
      ))}
    </CardContent>
  </Card>


</section>


            {/* Inline Chat Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-start-3">
                {/* <GeminiChat2 /> */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
