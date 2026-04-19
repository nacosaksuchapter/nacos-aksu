import { Calendar, MapPin, ArrowRight, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";

const upcoming = [
  { title: "NACOS Tech Week 2025", date: "March 10–14, 2025", venue: "AKSU Main Auditorium", desc: "Workshops, hackathon, and industry talks across 5 days." },
  { title: "Intro to AI Workshop", date: "Feb 22, 2025", venue: "Computing Lab 2", desc: "Hands-on session for 200 & 300 level students." },
];

const past = [
  { title: "Welcome Week 2024", date: "Sep 2024" },
  { title: "Code Jam Vol. 2", date: "Jul 2024" },
  { title: "Departmental Dinner", date: "Jun 2024" },
];

const news = [
  { title: "Course materials updated for 200L", date: "2 days ago", excerpt: "Fresh notes and past questions just dropped — check the Studies tab." },
  { title: "Welcome address from the new exec board", date: "1 week ago", excerpt: "A note from the new President to every NACOS member." },
  { title: "Departmental dinner — save the date", date: "2 weeks ago", excerpt: "End-of-session celebration coming up. Don't miss it." },
];

const Events = () => {
  return (
    <>
      <PageHeader
        eyebrow="Events & News"
        title="What's happening in NACOS AKSU."
        description="Upcoming events, past highlights, and the latest announcements from your association."
      />

      <section className="py-16">
        <div className="container mx-auto container-px">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {upcoming.map((e) => (
              <Card key={e.title} className="overflow-hidden border-border shadow-card-soft hover:shadow-elegant transition-smooth">
                <div className="aspect-[16/9] gradient-hero flex items-center justify-center text-primary-foreground">
                  <Calendar className="h-14 w-14 opacity-40" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3">{e.title}</h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground mb-4">
                    <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {e.date}</div>
                    <div className="inline-flex items-center gap-2 ml-4"><MapPin className="h-4 w-4" /> {e.venue}</div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5">{e.desc}</p>
                  <Button variant="default">Register <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto container-px">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Newspaper className="h-6 w-6 text-accent" />
            Latest News
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {news.map((n) => (
              <Card key={n.title} className="p-6 border-border shadow-card-soft hover:shadow-elegant transition-smooth">
                <div className="text-xs text-muted-foreground mb-2">{n.date}</div>
                <h3 className="font-display font-semibold text-lg leading-snug mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto container-px">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Past Events</h2>
          <div className="space-y-3">
            {past.map((e) => (
              <Card key={e.title} className="p-5 border-border flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-display font-semibold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.date}</p>
                </div>
                <Button variant="ghost" size="sm">View highlights <ArrowRight className="h-3.5 w-3.5" /></Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
