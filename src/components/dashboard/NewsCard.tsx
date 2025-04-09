
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Clock } from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  time: string;
};

type NewsCardProps = {
  news: NewsItem[];
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="w-full bg-card animate-slide-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Newspaper className="w-4 h-4" /> Latest News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {news.map((item) => (
            <div 
              key={item.id}
              className="p-2 hover:bg-mafia-dark rounded-md transition-colors cursor-pointer border border-transparent hover:border-mafia-gray/20"
            >
              <p className="text-sm font-medium">{item.title}</p>
              <div className="flex items-center gap-1 text-xs text-mafia-gray mt-1">
                <Clock className="w-3 h-3" />
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
