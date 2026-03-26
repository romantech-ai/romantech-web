import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/sections";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CRM y Automatización para Clínicas",
  description:
    "Sistema integral de gestión, automatización y presencia digital para clínicas. CRM, citas online, WhatsApp con IA y más.",
  robots: { index: false, follow: false },
};

const CHECK = (
  <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CROSS = (
  <svg className="w-5 h-5 text-white/20 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
  </svg>
);

function PackCard({
  name,
  price,
  setup,
  description,
  features,
  popular,
  cta,
}: {
  name: string;
  price: string;
  setup: string;
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
  cta: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col ${
        popular
          ? "border-accent-cyan/50 bg-white/[0.04] shadow-[0_0_40px_-12px_rgba(0,200,240,0.15)]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-cyan text-bg-void text-xs font-bold px-4 py-1 rounded-full tracking-wide uppercase">
          Recomendado
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-white">{price}</span>
          <span className="text-text-secondary text-sm">/mes</span>
        </div>
        <p className="text-text-tertiary text-xs mt-1">{setup}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            {f.included ? CHECK : CROSS}
            <span className={f.included ? "text-text-secondary text-sm" : "text-white/30 text-sm"}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
          popular
            ? "bg-accent-cyan text-bg-void hover:brightness-110"
            : "bg-white/10 text-white hover:bg-white/15"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function ComparisonRow({ label, market, romantech }: { label: string; market: string; romantech: string }) {
  return (
    <tr className="border-b border-white/5">
      <td className="py-3 pr-4 text-text-secondary text-sm">{label}</td>
      <td className="py-3 px-4 text-text-tertiary text-sm text-center">{market}</td>
      <td className="py-3 pl-4 text-emerald-400 text-sm font-medium text-center">{romantech}</td>
    </tr>
  );
}

export default function AutomatizacionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <Container size="tight">
          <div className="text-center mb-20">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Servicios de automatización
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              CRM y Automatización<br />
              <span className="text-accent-cyan">para tu clínica</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para digitalizar tu clínica en un solo proveedor.
              Sin 5 herramientas distintas, sin integraciones rotas, sin sorpresas.
            </p>
          </div>
        </Container>

        {/* Packs */}
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <PackCard
              name="Digital"
              price="149€"
              setup="Setup: 500€ (pago único)"
              description="Presencia digital profesional con gestión de citas"
              cta="Reservar demo"
              features={[
                { text: "Web profesional optimizada para SEO", included: true },
                { text: "Sistema de citas online 24h", included: true },
                { text: "Recordatorios automáticos por WhatsApp", included: true },
                { text: "Panel de gestión de citas", included: true },
                { text: "Hosting, SSL y mantenimiento incluido", included: true },
                { text: "Chatbot WhatsApp con IA", included: false },
                { text: "CRM de pacientes/leads", included: false },
                { text: "Automatizaciones a medida", included: false },
                { text: "Integraciones con software existente", included: false },
                { text: "Consultoría mensual", included: false },
              ]}
            />

            <PackCard
              name="Automatización"
              price="299€"
              setup="Setup: 1.500€ (pago único)"
              description="Gestión integral con IA y automatizaciones"
              popular
              cta="Reservar demo"
              features={[
                { text: "Web profesional optimizada para SEO", included: true },
                { text: "Sistema de citas online 24h", included: true },
                { text: "Recordatorios automáticos por WhatsApp", included: true },
                { text: "Panel de gestión de citas", included: true },
                { text: "Hosting, SSL y mantenimiento incluido", included: true },
                { text: "Chatbot WhatsApp con IA (gestiona citas, dudas, cancelaciones)", included: true },
                { text: "CRM de pacientes y leads", included: true },
                { text: "5 automatizaciones a medida (flujos n8n/Make)", included: true },
                { text: "Integraciones con software existente", included: false },
                { text: "Consultoría mensual", included: false },
              ]}
            />

            <PackCard
              name="Transformación"
              price="499€"
              setup="Setup: 3.000€ (pago único)"
              description="Digitalización completa con integraciones a medida"
              cta="Reservar demo"
              features={[
                { text: "Web profesional optimizada para SEO", included: true },
                { text: "Sistema de citas online 24h", included: true },
                { text: "Recordatorios automáticos por WhatsApp", included: true },
                { text: "Panel de gestión de citas", included: true },
                { text: "Hosting, SSL y mantenimiento incluido", included: true },
                { text: "Chatbot WhatsApp con IA (gestiona citas, dudas, cancelaciones)", included: true },
                { text: "CRM de pacientes y leads", included: true },
                { text: "Hasta 15 automatizaciones a medida", included: true },
                { text: "Hasta 3 integraciones con tu software (gestión clínica, facturación, etc.)", included: true },
                { text: "Consultoría mensual 1h + soporte prioritario", included: true },
              ]}
            />
          </div>
        </Container>

        {/* Comparativa mercado */}
        <Container size="tight">
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-white text-center mb-3">
              Comparativa con el mercado
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-xl mx-auto">
              Lo que pagarías contratando cada servicio por separado vs. tenerlo todo integrado con nosotros.
            </p>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="py-3 pr-4 pl-6 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider">Servicio</th>
                    <th className="py-3 px-4 text-center text-xs font-semibold text-text-tertiary uppercase tracking-wider">Mercado</th>
                    <th className="py-3 pl-4 pr-6 text-center text-xs font-semibold text-accent-cyan uppercase tracking-wider">Román Tech</th>
                  </tr>
                </thead>
                <tbody className="px-6">
                  <ComparisonRow label="Web profesional" market="50-100€/mes" romantech="Incluido" />
                  <ComparisonRow label="CRM clínica (Clinic Cloud, Doctoralia...)" market="59-149€/mes" romantech="Incluido" />
                  <ComparisonRow label="Bot WhatsApp con IA" market="99-199€/mes" romantech="Incluido" />
                  <ComparisonRow label="Automatizaciones (n8n/Make gestionado)" market="150-300€/mes" romantech="Incluido" />
                  <ComparisonRow label="Chatbot web" market="29-59€/mes" romantech="Incluido" />
                  <tr className="bg-white/[0.03]">
                    <td className="py-4 pr-4 pl-6 text-white font-bold text-sm">Total mensual</td>
                    <td className="py-4 px-4 text-center text-red-400 font-bold text-sm line-through">387-807€/mes</td>
                    <td className="py-4 pl-4 pr-6 text-center text-emerald-400 font-bold text-lg">desde 149€/mes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>

        {/* Qué incluye cada automatización */}
        <Container size="tight">
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-white text-center mb-3">
              Ejemplos de automatizaciones
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-xl mx-auto">
              Algunas de las automatizaciones que configuramos para clínicas.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Recordatorios de cita", desc: "WhatsApp automático 24h y 2h antes. Reducción de no-shows del 40%." },
                { title: "Captación de leads", desc: "Formulario web + WhatsApp + email automático con propuesta personalizada." },
                { title: "Follow-up post-consulta", desc: "Email/WhatsApp automático pidiendo reseña en Google + recordatorio de siguiente cita." },
                { title: "Gestión de cancelaciones", desc: "Bot ofrece reagendar automáticamente. Si cancela, rellena el hueco desde lista de espera." },
                { title: "Sincronización agenda", desc: "Google Calendar, Clinic Cloud, Doctoralia... todo sincronizado en tiempo real." },
                { title: "Informes automáticos", desc: "Resumen semanal por email/Telegram: citas, ingresos, cancelaciones, leads nuevos." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* CTA */}
        <Container size="tight">
          <div className="text-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-12">
            <h2 className="text-2xl font-bold text-white mb-3">
              ¿Hablamos?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Reserva una llamada de 30 minutos. Analizamos lo que usas hoy,
              lo que quieres conseguir, y te decimos exactamente cómo lo haríamos.
              Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/emilio-romantech/demo-del-sistema-30-min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-bg-void font-semibold py-3 px-8 rounded-xl hover:brightness-110 transition-all duration-300"
              >
                Reservar llamada
              </a>
              <a
                href="mailto:emilio@romantech.es"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                Escribirnos
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
