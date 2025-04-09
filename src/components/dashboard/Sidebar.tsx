
import React from "react";
import { Button } from "@/components/ui/button";
import { Sword, Briefcase, Map, Users, BarChart3, Swords, Building, Wallet, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { name: "Profile", icon: <Sword className="w-5 h-5" /> },
  { name: "Missions", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Territory", icon: <Map className="w-5 h-5" /> },
  { name: "Family", icon: <Users className="w-5 h-5" /> },
  { name: "Stats", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Combat", icon: <Swords className="w-5 h-5" /> },
  { name: "Properties", icon: <Building className="w-5 h-5" /> },
  { name: "Market", icon: <Wallet className="w-5 h-5" /> },
  { name: "Settings", icon: <Settings className="w-5 h-5" /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-card border-r border-mafia-gray/20 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-mafia-gray/20 flex items-center gap-2">
          <Sword className="w-6 h-6 text-mafia-accent" />
          <h2 className="text-xl font-bold">Mafia Legacy</h2>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start gap-3 py-2" 
                  onClick={() => console.log(item.name)}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
