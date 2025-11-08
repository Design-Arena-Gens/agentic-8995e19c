import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intelliwave | Agence d'automatisation IA & chatbots n8n",
  description:
    "Intelliwave conçoit des chatbots sur mesure et des flux d'automatisation n8n pour accélérer vos processus métiers.",
  metadataBase: new URL("https://agentic-8995e19c.vercel.app"),
  openGraph: {
    title: "Intelliwave | Agence d'automatisation IA & chatbots n8n",
    description:
      "Automatisez votre relation client avec des chatbots intelligents et des scénarios n8n conçus sur mesure.",
    url: "https://agentic-8995e19c.vercel.app",
    siteName: "Intelliwave",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelliwave | Agence d'automatisation IA & chatbots n8n",
    description:
      "Agence spécialisée en automatisation IA, chatbots sur mesure et intégrations n8n.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
