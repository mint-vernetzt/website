import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Icon, { IconType } from "../../components/Icon/Icon";
import { ReactComponent as Logo } from "../../images/logo-mint-vernetzt.svg";
import { H1, H3 } from "../../components/Heading/Heading";

export function WasIst() {
  return (
    <Layout>
      <SEO title="Was ist MINTvernetzt?" slug="/about/was-ist/" description="" image="" children="" />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-6 lg:px-10">
            <Logo />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <H1 like="h0">
              <span className="font-normal">Was ist</span>
              <br />
              MINT<span className="font-normal">vernetzt</span>?
            </H1>

            <p className="lg:text-3xl text-neutral-600 mb-4 font-bold">
              Die Service- und Anlaufstelle für MINT-Akteur:innen in Deutschland
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Die MINT-Vernetzungsstelle, kurz MINTvernetzt, ist das Dach für
              die außerschulische MINT-Bildung in Deutschland. MINTvernetzt wird
              vom Bundesministerium für Bildung und Forschung gefördert und von
              Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, dem
              Nationalen MINTForum e.V., dem Stifterverband und der Universität
              Regensburg als Verbund gemeinsam umgesetzt.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:items-stretch md:-mx-6 -mb-6 lg:-mx-10">
          {[
            {
              icon: <Icon type={IconType.LightBulb} width="32" height="32" />,
              title: `Motivation`,
              text: `MINT-Kompetenzen sind Zukunftskompetenzen. Ohne die Stärkung der MINT-Bildung und Aktivierung neuer MINT-Talente wird Deutschland als Innovationsstandort an Bedeutung verlieren und
              wichtige Beiträge zur Lösungsfindung globaler Herausforderungen wie des Klimawandels nicht leisten können. Kindern und Jugendlichen Kompetenzen in Mathematik, Informatik,
              Naturwissenschaften und Technik zu vermitteln und ihnen den Zugang zu MINT-Arbeitsplätzen zu ermöglichen, sind zentrale Schlüssel für mehr Gleichberechtigung und Teilhabe.`,
            },
            {
              icon: <Icon type={IconType.Magic} width="32" height="32" />,
              title: `Mission`,
              text: `Das Netzwerk der MINT-Netzwerke: Mit MINTvernetzt schaffen wir ein Netzwerk für die MINT-Bildungslandschaft, das bestehende Initiativen und Akteur:innen aktiv einbindet und unterstützt. Wir wollen daran mitwirken, dass MINT-Akteur:innen sich als Gemeinschaft begreifen, für ihr Engagement und ihre Leistungen mehr Sichtbarkeit bekommen und ihr Angebot noch stärker mit schulischen Aktivitäten verzahnen können. Gemeinsam mit der Community werden wir Impulse für neue Themen, innovative Angebote und diversere Zielgruppen setzen, um zusammen eine bessere MINT-Bildungslandschaft zu schaffen.`,
            },
            {
              icon: <Icon type={IconType.Flag} width="32" height="32" />,
              title: `Ziel`,
              text: `Wir unterstützen Engagierte der MINT-Bildung durch Vernetzungsräume, Transferangebote und Innovationsimpulse darin, noch bessere Bildungsangebote für Kinder und Jugendliche zu machen und dabei breitere und diversere Zielgruppen anzusprechen. Hierzu zählen insbesondere Mädchen und junge Frauen.`,
            },
            {
              icon: <Icon type={IconType.Gem} width="32" height="32" />,
              title: `Vision`,
              text: `Wir möchten die MINT-Akteur:innen Deutschlands zu einer bundesweiten lebendigen, diversen und nachhaltig wachsenden Gemeinschaft zusammenführen, um allen Kindern und Jugendlichen eine gute MINT-Bildung zu ermöglichen, die schulisches und außerschulisches Lernen miteinander verzahnt und anwendungsorientiert sowie praxisorientiert gestaltet ist. Unsere Vision ist es, dass Mädchen und junge Frauen sowie bislang benachteiligte Gruppen durch zielgruppenorientierte, klischeefreie und attraktive Angebote Zugang zur MINT-Bildung erhalten und Chancen in MINT-Berufen erkennen, die sie mit ihrem eigenen Selbstkonzept in Verbindung bringen können. Dadurch entsteht mehr Chancengerechtigkeit und Teilhabe in Deutschland.`,
            },
          ].map((teaser, index) => (
            <div
              key={`teaser-${index}`}
              className="flex-100 mb-6 lg:flex-1/2 md:px-6 lg:px-10"
            >
              <div className="icon w-8 h-8 mb-2 border border-secondary-500 rounded-full">
                {teaser.icon}
              </div>
              <H3 like="h5">{teaser.title}</H3>
              <p className="text-neutral-600">{teaser.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>  
  )
}

export default WasIst;
