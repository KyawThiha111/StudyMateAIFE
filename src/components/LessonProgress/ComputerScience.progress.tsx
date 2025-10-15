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

  const { data: ComputerSciencProgess, isLoading, isError } =
    useGetProgressQuery();

  if (isLoading) {
    return (
      <main className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-muted-foreground">
          Loading progress...
        </p>
      </main>
    );
  }

  if (isError || !ComputerSciencProgess) {
    return (
      <main className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-red-500">
          Failed to load progress. Please try again later.
        </p>
      </main>
    );
  }

  const safeProgress = ComputerSciencProgess.progress.progress || {};

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

  dispatch(setComputerScienceProgress(overallProgress));

  return (
    <main>
      {/* ✅ Top-level overall progress */}
      <section className="mb-6">
        <Card
          onClick={() => navigate("/subject/computerscience")}
          className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-md rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 cursor-pointer hover:shadow-lg transition"
        >
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Overall Computer Science Progress
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              {completedAll} / {totalChaptersAll} chapters completed
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <ProgressCircle value={overallProgress} size={80} />
          </div>
        </Card>
      </section>

      {/* ✅ Subsubject grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
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
                className="cursor-pointer hover:shadow-lg transition rounded-xl flex flex-col justify-between"
              >
                <CardHeader className="flex flex-col sm:items-center sm:justify-between space-y-3 sm:space-y-0 gap-4">
                  <div>
                    <CardTitle className="text-base sm:text-lg font-semibold">
                      {chapter.name}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground">
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


