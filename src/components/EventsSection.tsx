import EventCard from "./EventCard";
import eventMusic from "@/assets/event-music.jpg";
import eventTech from "@/assets/event-tech.jpg";
import eventFood from "@/assets/event-food.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventArt from "@/assets/event-art.jpg";
import eventComedy from "@/assets/event-comedy.jpg";

const events = [
  {
    id: 1,
    title: "Electronic Music Festival 2024",
    date: "Sat, Dec 28 • 8:00 PM",
    location: "Madison Square Garden, New York",
    attendees: 15420,
    price: "$89",
    category: "Music",
    image: eventMusic,
  },
  {
    id: 2,
    title: "Tech Innovation Summit",
    date: "Mon, Jan 15 • 9:00 AM",
    location: "Convention Center, San Francisco",
    attendees: 3200,
    price: "$299",
    category: "Tech",
    image: eventTech,
  },
  {
    id: 3,
    title: "International Food Festival",
    date: "Sun, Jan 7 • 11:00 AM",
    location: "Central Park, New York",
    attendees: 8500,
    price: "$25",
    category: "Food",
    image: eventFood,
  },
  {
    id: 4,
    title: "Championship Basketball Game",
    date: "Fri, Dec 29 • 7:30 PM",
    location: "Sports Arena, Los Angeles",
    attendees: 18000,
    price: "$125",
    category: "Sports",
    image: eventSports,
  },
  {
    id: 5,
    title: "Modern Art Exhibition",
    date: "Sat, Jan 13 • 10:00 AM",
    location: "Metropolitan Gallery, Chicago",
    attendees: 1200,
    price: "$35",
    category: "Art",
    image: eventArt,
  },
  {
    id: 6,
    title: "Stand-Up Comedy Night",
    date: "Fri, Jan 5 • 8:00 PM",
    location: "Comedy Club, Austin",
    attendees: 450,
    price: "$45",
    category: "Comedy",
    image: eventComedy,
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Popular Events
            </h2>
            <p className="text-muted-foreground">
              Don't miss out on these amazing experiences
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
