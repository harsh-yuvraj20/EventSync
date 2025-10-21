import { Music, Code, Utensils, Trophy, Palette, Laugh } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Music", icon: Music, color: "text-purple-500" },
  { name: "Tech", icon: Code, color: "text-blue-500" },
  { name: "Food", icon: Utensils, color: "text-orange-500" },
  { name: "Sports", icon: Trophy, color: "text-green-500" },
  { name: "Art", icon: Palette, color: "text-pink-500" },
  { name: "Comedy", icon: Laugh, color: "text-yellow-500" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Browse by Category
          </h2>
          <p className="text-muted-foreground">
            Find events that match your interests
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group cursor-pointer hover:shadow-hover transition-all duration-300 border-border/50"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {category.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
