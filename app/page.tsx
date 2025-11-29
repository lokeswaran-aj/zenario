import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/ui/logo";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 p-4">
      <div className="flex items-center justify-center gap-2">
        <AppLogo width={40} height={40} />
        <h1 className="text-4xl font-bold">Zenario</h1>
      </div>
      <p className="text-lg text-center">
        Role-play real scenarios with smart AI agents and level up communication
        skills with instant feedback.
      </p>
      <Button size="lg">
        Get started
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
