import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Discover Amazing{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and book tickets to concerts, conferences, festivals, and more. 
              Your next unforgettable experience awaits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events, artists, venues..."
                className="pl-10 h-12 bg-card shadow-soft"
              />
            </div>
            <Button size="lg" className="h-12 shadow-soft hover:shadow-hover transition-all">
              <MapPin className="mr-2 h-5 w-5" />
              Browse Events
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="secondary" className="rounded-full">
              <Calendar className="mr-2 h-4 w-4" />
              This Weekend
            </Button>
            <Button variant="secondary" className="rounded-full">
              Music
            </Button>
            <Button variant="secondary" className="rounded-full">
              Tech
            </Button>
            <Button variant="secondary" className="rounded-full">
              Sports
            </Button>
            <Button variant="secondary" className="rounded-full">
              Food & Drink
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
