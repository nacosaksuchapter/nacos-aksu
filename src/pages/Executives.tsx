import { useState } from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { cn } from "@/lib/utils";

interface Exec {
  name: string;
  role: string;
  bio: string;
  initials: string;
  current: boolean;
}

const execs: Exec[] = [
  { name: "Coming Soon", role: "President", bio: "Leads the executive board and represents the association.", initials: "PR", current: true },
  { name: "Coming Soon", role: "Vice President", bio: "Supports the President and oversees internal operations.", initials: "VP", current: true },
  { name: "Coming Soon", role: "General Secretary", bio: "Manages records, communications, and meetings.", initials: "GS", current: true },
  { name: "Coming Soon", role: "Financial Secretary", bio: "Oversees finances and member contributions.", initials: "FS", current: true },
  { name: "You", role: "Director of Software", bio: "Leads digital initiatives and the official NACOS AKSU site.", initials: "DS", current: true },
  { name: "Coming Soon", role: "Director of Academics", bio: "Coordinates study materials and academic support.", initials: "DA", current: true },
  { name: "Coming Soon", role: "Director of Welfare", bio: "Champions student welfare and support programs.", initials: "DW", current: true },
  { name: "Coming Soon", role: "P.R.O.", bio: "Manages public relations and outreach.", initials: "PR", current: true },
];

const Executives = () => {
  const [filter, setFilter] = useState<"current" | "past">("current");
  const list = execs.filter((e) => (filter === "current" ? e.current : !e.current));

  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Meet the people leading NACOS AKSU."
        description="The executive board working day-to-day to serve every computing student in our department."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto container-px">
          <div className="inline-flex p-1 bg-secondary rounded-lg mb-10">
            {(["current", "past"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-5 py-2 text-sm font-medium rounded-md transition-smooth capitalize",
                  filter === f ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f} executives
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">No past executives recorded yet.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {list.map((e, i) => (
                <Card key={i} className="p-6 border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth text-center">
                  <div className="mx-auto h-24 w-24 rounded-full gradient-hero text-primary-foreground flex items-center justify-center font-display text-2xl font-bold mb-4 shadow-glow">
                    {e.initials}
                  </div>
                  <h3 className="font-display font-semibold text-lg">{e.name}</h3>
                  <p className="text-accent text-sm font-medium mt-1">{e.role}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{e.bio}</p>
                  <div className="flex justify-center gap-2 mt-5">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Executives;
