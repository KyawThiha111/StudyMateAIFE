import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressCircle from "@/components/ui/progress-circle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/* Lesson Progress Card */
import ComputerScienceProgressComponent from "@/components/LessonProgress/ComputerScience.progress";



const Lessons = () => {
  // Build JSON-LD for SEO (ItemList of lessons)
  
 const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Lessons & Chapters | Assistant AI</title>
        <meta
          name="description"
          content="Browse chapters, sections, and lessons with progress circles. Start related quizzes from any lesson."
        />
        <link rel="canonical" href="/lessons" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
           // itemListElement: ComputerSciencelessonsList,
          })}
        </script>
      </Helmet>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="container py-6 space-y-8">
  <section className="rounded-xl border p-6 bg-card">
    <h1 className="text-2xl md:text-3xl font-semibold">
      Chapters and Lessons
    </h1>
    <p className="text-muted-foreground mt-1">
      Track your study progress and jump into a related quiz for any
      lesson.
    </p>
  </section>

  {/* CS */}
  <ComputerScienceProgressComponent/>
</main>

        </div>
      </div>
    </div>
  );
};

export default Lessons;
