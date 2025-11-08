import Link from "next/link";

export default function MerciPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950/90 px-6">
      <div className="max-w-lg rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur">
        <h1 className="text-3xl font-semibold text-white">Merci !</h1>
        <p className="mt-4 text-slate-200">
          Votre demande a bien été envoyée à l&apos;équipe Intelliwave. Nous vous
          recontactons sous 24 heures pour organiser un diagnostic rapide.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          Revenir à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
