import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Users, Sparkles, GraduationCap, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Active Members", value: "500+" },
  { label: "Academic Levels", value: "4" },
  { label: "Events Hosted", value: "25+" },
  { label: "Years Strong", value: "10+" },
];

const features = [
  {
    icon: GraduationCap,
    title: "Studies Hub",
    desc: "Courses and downloadable materials organized by level — 100 to 400.",
    to: "/studies",
  },
  {
    icon: Calendar,
    title: "Events & News",
    desc: "Hackathons, tech talks, and announcements from your association.",
    to: "/events",
  },
  {
    icon: Users,
    title: "Meet the Execs",
    desc: "Get to know the leaders driving NACOS AKSU forward this session.",
    to: "/executives",
  },
  {
    icon: Sparkles,
    title: "Suggestion Box",
    desc: "Drop anonymous ideas and feedback for the executive board.",
    to: "/contact",
  },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/40" aria-hidden />

        <div className="relative container mx-auto container-px py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 backdrop-blur text-xs font-medium uppercase tracking-wider mb-6 border border-primary-foreground/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Nigerian Association of Computing Students • AKSU
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Where computing students <span className="text-accent">build, learn,</span> and lead.
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-85 max-w-2xl leading-relaxed">
              The official home of NACOS, Akwa Ibom State University chapter — your hub for
              courses, materials, events, and the people moving our department forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Join NACOS <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/studies">
                  <BookOpen className="h-4 w-4" /> Explore Courses
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="relative mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-5 text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider opacity-75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto container-px">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">What's inside</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Everything a computing student needs, in one place.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Link key={f.title} to={f.to} className="group">
                <Card className="h-full p-6 border-border hover:border-accent/50 transition-smooth shadow-card-soft hover:shadow-elegant hover:-translate-y-1">
                  <div className="h-11 w-11 rounded-lg bg-accent-soft text-accent inline-flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent transition-smooth">
                    Open <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT + NEWS */}
      <section className="py-20 md:py-24 gradient-soft">
        <div className="container mx-auto container-px">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Happening now</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Featured event & latest news</h2>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/events">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 overflow-hidden border-border shadow-card-soft">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground">
                <Calendar className="h-16 w-16 opacity-40" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs font-medium text-accent mb-3 uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Upcoming • Tech Week
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">NACOS Tech Week 2025</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Five days of workshops, a hackathon, and industry talks. Open to all computing students
                  across every level.
                </p>
                <Button asChild variant="default">
                  <Link to="/events">Learn more <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </Card>

            <div className="space-y-5">
              {[
                { title: "Course materials updated for 200L", date: "2 days ago" },
                { title: "Welcome address from the new exec board", date: "1 week ago" },
                { title: "Departmental dinner — save the date", date: "2 weeks ago" },
              ].map((n) => (
                <Card key={n.title} className="p-5 border-border shadow-card-soft hover:shadow-elegant transition-smooth">
                  <div className="text-xs text-muted-foreground mb-2">{n.date}</div>
                  <h4 className="font-display font-semibold leading-snug">{n.title}</h4>
                  <Link to="/events" className="mt-3 inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GLIMPSE */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto container-px">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Moments</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">From our community</h2>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/gallery">Open gallery <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-accent-soft flex items-center justify-center text-muted-foreground hover:scale-[1.02] transition-smooth shadow-card-soft"
              >
                <ImageIcon className="h-8 w-8 opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto container-px">
          <div className="rounded-2xl gradient-hero text-primary-foreground p-10 md:p-16 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl mx-auto text-balance">
              Ready to be part of something bigger?
            </h2>
            <p className="mt-4 opacity-85 max-w-xl mx-auto">
              Join hundreds of computing students learning, building, and shaping the future of tech at AKSU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Become a Member</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
