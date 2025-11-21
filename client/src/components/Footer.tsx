import { Button } from "@/components/ui/button";
import { ChevronUp, Dumbbell } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 bg-card border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
            data-testid="button-back-to-top"
          >
            <ChevronUp className="w-4 h-4" />
            回到頂端
          </Button>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Dumbbell className="w-5 h-5 text-primary" />
            <span className="text-sm">永不放棄，追求卓越</span>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} 學生運動部落格. All rights reserved.</p>
            <p className="mt-1">Built with passion and dedication</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
