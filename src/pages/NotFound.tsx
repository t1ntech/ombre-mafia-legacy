
import React from "react";
import { Button } from "@/components/ui/button";
import { Gun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4 max-w-md">
        <div className="flex justify-center">
          <div className="bg-mafia-accent/20 p-3 rounded-full">
            <Gun className="w-10 h-10 text-mafia-accent" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-medium">Missing Territory</h2>
        <p className="text-mafia-gray">
          The location you're looking for doesn't exist or has been taken over by rival families.
        </p>
        <Button 
          className="mt-4" 
          onClick={() => navigate("/")}
        >
          Return to safe territory
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
