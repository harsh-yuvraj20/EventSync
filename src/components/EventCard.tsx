import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  price: string;
  category: string;
  image: string;
}

const EventCard = ({ title, date, location, attendees, price, category, image }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 hover:shadow-hover transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5 space-y-3">
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{attendees.toLocaleString()} attending</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t">
          <span className="text-lg font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground">per ticket</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
