import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, MessageCircle, Building2, Briefcase, Coffee, Clock3 } from "lucide-react";

const CONTRACT_ADDRESS = "942BoiLyWXwBe7qSsjGWofXAVe5MTYdeyPJpba2omoon";
const TELEGRAM_LINK = "https://t.me/bored_shitless";

const signs = [
  { src: "/sign1.png", alt: "Office sign 1" },
  { src: "/sign2.png", alt: "Office sign 2" },
  { src: "/sign3.png", alt: "Office sign 3" },
  { src: "/sign4.png", alt: "Office sign 4" },
  { src: "/sign5.png", alt: "Office sign 5" },
];

const stats = [
  {
    icon: Clock3,
    title: "Clocked in",
    text: "Another day, another spreadsheet, another dream of escape.",
  },
  {
    icon: Briefcase,
    title: "Office mode",
    text: "Silver-and-grey corporate energy with a meme coin soul.",
  },
  {
    icon: Coffee,
    title: "Low energy",
    text: "Gary the sloth understands the grind better than anyone.",
  },
  {
    icon: Building2,
    title: "Corporate pain",
    text: "Built for everyone who has ever stared into the void of a Monday morning.",
  },
];

function copyCA() {
  navigator.clipboard.writeText(CONTRACT_ADDRESS);
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-300 via-zinc-200 to-slate-100 text-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_35%)] pointer-events-none" />

      <header className="relative border-b border-zinc-400/40 backdrop-blur-sm bg-white/40 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="$BORED logo"
              className="h-10 w-10 rounded-2xl object-cover ring-1 ring-zinc-500/20 shadow-md"
            />
            <div>
              <div className="text-lg font-semibold tracking-wide">$BORED</div>
              <div className="text-xs text-zinc-600">Corporate survival token</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild className="rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white">
              <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                Telegram <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-4 pt-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-zinc-400/30 bg-white/60 shadow-2xl"
          >
            <img
              src="/boredbanner.png"
              alt="BORED office banner"
              className="h-44 md:h-64 w-full object-cover"
            />
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 p-6 md:p-10">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-zinc-400/30 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm">
                  Modern office vibes. Terminal burnout. Gary gets it.
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-zinc-900">
                    The token for everyone
                    <span className="block text-zinc-500">bored of the daily grind.</span>
                  </h1>
                  <p className="max-w-2xl text-base md:text-lg text-zinc-700 leading-7">
                    $BORED captures the office-building mood: polished on the outside, spiritually exhausted on the inside.
                    Gary the sloth is here for every drained commute, every fake smile, and every meeting that could have been an email.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/75 border-zinc-400/40">
                    <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                      Join Telegram <MessageCircle className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="rounded-[2rem] border-zinc-400/30 bg-gradient-to-br from-zinc-100 to-slate-200 shadow-xl">
                <CardContent className="p-6 md:p-7 space-y-5">
                  <div className="flex items-center gap-4">
                    <img
                      src="/bored1.png"
                      alt="Gary the sloth"
                      className="h-20 w-20 rounded-3xl object-cover shadow-md ring-1 ring-zinc-500/20"
                    />
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">Featured employee</div>
                      <div className="text-2xl font-bold">Gary</div>
                      <p className="text-sm text-zinc-600">Head of burnout, morale, and doing the bare minimum beautifully.</p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-zinc-400/30 bg-white/80 p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">Contract address</div>
                    <div className="break-all font-mono text-sm text-zinc-800">{CONTRACT_ADDRESS}</div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button onClick={copyCA} className="rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white">
                        Copy CA <Copy className="ml-2 h-4 w-4" />
                      </Button>
                      <Button asChild variant="outline" className="rounded-2xl bg-white border-zinc-400/40">
                        <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">Telegram</a>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-zinc-400/30 bg-zinc-900 text-zinc-100 p-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-2">Office memo</div>
                    <p className="text-sm leading-6 text-zinc-200">
                      We are not chasing hustle culture. We are documenting the emotional reality of fluorescent lighting,
                      passive-aggressive emails, and pretending the team-building session was fun.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <Card className="rounded-[1.75rem] border-zinc-400/30 bg-white/70 shadow-lg h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="h-11 w-11 rounded-2xl bg-zinc-800 text-white flex items-center justify-center shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-zinc-600 leading-6 text-sm">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
            <Card className="rounded-[2rem] border-zinc-400/30 bg-white/70 shadow-xl overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-7 md:p-8 flex flex-col justify-center">
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">Daily life</div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Gary in the building</h2>
                    <p className="text-zinc-700 leading-7 mb-4">
                      Use the illustrated BORED assets throughout the page to make it feel alive. Gary should appear like the unofficial mascot of every underpaid, over-caffeinated department.
                    </p>
                    <p className="text-zinc-600 text-sm leading-6">
                      This section is a great place for lore, roadmap humour, community copy, or a light-hearted explanation of what $BORED stands for.
                    </p>
                  </div>
                  <img
                    src="/bored3.png"
                    alt="BORED character art"
                    className="h-full min-h-[320px] w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
              {signs.map((sign, i) => (
                <motion.div
                  key={sign.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="group"
                >
                  <Card className="overflow-hidden rounded-[1.5rem] border-zinc-400/30 bg-white/75 shadow-lg h-full">
                    <CardContent className="p-0 h-full">
                      <img
                        src={sign.src}
                        alt={sign.alt}
                        className="h-full w-full min-h-[160px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16">
          <Card className="rounded-[2rem] border-zinc-400/30 bg-zinc-900 text-white shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">Join the department</div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">Clock in. Zone out. Hold $BORED.</h2>
                <p className="max-w-2xl text-zinc-300 leading-7">
                  The contract is live, the Telegram is ready, and Gary is already emotionally unavailable.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-zinc-600 bg-transparent text-white hover:bg-white/10">
                  <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">Telegram Group</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}


