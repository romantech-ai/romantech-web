import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    "Chatbots, automatizaciones y desarrollo web que hacen crecer tu negocio. Tecnología que trabaja por ti mientras tú te centras en lo importante. Demo gratis.",
  keywords: [
    "automatización negocios",
    "chatbot whatsapp empresa",
    "agencia automatización España",
    "chatbot IA",
    "automatización procesos",
    "desarrollo web",
    "n8n España",
    "make automatización",
    "chatbot instagram",
  ],
  authors: [{ name: "Emilio", url: "https://romantech.es" }],
  creator: "Román Tech",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://romantech.es",
    siteName: "Román Tech",
    title: "Automatización e IA para Negocios | Román Tech",
    description:
      "Chatbots, automatizaciones y webs que captan clientes y eliminan tareas repetitivas. Sin complicaciones técnicas.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Román Tech - Automatización e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización e IA para Negocios | Román Tech",
    description:
      "Chatbots, automatizaciones y webs que hacen crecer tu negocio. Demo gratis.",
    images: ["/api/og"],
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

// JSON-LD structured data - Organization + ProfessionalService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://romantech.es/#organization",
  name: "Román Tech",
  alternateName: "RomanTech",
  url: "https://romantech.es",
  logo: "https://romantech.es/logo.png",
  image: "https://romantech.es/og-image.png",
  description:
    "Agencia de automatización e inteligencia artificial. Chatbots de WhatsApp, automatizaciones y desarrollo web para negocios en España.",
  priceRange: "€€",
  telephone: "+34664241328",
  email: "emilio@romantech.es",
  founder: {
    "@type": "Person",
    name: "Emilio",
    jobTitle: "Ingeniero Informático y Fundador",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
    addressLocality: "España",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.4168",
    longitude: "-3.7038",
  },
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+34664241328",
    email: "emilio@romantech.es",
    url: "https://calendly.com/emilio-romantech/demo-del-sistema-30-min",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/in/romantech/",
    "https://github.com/romantech-ai",
    "https://wa.me/34664241328",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Automatización e IA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbots con IA",
          description: "Chatbots de WhatsApp e Instagram que responden clientes, agendan citas y captan leads 24/7",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatizaciones",
          description: "Integración de sistemas, flujos automáticos y eliminación de tareas repetitivas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo Web",
          description: "Webs rápidas, modernas y optimizadas para convertir visitantes en clientes",
        },
      },
    ],
  },
};

// FAQ Schema for rich snippets in Google
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda en estar funcionando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de proyectos están operativos en menos de 7 días. Una vez que me das el OK, configuro todo y lo dejo funcionando con tu equipo formado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito saber de tecnología?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para nada. Yo me encargo de todo lo técnico. Tú solo tienes que explicarme cómo funciona tu negocio y qué quieres conseguir. Te formo para que puedas usar y modificar lo que necesites.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona con el software que ya uso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, me integro con la mayoría de herramientas: software de gestión de clínicas (Clinic Cloud, Doctoralia, Treatwell, GESDEN), calendarios (Google Calendar, Calendly), CRMs (HubSpot, Pipedrive), y cientos más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si alguien pregunta algo que el chatbot no sabe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El chatbot está entrenado para responder las preguntas más comunes de tu negocio. Si hay algo que no sabe, te avisa por WhatsApp para que intervengas. Nunca perderás un lead por falta de respuesta.",
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-cyan focus:text-bg-primary focus:rounded-lg focus:font-medium focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
