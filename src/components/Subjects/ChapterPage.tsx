// ChaptersPage.tsx
import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubjectDataType } from "../SubjectData/ComputerScience/CSData";
/* Sub Data */
import ComputerScienceData from "../SubjectData/ComputerScience/CSData";
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";

/* Example Backend fetched json using RTK */
// Name has to be exactly the same (includes)
const ComputerSciencProgess = {
  userId: "abc123",
  progress: {
    Javascript: [1, 2], // completed chapters
    "Frontend development": [],
    "Introduction to Backend Development with Node.js and Express": [1],
  },
};

interface SubjectProp {
  subjectname: string;
}

interface SubProgessType {
  userId: string;
  progress: {
    [courseName: string]: number[];
  };
}

const ChaptersComponent: React.FC<SubjectProp> = ({ subjectname }) => {
  let SubData: SubjectDataType;
  let SubProgress: SubProgessType;

  /* Assigning Sub Data & Progress */
  if (subjectname === "computerscience") {
    SubData = ComputerScienceData;
    SubProgress = ComputerSciencProgess;
  } else {
    return <div>No subject found</div>;
  }

  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        {SubData.subject} - Chapters
      </h1>

      <div className="space-y-4">
        {SubData.subSubject.map((subsubdata) => {
          return (
            <div key={subsubdata.name}>
              <div className="text-xl md:text-2xl font-semibold mb-2">
                {subsubdata.name}
              </div>

              {subsubdata.chapter.map((chapter) => {
                const completedChapter =
                  SubProgress.progress[subsubdata.name] || [];

                // ✅ Fixed: use chapter.chapter instead of index
                const isUnlocked =
                  chapter.chapter === 1 ||
                  completedChapter.includes(chapter.chapter) ||
                   completedChapter.includes(chapter.chapter - 1);

                const isCompleted = completedChapter.includes(chapter.chapter)
            
                return (
                  <Card
                    key={chapter.chapter}
                    className={`transition-all duration-200 ${
                      isUnlocked
                        ? "hover:shadow-lg cursor-pointer"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (isUnlocked) navigate(chapter.route);
                    }}
                  >
                    <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                      <CardTitle className="text-lg font-semibold">
                        Chapter {chapter.chapter}: {chapter.title}
                      </CardTitle>
                      {!isUnlocked && (
                        <LockClosedIcon className="w-5 h-5 text-muted-foreground" />
                      )}
                      {isCompleted &&(
                        <Trophy className="w-5 h-5 text-yellow-500 drop-shadow-md" />
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        {isUnlocked
                          ? `Topics: ${chapter.content.join(", ")}`
                          : "This chapter is locked."}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChaptersComponent;
