import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Target } from 'lucide-react';
import heroImage from '@/assets/assets/bg.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Cpu,MessageCircle } from 'lucide-react';
import aibot from "@/assets/assets/aibot.png"
const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-gradient-to-br from-background via-muted/20 to-primary/10 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-12">
  {/* Badge + Title */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 animate-fade-in">
      {/* AI Icon Badge */}
      <div className=" from-primary to-secondary p-3 rounded-2xl animate-pulse shadow-lg flex items-center justify-center space-x-2">
        <img src={aibot} className="w-14 h-14"  />
      </div>

      {/* Title */}
      <span className="text-blue-500 font-semibold text-lg lg:text-xl animate-slide-in-left">
        AI-Powered Learning Platform
      </span>
    </div>


              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight space-y-3 text-gray">
                <span className="block animate-fade-in-up text-4xl md:text-5xl lg:text-6xl">
                  Level Up with our AI 🏆
                </span>
                <span className="block text-gradient-hero animate-fade-in-up animation-delay-300">
                  Be Top 3 Student
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed animate-fade-in animation-delay-500">
                Achieve top rankings with AI-powered quizzes, unlock achievements, and track your progress in real-time. Level up your Computer Science skills faster than ever.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in animation-delay-700">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4 transition-transform hover:scale-105 animate-bounce"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Quiz Practice
              </Button>
              <Button
                variant="learning"
                size="lg"
                className="text-lg px-8 py-4 transition-transform hover:scale-105 animate-slide-in-right"
              >
                <Target className="h-5 w-5 mr-2" />
                Try AI Study Chat
              </Button>
            </div>

            {/* Quick Stats with CountUp
            <div ref={ref} className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center animate-fade-in-up animation-delay-900">
                <div className="text-3xl font-bold text-blue-500">
                  {inView ? <CountUp end={5000} duration={2} separator="," /> : '0'}
                </div>
                <div className="text-sm text-blue-500">Computer Science Students</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-1000">
                <div className="text-3xl font-bold text-blue-500">
                  {inView ? <CountUp end={25000} duration={2} separator="," /> : '0'}
                </div>
                <div className="text-sm text-blue-500">AI Quiz Questions</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-1100">
                <div className="text-3xl font-bold text-blue-500">
                  {inView ? <CountUp end={98} duration={2} suffix="%" /> : '0%'}
                </div>
                <div className="text-sm text-blue-500">Accuracy Rate</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-fade-in">
              <img
                src={heroImage}
                alt="Students learning with AI technology"
                className="w-full h-auto rounded-3xl shadow-xl transform transition-transform duration-700 hover:scale-105 animate-scale-up"
              />

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-warning text-white p-4 rounded-2xl shadow-lg animate-float-left">
                <div className="text-lg text-blue-500 font-bold">💻 Beginner to Professional Level!</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-card p-5 rounded-2xl shadow-lg animate-float-right">
                <div className="text-sm text-blue-500">Let's Learn Together</div>
                <div className="text-lg font-bold text-blue-500">🏆 Expert AI Chatbot</div>
                <div className="text-xs text-blue-500">Quizzes to Practice</div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-hero opacity-15 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
