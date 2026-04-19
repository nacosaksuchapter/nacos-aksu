import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquareLock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Message sent", description: "We'll get back to you shortly. (Backend coming soon.)" });
    }, 600);
  };

  const handleSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    toast({ title: "Suggestion received", description: "Thanks for sharing — your message is anonymous. (Backend coming soon.)" });
    setSuggestion("");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's hear from you."
        description="Reach out to the executive board, ask a question, or drop an anonymous suggestion."
      />

      <section className="py-16">
        <div className="container mx-auto container-px grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8 border-border shadow-card-soft">
              <h2 className="font-display text-2xl font-bold mb-2">Send us a message</h2>
              <p className="text-sm text-muted-foreground mb-6">We typically respond within 48 hours.</p>
              <form onSubmit={handleContact} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Your name" maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@aksu.edu.ng" maxLength={255} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required placeholder="What's this about?" maxLength={150} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required placeholder="Tell us more..." rows={6} maxLength={1000} />
                </div>
                <Button type="submit" variant="default" size="lg" disabled={submitting}>
                  <Send className="h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <Card className="mt-6 p-6 md:p-8 border-border shadow-card-soft bg-accent-soft/40">
              <div className="flex items-start gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground inline-flex items-center justify-center shrink-0">
                  <MessageSquareLock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">Anonymous Suggestion Box</h2>
                  <p className="text-sm text-muted-foreground mt-1">No name, no email — just your honest thoughts. Only the executive board sees these.</p>
                </div>
              </div>
              <form onSubmit={handleSuggestion} className="space-y-4">
                <Textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Share an idea, concern, or feedback..."
                  rows={4}
                  maxLength={1000}
                  className="bg-background"
                />
                <Button type="submit" variant="hero">
                  <Send className="h-4 w-4" /> Submit Anonymously
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-6 border-border shadow-card-soft">
              <h3 className="font-display font-semibold text-lg mb-4">Get in touch</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="font-medium">Department of Computing</div>
                    <div className="text-muted-foreground">Akwa Ibom State University, Mkpat Enin</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <a href="mailto:nacos@aksu.edu.ng" className="hover:text-accent transition-smooth">nacos@aksu.edu.ng</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span className="text-muted-foreground">+234 800 000 0000</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-border shadow-card-soft gradient-hero text-primary-foreground">
              <h3 className="font-display font-semibold text-lg mb-2">Become a Member</h3>
              <p className="text-sm opacity-85 mb-4">Join NACOS and get access to materials, events, and a community of computing students.</p>
              <Button variant="hero" className="w-full">Join Now</Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
