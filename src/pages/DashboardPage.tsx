
import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import PlayerCard from "@/components/dashboard/PlayerCard";
import StatsCard from "@/components/dashboard/StatsCard";
import NewsCard from "@/components/dashboard/NewsCard";

const sampleNews = [
  {
    id: 1,
    title: "Don Vito's family takes control of Downtown",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "New weapons available at the black market",
    time: "4 hours ago"
  },
  {
    id: 3,
    title: "Police raids affecting smuggling routes",
    time: "6 hours ago"
  },
  {
    id: 4,
    title: "Gang war erupts in the East Side",
    time: "Yesterday"
  }
];

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Mock player data (in a real app would come from API/backend)
  const playerData = {
    username: "DonCorleone",
    money: 2567430,
    rank: "Underboss",
    level: 24,
    health: 85,
    energy: 62,
    experience: 1420,
    nextLevelExp: 2000,
    stats: {
      missions: 145,
      kills: 37,
      respect: 2430,
      crimes: 283
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader
        username={playerData.username}
        money={playerData.money}
        rank={playerData.rank}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold mb-6">Your Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Player card */}
              <div className="lg:col-span-1">
                <PlayerCard 
                  username={playerData.username}
                  rank={playerData.rank}
                  level={playerData.level}
                  health={playerData.health}
                  energy={playerData.energy}
                  experience={playerData.experience}
                  nextLevelExp={playerData.nextLevelExp}
                />
              </div>
              
              {/* Stats card */}
              <div className="lg:col-span-1">
                <StatsCard 
                  missions={playerData.stats.missions}
                  kills={playerData.stats.kills}
                  respect={playerData.stats.respect}
                  crimes={playerData.stats.crimes}
                />
              </div>
              
              {/* News card */}
              <div className="lg:col-span-1">
                <NewsCard news={sampleNews} />
              </div>
              
              {/* More cards can be added here as needed */}
            </div>
            
            {/* Game actions section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <ActionButton label="Crime" />
                <ActionButton label="Missions" />
                <ActionButton label="Racket" />
                <ActionButton label="Casino" />
                <ActionButton label="Black Market" />
                <ActionButton label="Hospital" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label }) => {
  return (
    <button className="bg-card hover:bg-mafia-charcoal p-4 rounded-lg border border-mafia-gray/20 transition-colors">
      <p className="text-sm font-medium">{label}</p>
    </button>
  );
};

export default DashboardPage;
