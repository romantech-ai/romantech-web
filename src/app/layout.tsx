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
    default: "Román Tech | Chatbots IA para Clínicas y Centros de Salud",
    template: "%s | Román Tech",
  },
  description:
    "Automatiza tu clínica con chatbots de WhatsApp que agendan citas 24/7, responden pacientes y captan leads. Especialistas en clínicas dentales, estéticas, fisioterapia y más. Demo gratis.",
  keywords: [
    "chatbot whatsapp clínica",
    "automatización clínicas",
    "chatbot dental",
    "IA para clínicas",
    "chatbot citas médicas",
    "automatización centro de salud",
    "agencia IA España",
    "chatbot estética",
    "automatización fisioterapia",
  ],
  authors: [{ name: "Emilio", url: "https://romantech.es" }],
  creator: "Román Tech",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://romantech.es",
    siteName: "Román Tech",
    title: "Chatbots IA para Clínicas | Tu clínica atendiendo 24/7",
    description:
      "Chatbots de WhatsApp que agendan citas, responden pacientes y captan leads para tu clínica. Sin complicaciones técnicas.",
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
    title: "Chatbots IA para Clínicas | Román Tech",
    description:
      "Chatbots de WhatsApp que agendan citas 24/7 para tu clínica. Demo gratis.",
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
    "Agencia de Inteligencia Artificial especializada en chatbots de WhatsApp para clínicas y centros de salud en España. Automatización de citas, recordatorios y atención al paciente 24/7.",
  priceRange: "€€",
  telephone: "+34664241328",
  email: "emilio@romantech.es",
  founder: {
    "@type": "Person",
    name: "Emilio",
    jobTitle: "Fundador y Especialista en Automatización",
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
    name: "Servicios de Automatización para Clínicas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbots IA para Clínicas",
          description: "Chatbots de WhatsApp que agendan citas, responden pacientes y envían recordatorios 24/7",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web para Clínicas",
          description: "Webs modernas con SEO local optimizado para captar pacientes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatizaciones",
          description: "Recordatorios automáticos, integración con software de gestión y eliminación de trabajo manual",
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
      name: "¿Cuánto cuesta un chatbot para mi clínica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los chatbots de WhatsApp para clínicas parten desde 500€, dependiendo de las funcionalidades que necesites (agenda citas, responde preguntas frecuentes, envía recordatorios, etc.). En la llamada gratuita te doy un presupuesto cerrado sin sorpresas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en estar funcionando el chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de chatbots están operativos en menos de 7 días. Una vez que me das el OK, configuro todo y lo dejo funcionando con tu equipo formado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito saber de tecnología para usar el chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para nada. Yo me encargo de todo lo técnico. Tú solo tienes que decirme cómo funciona tu clínica y qué quieres que haga el chatbot. Además, te formo para que puedas modificar respuestas si lo necesitas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El chatbot puede agendar citas automáticamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el chatbot se integra con tu sistema de gestión o calendario (Google Calendar, Calendly, etc.) para mostrar disponibilidad y agendar citas sin intervención humana. También envía recordatorios automáticos para reducir ausencias.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona con mi software de gestión actual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, me integro con la mayoría de software de gestión de clínicas (Clinic Cloud, Doctoralia, Treatwell, etc.) y también con herramientas como Google Sheets, Notion, o cualquier sistema que uses.",
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
