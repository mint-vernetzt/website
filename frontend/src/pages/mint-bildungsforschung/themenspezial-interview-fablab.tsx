import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import Icon, { IconType } from "../../components/Icon/Icon";
import { H2, H3, H4, H6 } from "../../components/Heading/Heading";

export function DossierFablab({
  data,
}: {
  data: GatsbyTypes.DossierFablabPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Eine offene Werkstatt für alle: Das FabLab IDEENREICH"
        slug="/mint-bildungsforschung/themenspezial-interview-fablab"
        description=""
        image={data?.HeroImage?.publicURL}
        children=""
      />
      <section className="container py-4 md:py-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/topics/didaktik/"
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            zur Übersicht
          </span>
        </Link>
        {data.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
          <GatsbyImage
            image={data.HeroImage.childImageSharp.gatsbyImageData}
            className="w-full h-auto rounded-2xl shadow-md"
            alt=""
          />
        ) : null}
      </section>

      <section className="container my-4 md:my-8 lg:my-8">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <H2 className="font-semibold mb-12">
              Eine offene Werkstatt für alle
            </H2>
            <p className="font-bold">
              Auf dem Campus der Hochschule Flensburg gibt es einen
              außerschulischen Lernort, der Studierende, Schüler:innen,
              Start-ups sowie Bürger:innen der Region in verschiedenen Angeboten
              dazu ermächtigt, eigene Ideen umzusetzen. Das FabLab IDEENREICH
              versteht sich als offene Werkstatt für alle. Wir sprachen mit
              Franka Heers und Nele Schmidt.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Nele und Franka, zu Euch ins FabLab IDEENREICH kommen ganz
              unterschiedliche Menschen, alle mit einem anderen Wissensstand.
              Was viele eint: Ihnen spukt eine Idee im Kopf herum, sie wollen
              ins Tun kommen. Wie gelingt das?
            </H4>
            <p>
              Nele: Wir bieten einen kreativen Raum, wo man sich einfach mal
              ausprobieren kann. Digitale Fertigung eignet sich super, um
              schnell erste einfache Prototypen zu bauen. Generell ist es
              wichtig, dass man mit anderen Menschen über seine Ideen spricht
              und sie begreifbar macht. Das kann im ersten Schritt auch schnell
              mit Pappe und Papier sein.
            </p>
            <p>
              Franka: Wir motivieren immer dazu, einfach mal auszuprobieren.
              Wenn es nicht klappt, dann machen wir es eben neu und anders – und
              haben daraus gelernt. Ganz wichtig ist, dass man bei uns Fehler
              machen darf.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Ihr seid in Flensburg auf dem Hochschul-Campus. Wie kann man sich
              Eure Räumlichkeiten vorstellen?
            </H4>
            <p>
              Nele: Wir sind in einem kleinen Containergebäude, das auf einem
              ehemaligen Parkplatz steht. Unser FabLab hat verschiedene Räume,
              die thematisch aufgeteilt sind: ein Ideenlabor, ein Raum für
              sozialen Austausch und Ideenentwicklung, eine digitale Werkstatt
              mit 3D-Druckern, Lasercutter und CNC-Fräse, eine kleine
              Holzwerkstatt sowie ein Studio. Wenn wir die Raumaufteilung hätten
              mitgestalten können, dann hätten wir noch lieber einen großen
              Makerspace statt vieler kleiner Werkstätten.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Welche Projekte kommen bei Schülerinnen und Schülern besonders gut
              an?
            </H4>
            <p>
              Franka: Unabhängig von der Altersstufe – die jüngsten waren eine
              dritte Klasse – lieben Schülerinnen und Schüler es, wenn sie etwas
              selbst machen können. Deshalb ist es uns wichtig, dass alle am
              Ende ein eigenes Produkt in den Händen halten, das mit nach Hause
              genommen werden kann. Besonders die Arbeit mit dem 3D-Drucker
              macht den Lernenden Spaß, da sie davon oft schon gehört haben und
              erstaunt sind, wie schnell sie ein eigenes Produkt entwickeln
              können. Das kann zum Beispiel ein Produkt mit dem eigenen Namen
              sein, wie ein Kühlschrankmagnet oder Schlüsselanhänger.
            </p>
            <p>
              Nele: Eine Oberstufenklasse war mit dem Philosophiekurs bei uns.
              Sie hatten im Unterricht darüber gesprochen, was der Unterschied
              zwischen Kunst und Design ist. Wir kamen ins Handeln, designten
              und gestalteten Lampen. Am Ende nahmen alle Teilnehmenden eine
              eigene Nachttischlampe mit nach Hause, ein echtes Produkt, das sie
              benutzen können.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Sprecht Ihr Mädchen anders an als Jungs?
            </H4>
            <p>
              Franka: Wir achten auf jeden Fall auf gendersensible Ansprachen,
              die eigentliche Ansprache gelingt uns aber über den Kontext. In
              der Vergangenheit haben wir auch mal Ferienworkshops explizit nur
              für Mädchen angeboten. Dann merkten wir aber, dass wir diese
              Einschränkung, dass sich nur Mädchen anmelden dürfen, gar nicht
              brauchen, denn die Zielgruppe erreichen wir auch darüber, wie
              unsere Workshops gestaltet sind. Ich persönlich finde es schöner,
              wenn wir unsere Angebote offen für alle machen.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Wie erreicht Ihr Mädchen über den Kontext?
            </H4>
            <p>
              Franka: Indem wir die gestalterischen und kreativen Aspekte in den
              Vordergrund stellen und nicht das Hochtechnisierte. Frauen und
              Mädchen fühlen sich dadurch angesprochen. Die Jungs aber auch, sie
              interessieren sich häufig sowieso für Sachen, die mit Technik
              funktionieren, und da reicht es, wenn im Nebensatz der Begriff
              „3D-Druck“ fällt.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Habt Ihr auch schon die Erfahrung gemacht, dass Ihr Mädchen nicht
              mitnehmen konntet?
            </H4>
            <p>
              Nele: Wenn wir bewerben, dass es bei einer Ferienaktion wenige
              Plätze gibt und dass man sich schnell anmelden soll, schreckt das
              Mädchen ab, das ist mein Gefühl. Auch Wettbewerbe scheinen sie
              nicht besonders anziehend zu finden. Das ist ihnen vielleicht mit
              zu viel Druck verbunden oder spricht sie einfach nicht an. Wenn es
              kompetitiv wird, ist das hingegen eine super Motivation für Jungs.
              Wer baut das schnellste Auto? Wir kennen das von den
              Maschinenbau-Studis gut, da sind sie sofort Feuer und Flamme.
            </p>
            <p>
              Franka: Das heißt aber nicht, dass Mädchen das alles nicht können.
              Als außerschulischer Lernort sind wir außen vor vom
              Bewertungskontext in der Schule. Wenn wir aber eine Schulklasse
              über eine Projektwoche begleiten, dann müssen wir sie auch
              bewerten. Deshalb gibt es eine Präsentation, nach deren Ende es
              Preise für die innovativste Idee oder den technisch
              ausgereiftesten Entwurf gibt. Da präsentieren die Mädchen
              mindestens genauso selbstbewusst und gut wie die Jungs – und
              heimsen auch die Preise von unserer unabhängigen Jury ein.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Was motiviert Mädchen, wenn es Wettbewerbe nicht sind?
            </H4>
            <p>
              Franka: Das Thema der Projektwoche ist ein gutes Beispiel:
              Gestalte den Umgang mit Müll neu. Es ging darum, sich mit dem
              Abfall in unserer Gesellschaft auseinanderzusetzen und
              Lösungsansätze zu finden. Es wurden technische Prototypen gebaut.
              Die Motivation ist eine ganz andere, wenn Mädchen das Thema für
              relevant erachten. Das können künstlerisch-gestalterische Projekte
              sein, aber auch ökonomische, ökologische und gesellschaftlich
              relevante Themen.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Wo lasst Ihr Euch für Eure Arbeit inspirieren?
            </H4>
            <p>
              Nele: Manchmal googele ich einen Begriff wie „3D print easy
              project“ und schaue, was andere dazu schon gemacht haben, zum
              Beispiel bei Instructables. In Dänemark gibt es tolle Projekte,
              die ihre Materialien und Projektideen veröffentlichen, wie das
              Netzwerk FabLab@schools. Wir sitzen ja hier direkt an der Grenze
              und tauschen uns gern mit den FabLabs dort aus.
            </p>
            <p>
              Franka: Maker Education ist im deutschsprachigen Bildungsraum noch
              ein relativ neues Thema. Es meint das Umsetzen von Ideen mit
              digitalen Technologien – und das in den Bildungsbereich zu
              integrieren. Es geht auch um didaktische Ansätze. Dass man etwa
              ein offenes Lernsetting hat, das Produkt in den Vordergrund stellt
              und Fehler machen erlaubt ist. Inzwischen gibt es Handbücher mit
              Beispielen, wie man Making-Aktivitäten in der Schule integrieren
              kann, da lassen wir uns auch inspirieren.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Was ist für Euch das schönste Feedback?
            </H4>
            <p>
              Franka: Für uns ist es das Tollste, wenn Schülerinnen und Schüler,
              die mal mit ihrer Klasse hier waren, später im OpenLab – also in
              der offenen Werkstattzeit – auftauchen. Wenn sie komplett
              intrinsisch motiviert wiederkommen und dann weitertüfteln. Sie
              schreiben uns auch manchmal eine Mail und erzählen von ihrer
              Projektidee.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Und in welchen Momenten macht Euch die Arbeit am meisten Spaß?
            </H4>
            <p>
              Franka: Die Momente, in denen ich merke, dass wir Menschen, die
              vorher gar nicht wussten, wie gerne sie mit digitalen Tools ihre
              eigenen Ideen umsetzen, begeistern können, sind die besten. Das
              Erste, was einem bei dem Gedanken an einen technischen Lernort
              kommt, ist ja: Hier kommen technische Wahlpflichtkurse her, um
              ihre programmierten Roboter zu verfeinern. So wollten wir es nicht
              machen, sondern innovative gestalterische Projekte anbieten.
            </p>
            <p>
              Nele: Ich habe mal einen OpenLab-Workshop angeboten, bei dem ein
              kleiner Micro-Controller programmiert wurde. Da haben ein
              Neunjähriger und ein technikaffiner Rentner, etwa Ende 60,
              zusammen getüftelt. Das war wirklich schön zu beobachten. Wir
              befähigen in den verschiedenen Angeboten alle möglichen Menschen
              dazu, ihre Ideen umzusetzen. Das ist für mich eine große
              Motivation.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Vielen Dank für das Gespräch.
            </H4>

            <p className="font-semibold text-primary mt-10 mb-6"></p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg relative">
              <div className="study_details mb-6">
                <p className="font-bold text-sm mb-0 text-neutral-900">
                  Veröffentlicht am 06.04.2022
                </p>
              </div>

              <hr className="mb-6" />

              <div className="">
                <H4 className="font-semibold mb-4">Interviewpartnerinnen</H4>
                <p>
                  <span className="font-bold">Franka Heers</span>, 34, studierte
                  Maschinenbau an der Hochschule Flensburg und arbeitete als
                  Konstrukteurin in Hamburg. Sie ging zurück an den Flensburger
                  Campus, um noch ein zusätzliches Studium der Berufspädagogik
                  zu machen. Seit ihrem Abschluss arbeitet Franka Heers im
                  FabLab IDEENREICH, sie hat die Stelle für pädagogische
                  Konzeptionierung eines außerschulischen Lernorts inne.
                </p>
                <p>
                  <span className="font-bold">Nele Schmidt</span>, 28, hat einen
                  Bachelor in Ingenieurwesen und Design. Sie arbeitete in einer
                  Designagentur und machte im Anschluss einen Master in IT und
                  Produktdesign. Nele Schmidt arbeitete bereits während ihres
                  Studiums in einem Makerspace und brachte dort Studierenden
                  digitale Fertigung näher. 2018 kam sie über ein Praktikum ins
                  FabLab IDEENREICH und schrieb hier auch ihre Masterarbeit.
                  Heute ist sie wissenschaftliche Mitarbeiterin im FabLab.
                  Prototyping und Entrepreneurship sind die Schwerpunkte ihrer
                  Arbeit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4 my-10">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <div className="flex justify-center">
              <div className="w-4 h-1 bg-neutral-400 rounded mx-2"></div>
              <div className="w-4 h-1 bg-neutral-400 rounded mx-2"></div>
              <div className="w-4 h-1 bg-neutral-400 rounded mx-2"></div>
            </div>
          </div>
          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4"></div>
        </div>
      </section>
    </Layout>
  );
}

export default DossierFablab;

export const pageQuery = graphql`
  query DossierFablabPage {
    HeroImage: file(
      relativePath: { eq: "themenspezial-interview_zitat_franka.png" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 100)
      }
    }
  }
`;
