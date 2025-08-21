import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressCircle from "@/components/ui/progress-circle";
import { Link, useNavigate } from "react-router-dom";
import ComputerScienceData from "../SubjectData/ComputerScience/CSData";
import { useGetProgressQuery } from "@/api/Subject/csprogress.api";
import { useDispatch } from "react-redux";
import { setComputerScienceProgress } from "@/redux/csoverallprogress.slice";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
export const ComputerScienceProgressComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ✅ RTK Query fetching
  const { data: ComputerSciencProgess, isLoading, isError } =
    useGetProgressQuery();

  // ✅ While fetching
  if (isLoading) {
    return (
      <main className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-muted-foreground">
          Loading progress...
        </p>
      </main>
    );
  }

  // ✅ Error handling
  if (isError || !ComputerSciencProgess) {
    return (
      <main className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-red-500">
          Failed to load progress. Please try again later.
        </p>
      </main>
    );
  }

  // ✅ Safe defaults if backend doesn’t send some keys
  const safeProgress = ComputerSciencProgess.progress.progress || {};
console.log(ComputerSciencProgess)
  console.log("save progress"+safeProgress)
  // Calculate totals
  const totalChaptersAll = ComputerScienceData.subSubject.reduce(
    (sum, chapter) => sum + chapter.chapter.length,
    0
  );

  const completedAll = ComputerScienceData.subSubject.reduce((sum, chapter) => {
    const useProgress = safeProgress[chapter.name] || [];
    return sum + useProgress.length;
  }, 0);

  const overallProgress =
    totalChaptersAll > 0
      ? Math.round((completedAll / totalChaptersAll) * 100)
      : 0;
   
    dispatch(setComputerScienceProgress(overallProgress))
  return (
    <main>
      {/* ✅ Top-level overall progress */}
      <section className="mb-8">
        <Card
          onClick={() => navigate("/subject/computerscience")}
          className="p-6 flex flex-col md:flex-row items-center justify-between shadow-md rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Overall Computer Science Progress
            </h2>
            <p className="text-muted-foreground mt-1">
              {completedAll} / {totalChaptersAll} chapters completed
            </p>
          </div>
          <ProgressCircle value={overallProgress} size={96} />
        </Card>
      </section>

      {/* ✅ Subsubject grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ComputerScienceData.subSubject.map((chapter) => {
            const useProgress = safeProgress[chapter.name] || [];
            const totalChapter = chapter.chapter.length;
            const completeChapter = useProgress.length;
            const chapterProgress = Math.round(
              (completeChapter / totalChapter) * 100
            );

            return (
              <Card
                key={chapter.name}
                onClick={() =>
                  navigate(
                    `/subject/computerscience#${chapter.name.replace(
                      /\s+/g,
                      "-"
                    )}`
                  )
                }
                className="cursor-pointer hover:shadow-lg transition rounded-xl"
              >
                <CardHeader className="flex-row items-center justify-between space-y-0 gap-4">
                  <div>
                    <CardTitle>{chapter.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {completeChapter} / {totalChapter} chapters completed
                    </p>
                  </div>
                  <ProgressCircle value={chapterProgress} size={56} />
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ComputerScienceProgressComponent;

