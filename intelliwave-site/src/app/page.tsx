import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Check,
  LineChart,
  Mail,
  MessageSquare,
  Shield,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Chatbots sur mesure",
    description:
      "Design conversationnel, IA générative et personnalisation profonde pour offrir des expériences qui convertissent.",
    icon: Bot,
    benefits: [
      "Assistant multicanal (web, WhatsApp, Messenger)",
      "Fine-tuning sur vos connaissances",
      "Escalade fluide vers vos équipes",
    ],
  },
  {
    title: "Automatisation n8n avancée",
    description:
      "Orchestration bout-en-bout de vos flux marketing, ventes et support avec des scénarios fiables et monitorés.",
    icon: Workflow,
    benefits: [
      "Cartographie de vos processus",
      "Connecteurs personnalisés et webhooks",
      "Monitoring & alertes en temps réel",
    ],
  },
  {
    title: "Intégrations écosystème",
    description:
      "Connexion de vos outils (CRM, ERP, Data Warehouse) pour créer une vision unifiée et des actions automatiques.",
    icon: Zap,
    benefits: [
      "APIs, bases de données, SaaS",
      "Synchronisation bidirectionnelle",
      "Sécurité et gouvernance maîtrisées",
    ],
  },
];

const differentiators = [
  {
    title: "Approche centrée résultats",
    description:
      "Chaque automatisation mesure un KPI métier clair. Nous assurons suivi et optimisation continue.",
    icon: LineChart,
  },
  {
    title: "Conformité & sécurité",
    description:
      "Gestion RGPD, chiffrement et règles de gouvernance pour protéger vos données sensibles.",
    icon: Shield,
  },
  {
    title: "Expertise humaine + IA",
    description:
      "Une équipe hybride stratégie, data et IA qui conjugue performance et expérience client.",
    icon: Sparkles,
  },
];

const workflowSteps = [
  {
    title: "Diagnostic",
    summary: "Cartographie express des opportunités.",
    details:
      "Audit de vos parcours actuels, ateliers avec vos équipes et estimation du ROI potentiel.",
  },
  {
    title: "Design & prototype",
    summary: "Scénarisation conversationnelle et flux n8n.",
    details:
      "Storyboards des interactions, préparation des prompts IA, schémas n8n et choix techniques.",
  },
  {
    title: "Déploiement & QA",
    summary: "Mise en production sécurisée.",
    details:
      "Intégrations API, tests fonctionnels et performance, formation des équipes et documentation.",
  },
  {
    title: "Pilotage continu",
    summary: "Optimisation en continu.",
    details:
      "Monitoring SLA, itérations mensuelles, essais A/B et nouveaux cas d&apos;usage IA.",
  },
];

const testimonials = [
  {
    quote:
      "Intelliwave a transformé notre support client : 62% des demandes sont résolues instantanément, tout en conservant notre ton de marque.",
    author: "Camille Laurent",
    role: "Head of Customer Care · Fintech Flow",
  },
  {
    quote:
      "Les automatisations n8n conçues par l&apos;équipe ont réduit nos délais d&apos;onboarding de 40%. L&apos;approche data-driven fait la différence.",
    author: "Julien Marchal",
    role: "COO · Nova SaaS",
  },
];

