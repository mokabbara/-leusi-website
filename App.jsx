import React from "react";

const siteData = {
  pillars: [
    {
      icon: "◎",
      title: "HSSE Awareness",
      text: "Practical awareness in health, safety, security, and environmental protection for frontline workers and communities.",
    },
    {
      icon: "▣",
      title: "Training and Certification",
      text: "Accessible training pathways aligned with Dutch and European safety principles, including VCA oriented learning.",
    },
    {
      icon: "◌",
      title: "Worker Readiness",
      text: "Preparing workers with the safety mindset, discipline, and professional habits expected by European and international companies.",
    },
    {
      icon: "◇",
      title: "Institutional Impact",
      text: "Supporting long term safety culture, pilot locations, and future policy development in Lebanon and the wider region.",
    },
  ],
  programs: [
    "Basic HSSE awareness modules for frontline workers",
    "Train the trainer pathway for local HSSE ambassadors",
    "Pilot safety compliance programs in selected locations",
    "Corporate readiness programs for employers and contractors",
    "Community awareness campaigns focused on prevention and dignity",
    "Advisory support for institutions, NGOs, and responsible employers",
  ],
  audiences: [
    "Frontline workers in Lebanon and Syria",
    "Refugees and vulnerable workers active in high risk sectors",
    "Local employers, contractors, and training centers",
    "Dutch and European companies entering Levant markets",
    "NGOs, municipalities, donors, and development partners",
    "Diaspora professionals seeking measurable social impact",
  ],
  impactSteps: [
    ["Train", "Deliver accessible HSSE learning for workers exposed to operational risks."],
    ["Organise", "Develop ambassadors who can influence teams, families, and workplaces."],
    ["Pilot", "Demonstrate measurable safety compliance in selected locations."],
    ["Scale", "Build partnerships that support policy, certification, and long term safety culture."],
  ],
};

function Button({ children, href, variant = "primary" }) {
  const base = "inline-flex min-h-12 items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition duration-200";
  const styles =
    variant === "secondary"
      ? "border border-white/20 bg-white/10 text-white hover:bg-white/15"
      : variant === "dark"
      ? "bg-slate-950 text-white hover:bg-slate-800"
      : "bg-emerald-400 text-slate-950 hover:bg-emerald-300";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${dark ? "text-emerald-300" : "text-emerald-700"}`}>
      {children}
    </p>
  );
}

function Card({ children, dark = false }) {
  return (
    <div className={`rounded-3xl p-6 shadow-sm ${dark ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white"}`}>
      {children}
    </div>
  );
}

export default function LEUSIWebsite() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="LEUSI home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-slate-950 shadow-lg shadow-emerald-400/20">
              L
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide">LEUSI</p>
              <p className="text-xs text-slate-300">Lebanese European Safety Initiative</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex" aria-label="Main navigation">
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button href="#contact">Join the Initiative</Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
            <div className="animate-[fadeIn_0.7s_ease-out]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                <span aria-hidden="true">✦</span>
                Safety awareness for workers, communities, and responsible employers
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Building a safer working culture for Lebanon and the region.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                LEUSI is a Netherlands based social initiative dedicated to HSSE awareness, training, and certification pathways for frontline workers in Lebanon and Syria. We connect human dignity, practical safety, and European professional standards.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#programs">Explore Programs →</Button>
                <Button href="#partners" variant="secondary">Partner With LEUSI</Button>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-emerald-950/30 backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-900 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Our 2026 focus</p>
                  <div className="mt-6 space-y-5">
                    {[
                      ["15", "HSSE ambassadors trained and certified"],
                      ["3", "pilot locations demonstrating measurable safety compliance"],
                      ["EU", "safety mindset adapted for local realities"],
                    ].map(([number, label]) => (
                      <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-4xl font-bold text-emerald-300">{number}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionLabel>Mission</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Safety is not only compliance. It is protection, dignity, and trust.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                LEUSI exists to help workers, employers, and institutions move from reactive safety behaviour to preventive safety culture. Our work is designed for people who face real operational risks, often with limited access to structured training, certification, and institutional protection.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-4">
              {siteData.pillars.map((item) => (
                <Card key={item.title}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-bold text-emerald-700">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="bg-slate-100 px-6 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Programs</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Practical pathways from awareness to readiness.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                LEUSI develops modular training and certification oriented programs that can be adapted for workers, employers, NGOs, and public institutions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {siteData.programs.map((program) => (
                <div key={program} className="flex gap-3 rounded-3xl bg-white p-5 shadow-sm">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">✓</span>
                  <p className="text-sm leading-6 text-slate-700">{program}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <SectionLabel dark>Impact model</SectionLabel>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">From individual awareness to system change.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  LEUSI starts with people. We train workers, develop local safety ambassadors, support pilot locations, and use evidence from practice to strengthen safety expectations across employers, communities, and institutions.
                </p>
              </div>
              <div className="space-y-4">
                {siteData.impactSteps.map(([title, text], index) => (
                  <Card key={title} dark>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-slate-950">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
              <div>
                <SectionLabel>Who we serve</SectionLabel>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Designed for workers and the institutions that protect them.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  LEUSI works at the intersection of safety, social enterprise, workforce development, ESG, and responsible market entry.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {siteData.audiences.map((audience) => (
                  <div key={audience} className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">○</div>
                    <p className="text-sm leading-6 text-slate-700">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-emerald-400 px-6 py-20 text-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-800">Call to action</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Help build a practical safety movement rooted in dignity and measurable impact.</h2>
            </div>
            <Button href="#contact" variant="dark">Start a Conversation</Button>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel dark>Contact</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Let’s connect around pilots, partnerships, and certification pathways.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                LEUSI welcomes conversations with safety professionals, employers, NGOs, donors, municipalities, certification partners, and diaspora leaders.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-xl">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-emerald-300">⌖</span>
                  <div>
                    <p className="font-semibold">Base</p>
                    <p className="text-slate-300">The Hague, The Netherlands</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-300">✉</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">info@leusi.org</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-300">◍</span>
                  <div>
                    <p className="font-semibold">Founder</p>
                    <p className="text-slate-300">Mo Kabbara</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-900 p-5">
                <p className="text-sm leading-6 text-slate-300">
                  Suggested first website email: info@leusi.org. This can be created in GoDaddy after the domain is connected.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© {currentYear} LEUSI. Lebanese European Safety Initiative.</p>
          <p>HSSE awareness, training, certification pathways, and social impact.</p>
        </div>
      </footer>
    </div>
  );
}