
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Skull, Briefcase, Shield } from "lucide-react";

type StatsCardProps = {
  missions: number;
  kills: number;
  respect: number;
  crimes: number;
};

const StatsCard: React.FC<StatsCardProps> = ({
  missions,
  kills,
  respect,
  crimes,
}) => {
  return (
    <Card className="w-full bg-card animate-slide-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Target className="w-4 h-4" /> Quick Stats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
              <Briefcase className="w-4 h-4 text-mafia-gray" />
            </div>
            <div>
              <p className="text-xs text-mafia-gray">Missions</p>
              <p className="font-medium">{missions}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
              <Skull className="w-4 h-4 text-mafia-gray" />
            </div>
            <div>
              <p className="text-xs text-mafia-gray">Kills</p>
              <p className="font-medium">{kills}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
              <Shield className="w-4 h-4 text-mafia-gray" />
            </div>
            <div>
              <p className="text-xs text-mafia-gray">Respect</p>
              <p className="font-medium">{respect}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
              <Target className="w-4 h-4 text-mafia-gray" />
            </div>
            <div>
              <p className="text-xs text-mafia-gray">Crimes</p>
              <p className="font-medium">{crimes}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
