import { useState } from "react";
import { Search, FileText, Download, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PageHeader } from "@/components/layout/PageHeader";

interface Course {
  code: string;
  title: string;
  units: number;
  description: string;
  materials: number;
}

const coursesByLevel: Record<string, Course[]> = {
  "100": [
    { code: "COM 111", title: "Introduction to Computing", units: 3, description: "Foundational concepts of computing, hardware, and software.", materials: 4 },
    { code: "COM 112", title: "Programming Fundamentals", units: 3, description: "Problem solving and intro to a high-level language.", materials: 6 },
    { code: "MTH 111", title: "Elementary Mathematics I", units: 3, description: "Algebra, set theory, and basic calculus foundations.", materials: 3 },
  ],
  "200": [
    { code: "COM 211", title: "Data Structures", units: 3, description: "Arrays, linked lists, stacks, queues, trees, and graphs.", materials: 5 },
    { code: "COM 212", title: "Object-Oriented Programming", units: 3, description: "OOP principles, classes, inheritance, polymorphism.", materials: 7 },
    { code: "COM 213", title: "Discrete Structures", units: 2, description: "Logic, sets, relations, and combinatorics for computing.", materials: 3 },
  ],
  "300": [
    { code: "COM 311", title: "Database Systems", units: 3, description: "Relational model, SQL, normalization, transactions.", materials: 6 },
    { code: "COM 312", title: "Operating Systems", units: 3, description: "Processes, threads, scheduling, memory, and file systems.", materials: 5 },
    { code: "COM 313", title: "Software Engineering", units: 3, description: "Software lifecycle, requirements, design, and testing.", materials: 4 },
  ],
  "400": [
    { code: "COM 411", title: "Artificial Intelligence", units: 3, description: "Search, knowledge representation, intro to machine learning.", materials: 5 },
    { code: "COM 412", title: "Computer Networks", units: 3, description: "OSI model, TCP/IP, routing, and network security basics.", materials: 6 },
    { code: "COM 499", title: "Final Year Project", units: 6, description: "Independent research and engineering project.", materials: 2 },
  ],
};

const Studies = () => {
  const [query, setQuery] = useState("");
  const levels = ["100", "200", "300", "400"];

  return (
    <>
      <PageHeader
        eyebrow="Studies Hub"
        title="Courses & materials, organized by level."
        description="Find every course offered in our department, browse descriptions, and download materials shared by your peers and lecturers."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto container-px">
          <div className="relative max-w-xl mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by course code or title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <Tabs defaultValue="100" className="w-full">
            <TabsList className="h-auto p-1 bg-secondary flex flex-wrap">
              {levels.map((l) => (
                <TabsTrigger key={l} value={l} className="flex-1 min-w-[80px] data-[state=active]:bg-background">
                  {l} Level
                </TabsTrigger>
              ))}
            </TabsList>

            {levels.map((l) => {
              const filtered = coursesByLevel[l].filter(
                (c) =>
                  c.code.toLowerCase().includes(query.toLowerCase()) ||
                  c.title.toLowerCase().includes(query.toLowerCase()),
              );
              return (
                <TabsContent key={l} value={l} className="mt-8">
                  {filtered.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      No courses match your search.
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {filtered.map((c) => (
                        <Card key={c.code} className="p-6 border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="h-10 w-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                              <BookOpen className="h-5 w-5" />
                            </div>
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                              {c.units} units
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{c.code}</div>
                          <h3 className="font-display font-semibold text-lg leading-snug mb-2">{c.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{c.description}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5" />
                              {c.materials} materials
                            </span>
                            <Button variant="ghost" size="sm" className="h-8">
                              <Download className="h-3.5 w-3.5" /> View
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Studies;
