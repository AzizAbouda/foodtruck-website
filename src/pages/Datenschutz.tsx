import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => (
  <main className="min-h-screen bg-background text-foreground py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
      >
        <ArrowLeft size={18} /> Zurück zur Startseite
      </Link>

      <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-2">
        Datenschutzerklärung
      </h1>
      <p className="text-foreground/50 text-sm mb-10">Stand: April 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed">

        {/* 1 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            1. Datenschutz auf einen Blick
          </h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            2. Verantwortliche Stelle
          </h2>
          <p>
            Kai Hafermann<br />
            Kolbenfresser<br />
            Koppelheck 4<br />
            56377 Nassau<br />
            Telefon: +49 (0) 171 5745579
          </p>
          <p className="mt-3">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
            personenbezogenen Daten entscheidet.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            3. Hosting und Server-Log-Dateien
          </h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet. Die
            personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
            Servern des Hosters gespeichert. Beim Besuch dieser Website werden automatisch
            folgende technische Daten erfasst:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold text-foreground">Rechtsgrundlage:</span> Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien
            Darstellung und Optimierung der Website).
          </p>
          <p className="mt-2">
            <span className="font-semibold text-foreground">Speicherdauer:</span> Diese Daten
            werden in der Regel nach 7–30 Tagen automatisch gelöscht, soweit keine gesetzliche
            Aufbewahrungspflicht besteht.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            4. SSL- bzw. TLS-Verschlüsselung
          </h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
            vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
            Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
            auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            5. Externe Formulare (Google Forms)
          </h2>
          <p>
            Für Kontakt- und Anfragezwecke nutzen wir den Dienst Google Forms der{" "}
            <span className="font-semibold text-foreground">Google Ireland Limited</span>,
            Gordon House, Barrow Street, Dublin 4, Irland („Google"). Wenn Sie auf den
            Anfrage-Button klicken, verlassen Sie unsere Website und werden auf die Server
            von Google weitergeleitet.
          </p>
          <p className="mt-3">
            Die dort eingegebenen Daten werden direkt von Google verarbeitet und nicht auf
            unserer Website gespeichert. Dabei können personenbezogene Daten (z. B. Name,
            E-Mail-Adresse, Ihre eingegebenen Informationen sowie Ihre IP-Adresse) an Google
            übertragen und auf Servern von Google gespeichert werden.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-foreground">Drittlandübermittlung in die USA:</span>{" "}
            Google kann Daten in die USA übermitteln. Für diese Übermittlungen stützt sich
            Google auf die von der EU-Kommission genehmigten Standardvertragsklauseln (SCC)
            gemäß Art. 46 Abs. 2 lit. c DSGVO.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-foreground">Auftragsverarbeitung:</span>{" "}
            Wir haben mit Google einen Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28
            DSGVO abgeschlossen.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-foreground">Rechtsgrundlage:</span> Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einfachen
            Kontaktmöglichkeit).
          </p>
          <p className="mt-3">
            Weitere Informationen zur Datenverarbeitung durch Google finden Sie unter:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            6. Ihre Rechte als betroffene Person
          </h2>
          <p className="mb-3">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
            personenbezogenen Daten:
          </p>

          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">Recht auf Auskunft (Art. 15 DSGVO)</p>
              <p>
                Sie haben das Recht, jederzeit unentgeltlich Auskunft über die von uns zu Ihrer
                Person gespeicherten personenbezogenen Daten sowie eine Kopie dieser Daten zu
                verlangen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Recht auf Berichtigung (Art. 16 DSGVO)</p>
              <p>
                Sie haben das Recht, die unverzügliche Berichtigung unrichtiger oder die
                Vervollständigung unvollständiger personenbezogener Daten zu verlangen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Recht auf Löschung (Art. 17 DSGVO)</p>
              <p>
                Sie haben das Recht, die unverzügliche Löschung der Sie betreffenden
                personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen
                vorliegen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
              </p>
              <p>
                Sie haben das Recht, unter bestimmten Voraussetzungen die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
              </p>
              <p>
                Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem
                strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die
                Übermittlung an einen anderen Verantwortlichen zu verlangen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Widerspruchsrecht (Art. 21 DSGVO)</p>
              <p>
                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten Widerspruch einzulegen, sofern die Verarbeitung auf
                Art. 6 Abs. 1 lit. e oder f DSGVO beruht.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Widerrufsrecht bei Einwilligungen (Art. 7 Abs. 3 DSGVO)
              </p>
              <p>
                Sofern die Datenverarbeitung auf Ihrer Einwilligung basiert, haben Sie das
                Recht, diese jederzeit zu widerrufen. Der Widerruf berührt nicht die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.
              </p>
            </div>
          </div>
        </section>

        {/* 7 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            7. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p>
            Unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe
            steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der
            Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten
            gegen die DSGVO verstößt.
          </p>
          <p className="mt-3">
            Die zuständige Aufsichtsbehörde für den Sitz des Verantwortlichen
            (Rheinland-Pfalz) ist:
          </p>
          <p className="mt-2">
            <span className="font-semibold text-foreground">
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Rheinland-Pfalz (LfDI)
            </span>
            <br />
            Hintere Bleiche 34<br />
            55116 Mainz<br />
            Telefon: +49 (0) 6131 208-2449<br />
            <a
              href="https://www.datenschutz.rlp.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              www.datenschutz.rlp.de
            </a>
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
            8. Aktualität dieser Datenschutzerklärung
          </h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025. Durch
            die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw.
            behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
            ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite
            abgerufen werden.
          </p>
        </section>

      </div>
    </div>
  </main>
);

export default Datenschutz;