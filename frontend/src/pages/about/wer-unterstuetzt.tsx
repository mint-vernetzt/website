import { H1, H2, H3 } from "../../components/Heading/Heading";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { ReactComponent as Logo } from "../../images/logo-mint-vernetzt.svg";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export function WerUnterstuetzt({ data }: { data: GatsbyTypes.WerPageQuery }) {
  const networkBoardMembers = [
      {
        name: "Prof. Dr. Carsten Busch",
        organisation: "Hochschule für Technik und Wirtschaft Berlin/HAWtech",
      },
      {
        name: "Jacob Chammon",
        organisation: "Forum Bildung Digitalisierung",
      },
      {
        name: "Michael Fritz",
        organisation: "Haus der kleinen Forscher",
      },
      {
        name: "Dr. Sven Günther",
        organisation: "STIFT/Länderbeirat MINT-Regionen",
      },
      {
        name: "Indra Hadeler",
        organisation: "Arbeitgeberverband Gesamtmetall",
      },
      {
        name: "Alexander Handschuh",
        organisation: "Deutscher Städte- und Gemeindebund",
      },
      {
        name: "Jana Heiberger",
        organisation: "Deutscher Industrie- und Handelskammertag",
      },
      {
        name: "Dr. Kirsten Kielbassa-Schnepp",
        organisation: "Zentralverband des Deutschen Handwerks",
      },
      {
        name: "Kim Klebolte",
        organisation: "#SheTransformsIT",
      },
      {
        name: "Dr. Nico Kock",
        organisation: "Stiftung Jugend forscht e. V.",
      },
      {
        name: "Susanne Müller",
        organisation: "Bundesvereinigung der Deutschen Arbeitgeberverbände",
      },
      {
        name: "Katarina Peranić",
        organisation: "Deutsche Stiftung für Engagement und Ehrenamt",
      },
      {
        name: "Dr. Nicole Saverschek",
        organisation: "TU9",
      },
      {
        name: "Sabine Schwarz",
        organisation: "Bundesagentur für Arbeit",
      },
      {
        name: "Volker Tschiedel",
        organisation: "Bildungsministerium Rheinland-Pfalz/KMK AG-MINT",
      },
      {
        name: "Anja Weusthoff",
        organisation: " Deutscher Gewerkschaftsbund",
      },
      {
        name: "Mathias Haase",
        organisation: "Wissensfabrik",
      },
      {
        name: "Dr. Maximilian Müller-Härlin",
        organisation: "Bundesministerium für Bildung und Forschung",
      },
    ],
    scientificAdvisoryManagementBoardMembers = [
      {
        name: "Prof. Dr. Heidrun Stöger",
        organisation:
          "Universität Regensburg, Inhaberin des Lehrstuhls für Schulpädagogik",
      },
      {
        name: "Prof. Dr. Olaf Köller",
        organisation:
          "IPN – Leibniz-Institut für die Pädagogik der Naturwissenschaften und Mathematik, geschäftsführender wissenschaftlicher Direktor, Kiel",
      },
    ],
    scientificAdvisoryBoardMembers = [
      {
        name: "Prof. Dr. Silke Anger",
        organisation:
          "Otto-Friedrich-Universität Bamberg, Professorin für Volkswirtschaftslehre, insb. Bildungsökonomik",
      },
      {
        name: "Prof. Dr. Doris Holzberger",
        organisation:
          "Technische Universität München, Ko-Leiterin Clearing House, Leiterin des Zentrums für internationale Bildungsvergleichsstudien (ZIB) Bereich Forschungssynthesen und Forschungstransfer",
      },
      {
        name: "Prof. Dr. René Matzdorf",
        organisation: "Universität Kassel, Vizepräsident für Studium und Lehre",
      },
      {
        name: "Prof. Dr. Axel Plünnecke",
        organisation:
          "Institut der deutschen Wirtschaft, Leiter des Kompetenzfelds Bildung, Zuwanderung und Innovation, Köln",
      },
      {
        name: "Prof. Dipl.-Psych. Dr. Barbara Schober",
        organisation:
          "Universität Wien, Institut für Psychologie der Entwicklung und Bildung, Leiterin Bildungspsychologie",
      },
      {
        name: "Prof. Dr. Friederike Siller",
        organisation:
          "Technische Hochschule Köln, Leiterin des Instituts für Medienforschung und Medienpädagogik",
      },
      {
        name: "Prof. Dr. Johann Sjuts",
        organisation: "Universität Osnabrück, Professor für Mathematikdidaktik",
      },
      {
        name: "Prof. Dr. Martin Storksdieck",
        organisation:
          "Oregon State University, Director STEM Research Center, USA",
      },
      {
        name: "Prof. Dr. Jan Vahrenhold",
        organisation:
          "Universität Münster, Professor für Praktische Informatik",
      },
      {
        name: "Prof. Dr. Albert Ziegler",
        organisation:
          "Friedrich-Alexander-Universität Erlangen-Nürnberg, Inhaber des Lehrstuhls für Pädagogische Psychologie und Exzellenzforschung",
      },
    ];

  return (
    <Layout>
      <SEO title="Wer unterstützt MINTvernetzt?" slug="/about/wer-unterstuetzt/" description="" image="" children="" />

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-6 lg:px-10">
            <Logo />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <H1 like="h0">
              <span className="font-normal">Wer unterstützt</span>
              <br />
              MINT<span className="font-normal">vernetzt</span>?
            </H1>

            <p className="lg:text-3xl text-neutral-600 mb-4 font-bold">
              Gemeinsam mit Expert:innen sind wir stark für nachhaltige MINT-Bildung.
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              MINTvernetzt wird von einem Kreis von Expert:innen in der alltäglichen Arbeit unterstützt und 
              beraten. Zu den Gremien zählen der Strategiekreis, der MINT-Vernetzungsbeirat sowie das 
              Scientific Advisory Board. Die Mitglieder bringen ihre Expertise aus unterschiedlichen 
              Fachrichtungen mit ein und können dadurch bei der Entwicklung, bei Herausforderungen und 
              Synergien unterstützen.
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-8">
        <header>
          <H2 like="h2" className="mt-8 lg:mt-16">
            Der Strategiekreis
          </H2>
          <p className="text-neutral-600 lg:text-xl lg:px-10">
            Der Strategiekreis von MINTvernetzt ist das strategische
            Steuerungsinstrument des Gesamtverbundes MINTvernetzt. Jeder
            Verbundpartner stellt dabei ein Mitglied – zusätzlich kommt
            Stephanie Kowitz-Harms als Leitung der Vernetzungsstelle hinzu. Die
            Mitglieder tagen mindestens einmal im Quartal, um offene Fragen zu
            diskutieren, bestehende Strukturen zu schärfen und die Ziele im
            Blick zu behalten.
          </p>
        </header>
        <div className="">
          {data?.heroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.heroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full rounded-3xl overflow-hidden z-0"
              alt="Unsere Gremien."
            />
          ) : null}
        </div>
        <p className="text-xs pt-2 px-6">
          Von links nach rechts: Arne Klauke (matrix gGmbH), Julia Saalmann
          (Nationales MINT Forum), Julia André (Körber-Stiftung), Dr. Stephanie
          Kowitz-Harms (Körber-Stiftung), Dr. Pascal Hetze (Stifterverband),
          Prof. Dr. Heidrun Stöger (Universität Regensburg)
        </p>
      </section>

      <section className="container mt-8 lg:mt-16">
        <header>
          <H2 like="h2">Der MINT-Vernetzungsbeirat</H2>
          <p className="text-neutral-600 lg:text-xl lg:px-10">
            Der MINT-Vernetzungsbeirat ist das neueste Gremium von MINTvernetzt
            und startet im Mai 2022 mit der ersten offiziellen Sitzung.
            Insgesamt 17 Vertreter:innen unterschiedlicher Sektoren kommen
            mindestens einmal im Jahr zusammen, um ihre unterschiedlichen
            Perspektiven und Netzwerke einzubringen, kritisch zu diskutieren,
            Denkräume zu öffnen und sich gemeinsam für eine bessere MINT-Bildung
            in Deutschland zu engagieren. Darüber hinaus können sich die
            Mitglieder in weiteren Formaten von MINTvernetzt einbringen und sich
            im Rahmen von Stakeholderdialogen zu unterschiedlichen Themen
            austauschen. Unser Ziel ist es, mit Hilfe des
            MINT-Vernetzungsbeirates unsere Arbeit stetig zu verbessern, neue
            Impulse zu erhalten und Synergien zwischen den verschiedenen
            Sektoren anzuregen.
          </p>
        </header>
      </section>

      <section className="container mt-8 lg:mt-16">
        <div className="bg-tertiary-300 rounded-3xl py-10 px-2">
          <header>
            <H3 like="h3" className="text-center">
              Mitglieder des MINT-Vernetzungsbeirates
            </H3>
          </header>
          <div className="grid gap-8 gap-y-8 mx-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {networkBoardMembers.map((boardMember, index) => {
              return (
                <div
                  key={`network-board-member-container-item-${index}`}
                  className="flex flex-col justify-center items-center text-center border border-black rounded-3xl py-4 px-2"
                >
                  <p className="mb-1 font-semibold text-neutral-800">
                    {boardMember.name}
                  </p>
                  <p>{boardMember.organisation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mt-8 lg:mt-16">
        <header>
          <H2 like="h2">Das Scientific Advisory Board</H2>
          <p className="text-neutral-600 lg:text-xl lg:px-10">
            Im Bereich Wissenstransfer werden wir von einem Scientific Advisory
            Board unterstützt. Das Gremium, bestehend aus 12 Expert:innen mit
            unterschiedlichen wissenschaftlichen Schwerpunkten, tagt zweimal im
            Jahr: Dabei werden strategische Planungen und einzelne Formate des
            Wissenstransfers vorgestellt und es wird von den Expert:innen
            Feedback eingeholt. So sichern wir die Qualität unserer
            wissenschaftlichen Arbeit. Darüber hinaus werden Trends und
            Herausforderungen in der Bildungsforschung diskutiert und Impulse
            für die Entwicklung von Innovationen in der MINT-Bildung gegeben.
            Neben der inhaltlichen Beratung sind die Mitglieder immer wieder auf
            MINTvernetzt-Veranstaltungen als Speaker:innen zu sehen oder als
            Teil der Jury bei unseren Ausschreibungen zur MINTrakete aktiv.
            Durch die Zusammenarbeit mit externen Gremien möchten wir unseren
            Blick weiten und unsere Arbeit wissenschaftlich fundiert
            untermauern.
          </p>
        </header>
      </section>

      <section className="container mt-8 lg:mt-16">
        <H3 like="h3">Vorsitz Scientific Advisory Board</H3>
        <div className="grid gap-8 gap-y-8 grid-cols-1 md:grid-cols-2">
          {scientificAdvisoryManagementBoardMembers.map(
            (boardMember, index) => {
              return (
                <div
                  key={`scientific-management-board-member-container-item-${index}`}
                >
                  <p className="mb-1 font-semibold text-neutral-800">
                    {boardMember.name}
                  </p>
                  <p>{boardMember.organisation}</p>
                </div>
              );
            }
          )}
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:mt-16 lg:mb-20">
        <H3 like="h3">Mitglieder Scientific Advisory Board</H3>
        <div className="grid gap-8 gap-y-8 grid-cols-1 md:grid-cols-2">
          {scientificAdvisoryBoardMembers.map((boardMember, index) => {
            return (
              <div key={`scientific-board-member-container-item-${index}`}>
                <p className="mb-1 font-semibold text-neutral-800">
                  {boardMember.name}
                </p>
                <p>{boardMember.organisation}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default WerUnterstuetzt;

export const pageQuery = graphql`
  query WerPage {
    heroImage: file(relativePath: { eq: "mintvernetzt_gremien.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
  }
`;


