import { Home, BookOpen, Bot, ClipboardCheck, LineChart, Settings, HelpCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import ChaptersPage from "@/pages/Subjects/ChapterPage";

const navItems = [
  { to: "/", label: "Dashboard", icon: Home },
  { to: "/lessons", label: "Lessons", icon: BookOpen },
  { to: "/", label: "Subjects", icon: BookOpen },
  { to: "/assistant", label: "AI Assistant", icon: Bot },
  { to: "/Quiz", label: "Quizzes", icon: ClipboardCheck },
  // { to: "/progress", label: "Progress", icon: LineChart },
];

export const Sidebar = () => {
  return (
    <aside className="hidden sidebar-bg md:flex h-screen w-64 flex-col border-r bg-sidebar text-sidebar-foreground sticky top-0">
      <div className="h-16 sidebar-bg flex items-center px-6 font-semibold tracking-tight">
        <div className="  w-[50%]">
          <img src="/studymateAI.jpg"/>
        </div>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                "hover:bg-sidebar-accent",
                isActive && "bg-sidebar-accent text-foreground"
              )
            }
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-2 pb-4 space-y-1">
        <button className="w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-sidebar-accent">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        {/* <button className="w-full flex items-center gap-3 rounded-md px-3 py-2 hover:bg-sidebar-accent">
          <HelpCircle className="h-4 w-4" />
          <span>Help Center</span>
        </button> */}
      </div>
    </aside>
  );
};

export default Sidebar;
