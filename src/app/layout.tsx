import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://romantech.es"),
  title: {
    default: "Román Tech | Automatización e IA para Negocios",
    template: "%s | Román Tech",
  },
  description:
    "Agencia de Inteligencia Artificial. Creamos chatbots, webs y automatizaciones que trabajan 24/7 para tu negocio. Agenda tu demo gratis.",
  keywords: [
    "automatización",
    "inteligencia artificial",
    "chatbots",
    "desarrollo web",
    "n8n",
    "IA para empresas",
    "chatbot whatsapp",
    "automatización de procesos",
    "agencia IA España",
  ],
  authors: [{ name: "Emilio", url: "https://romantech.es" }],
  creator: "Román Tech",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://romantech.es",
    siteName: "Román Tech",
    title: "Román Tech | Automatización e IA para Negocios",
    description:
      "Chatbots, webs y automatizaciones inteligentes que trabajan por ti 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Román Tech - Automatización e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Román Tech | Automatización e IA para Negocios",
    description:
      "Chatbots, webs y automatizaciones inteligentes que trabajan por ti 24/7.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Román Tech",
  url: "https://romantech.es",
  logo: "https://romantech.es/logo.svg",
  description:
    "Agencia de Inteligencia Artificial especializada en chatbots, desarrollo web y automatizaciones para negocios.",
  founder: {
    "@type": "Person",
    name: "Emilio",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "emilio@romantech.es",
    url: "https://calendly.com/emilio-romantech/demo-del-sistema-30-min",
  },
  sameAs: [
    "https://www.linkedin.com/in/romantech/",
    "https://github.com/romantech-ai",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Desarrollo de Chatbots con IA",
  provider: {
    "@type": "Organization",
    name: "Román Tech",
  },
  description:
    "Creación de chatbots inteligentes para WhatsApp y web que atienden clientes 24/7.",
  areaServed: "ES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://romantech.es" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
