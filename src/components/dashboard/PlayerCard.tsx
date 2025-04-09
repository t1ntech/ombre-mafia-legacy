
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Crown, Shield, Swords, Heart, Zap } from "lucide-react";

type PlayerCardProps = {
  username: string;
  rank: string;
  level: number;
  health: number;
  energy: number;
  experience: number;
  nextLevelExp: number;
};

const PlayerCard: React.FC<PlayerCardProps> = ({
  username,
  rank,
  level,
  health,
  energy,
  experience,
  nextLevelExp,
}) => {
  const expPercentage = (experience / nextLevelExp) * 100;
  
  return (
    <Card className="w-full bg-card animate-slide-in">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-mafia-accent/20 p-2 rounded-full">
              <Crown className="w-5 h-5 text-mafia-accent" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{username}</h3>
              <p className="text-xs text-mafia-gray">Rank: {rank}</p>
            </div>
          </div>
          <div className="bg-mafia-dark px-3 py-1 rounded-full text-sm font-medium border border-mafia-gray/20">
            Level {level}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Health</span>
                <span>{health}%</span>
              </div>
              <Progress value={health} className="h-2" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Energy</span>
                <span>{energy}%</span>
              </div>
              <Progress value={energy} className="h-2" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Swords className="w-4 h-4 text-mafia-accent" />
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Experience</span>
                <span>{experience}/{nextLevelExp}</span>
              </div>
              <Progress value={expPercentage} className="h-2" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
            <Shield className="w-4 h-4 mx-auto mb-1 text-mafia-gray" />
            <p className="text-xs">Attack</p>
            <p className="text-sm font-medium">152</p>
          </div>
          <div className="text-center p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
            <Shield className="w-4 h-4 mx-auto mb-1 text-mafia-gray" />
            <p className="text-xs">Defense</p>
            <p className="text-sm font-medium">98</p>
          </div>
          <div className="text-center p-2 bg-mafia-dark rounded-md border border-mafia-gray/20">
            <Swords className="w-4 h-4 mx-auto mb-1 text-mafia-gray" />
            <p className="text-xs">Fights</p>
            <p className="text-sm font-medium">42</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
