"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Zap, TrendingUp, Shield, Check, ArrowRight, Loader2 } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const BUSINESS_TYPES = [
  { value: "fisioterapia", label: "Fisioterapia" },
  { value: "psicologia", label: "Psicología" },
  { value: "dentista", label: "Dentista" },
  { value: "medicina_estetica", label: "Medicina Estética" },
  { value: "estetica", label: "Estética / Belleza" },
  { value: "podologia", label: "Podología" },
  { value: "nutricion", label: "Nutrición" },
  { value: "logopedia", label: "Logopedia" },
  { value: "veterinaria", label: "Veterinaria" },
  { value: "abogado", label: "Abogado / Despacho" },
  { value: "optica", label: "Óptica" },
  { value: "gimnasio", label: "Gimnasio" },
  { value: "otros", label: "Otro tipo de negocio" },
];

const FEATURES = [
  {
    icon: Globe,
    title: "Web profesional en 48h",
    description: "Diseño personalizado con tu imagen, servicios y datos reales. Sin plantillas genéricas.",
  },
  {
    icon: Zap,
    title: "Optimizada para Google",
    description: "SEO local para que te encuentren pacientes buscando en tu zona.",
  },
  {
    icon: TrendingUp,
    title: "Formularios y llamadas",
    description: "Botones de contacto, WhatsApp y formularios que convierten visitas en citas.",
  },
  {
    icon: Shield,
    title: "HTTPS + Dominio propio",
    description: "Certificado SSL, hosting incluido y tu dominio .es/.com si lo necesitas.",
  },
];

const DEMOS = [
  { name: "VitalMove Fisioterapia", url: "https://vitalmove-fisioterapia.romantechwebs.com", type: "Fisioterapia" },
  { name: "MenteSerena Psicología", url: "https://menteserena-psicologia.romantechwebs.com", type: "Psicología" },
  { name: "Bellissima Estética", url: "https://bellissima-estetica.romantechwebs.com", type: "Estética" },
  { name: "PodiSalud Podología", url: "https://podisalud-podologia.romantechwebs.com", type: "Podología" },
];

export default function WebsPage() {
  const [formState, setFormState] = useState({
    businessName: "",
    businessType: "",
    city: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/request-web", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar la solicitud");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-bg-void">
      {/* Hero */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(0, 212, 255, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 70% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)",
            }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 mb-6">
                Desde 29€/mes
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Tu web profesional
              <br />
              <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                lista en 48 horas
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
            >
              Creamos webs personalizadas para clínicas y negocios locales.
              Sin plantillas, sin complicaciones.{" "}
              <span className="text-white font-medium">Tú solo nos dices qué necesitas.</span>
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href="#solicitar"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                  bg-gradient-to-r from-accent-cyan to-accent-purple
                  text-white font-semibold text-lg
                  border border-white/10
                  shadow-[0_0_30px_rgba(0,200,240,0.3)]
                  hover:shadow-[0_0_50px_rgba(0,200,240,0.5)]
                  hover:scale-[1.02] hover:-translate-y-0.5
                  active:scale-[0.98]
                  transition-all duration-300"
              >
                Solicitar mi web gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Qué incluye"
            title="Todo lo que necesitas para estar online"
            subtitle="Hosting, diseño, SEO y mantenimiento incluidos. Sin sorpresas."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-accent-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section gradient>
        <Container size="tight">
          <SectionHeader
            eyebrow="Precio transparente"
            title="Sin permanencia, sin letra pequeña"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-bg-card border border-border-subtle"
            >
              <h3 className="text-lg font-medium text-text-secondary mb-2">Alta</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">300€</span>
                <span className="text-text-tertiary">pago único</span>
              </div>
              <ul className="space-y-3">
                {["Diseño personalizado", "Contenido profesional", "SEO local configurado", "Dominio + SSL incluido"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                    <Check className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-bg-card border border-accent-cyan/30 relative"
            >
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                Más popular
              </span>
              <h3 className="text-lg font-medium text-text-secondary mb-2">Mantenimiento</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">29€</span>
                <span className="text-text-tertiary">/mes</span>
              </div>
              <ul className="space-y-3">
                {["Hosting y certificado SSL", "Actualizaciones de contenido", "Soporte técnico", "Sin permanencia — cancela cuando quieras"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                    <Check className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Demo portfolio */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Ejemplos reales"
            title="Webs que hemos creado"
            subtitle="Mira cómo quedan las webs de otros negocios como el tuyo."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {DEMOS.map((demo) => (
              <motion.a
                key={demo.url}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-bg-card border border-border-subtle
                  hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{demo.name}</h3>
                  <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-text-tertiary">{demo.type}</p>
              </motion.a>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Form */}
      <Section id="solicitar" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 30% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)",
            }}
          />
        </div>

        <Container size="tight" className="relative z-10">
          <SectionHeader
            eyebrow="Empieza aquí"
            title="Solicita tu web profesional"
            subtitle="Rellena el formulario y te preparamos una propuesta personalizada en 48h. Sin compromiso."
          />

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-lg mx-auto text-center p-10 rounded-2xl bg-bg-card border border-green-500/30"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">¡Solicitud recibida!</h3>
              <p className="text-text-secondary">
                Te contactaremos en menos de 48 horas con una propuesta personalizada para tu negocio.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-lg mx-auto space-y-5"
            >
              <motion.div variants={fadeUp}>
                <label htmlFor="businessName" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Nombre de tu negocio *
                </label>
                <input
                  id="businessName"
                  type="text"
                  required
                  value={formState.businessName}
                  onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                  placeholder="Ej: Clínica Fisioterapia López"
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle
                    text-white placeholder:text-text-tertiary
                    focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20
                    transition-all duration-200"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label htmlFor="businessType" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Tipo de negocio *
                </label>
                <select
                  id="businessType"
                  required
                  value={formState.businessType}
                  onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle
                    text-white
                    focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20
                    transition-all duration-200 appearance-none"
                >
                  <option value="" disabled className="bg-bg-primary text-text-tertiary">Selecciona...</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t.value} value={t.value} className="bg-bg-primary">{t.label}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label htmlFor="city" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Ciudad *
                </label>
                <input
                  id="city"
                  type="text"
                  required
                  value={formState.city}
                  onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                  placeholder="Ej: Toledo"
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle
                    text-white placeholder:text-text-tertiary
                    focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20
                    transition-all duration-200"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="612 345 678"
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle
                      text-white placeholder:text-text-tertiary
                      focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20
                      transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle
                      text-white placeholder:text-text-tertiary
                      focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20
                      transition-all duration-200"
                  />
                </div>
              </motion.div>

              <motion.p variants={fadeUp} className="text-xs text-text-tertiary">
                * Necesitamos al menos un teléfono o email para contactarte.
              </motion.p>

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 rounded-xl
                    bg-gradient-to-r from-accent-cyan to-accent-purple
                    text-white font-semibold text-lg
                    border border-white/10
                    shadow-[0_0_30px_rgba(0,200,240,0.3)]
                    hover:shadow-[0_0_50px_rgba(0,200,240,0.5)]
                    hover:scale-[1.01] hover:-translate-y-0.5
                    active:scale-[0.99]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300
                    flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar propuesta gratuita
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.div>

              <motion.p variants={fadeUp} className="text-center text-sm text-text-tertiary">
                Sin compromiso · Respuesta en menos de 48h
              </motion.p>
            </motion.form>
          )}
        </Container>
      </Section>
    </main>
  );
}
