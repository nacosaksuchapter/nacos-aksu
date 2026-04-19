import { Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";

const albums = [
  { title: "Tech Week 2024", count: 24, date: "March 2024" },
  { title: "Welcome Week 2024", count: 18, date: "Sept 2024" },
  { title: "Code Jam Vol. 2", count: 32, date: "July 2024" },
  { title: "Departmental Dinner", count: 41, date: "June 2024" },
  { title: "Industry Visit", count: 15, date: "May 2024" },
  { title: "Hackathon Finals", count: 28, date: "April 2024" },
];

const Gallery = () => {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments that define our community."
        description="Photos from events, gatherings, and the everyday life of NACOS AKSU."
      />

      <section className="py-16">
        <div className="container mx-auto container-px">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {albums.map((a) => (
              <Card
                key={a.title}
                className="overflow-hidden border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth cursor-pointer group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary via-primary-glow to-accent/40 flex items-center justify-center text-primary-foreground relative overflow-hidden">
                  <ImageIcon className="h-12 w-12 opacity-40 group-hover:scale-110 transition-smooth" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/95 text-foreground text-xs font-medium">
                    {a.count} photos
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
