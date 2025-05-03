import { Button } from "@/Components/ui/button";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-[100vh] bg-[#e0e0e0]">
      Home Component
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default Home;
