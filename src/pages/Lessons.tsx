import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressCircle from "@/components/ui/progress-circle";
import { Link } from "react-router-dom";

// Sample curriculum data
const curriculum = [
  {
    id: "math",
    title: "Mathematics",
    sections: [
      {
        id: "calculus",
        title: "Calculus",
        lessons: [
          { id: "math-calculus-derivatives", title: "Derivatives", progress: 60 },
          { id: "math-calculus-integrals", title: "Integrals", progress: 35 },
          { id: "math-calculus-limits", title: "Limits", progress: 80 },
        ],
      },
      {
        id: "algebra",
        title: "Algebra",
        lessons: [
          { id: "math-algebra-linear-equations", title: "Linear Equations", progress: 70 },
          { id: "math-algebra-quadratics", title: "Quadratics", progress: 40 },
        ],
      },
    ],
  },
  {
    id: "science",
    title: "Science",
    sections: [
      {
        id: "physics",
        title: "Physics",
        lessons: [
          { id: "science-physics-newton-laws", title: "Newton's Laws", progress: 50 },
          { id: "science-physics-energy", title: "Work & Energy", progress: 20 },
        ],
      },
      {
        id: "chemistry",
        title: "Chemistry",
        lessons: [
          { id: "science-chemistry-atomic-structure", title: "Atomic Structure", progress: 30 },
          { id: "science-chemistry-periodic-table", title: "Periodic Table", progress: 55 },
        ],
      },
    ],
  },
];

function average(nums: number[]) {
  if (!nums.length) return 0;
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}

const Lessons = () => {
  // Build JSON-LD for SEO (ItemList of lessons)
  const lessonsList = curriculum.flatMap((c) =>
    c.sections.flatMap((s) =>
      s.lessons.map((l, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `/quiz/${l.id}`,
        name: `${c.title} / ${s.title} / ${l.title}`,
      }))
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lessons & Chapters | Assistant AI</title>
        <meta name="description" content="Browse chapters, sections, and lessons with progress circles. Start related quizzes from any lesson." />
        <link rel="canonical" href="/lessons" />
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: lessonsList })}
        </script>
      </Helmet>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="container py-6 space-y-6">
            <section className="rounded-xl border p-6 bg-card">
              <h1 className="text-2xl md:text-3xl font-semibold">Chapters and Lessons</h1>
              <p className="text-muted-foreground mt-1">Track your study progress and jump into a related quiz for any lesson.</p>
            </section>

            <section className="space-y-6">
              {curriculum.map((chapter) => {
                const chapterProgress = average(
                  chapter.sections.flatMap((sec) => sec.lessons.map((l) => l.progress))
                );
                return (
                  <Card key={chapter.id}>
                    <CardHeader className="flex-row items-center justify-between space-y-0 gap-4">
                      <div>
                        <CardTitle>{chapter.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">Overall chapter progress</p>
                      </div>
                      <ProgressCircle value={chapterProgress} size={56} />
                    </CardHeader>
                    <CardContent className="space-y-5">
                      {chapter.sections.map((section) => (
                        <div key={section.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{section.title}</div>
                              <p className="text-sm text-muted-foreground">{section.lessons.length} lessons</p>
                            </div>
                            <ProgressCircle
                              value={average(section.lessons.map((l) => l.progress))}
                              size={44}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.lessons.map((lesson) => (
                              <Link
                                to={`/quiz/${lesson.id}`}
                                key={lesson.id}
                                className="flex items-center justify-between rounded-md border p-3 hover:bg-accent transition-colors"
                                aria-label={`Open quiz for ${lesson.title}`}
                              >
                                <div>
                                  <div className="font-medium leading-none">{lesson.title}</div>
                                  <p className="text-sm text-muted-foreground mt-1">Tap to view 10 related quiz questions</p>
                                </div>
                                <ProgressCircle value={lesson.progress} size={40} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
