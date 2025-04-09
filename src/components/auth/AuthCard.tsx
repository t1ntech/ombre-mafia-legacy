
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gun, Lock, Mail, User } from "lucide-react";

type AuthCardProps = {
  onLogin: (email: string, password: string) => void;
  onRegister: (username: string, email: string, password: string) => void;
};

const AuthCard: React.FC<AuthCardProps> = ({ onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      onRegister(username, email, password);
    }
  };
  
  return (
    <Card className="w-[350px] sm:w-[400px] bg-card border-mafia-gray/20 shadow-xl animate-fade-in">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2 justify-center mb-2">
          <Gun className="w-6 h-6 text-mafia-accent" />
          <CardTitle className="text-2xl text-center font-bold">Mafia Legacy</CardTitle>
        </div>
        <CardDescription className="text-center text-mafia-lightGray">
          {isLogin ? "Login to continue your legacy" : "Register to begin your legacy"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="username" 
                  placeholder="Don Corleone" 
                  className="pl-10" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full">
            {isLogin ? "Login" : "Register"}
          </Button>
          <p className="text-center text-sm text-mafia-gray">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-mafia-accent hover:underline focus:outline-none"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthCard;
