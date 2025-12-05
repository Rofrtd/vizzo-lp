"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * Vizzo Digital Landing — PT/EN with Language Dropdown + Flags
 * Branding color: #E42EFF | Secondary: #B61ECC
 * Headings font: "Special Gothic Condensed One Regular"
 */

export default function VizzoDigitalLanding({
  initialLang,
}: {
  initialLang?: "pt" | "en";
}) {
  // usa o idioma inicial vindo da rota (/pt ou /en); fallback para "pt"
  const [lang, setLang] = useState<"pt" | "en">(initialLang ?? "pt");
  const t = translations[lang];

  return (
    <div
      className="min-h-screen w-full text-white font-sans"
      style={{
        //@ts-ignore
        "--vz-primary": "#E42EFF",
        //@ts-ignore
        "--vz-secondary": "#B61ECC",
        //@ts-ignore
        "--vz-bg": "#0A0A0A",
        //@ts-ignore
        "--vz-ink": "#F8FAFC",
      }}
    >
      <main className="relative overflow-clip bg-[var(--vz-bg)]">
        <Topbar lang={lang} setLang={setLang} />
        <Hero t={t} />
        <PresenceBar t={t} />
        <PartnersCarousel
          t={t}
          logos={[
            "/logo-automacao.png",
            "/logo-conecta.png",
            "/logo-infynia.png",
            "/logo-lexmaile.png",
            "/logo-ns.png",
            "/logo-orbis.png",
            "/logo-loja-buchele.png",
            "/logo-cc.png",
            "/logo-rockbar.png",
          ]}
        />
        <Services t={t} />
        <Cases t={t} />
        <CTA t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}

// ================= TRANSLATIONS =================
const translations = {
  pt: {
    nav: {
      services: "Serviços",
      cases: "Cases",
      contact: "Contato",
      lang: "Idioma",
    },
    hero_h1: "Branding-Marketing-AI. Tudo para sua empresa crescer.",
    hero_sub:
      "Unimos design estratégico, marketing digital e automações inteligentes para gerar faturamento e posicionar sua marca onde ela merece estar.",
    hero_cta1: "Fale com a gente",
    hero_cta2: "Ver cases de sucesso",
    presence: "Atuação na Austrália e Brasil",
    // novos campos para PresenceBar
    presence_countries: [
      { code: "br", name: "Brasil", subtitle: "" },
      { code: "au", name: "Austrália", subtitle: "" },
    ],
    presence_tagline: "Estratégias locais, alcance global",
    trust_intro: "Parceiros e clientes:",
    services_title: "Agência digital completa, sem complicação",
    services: [
      {
        title: "Branding & Posicionamento",
        desc: "Identidade forte, brandbook completo (100+ páginas) e diretrizes que viram resultados.",
        perks: [
          "Pesquisa de mercado e concorrentes",
          "Logo, paleta e aplicações reais",
          "Tom de voz e mensagens-chave",
        ],
      },
      {
        title: "Sites, LPS e UX/UI",
        desc: "Websites e interfaces focados em conversão e performance, do layout à publicação.",
        perks: [
          "Arquitetura e copy",
          "Design responsivo",
          "SEO técnico e velocidade",
        ],
      },
      {
        title: "Marketing Digital & Anúncios",
        desc: "Conteúdo e mídia paga com meta clara de crescimento e aquisição saudável.",
        perks: [
          "Social media com calendário",
          "Meta & Google Ads",
          "Criativos (estáticos e motion)",
        ],
      },
      {
        title: "Automações & IA",
        desc: "Bots de WhatsApp, fluxos n8n/Make e integrações que capturam, qualificam e convertem leads.",
        perks: [
          "Captação e qualificação",
          "+20% carrinhos recuperados",
          "Dashboards e relatórios",
        ],
      },
    ],
    cases_title: "Resultados que falam por si",
    cases: [
      {
        tag: "Marketing",
        title: "Metas de aquisição de clientes batidas todo mês",
        body: "Campanhas e criativos que fizeram a operadora atingir metas mensais de novos clientes.",
        cta: "Ver case",
        logo: "/logo-orbis.png",
      },
      {
        tag: "IA / E‑commerce",
        title: "+20% carrinhos abandonados recuperados",
        body: "IA para recuperar carrinhos abandonados com copy e cadência otimizadas.",
        cta: "Ver case",
        logo: "/logo-infynia.png",
      },
      {
        tag: "GovTech",
        title: "500 cadastros em 3 dias",
        body: "Plataforma de serviços públicos que engajou a comunidade logo no lançamento.",
        cta: "Ver case",
        logo: "/logo-conecta.png",
      },
    ],
    cta_title: "Quer crescer sem depender de várias agências?",
    cta_sub:
      "Agende uma call rápida no WhatsApp e receba uma proposta objetiva em até 24h úteis.",
    cta_button: "WhatsApp",
    box_title: "Vizzo Digital",
    box_lines: [
      "Branding, Marketing e Automação",
      "Projetos sob demanda",
      "Atuação em Austrália e Brasil",
    ],
    footer_links: { services: "Serviços", cases: "Cases", contact: "Contato" },
    footer_copy: () => `© ${new Date().getFullYear()} Vizzo Digital`,
  },
  en: {
    nav: {
      services: "Services",
      cases: "Case Studies",
      contact: "Contact",
      lang: "Language",
    },
    hero_h1: "Branding-Marketing-AI. Everything your business needs to grow.",
    hero_sub:
      "We blend strategic design, digital marketing and smart automations to drive revenue and position your brand where it belongs.",
    hero_cta1: "Talk to us",
    hero_cta2: "See Case Studies",
    presence: "Operating across Australia and Brazil",
    // novos campos para PresenceBar em inglês
    presence_countries: [
      { code: "br", name: "Brazil", subtitle: "" },
      { code: "au", name: "Australia", subtitle: "" },
    ],
    presence_tagline: "Local strategies, global reach",
    trust_intro: "Partners & clients:",
    services_title: "A complete digital agency, minus the complexity",
    services: [
      {
        title: "Branding & Positioning",
        desc: "Strong identity, full brandbook (100+ pages) and guidelines that turn into results.",
        perks: [
          "Market & competitor research",
          "Logo, palette & real use",
          "Voice & key messages",
        ],
      },
      {
        title: "Websites, LPs & UX/UI",
        desc: "Conversion‑driven websites and interfaces, from wireframe to go‑live.",
        perks: [
          "Information architecture & copy",
          "Responsive design",
          "Tech SEO & speed",
        ],
      },
      {
        title: "Digital Marketing & Ads",
        desc: "Content and paid media with clear growth goals and healthy acquisition.",
        perks: [
          "Social media calendar",
          "Meta & Google Ads",
          "Creatives (static & motion)",
        ],
      },
      {
        title: "Automation & AI",
        desc: "WhatsApp bots, n8n/Make flows and integrations that capture, qualify and convert leads.",
        perks: [
          "Lead capture & qualification",
          "+20% carts recovered",
          "Dashboards & reports",
        ],
      },
    ],
    cases_title: "Results that speak for themselves",
    cases: [
      {
        tag: "Marketing",
        title: "Hitting client acquisition targets monthly",
        body: "Campaigns and creatives that helped the ISP reach new‑customer targets every month.",
        cta: "Open case",
        logo: "/logo-orbis.png",
      },
      {
        tag: "AI / E‑commerce",
        title: "+20% abandoned carts recovered",
        body: "SaaS to recover abandoned carts with AI on Whatsapp.",
        cta: "Open case",
        logo: "/logo-infynia.png",
      },
      {
        tag: "GovTech",
        title: "500 signups in 3 days",
        body: "Public‑services platform that engaged the community from day one.",
        cta: "Open case",
        logo: "/logo-conecta.png",
      },
    ],
    cta_title: "Grow without juggling multiple agencies",
    cta_sub:
      "Book a quick WhatsApp call and get a clear proposal within 24 business hours.",
    cta_button: "WhatsApp",
    box_title: "Vizzo Digital",
    box_lines: [
      "Branding, Marketing & Automation",
      "On‑demand projects",
      "Operating across Australia and Brazil",
    ],
    footer_links: { services: "Services", cases: "Cases", contact: "Contact" },
    footer_copy: () => `© ${new Date().getFullYear()} Vizzo Digital`,
  },
};

// ================= TOP BAR =================
function Topbar({
  lang,
  setLang,
}: {
  lang: "pt" | "en";
  setLang: (l: "pt" | "en") => void;
}) {
  const [open, setOpen] = useState(false);
  const t = translations[lang];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo2.png" alt="Vizzo Digital Logo" className="h-20" />
          {/* <span className="text-sm tracking-wider text-white/90">
            VIZZO DIGITAL
          </span> */}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#servicos" className="hover:text-white">
            {t.nav.services}
          </a>
          <a href="#cases" className="hover:text-white">
            {t.nav.cases}
          </a>
          <a href="#contato" className="hover:text-white">
            {t.nav.contact}
          </a>
        </nav>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
          >
            {lang === "pt" ? (
              <span className="flex items-center gap-1">
                <span role="img" aria-label="Brazil flag">
                  🇧🇷
                </span>
                PT
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <span role="img" aria-label="United States flag">
                  🇺🇸
                </span>{" "}
                EN
              </span>
            )}
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
            </svg>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-md border border-white/10 bg-black/80 text-xs shadow-lg">
              <button
                onClick={() => {
                  setLang("pt");
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 hover:bg-white/10"
              >
                <span role="img" aria-label="Brazil flag">
                  🇧🇷
                </span>{" "}
                Português
              </button>
              <button
                onClick={() => {
                  setLang("en");
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 hover:bg-white/10"
              >
                <span role="img" aria-label="United States flag">
                  🇺🇸
                </span>
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// ================= HERO =================
function Hero({ t }: { t: any }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={targetRef} className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--vz-bg)] via-[#0b0b16] to-[var(--vz-bg)]" />
        <div
          className="pointer-events-none absolute -inset-[15%] -z-10 rounded-[50%] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, var(--vz-primary), transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          style={{ y, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="font-[Special Gothic Condensed One Regular] bg-gradient-to-r from-[var(--vz-primary)] to-[var(--vz-secondary)] bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
              {t.hero_h1}
            </h1>
            <p className="mt-5 max-w-2xl text-white/70 md:text-lg">
              {t.hero_sub}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--vz-primary)] to-[var(--vz-secondary)] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-fuchsia-700/30 transition-transform hover:-translate-y-0.5"
              >
                {t.hero_cta1}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 5l7 7-7 7M5 12h14" />
                </svg>
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90"
              >
                {t.hero_cta2}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PresenceBar({ t }: { t: any }) {
  return (
    <section className="border-y border-white/6 bg-white/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 md:flex-row md:justify-between">
        <div className="mt-2 text-center text-sm text-white/70 md:mt-0 md:text-right">
          <div className="font-medium text-white/90">{t.presence}</div>
          <div className="mt-1 text-xs text-white/60">{t.presence_tagline}</div>
        </div>
        <div className="flex items-center gap-4">
          {t.presence_countries.map((c: any) => (
            <div
              key={c.code}
              className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-2"
            >
              <span
                role="img"
                aria-label={`${c.name} flag`}
                className="text-2xl"
              >
                {c.code === "br" ? "🇧🇷" : c.code === "au" ? "🇦🇺" : "🏳️"}
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-white/70">{c.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersCarousel({ t, logos }: { t: any; logos: string[] }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-6 text-sm font-semibold uppercase text-white/80">
          {t.trust_intro}
        </h3>

        <div className="relative overflow-hidden partners-wrap">
          <style>{`
            .partners-wrap { --gap: 1.5rem; }
            @keyframes vz-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .vz-scroll { overflow: hidden; }
            .vz-track {
              display: flex;
              gap: var(--gap);
              align-items: center;
              animation: vz-scroll 20s linear infinite;
              will-change: transform;
            }
            .partners-wrap:hover .vz-track { animation-play-state: paused; }
            .vz-item { flex: 0 0 auto; padding: 0.2rem; display:flex; align-items:center; justify-content:center; }
            .vz-item img {
              max-height: 48px;
              width: auto;
              object-fit: contain;
              filter: grayscale(100%) contrast(0.9);
              transition: filter .28s ease, opacity .28s ease, transform .28s ease;
            }
            .vz-item img:hover { filter: none; transform: translateY(-2px); opacity: 1; }
          `}</style>

          <div className="vz-scroll" aria-hidden={false}>
            <div className="vz-track" role="list">
              {logos.concat([...logos, ...logos]).map((src, i) => (
                <div key={`${src}-${i}`} className="vz-item" role="listitem">
                  <Image src={src} alt={`partner-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= SERVICES =================
function Services({ t }: { t: any }) {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:pb-20 md:pt-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[Special Gothic Condensed One Regular] text-2xl font-semibold tracking-tight md:text-4xl"
      >
        {t.services_title}
      </motion.h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.services.map((card: any, i: number) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 backdrop-blur"
          >
            <h3 className="font-[Special Gothic Condensed One Regular] text-lg font-semibold text-white">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{card.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {card.perks.map((p: string) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--vz-primary)]" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// ================= CASES =================
function Cases({ t }: { t: any }) {
  return (
    <section id="cases" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="font-[Special Gothic Condensed One Regular] text-2xl font-semibold md:text-4xl">
        {t.cases_title}
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {t.cases.map((c: any, i: number) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 light-card"
          >
            {/* Logo on top, larger and centered */}
            <div className="flex justify-center pt-6">
              {c.logo ? (
                <div className="relative -mt-6 flex h-24 w-24 items-center justify-center">
                  <Image
                    src={c.logo}
                    alt={`${c.title} logo`}
                    className="h-16 w-auto object-contain "
                  />
                </div>
              ) : (
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--vz-primary)] to-[var(--vz-secondary)] opacity-90" />
              )}
            </div>

            <div className="px-2 pb-1 pt-1 text-center">
              {/* <span className="inline-block rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-white/80">
                {c.tag}
              </span> */}
              <h3 className="mt-3 font-[Special Gothic Condensed One Regular] text-lg font-semibold">
                {c.title}
              </h3>
            </div>

            <p className="px-6 py-2 text-sm text-white/75">{c.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// ================= CTA =================
function CTA({ t }: { t: any }) {
  const phoneNumber = "+61451650026";
  const whatsappNumber = "61451650026";
  const waMessage = encodeURIComponent(
    t === translations.pt
      ? "Olá, quero conversar sobre um projeto."
      : "Hi, I want to talk about a project."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;
  const telLink = `tel:${phoneNumber}`;

  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[var(--vz-primary)] to-[var(--vz-secondary)] p-8 md:p-12 light-card-cta">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="font-[Special Gothic Condensed One Regular] text-2xl font-semibold text-white md:text-3xl">
              {t.cta_title}
            </h3>
            <p className="mt-2 max-w-xl text-white/90">{t.cta_sub}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg"
              >
                {/* WhatsApp CTA */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.52 3.478A11.933 11.933 0 0012.004.001C5.373.001-.001 5.375-.001 12.006a11.9 11.9 0 001.7 6.036L0 24l6.182-1.624A11.96 11.96 0 0012.004 24c6.63 0 12.004-5.374 12.004-11.994 0-3.205-1.248-6.217-3.488-8.528zM12.004 21.6c-1.663 0-3.29-.442-4.706-1.28l-.336-.203-3.66.96.979-3.57-.219-.36A8.56 8.56 0 013.444 12.01c0-4.735 3.847-8.578 8.56-8.578 4.713 0 8.56 3.843 8.56 8.578 0 4.735-3.847 8.578-8.56 8.578zM17.1 14.44c-.29-.145-1.708-.84-1.975-.936-.267-.095-.462-.144-.657.144-.195.288-.756.936-.928 1.127-.171.19-.342.213-.632.07-.29-.144-1.224-.45-2.332-1.44-.862-.768-1.444-1.716-1.61-2.006-.168-.29-.018-.447.127-.592.13-.129.29-.336.435-.504.145-.168.193-.288.29-.48.098-.192.049-.36-.025-.504-.074-.144-.657-1.582-.9-2.166-.237-.57-.48-.493-.657-.503l-.56-.01c-.185 0-.486.068-.741.33-.256.263-.976 1.03-.976 2.506 0 1.476 1 2.9 1.14 3.104.14.193 1.97 3.014 4.776 4.218 3.343 1.5 3.343 1.002 3.943.94.6-.062 1.95-.79 2.225-1.552.274-.76.274-1.414.195-1.552-.08-.138-.29-.198-.58-.343z" />
                </svg>
                <span>{t.cta_button}</span>
              </a>

              <a
                href={telLink}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                {/* Phone CTA */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6.62 10.79a15.462 15.462 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.48 22 2 13.52 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57.12.36.04.77-.25 1.05l-2.2 2.17z" />
                </svg>
                <span>{t === translations.pt ? "Ligar" : "Call"}</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-black/20 p-5">
            <h4 className="font-[Special Gothic Condensed One Regular] font-semibold">
              {t.box_title}
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-white/85">
              {t.box_lines.map((l: string) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <div className="mt-6 h-px w-full bg-white/20" />
            <p className="mt-6 text-sm text-white/85">
              {t === translations.pt
                ? "Quer apenas uma orientação inicial? Mande uma mensagem no WhatsApp ou ligue."
                : "Just want quick guidance? Send a WhatsApp message or give us a call."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= FOOTER =================
function Footer({ t }: { t: any }) {
  return (
    <footer className="border-t border-white/10 bg-black/60 px-6 py-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Vizzo Digital Logo" className="h-8 w-8" />
          <span className="text-sm tracking-wider text-white/80">
            VIZZO DIGITAL
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs text-white/60">
          <a href="#servicos" className="hover:text-white">
            {t.footer_links.services}
          </a>
          <a href="#cases" className="hover:text-white">
            {t.footer_links.cases}
          </a>
          <a href="#contato" className="hover:text-white">
            {t.footer_links.contact}
          </a>
        </nav>
        <p className="text-xs text-white/60">{t.footer_copy()}</p>
      </div>
    </footer>
  );
}
