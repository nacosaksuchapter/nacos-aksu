
## NACOS AKSU — Department Site

A clean, professional site for the **Nigerian Association of Computing Students, AKSU chapter** that doubles as the go-to hub for both the association and academic studies. Built with a modern, light academic aesthetic with bold accent colors (deep blue + a warm secondary), generous whitespace, and crisp typography — professional enough to represent a department, energetic enough to feel student-led.

---

### Public Pages

**1. Home**
- Hero with department tagline, CTA buttons ("Join NACOS", "Explore Courses")
- Quick stats (members, levels, events held)
- Featured upcoming event + latest news previews
- Highlights of executives and a glimpse of the gallery

**2. About**
- Mission, vision, brief history of NACOS AKSU
- What the association does for students

**3. Executives / Leadership**
- Grid of cards: photo, name, role, short bio, social links
- Filter by current vs. past executives

**4. Studies** (the dedicated academic area you asked for)
- Tabs/filters by level: **100, 200, 300, 400**
- Each level shows its **courses** (code, title, units, description)
- Each course can have attached **materials** (PDFs, slides, links) downloadable by students
- Search bar to find a course quickly

**5. Events & News**
- Upcoming events (with date, venue, register button)
- Past events archive
- News/announcements feed with detail pages

**6. Gallery**
- Album-based photo gallery (per event), lightbox view

**7. Contact**
- Contact form, location, socials, exec emails

---

### New ideas to make it stand out (not in the old site, kept simple)

- **Academic Calendar widget** — visual term timeline showing exam weeks, key dates, and event days in one place.
- **Anonymous Suggestion Box** — students drop feedback/ideas to the executives without logging in; only admins see submissions.
- **Lecturer/Course Reviews (lightweight)** — students rate course difficulty and leave a short tip for juniors. Moderated by admins.
- **"Meet your Course Rep"** — quick directory linking each level to its rep with a one-tap WhatsApp/email contact.

Pick any combination — I'd recommend starting with the **Suggestion Box** and **Academic Calendar** for v1 since they're the highest-impact and easiest to maintain.

---

### Admin Panel (you, as Director of Software)

Login-protected dashboard at `/admin` powered by Lovable Cloud (database + auth + storage + role-based access).

You'll be able to:
- Manage **Executives** (add/edit/remove, upload photos)
- Manage **Courses & Materials** per level (upload PDFs/files)
- Post **Events** and **News** (with cover images)
- Manage **Gallery albums** (upload multiple photos)
- View **Suggestion Box** submissions and **Membership** signups
- Moderate course reviews (approve/reject)
- Invite other executives as admins

**Security:** Roles stored in a separate `user_roles` table (admin, exec, member) with proper RLS — only admins can edit content; the public site reads published content only.

---

### Tech & Design

- **Stack:** React + Tailwind + shadcn/ui, React Router, Lovable Cloud (Postgres + Auth + Storage)
- **Design system:** Light theme, deep navy primary + warm gold accent, Inter for body, a strong display font for headings, soft cards, subtle motion on scroll
- **Fully responsive** (mobile-first — many students will visit on phones)
- **SEO basics:** proper page titles, meta descriptions, Open Graph tags

---

### Build order

1. Design system + layout shell (nav, footer, routing)
2. Public pages with placeholder content (Home, About, Executives, Studies, Events, Gallery, Contact)
3. Lovable Cloud setup: database schema, auth, roles, storage buckets
4. Admin panel for all content types
5. Wire public pages to live data
6. Add the new features (Suggestion Box, Academic Calendar, etc. — based on your pick)
7. Polish, responsive QA, SEO

Once you approve, I'll start with steps 1–2 so you can see the shape of the site quickly, then layer in the backend.
