
import React from "react";
import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type DashboardHeaderProps = {
  username: string;
  money: number;
  rank: string;
  onMenuToggle: () => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  username, 
  money, 
  rank,
  onMenuToggle 
}) => {
  return (
    <header className="bg-card border-b border-mafia-gray/20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={onMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold hidden md:block">Mafia Legacy</h1>
        </div>
        
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="border border-mafia-gray/20 bg-mafia-dark rounded-md px-3 py-1 text-sm">
            <span className="text-mafia-gray">Rank:</span> {rank}
          </div>
          <div className="border border-mafia-gray/20 bg-mafia-dark rounded-md px-3 py-1 text-sm hidden sm:block">
            <span className="text-mafia-gray">Cash:</span> ${money.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-mafia-charcoal flex items-center justify-center">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
