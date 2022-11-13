import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import Icon, { IconType } from "../../../components/Icon/Icon";
import { H2, H4, H5, H6 } from "../../../components/Heading/Heading";

export function DossierLernen({
  data,
}: {
  data: GatsbyTypes.DossierLernenPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Lernen im Kontext – ein wichtiger Baustein für MINT+"
        slug="/topics/mint-plus/themenspezial-artikel-mint-plus-lernen-im-kontext"
        description=""
        image={data?.HeroImage?.publicURL}
        children=""
      />
      <section className="container py-4 md:py-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/topics/mint-plus/"
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            zur Übersicht
          </span>
        </Link>
        <div className="hero-image h-72 lg:h-116 rounded-lg lg:rounded-3xl overflow-hidden">
          {data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.HeroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full object-cover"
              alt="Lernen im Kontext – ein wichtiger Baustein für MINT+"
            />
          ) : null}
        </div>
      </section>

      <section className="container my-4 md:my-8 lg:my-8">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <H2 className="font-semibold mb-8 lg:mb-12">
              Lernen im Kontext – ein wichtiger Baustein für MINT+
            </H2>
            <p className="font-semibold">
              Klimawandel, Corona-Pandemie, Digitalisierung oder Nachhaltigkeit:
              Wer die wichtigen Themen unserer Zeit verstehen will, der braucht
              zumindest ein grundlegendes Verständnis naturwissenschaftlicher
              Zusammenhänge. Mit MINT-Bildung so früh wie möglich zu beginnen
              ist also wichtiger denn je. Viele Studien zeigen aber, dass der
              Unterricht in diesen Fächern immer noch nicht besonders
              erfolgreich oder beliebt ist.<sup>1, 3</sup>{" "} Wie Konzepte von
              „kontextualisiertem Lernen“ helfen können, das zu ändern – und
              welche Erfahrungen und Herausforderungen es gibt –, darum soll es
              unter anderem bei den MINT-Aktionstagen im November gehen. Wir
              geben Euch einen Einblick in das Thema.
            </p>
            <p>
              Es erscheint fast ein bisschen paradox: Bewegungen wie „Fridays
              for Future“ mobilisieren weltweit hunderttausende junge Menschen –
              und doch schneiden die Fächer, in denen Wissen über Klimafragen
              oder Erderwärmung vermittelt wird, in Umfragen oft schlecht ab.
              <sup>1, 3</sup>{" "} Der Grund: Der Bezug zwischen Lehrstoff und realer
              Welt sowie gesellschaftlichen Entwicklungen wird häufig im
              Unterricht nicht ausreichend hergestellt.<sup>3</sup>{" "} Vielen
              Lernenden fehlt der konkrete Nutzen für das eigene Leben, und
              damit ein Gefühl von Relevanz.<sup>1, 3</sup>{" "} WARUM soll ich das
              wissen? WOFÜR ist es gut und WO kann ich es anwenden?
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_1">
              Warum kontextualisiertes Lernen für MINT+ interessant ist
            </H4>
            <p>
              Genau da setzt das Konzept von „kontextualisiertem Lernen“ an.
              Getreu der Wortbedeutung (lat. contextere = verknüpfen) wird das
              zu vermittelnde MINT-Wissen mit anderen Themen und Bereichen
              verknüpft.<sup>1</sup>{" "} Am bekanntesten ist bislang die Verbindung mit
              kreativen und künstlerischen Ansätzen – ganz im Sinne unseres
              Verständnisses von MINT+. Aber auch die Öffnung von
              MINT-Disziplinen zu anderen Bereichen kann eine Verbindung zur
              Lebensrealität der Lernenden herstellen.<sup>1</sup>{" "} Das macht MINT-Themen
              für viele greifbarer und zeigt gleichzeitig die Bedeutung der
              naturwissenschaftlichen Erkenntnisse für gesellschaftliche
              Themen.<sup>1, 2, 6</sup>{" "}
            </p>
            <p>
              Im Fokus der Forschung zu „kontextualisiertem Lernen“ stehen vor
              allem zwei Bereiche: der Lerninhalt und die Lernumgebung.<sup>1</sup>{" "} Was
              Kontextualisierung in diesen Bereichen genau bedeutet, das haben
              wir für Euch in einem kurzen Überblick zusammengefasst.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_2">
              Lerninhalt: vom abstrakten Faktenwissen zum Aha-Effekt 
            </H4>
            <p>
              Kerngedanke des kontextbasierten Lernens ist die Verknüpfung von MINT-Wissen mit 
              gesellschaftlichen Themenbereichen. Wie kann das nun am besten umgesetzt werden? 
              Indem die oft abstrakten Fakten und Erkenntnisse in naturwissenschaftlichen und 
              technischen Fächern in Zusammenhänge eingebettet werden, an die die Lernenden aus 
              ihrem eigenen Alltag anknüpfen können.<sup>2</sup>{" "} Denn je stärker ein Lerninhalt mit 
              alltäglichen Situationen und bereits bekannten Zusammenhängen verknüpft werden 
              kann, desto eher erschließt sich seine sinnstiftende Bedeutung, und er wird 
              plötzlich mehr als ein abstrakter Unterrichtsinhalt.<sup>1</sup>{" "} 
            </p>
            <p className="text-lg text-primary font-semibold mb-0">
              „Ein Kontext zeigt zum einen Relevanz auf: Weshalb ist dieser Lerninhalt für mich bedeutsam? 
              Zum anderen wird Grundlagenwissen damit anwendbar, es muss sich sozusagen in einer relevanten 
              Frage als tragfähig bewähren.“ 
            </p>
            <p>Prof. Dr. Ilka Parchmann , Professorin für Didaktik der Chemie am IPN Kiel</p>

            <H4 className="font-semibold mt-10 mb-6" id="section_3">
              Exkurs: Lernen im Kontext als Weg zur „Scientific Literacy“ 
            </H4>
            <p>
              Einige pädagogische Ansätze arbeiten mit dem weiterführenden Konzept der 
              "Socio-scientific Issues".<sup>1, 3, 6</sup>{" "} 
            </p>

            <div className="border border-neutral-400 p-6 rounded-lg lg:rounded-2xl my-8 shadow-lg">
              <H4 className="font-semibold mb-4" id="study_results">
                Socio-scientific Issues (SSI)
              </H4>
              <p>
                Socio-scientific Issues (SSI) sind soziale Probleme mit einer starken Verbindung zu den 
                Naturwissenschaften. Sie sind vielschichtig, schwer zu lösen und oft mit ethischen Fragen 
                verknüpft.
              </p>
            </div>
            <p>
              Dabei werden komplexe Herausforderungen unserer Zeit in den Fokus des Unterrichts gestellt. 
              Es sind Themen, die oft keine einfache Lösung bieten, aber die für unsere Zukunft eine 
              entscheidende Rolle spielen – wie Klimawandel, Gentechnik, Kernenergie oder Tierversuche.  
            </p>
            <p>
              Durch die Beschäftigung mit diesen Themen lernen die Jugendlichen neben den 
              naturwissenschaftlichen Fakten, gesellschaftlich relevante Themen besser zu verstehen, 
              komplexe Sachverhalte zu analysieren und zu bewerten. Es versetzt sie in die Lage, sich 
              an Debatten zu sozialen, politischen oder ethischen Fragen zu beteiligen.<sup>2, 3</sup>{" "} 
              Ein Zustand, der "Scientific Literacy", also "wissenschaftliche Alphabetisierung", 
              genannt wird.<sup>6</sup>{" "}  
            </p>
            
            <div className="border border-neutral-400 p-6 rounded-lg lg:rounded-2xl my-8 shadow-lg">
              <H4 className="font-semibold mb-4" id="study_results">
                Scientific Literacy
              </H4>
              <p>
                Scientific Literacy meint neben einem grundlegenden Verständnis wissenschaftlicher 
                Zusammenhänge auch, dass man dieses Wissen auf komplexe, reale Situationen anwenden kann.
              </p>
            </div>

            <H4 className="font-semibold mt-10 mb-6" id="section_4">
              One size fits NOT all: warum die Anwendung von kontextualisierten Inhalten schwierig bleibt 
            </H4>
            <p>
              In der außerschulischen Praxis werden Konzepte zur Kontextualisierung bei der Gestaltung von 
              Lerninhalten schon häufig bedacht.<sup>5</sup>{" "} Eine enorme Herausforderung ist jedoch die 
              Ansprache der Lernenden: Nicht alle Kinder und Jugendlichen können mit den gleichen 
              Inhalten und Kontexten gleich gut erreicht werden. Oft sind Gruppen sehr heterogen. 
              Soziale Herkunft, individuelles Vorwissen zu einem Thema und Interessen können sich stark 
              unterscheiden.<sup>7</sup>{" "} Es ist daher nicht immer einfach, die Inhalte an die individuellen 
              Bedürfnisse anzupassen. 
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_5">
              Lernumgebung: Der Ort beeinflusst das Lernen  
            </H4>
            <p>
              Die Art und Weise, wie wir Wissen aufnehmen, wird aber nicht nur von den Inhalten bestimmt, sondern 
              auch von der Lernumgebung. Der konkrete Ort, seine Ausstattung und die an der Wissensvermittlung 
              beteiligten Personen stellen einen wichtigen Kontext dar, der das Lernen prägt.<sup>1</sup>{" "} 
              Dabei haben Schulen und außerschulische Lernorte unterschiedliche Voraussetzungen. 
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_6">
              Authentizität und Realitätsbezug: Herausforderungen für den Lernort Schule 
            </H4>
            <p>
              Was für die Lerninhalte gilt, gilt auch für die Lernumgebung: je stärker der Bezug zu realen 
              Zusammenhängen, desto besser lässt sich Wissen vermitteln.<sup>5</sup>{" "}  Das 
              ist im Schulunterricht – natürlich – schwierig. Volle Lehrpläne, eng getaktete Unterrichtseinheiten 
              und Prüfungsvorgaben schränken die Möglichkeiten der Lehrkräfte ein.<sup>7</sup>{" "} Oft fehlt es 
              aber auch an entsprechenden Räumen und Mitteln.<sup>5</sup>{" "} Eine Möglichkeit, trotzdem 
              authentische Einblicke zu vermitteln, ist die Ergänzung des Unterrichtsstoffs mit medialen Elementen. 
              Studien haben gezeigt, dass sogenannte mediale Kontextanker1 helfen können, das Lernen in möglichst 
              authentische Szenarien einzubetten – zum Beispiel durch Zeitungsartikel oder Videoclips, die ein 
              reales Problem abbilden, das es zu lösen gilt.<sup>4, 6, 8</sup>{" "} 
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_7">
              Gute Ergänzung: MINT-Angebote außerhalb der Schule 
            </H4>
            <p>
              Außerschulische Lernorte sind da oft im Vorteil. Sie können Informationen meist authentischer und 
              anschaulicher vermitteln und sind freier in Form und Dauer ihrer Angebote. Zu sehen, wie das 
              theoretische Wissen in der Praxis genutzt wird und wie echte Forschungsstätten aussehen, hilft 
              beim Verständnis.<sup>5</sup>{" "} Doch auch hier sollte ein Bezug zur Erfahrungswelt der Kinder 
              und Jugendlichen immer im Fokus stehen. Wo kann das Erlernte angewendet werden? Welche weiteren 
              gesellschaftlichen Themen werden durch dieses Wissen sichtbar? Nur so haben die Informationen 
              einen nachhaltigen Wert.<sup>7</sup>{" "} Lernen im realen Kontext kann also – so die Einschätzung 
              von Forschenden – auch das generelle Interesse der Jugendlichen an MINT-Themen fördern.<sup>5, 7, 9</sup>
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_8">
              Best Practice: So wird Nanotechnologie lebendig 
            </H4>
            <p>
              Ein erfolgreiches Beispiel für außerschulische Wissensvermittlung ist das Schülerlabor-Programm nawi:klick! 
              der Kieler Forschungswerkstatt, wie eine begleitende Untersuchung gezeigt hat.<sup>7</sup>{" "} Anhand 
              von sechs überschaubaren Experimenten werden Kernthemen der Nanotechnologie vermittelt – immer mit 
              Bezug zum Alltag der Jugendlichen. So wird etwa der Effekt von Nanopartikeln als UV-Filter in 
              Sonnencremes beobachtet oder die wasserabweisende Wirkung verschiedener Oberflächen wie Glas, Wachs 
              oder Markisenstoffen untersucht. Neben dem eigentlichen Fachwissen werden durch Diskussionen über 
              Chancen und Risiken von Nanotechnologie sowie das Arbeiten in Kleingruppen auch soziale Kompetenzen 
              und die Fähigkeit zu argumentieren gefördert. Es wird außerdem deutlich, wie vielfältig der Einsatz 
              von Nanomaterialien in Alltagsprodukten sein kann und welche möglichen Berufsfelder sich auf dem Gebiet ergeben.  
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_9">
              Noch mehr und diversere junge Menschen mit außerschulischen Lernangeboten erreichen 
            </H4>
            <p>
              Eine Herausforderung für solche Projekte jenseits der Schulen bleibt es jedoch, möglichst viele Lernende 
              zu erreichen. Wie erfahren Kinder und Jugendliche von den Angeboten? Und wie kann eine möglichst breite 
              Zielgruppe angesprochen und wie können die Inhalte für alle verständlich aufbereitet werden? Eine Möglichkeit:
              eine Orientierung der eigenen Angebote am Lehrplan der jeweiligen Region.<sup>7</sup>{" "} Das kann die 
              Nutzungschancen erhöhen und dabei helfen, schulisches und außerschulisches Lernen besser zu verzahnen. 
              Eine andere Möglichkeit ist es, kleinere Workshops oder einfachere Schülerlabor-Experimente direkt an 
              die Schulen zu bringen, um dort anzusetzen, wo die Möglichkeiten des Unterrichts aufhören.<sup>5, 7</sup>{" "}  
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_10">
              Innovative Ideen für die Zukunft des Lernens bei den MINT-Aktionstagen 
            </H4>
            <p>
              Um diese und andere Themen wird es auch am 23. November 2022 bei der Veranstaltung "Klimawandel, Pandemie 
              & Alltagsfragen: Innovative Formate und Ideen für Lernen im Kontext" im Rahmen der MINT-Aktionstage gehen. 
              Neben einem kurzen Einblick in die Historie und den heutigen Stand der Forschung wollen wir gemeinsam über 
              Erfahrungen aus der Praxis sprechen. Und natürlich geht es auch um Ideen, wie wir in Zukunft mit MINT+ noch 
              mehr und vor allem diversere Lerngruppen erreichen können.  
            </p>
            <p>
              <a
                href="https://community.mint-vernetzt.de/event/klimawandelpandemiealltagsfragenlernenimkontextindermintbildungideenfuerformateunddiverserezielgruppen-l9ftjf4x"
                target="_blank"
                className="text-lilac-500 font-bold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 inline-block mx-1 mb-1"
                >
                  <path
                    d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                    fill="currentColor"
                  />
                </svg>
                Meldet Euch bei den MINT-Aktionstagen an und seid dabei! 
              </a>
            </p>

            <p className="text-lg font-semibold" id="section_11">Unsere Expert:innen:</p>
            
            <p>
              <span className="font-semibold">Prof. Dr. Ilka Parchmann</span><br />
              Professorin für Didaktik der Chemie am IPN – Leibniz-Institut für die Pädagogik der 
              Naturwissenschaften und Mathematik und an der Christian-Albrechts-Universität zu Kiel, 
              Leiterin der Abteilung Didaktik der Chemie 
            </p>

            <p>
              <span className="font-semibold">Caroline Servais</span><br />
              Projektleiterin des GoodLabs, des MakerEducationLabs der Jungen Tüftler:innen mit 
              Lernformaten für eine nachhaltige Zukunft 
            </p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="px-4 py-6 lg:px-6 rounded-lg lg:rounded-2xl bg-neutral-200 shadow-lg relative">
              <div className="study_summary mb-4">
                <H4 className="font-semibold mb-4">Zusammenfassung</H4>
                <p>
                  MINT-Bildung ist heute wichtiger denn je. Doch viel zu oft fehlt Lernenden der Bezug zum eigenen 
                  Leben und zur äußeren Realität. Wissenschaftliche Ansätze zu "kontextualisiertem Lernen" setzen 
                  daher auf eine Verknüpfung von MINT-Disziplinen mit gesellschaftlich relevanten Themen. Durch die 
                  Einbettung in einen solchen Kontext soll der Nutzen von naturwissenschaftlichen und technischen 
                  Fakten besser verständlich und greifbarer werden. Dabei bilden schulische und außerschulische 
                  Lernorte aber auch selbst einen Kontext, der den Lernerfolg beeinflussen kann.
                </p>
              </div>

              <div className="study_navigation hidden md:block mb-6 mt-6">
                <H4 className="font-semibold mb-4">Absätze</H4>
                <ul className="">
                  <li className="mb-4">
                    <a
                      href="#section_1"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Warum kontextualisiertes Lernen für MINT+ interessant ist 
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_2"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Lerninhalt: vom abstrakten Faktenwissen zum Aha-Effekt  
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_3"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Exkurs: Lernen im Kontext als Weg zur „Scientific Literacy“  
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_4"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      One size fits NOT all: warum die Anwendung von kontextualisierten Inhalten schwierig bleibt 
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_5"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Lernumgebung: Der Ort beeinflusst das Lernen  
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_6"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Authentizität und Realitätsbezug: Herausforderungen für den Lernort Schule 
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_7"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Gute Ergänzung: MINT-Angebote außerhalb der Schule 
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_8"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Best Practice: So wird Nanotechnologie lebendig 
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_9"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Noch mehr und diversere junge Menschen mit außerschulischen Lernangeboten erreichen 
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_10"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Innovative Ideen für die Zukunft des Lernens bei den MINT-Aktionstagen 
                      </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_11"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Unsere Expert:innen
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="#section_12"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Literatur
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="mb-6" />

              <p className="text-sm mb-0 text-neutral-600 text-center">
                Originalartikel vom 4. November 2022
              </p>
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
          <div className="flex-100 md:flex-5/12"></div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <H4 className="font-semibold mb-4" id="section_12">
              Literatur
            </H4>

            <ul>
              <li className="pb-4 font-semibold" id="ref_1">
                <sup>1</sup>{" "} Parchmann, I.& Kuhn, J. (2018). Lernen im Kontext. In D. Krüger, I. Parchmann, H. Schecker (Hrsg.), 
                Theorien in der naturwissenschaftsdidaktischen Forschung (S. 193-207). Heidelberg: Springer 
                <a
                  href="https://doi.org/10.1007/978-3-662-56320-5_12"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1007/978-3-662-56320-5_12
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_2">
                <sup>2</sup>{" "} Sevian, H., Dori, Y. J., & Parchmann, I. (2018). How does STEM context-based learning work: 
                what we know and what we still do not know, International Journal of Science Education, 40:10, 1095-1107  
                <a
                  href="https://doi.org/10.1080/09500693.2018.1470346"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1080/09500693.2018.1470346
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_3">
                <sup>3</sup>{" "} Stuckey, M., Hofstein, A., Mamlok-Naaman, R., & Eilks, I. (2013). 
                The meaning of 'relevance' in science education and its implications for the science curriculum, 
                Studies in Science Education, 49:1, 1-34
                <a
                  href="https://doi.org/10.1080/03057267.2013.802463"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1080/03057267.2013.802463
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_4">
                <sup>4</sup>{" "} Kuhn, J., Müller, A. (2014). Context-based science education by newspaper story problems: 
                A study on motivation and learning effects, Perspectives in Science, 2:1-4, 5-21 
                <a
                  href="https://doi.org/10.1016/j.pisc.2014.06.001"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1016/j.pisc.2014.06.001
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_5">
                <sup>5</sup>{" "} Braund, M., Reiss, M. (2006). Towards a more authentic science curriculum: The contribution of 
                out-of-school learning, International Journal of Science Education, 28:12, 1373-1388  
                <a
                  href="https://doi.org/10.1080/09500690500498419"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1080/09500690500498419
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_6">
                <sup>6</sup>{" "} Presley et al. (2013). A framework for socio-scientific issues based education, 
                Science Educator, 22:1, 26-32
                <a
                  href="https://files.eric.ed.gov/fulltext/EJ1062183.pdf"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://files.eric.ed.gov/fulltext/EJ1062183.pdf
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_7">
                <sup>7</sup>{" "} Reimann, M., Herzog, S., Parchmann, I., & Schwarzer, S. (2020). Nanotechnologie in Schülerlabor und Schule – 
                Experimenteller Zugang zu alltagsnahen nanotechnologischen Facetten, Chemkon, 27:5, 215-223
                <a
                  href="https://doi.org/10.1002/ckon.201900038"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1002/ckon.201900038
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_8">
                <sup>8</sup>{" "} Stamer et al. (2021). Authentic insights into science: Scientific videos used in out-of-school learning environments, 
                International Journal of Science Education, 43:6, 868-887  
                <a
                  href="https://doi.org/10.1080/09500693.2021.1891321"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1080/09500693.2021.1891321 
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_9">
                <sup>9</sup>{" "} Gardner, T., Leonard, H., Waite, J. & Sentance, S. (2022). 
                What do we know about computing education for K-12 in non-formal settings? 
                A systematic literature review of recent research, Proceedings of the 2022 
                ACM Conference on International Computing Education Research, 1, 264-281
                <a
                  href="https://doi.org/10.1145/3501385.3543960"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lilac-500 font-bold hover:underline block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-4 h-4 inline-block mx-1 mb-1"
                  >
                    <path
                      d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  https://doi.org/10.1145/3501385.3543960
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4"></div>
        </div>
      </section>
    </Layout>
  );
}

export default DossierLernen;

export const pageQuery = graphql`
  query DossierLernenPage {
    HeroImage: file(relativePath: { eq: "hero_mint_plus_lernen.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    Illustration: file(
      relativePath: {
        eq: "Illustration_Abbau_von_Geschlechterunterschieden.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1600)
      }
    }
  }
`;
