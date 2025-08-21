import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
/* Auth */
import { LoginSignUp } from "./pages/Auth/LoginSignUp";
import Index from "./pages/Index";
import index_page from "./HomePage/index";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import OptionPage from "./pages/option";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouteGuard } from "./components/RouteGuard/RouteGuard";
//New
import MainChatbot from "./components/ai/MainChatbot";
import ChaptersPage from "./pages/Subjects/ChapterPage"
import CSChapterPage from "./pages/ComputerScience/ChapterPage";
import IndexPage from "./HomePage/index";
const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />


            {/* Protected Route */}
            <Route path="/dashboard" element={<RouteGuard><Index /></RouteGuard>} />
            <Route path="/lessons" element={<RouteGuard><Lessons /></RouteGuard>} />
            <Route path="/option" element={<RouteGuard><OptionPage/></RouteGuard>}/>
            <Route path="/quiz" element={<RouteGuard><Quiz/></RouteGuard>} />
            <Route path="/aichat" element={<RouteGuard><MainChatbot /></RouteGuard>} />
            <Route path="/subject/:subjectname" element={<RouteGuard><ChaptersPage /></RouteGuard>} />
            <Route path="/computerscience/:subsubject/:chapter" element={<RouteGuard><CSChapterPage/></RouteGuard>}/>
            {/* Public Route */}
            <Route path="/auth" element={<LoginSignUp/>}/>
        
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
  </Provider>
);

export default App;
