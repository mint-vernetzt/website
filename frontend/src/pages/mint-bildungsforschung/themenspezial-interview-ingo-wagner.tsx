import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import Icon, { IconType } from "../../components/Icon/Icon";
import { H2, H3, H4, H6 } from "../../components/Heading/Heading";

export function DossierWagner({
  data,
}: {
  data: GatsbyTypes.DossierWagnerPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Es geht darum, Mädchen in der Informatik zu sehen. Interview mit Professor Ingo Wagner"
        slug="/mint-bildungsforschung/themenspezial-interview-ingo-wagner"
        description=""
        image={data?.HeroImage?.publicURL}
        children=""
      />
      <section className="container py-4 md:py-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/mint-bildungsforschung"
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
              „Es geht darum, Mädchen in der Informatik zu sehen“ 
            </H2>
            <p className="font-bold">
              Wie kann man Mädchen und Frauen für MINT-Fächer – insbesondere Informatik – begeistern, und das 
              möglichst nachhaltig? Professor Ingo Wagner hat mit Kolleg:innen dazu eine spannende Übersichtsarbeit 
              erstellt, in der Erkenntnisse aus über 800 Studien zusammengeführt wurden. Über die Kernelemente und 
              was sowohl MINT-Akteur:innen als auch Eltern richtig machen können, sprach er mit uns im Interview. 
              Eine Zusammenfassung der Arbeit ist ebenfalls auf unserer Website 
              unter <Link className="text-secondary" to="/mint-bildungsforschung">MINT-Bildungsforschung</Link> zu 
              finden.  
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Herr Wagner, warum ist es wichtig, dass mehr Mädchen und Frauen in MINT-Fächern vertreten sind? 
            </H4>
            <p>
              Ingo Wagner: In Deutschland gibt es zu wenig Fachkräfte, in MINT-Fächern fehlt es vor allem an Frauen. 
              Wenn man sieht, dass 80 % der Menschen, die Informatik studieren oder in IT-Berufen arbeiten, Männer 
              sind, sehe ich da große Potentiale für unsere Gesellschaft. Und dann gibt es noch die 
              pädagogisch-soziologische Perspektive. Es sollte allen Menschen möglich sein, in den Berufen zu arbeiten, 
              für die sie Fertigkeiten und Talente haben. Damit müssen wir aber alle Menschen – auch Mädchen und Frauen – 
              ansprechen, damit sie in den verschiedenen Berufen Erfahrungen sammeln können.
            </p>
            
            <H4 className="font-semibold mt-10 mb-6">
              Was hindert Mädchen daran, sich für MINT-Themen zu begeistern? 
            </H4>
            <p>
              Das fängt früh an, wenn beispielsweise eine Lehrkraft sagt: „Physik ist doch nichts für Mädchen.“ Dabei 
              ist die Schulzeit ein sensibles Zeitfenster, spätestens hier sollte angesetzt werden, Mädchen auf MINT und 
              IT aufmerksam zu machen. Wichtig ist, dass nicht nur Lehrkräfte eine Rolle spielen, sondern auch das soziale 
              Umfeld. 
            </p>
            
            <H4 className="font-semibold mt-10 mb-6">
              Wo kann hier im privaten Umfeld angesetzt werden? 
            </H4>
            <p>
              Eltern, Familie, Freund:innen, sie alle können Schranken im Kopf erzeugen, die verhindern, dass Menschen 
              ihren Interessen und Begabungen nachgehen. Wir wissen, dass diese Umwelteinflüsse eine beachtliche Rolle 
              spielen und dass wir bei ihnen ansetzen können, um offener und toleranter zu werden. 
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Was ist für Mädchen hier besonders wichtig? 
            </H4>
            <p>
              Mädchen fokussieren sich stark auf weibliche Rollenvorbilder. In der Geschichte gibt es viele wichtige 
              Frauen im Bereich Informatik, die nicht immer gewürdigt wurden, wie es ihnen gebührt. Von ihnen im 
              Unterricht oder im außerschulischen Lernort zu erfahren, kann bei Mädchen viel bewirken. Und es ist 
              auch von Bedeutung, wie Männer zu Frauen in MINT-Fächern stehen, etwa der eigene Vater.  
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Wie können Eltern hier hilfreich sein? 
            </H4>
            <p>
              Es ist wichtig, zuhause eine Offenheit zu kultivieren. Sowohl in der Sprache als auch in den Handlungen, 
              wie man die Kinder unterstützt. Und es ist sehr zu empfehlen, die Tochter auch mal etwas mehr zu ermutigen, 
              ein MINT-Angebot wahrzunehmen. 
            </p>
            
            <H4 className="font-semibold mt-10 mb-6">
              Müssen Mädchen anders angesprochen werden, um sie für MINT zu begeistern? 
            </H4>
            <p>
              Das klassische Mädchen oder den klassischen Jungen gibt es nicht. Wir sollten also nicht nur in einer binären 
              Kategorisierung von Geschlechtern denken, sondern sehen, dass es ein Spektrum von Menschen mit unterschiedlichen 
              Ausprägungen und Merkmalen gibt. Hier können wir ansetzen, um es allen zu ermöglichen, einen positiven Kontakt 
              mit MINT-Fächern zu haben. 
            </p>  

            <H4 className="font-semibold mt-10 mb-6">
              Glauben Sie, dass es an Mädchenschulen einfacher ist, Mädchen für MINT-Fächer zu begeistern? 
            </H4>
            <p>
              Es gibt tatsächlich einige Studien, die dafür sprechen, um Mädchen einen geschützten Lernraum zu bieten. Wir 
              haben in unserer Vergleichsarbeit aber auch herausgestellt, dass es noch andere Faktoren gibt neben dem Geschlecht. 
              Zum Beispiel die Vorerfahrungen der Kinder. Es könnte eine Möglichkeit sein, Mädchen und Jungen zumindest 
              phasenweise zu separieren. Ich glaube aber, dass es ebenso wichtig ist, eine Binnendifferenzierung im Unterricht 
              vorzunehmen, etwa nach Vorerfahrung und Leistungsstand. Das Geschlecht wäre also nur eine Komponente.  
            </p>
            
            <H4 className="font-semibold mt-10 mb-6">
              Wie fällt es Mädchen leichter, Feuer für MINT und besonders Informatik zu fangen? 
            </H4>
            <p>
              Indem man ihnen die Vielfalt – beispielsweise in der Informatik – deutlich macht. Aktuell ist das Bild oft 
              auf einen männlichen Programmierer beschränkt, der im Keller sitzt und Code schreibt. Davon müssen wir 
              wegkommen und die Vielfalt im Berufsalltag deutlich machen. Etwa, wie sich Programmierer und Programmiererinnen 
              in Teams kommunikativ austauschen und wie sie relevante Probleme interdisziplinär in den Blick nehmen. Das 
              Schreiben von Code ist da ja nur ein Aspekt. 
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Sie haben in Ihrer Übersichtsarbeit konkrete Handlungsempfehlungen zusammengefasst. Wie können Lehrkräfte und 
              MINT-Akteur:innen sie am besten für ihre Arbeit nutzen? 
            </H4>
            <p>
              <Link className="text-secondary" to="/mint-bildungsforschung/themenspezial-artikel-maedchen-fuer-informatik-begeistern/">Wir 
              haben insgesamt 22 Maßnahmen zusammengefasst und in sechs Gruppen eingeteilt.</Link> Sie sind nach 
              zeitlichen Abfolgen geordnet, beginnend mit dem Erstkontakt mit Informatik. Wenn man also einen 
              außerschulischen Lernort neu aufbaut, könnte man sich in unserem Maßnahmenkatalog anschauen, was 
              wir für das jeweilige Stadium empfehlen. Später geht es beispielsweise darum, das Interesse der 
              Mädchen langfristig aufrechtzuerhalten. 
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Welche Handlungsempfehlungen für Lernkontexte sind aus Ihrer Sicht die wichtigsten? 
            </H4>  
            <p>
              Praxisnahe und interdisziplinäre Lerneinheiten sind besonders wertvoll für die Lernenden, weil sie 
              so erfahren, warum das Gelernte für sie und die Gesellschaft relevant ist. Das unterstützt Motivation 
              und Interesse und ist eine Komponente, um die Vielfalt und das Facettenreichtum der Informatik deutlich 
              zu machen. Idealerweise auch durch interdisziplinär übergreifende Themen, zu denen die Informatik einen 
              Beitrag leisten kann.
            </p>  

            <H4 className="font-semibold mt-10 mb-6">
              Was war für Sie das überraschendste Ergebnis Ihrer Arbeit? 
            </H4>
            <p>
              Am meisten überrascht hat mich, dass unsere Erkenntnisse sehr gut zu Ergebnissen aus der allgemeinen 
              Pädagogik der Didaktik und der Forschung zu Gender und Diversity passen. Insofern waren unsere einzelnen 
              Ergebnisse nicht überraschend, sondern erfreulicherweise sehr gut anschlussfähig an bestehende Erkenntnisse.  
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Welche Reaktionen haben Sie auf Ihre Übersichtsarbeit bekommen? 
            </H4>
            <p>
              Wir haben viel Zustimmung erhalten. Einzelne Personen berichteten, dass sie sich in den Strukturen, die wir 
              beschreiben, wiedererkannt haben. Insbesondere Frauen, die rückblickend sagen: „In meiner Entwicklung gab es 
              auch Schranken.“ Sie konnten genau benennen, was in ihrer Bildungserfahrung schiefgelaufen ist. Wir haben auch 
              viele Anfragen von Gremien der Arbeitsagentur und von Ministerien bekommen, die uns um Beratung und Einschätzung 
              baten, damit die Entscheidungsträger:innen über noch mehr Wissen verfügen. Dort haben wir Vorträge zu unseren 
              Ergebnissen gehalten, um unsere Erkenntnisse weiter in die Praxis zu tragen.  
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Zum Schluss: Welchen Rat geben Sie MINT-Akteur:innen mit auf den Weg? 
            </H4>
            <p>
              Ich würde empfehlen, bei Denk- und Handlungsmustern zu beginnen. Also zu versuchen, die persönlichen Einstellungen 
              zu verändern, was gar nicht so leicht ist. Es geht darum, Mädchen in der Informatik zu sehen und sie dahingehend 
              zu unterstützen. Wir sind schon einen guten Schritt vorwärtsgekommen, alte Denk- und Handlungsmuster aufzubrechen. 
              Aber letztlich braucht es heute mehr denn je Flexibilität im Geiste. 
            </p>

            <H4 className="font-semibold mt-10 mb-6">Herr Wagner, vielen Dank für das spannende Gespräch.</H4>

            <p className="font-semibold text-primary mt-10 mb-6"></p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg relative">
              <div className="study_details mb-6">
                <H3 className="font-semibold mb-2">Details</H3>
                <p className="font-bold text-sm mb-0 text-neutral-900">
                  Interview vom 05.04.2022
                </p>
              </div>

              <hr className="mb-6" />

              <div className="">
                <H4 className="font-semibold mb-4">Interviewpartner</H4>
                <p>
                  <span className="font-bold">Ingo Wagner, 40,</span> ist seit 2018 Professor für interdisziplinäre 
                  Didaktik der MINT-Fächer und des Sports am Karlsruher Institut für Technologie (KIT). Er studierte 
                  Mathematik, Sport, Philosophie und Bildungswissenschaften auf Lehramt an der Universität zu Köln 
                  und an der Deutschen Sporthochschule. An den Instituten für Schulsport und Schulentwicklung sowie 
                  für Soziologie und Genderforschung war er als wissenschaftlicher Mitarbeiter an der Deutschen 
                  Sporthochschule Köln tätig, an der er 2015 promovierte.  
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

export default DossierWagner;

export const pageQuery = graphql`
  query DossierWagnerPage {
    HeroImage: file(
      relativePath: { eq: "themenspezial-interview_zitat_ingo-werner.png" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
  }
`;
