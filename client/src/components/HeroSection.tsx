import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_basketball_action_shot_a42d72bf.png";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 tracking-tight">
          追求卓越
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mb-2">
          學生運動員的成長之路
        </p>
        <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl">
          熱愛運動，享受挑戰，用汗水書寫青春故事
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            variant="default"
            className="text-lg px-8 uppercase tracking-wide"
            onClick={scrollToAbout}
            data-testid="button-explore"
          >
            探索更多
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 uppercase tracking-wide bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-contact"
          >
            聯絡我
          </Button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