const faqs = [
  {
    question: "Combien de temps faut-il pour déployer un chatbot sur mesure ?",
    answer:
      "Nos projets démarrent par un sprint de cadrage de 2 semaines, suivi d&apos;un déploiement initial en 4 à 6 semaines selon la complexité des intégrations.",
  },
  {
    question: "Travaillez-vous avec des données internes sensibles ?",
    answer:
      "Oui, nous mettons en place des environnements cloisonnés, des politiques de chiffrement et des contrôles d&apos;accès stricts afin de protéger vos informations.",
  },
  {
    question: "Proposez-vous un accompagnement post-livraison ?",
    answer:
      "Chaque mission inclut un plan de pilotage continu avec monitoring n8n, optimisation des prompts et support prioritaire.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      <header className="sticky top-0 z-50 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 text-sm text-slate-200">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shadow-lg shadow-indigo-500/20">
              <Sparkles className="h-5 w-5 text-indigo-300" />
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-white">
                Intelliwave
              </p>
              <p className="text-xs text-slate-400">
                Agence IA & automatisation n8n
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link href="#approche" className="transition-colors hover:text-white">
              Approche
            </Link>
            <Link href="#cas-clients" className="transition-colors hover:text-white">
              Réussites
            </Link>
            <Link href="#faq" className="transition-colors hover:text-white">
              FAQ
            </Link>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-white/20"
          >
            Discutons <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:gap-32 md:pt-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_70px_-40px_rgba(99,102,241,0.8)] sm:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-indigo-200">
                orchestrer · personnaliser · scaler
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                L&apos;agence IA qui pilote vos chatbots et automatisations n8n
                de bout en bout.
              </h1>
              <p className="text-pretty text-lg text-slate-300 md:text-xl">
                Intelliwave conçoit des expériences conversationnelles
                intelligentes, reliées à vos outils, pour délivrer des
                interactions plus rapides, plus fiables et plus humaines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  Planifier un diagnostic <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  Explorer nos offres
                </Link>
              </div>
              <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold text-white">62%</p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    demandes support automatisées
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">+28%</p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    conversion leads qualifiés
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">4-6 sem.</p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    temps moyen de mise en production
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-sky-400/20 to-purple-500/30 blur-3xl" />
              <div className="relative space-y-5 rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.9)] backdrop-blur">
                <h2 className="text-xl font-semibold text-white">
                  Architecture conversationnelle
                </h2>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Flows & prompts</p>
                      <p>
                        Intentions détectées en temps réel, réponses
                        contextuelles et actions automatisées.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        Connecteurs n8n prêts
                      </p>
                      <p>
                        CRM, Slack, Notion, HubSpot, Data Warehouse... 180+
                        intégrations orchestrées en un seul hub.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        Gouvernance & sécurité
                      </p>
                      <p>
                        Logs centralisés, gestion des permissions, redondance
                        et haute disponibilité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-200">
              services
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Du concept à l&apos;industrialisation de vos assistants IA.
            </h2>
            <p className="text-lg text-slate-300 md:max-w-3xl">
              Nos équipes combinent expertise produit, data et IA pour créer des
              expériences conversationnelles performantes, intégrées à vos
              processus critiques.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ title, description, icon: Icon, benefits }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-indigo-400/30 hover:bg-white/[0.08]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-slate-300">{description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="rounded-full bg-indigo-400/20 p-1 text-indigo-200">
                        <Check className="h-4 w-4" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="approche"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[1.1fr_0.9fr] md:items-center"
        >
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-200">
              méthode
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Une approche collaborative pour déployer vite et bien.
            </h2>
            <p className="text-lg text-slate-300 md:max-w-xl">
              Nous construisons avec vos équipes pour aligner les objectifs
              business, le ton de marque et les contraintes techniques. Chaque
              étape est transparente et documentée.
            </p>
            <div className="grid gap-4 text-sm text-slate-200">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <div className="absolute right-5 top-5 text-sm font-semibold text-indigo-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-indigo-200">{step.summary}</p>
                  <p className="mt-3 text-slate-300">{step.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                nos atouts
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Pourquoi les scale-ups choisissent Intelliwave ?
              </h3>
              <div className="mt-6 space-y-5">
                {differentiators.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="mt-1 text-sm text-slate-300">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-emerald-50">
              <p className="text-lg font-semibold">
                3 ateliers collaboratifs offerts pour qualifier vos cas
                d&apos;usage IA.
              </p>
              <p className="mt-2 text-sm text-emerald-100">
                Analyse des parcours clients, ideation des prompts et feuille de
                route automatisation.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Réserver mon créneau <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="cas-clients" className="space-y-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-200">
              cas clients
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Des résultats mesurables dès les premières semaines.
            </h2>
            <p className="text-lg text-slate-300 md:max-w-3xl">
              Nous déployons des solutions scalables testées sur des dizaines de
              scénarios IA : relation client, lead nurturing, opérations internes.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-[0_20px_45px_-30px_rgba(99,102,241,0.6)]"
              >
                <Sparkles className="absolute -top-10 -right-8 h-20 w-20 text-indigo-500/20" />
                <p className="text-lg text-slate-100">&ldquo;{testimonial.quote}&rdquo;</p>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-indigo-200">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[0.6fr_1.4fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-200">
              faq
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Les réponses aux questions que l&apos;on nous pose le plus souvent.
            </h2>
            <p className="text-lg text-slate-300">
              Transparence totale sur nos process, délais et livrables. Nous
              restons joignables à chaque étape.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-950/80 to-purple-500/20 p-10"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-200">
                parlons-en
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Programmez un diagnostic gratuit de vos process.
              </h2>
              <p className="text-lg text-slate-200">
                Partagez vos enjeux conversationnels et nous préparons une
                feuille de route claire sous 48h.
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-indigo-200" />
                  hello@intelliwave.ai
                </p>
                <p className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-indigo-200" />
                  Slack Connect & support prioritaire disponible
                </p>
              </div>
            </div>
            <form
              className="space-y-5 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur"
              action="https://formsubmit.co/hello@intelliwave.ai"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://agentic-8995e19c.vercel.app/merci"
              />
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white">
                  Nom et prénom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Marie Dupont"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email professionnel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@entreprise.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="text-sm font-medium text-white"
                >
                  Résumez votre projet
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  placeholder="Nous souhaitons automatiser..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Envoyer ma demande
              </button>
              <p className="text-xs text-slate-300">
                Nous revenons vers vous sous 24h pour planifier un point avec un
                consultant IA.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Intelliwave. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#approche" className="transition hover:text-white">
              Méthode
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
