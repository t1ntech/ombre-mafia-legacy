
import React from "react";
import AuthCard from "@/components/auth/AuthCard";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Building, Briefcase, User, Gun } from "lucide-react";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt", { email, password });
    // This would normally validate with a backend
    // For now we'll just simulate a successful login
    toast.success("Login successful");
    navigate("/dashboard");
  };
  
  const handleRegister = (username: string, email: string, password: string) => {
    console.log("Registration attempt", { username, email, password });
    // This would normally register with a backend
    // For now we'll just simulate a successful registration
    toast.success("Registration successful! Welcome to Mafia Legacy!");
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mafia-charcoal to-mafia-dark z-0" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-8 flex flex-1 flex-col">
        {/* Logo and title */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <Gun className="w-8 h-8 text-mafia-accent" />
            <h1 className="text-3xl md:text-4xl font-bold">Mafia Legacy</h1>
          </div>
          <p className="mt-2 text-mafia-gray">The text-based Mafia MMORPG</p>
        </div>
        
        {/* Main content */}
        <div className="flex flex-1 items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left feature column (hidden on mobile) */}
            <div className="hidden md:flex flex-col space-y-6 justify-center items-end">
              <FeatureItem 
                icon={<Gun className="w-5 h-5" />} 
                title="Crime Operations" 
                description="Perform heists, robberies, and take over territories" 
              />
              <FeatureItem 
                icon={<User className="w-5 h-5" />} 
                title="Build Your Character" 
                description="Customize skills and attributes that fit your playstyle" 
              />
            </div>
            
            {/* Auth card */}
            <div className="flex justify-center">
              <AuthCard onLogin={handleLogin} onRegister={handleRegister} />
            </div>
            
            {/* Right feature column (hidden on mobile) */}
            <div className="hidden md:flex flex-col space-y-6 justify-center items-start">
              <FeatureItem 
                icon={<Building className="w-5 h-5" />} 
                title="Own Businesses" 
                description="Purchase and manage illicit operations across the city" 
              />
              <FeatureItem 
                icon={<Briefcase className="w-5 h-5" />} 
                title="Join a Family" 
                description="Climb the ranks in your mafia family or create your own" 
              />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-mafia-gray">
            © 2025 Mafia Legacy | A text-based MMORPG
          </p>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3 max-w-xs animate-fade-in">
      <div className="bg-mafia-accent/10 p-2 rounded-lg">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-mafia-gray">{description}</p>
      </div>
    </div>
  );
};

export default AuthPage;
