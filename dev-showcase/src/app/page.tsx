import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-[320px] shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to DevShowcase</h2>
          <Button>Explore Projects</Button>
        </CardContent>
      </Card>
    </main>
  );
}
