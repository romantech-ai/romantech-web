import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal, política de privacidad y política de cookies de Román Tech.",
};

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
            <h1 className="text-3xl font-bold text-white mb-8">Aviso Legal</h1>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">1. Datos identificativos</h2>
              <p className="text-text-secondary leading-relaxed">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y Comercio Electrónico (LSSI-CE), se informa:
              </p>
              <ul className="text-text-secondary space-y-1 mt-3">
                <li><strong className="text-white">Titular:</strong> Emilio Molina Román</li>
                <li><strong className="text-white">NIF:</strong> 06291655M</li>
                <li><strong className="text-white">Domicilio:</strong> Alcázar de San Juan, Ciudad Real, España</li>
                <li><strong className="text-white">Email:</strong> emilio@romantech.es</li>
                <li><strong className="text-white">Teléfono:</strong> +34 664 241 328</li>
                <li><strong className="text-white">Sitio web:</strong> https://romantech.es</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">2. Objeto</h2>
              <p className="text-text-secondary leading-relaxed">
                Este sitio web tiene como finalidad informar sobre los servicios profesionales de automatización,
                inteligencia artificial y desarrollo web ofrecidos por Román Tech.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">3. Propiedad intelectual e industrial</h2>
              <p className="text-text-secondary leading-relaxed">
                Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseño gráfico, código fuente,
                logos y marcas, son propiedad de Emilio Molina Román o de sus legítimos propietarios, y están protegidos
                por las leyes de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o
                transformación sin autorización expresa.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">4. Condiciones de uso</h2>
              <p className="text-text-secondary leading-relaxed">
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través de
                este sitio web. Queda prohibido el uso con fines ilícitos o que puedan causar daños a terceros.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">5. Exclusión de responsabilidad</h2>
              <p className="text-text-secondary leading-relaxed">
                Román Tech no se hace responsable de los daños que pudieran derivarse de interferencias, omisiones,
                interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento del sistema
                electrónico, así como de daños causados por terceros mediante intromisiones ilegítimas fuera de control.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">6. Política de privacidad</h2>
              <p className="text-text-secondary leading-relaxed">
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD):
              </p>
              <ul className="text-text-secondary space-y-2 mt-3">
                <li>
                  <strong className="text-white">Responsable:</strong> Emilio Molina Román — emilio@romantech.es
                </li>
                <li>
                  <strong className="text-white">Finalidad:</strong> Gestionar las consultas recibidas a través del
                  formulario de contacto y prestar los servicios solicitados.
                </li>
                <li>
                  <strong className="text-white">Legitimación:</strong> Consentimiento del interesado y ejecución de un
                  contrato o medidas precontractuales.
                </li>
                <li>
                  <strong className="text-white">Destinatarios:</strong> No se cederán datos a terceros, salvo obligación
                  legal. Se utilizan servicios de terceros (hosting, email) con garantías adecuadas.
                </li>
                <li>
                  <strong className="text-white">Derechos:</strong> Acceso, rectificación, supresión, limitación,
                  portabilidad y oposición. Puede ejercerlos escribiendo a emilio@romantech.es.
                </li>
                <li>
                  <strong className="text-white">Conservación:</strong> Los datos se conservarán mientras exista una
                  relación comercial o durante el tiempo necesario para cumplir obligaciones legales.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">7. Política de cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas
                (Vercel Analytics) para medir el rendimiento del sitio de forma anónima. No se utilizan cookies
                publicitarias ni de seguimiento de terceros.
              </p>
              <p className="text-text-secondary leading-relaxed mt-2">
                El usuario puede configurar su navegador para rechazar cookies, aunque esto podría afectar a la
                funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-3">8. Legislación aplicable</h2>
              <p className="text-text-secondary leading-relaxed">
                Este aviso legal se rige por la legislación española. Para cualquier controversia que pudiera derivarse
                del acceso o uso de este sitio web, las partes se someten a los juzgados y tribunales de Alcázar de San Juan (Ciudad Real).
              </p>
            </section>

            <p className="text-text-tertiary text-xs mt-12">
              Última actualización: marzo de 2026
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
