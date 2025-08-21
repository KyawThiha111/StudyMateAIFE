import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Clock, Users, ArrowRight, Code, Database, Cpu, Network } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Programming Fundamentals',
      description: 'Master programming concepts and algorithms',
      icon: Code,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      lessons: 120,
      students: 2340,
      rating: 4.9,
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      description: 'Deep dive into DSA concepts and problem solving',
      icon: Database,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      lessons: 85,
      students: 1890,
      rating: 4.8,
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: 'Computer Networks',
      description: 'Network protocols, security, and infrastructure',
      icon: Network,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      lessons: 65,
      students: 1560,
      rating: 4.9,
      difficulty: 'Professional'
    },
    {
      id: 4,
      title: 'System Architecture',
      description: 'Computer organization and system design',
      icon: Cpu,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      lessons: 75,
      students: 1230,
      rating: 4.7,
      difficulty: 'Advanced'
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master <span className="text-gradient-primary">Computer Science Topics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with quizzes across 3 difficulty levels: Beginner, Advanced, and Professional. Test your CS knowledge!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="group bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${course.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className={`h-6 w-6 ${course.iconColor}`} />
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{course.lessons} questions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{course.students.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{course.difficulty}</span>
                </div>
                
                <Button variant="hero" className="w-full group">
                  Start Quiz
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Course Spotlight */}
        <Card className="bg-gradient-hero text-white border-0 shadow-strong">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" />
                  <span>Most Popular Course</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  💻 Complete Programming Track
                </h3>
                <p className="text-white/90 text-lg">
                  Master programming from basics to advanced algorithms with our comprehensive quiz collection. 
                  Includes 3 difficulty levels, instant feedback, and chatbot assistance for instant help.
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>500+ questions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>3,000+ students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quiz Topics:</h4>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Programming Fundamentals & Syntax</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• Object-Oriented Programming</li>
                    <li>• System Design & Architecture</li>
                  </ul>
                </div>
                <Button variant="secondary" size="lg" className="w-full">
                  Start Practice - Free Access!
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoursesSection;