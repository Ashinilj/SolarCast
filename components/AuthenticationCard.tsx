import React, { useState } from "react";
import { Card, CardContent } from "@components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@components/ui/tabs";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

const AuthenticationCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent, type: "login" | "signup") => {
    e.preventDefault();
    if (type === "login") {
      console.log("Login:", { email, password });
    } else {
      console.log("Sign Up:", { email, password });
    }
  };

  return (
    <Card className="bg-[#1C1C1F]/50 border-gray-800 p-6 flex flex-col items-center text-center">
      <div className="mb-4">
        <div className="h-8 w-8 bg-[#1C1C1F] rounded-lg mb-4" />
        <h3 className="text-blue-400 font-bold mb-2">Authentication</h3>
        <p className="text-gray-500 text-sm mb-4">
          Please enter your credentials to login or sign up for an account.
        </p>
      </div>
      
      <CardContent className="w-full">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={(e) => handleSubmit(e, "login")} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="login-email" className="text-sm font-medium text-white">Email</label>
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="login-password" className="text-sm font-medium text-white">Password</label>
                <Input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-black"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white">Login</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-sm font-medium text-white">Email</label>
                <Input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-sm font-medium text-white">Password</label>
                <Input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-black"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white">Sign Up</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AuthenticationCard;