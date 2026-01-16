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
        url: "/api/og",
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
    "Agencia de Inteligencia Artificial especializada en chatbots, desarrollo web y automatizaciones para negocios en España.",
  priceRange: "€€",
  telephone: "+34664241328",
  email: "emilio@romantech.es",
  founder: {
    "@type": "Person",
    name: "Emilio",
    jobTitle: "Fundador y Desarrollador",
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
          name: "Chatbots IA",
          description: "Asistentes virtuales inteligentes para WhatsApp y web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo Web",
          description: "Webs modernas optimizadas para SEO y conversión",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatizaciones",
          description: "Workflows con n8n, Make y Zapier para eliminar trabajo manual",
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
      name: "¿Cuánto cuesta un proyecto de automatización o chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto se presupuesta de forma personalizada según tus necesidades. Chatbots desde 500€, webs desde 800€, automatizaciones desde 300€. Agenda una llamada gratuita y te daré un presupuesto cerrado sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en estar listo un proyecto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de chatbots están operativos en 1-2 semanas. Webs entre 1-3 semanas dependiendo de la complejidad. Siempre acordamos fechas antes de empezar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para usar un chatbot o automatización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para nada. Yo me encargo de toda la parte técnica. Tú solo necesitas saber qué quieres conseguir, y yo lo hago realidad. Te formo para que puedas gestionar lo básico de forma autónoma.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué garantía tengo de que funcionará?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos mis proyectos incluyen garantía de satisfacción. Si algo no funciona como acordamos, lo arreglo sin coste adicional. Además, ofrezco soporte post-lanzamiento para asegurar que todo va sobre ruedas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienes casos de éxito o referencias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, he trabajado con más de 50 negocios en diferentes sectores: clínicas, inmobiliarias, academias, ecommerce... Puedo mostrarte proyectos similares al tuyo en nuestra llamada.",
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
      </body>
    </html>
  );
}
