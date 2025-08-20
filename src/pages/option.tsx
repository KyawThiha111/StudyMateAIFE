import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OptionPage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Basic",
      desc: "We value your feedback to help improve our platform.",
      cta: "Quiz",
    },
    {
      title: "Advanced",
      desc: "We value your feedback to help improve our platform.",
      cta: "Quiz",
    },
    {
      title: "Final",
      desc: "We value your feedback to help improve our platform.",
      cta: "Quiz",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-sm"
          >
            <div className="group relative rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/0 group-hover:to-blue-500/10 pointer-events-none" />

              <div className="p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {c.desc}
                </p>

                <Button
                  onClick={() =>
                    navigate(
                      `/quiz/${encodeURIComponent(
                        c.title.toLowerCase().replace(/\s+/g, "-")
                      )}`
                    )
                  }
                >
                  {c.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OptionPage;
