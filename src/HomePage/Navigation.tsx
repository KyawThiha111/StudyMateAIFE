import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import studymateLogo from '@/assets/assets/studymate-logo.svg';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="primary p-2 rounded-xl shadow-soft">
              <img src={studymateLogo} alt="StudyMate AI" className="h-13 w-10 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">StudyMate AI</span>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center bg-color-blue space-x-4">
            <Button  onClick={() => navigate("/auth")} variant="ghost">Login</Button>
            <Button onClick={()=> navigate("/auth")} variant="blue">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;