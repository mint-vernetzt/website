import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import Icon, { IconType } from "../../components/Icon/Icon";
import { H2, H4, H5, H6 } from "../../components/Heading/Heading";

export function DossierAbbau({
  data,
}: {
  data: GatsbyTypes.DossierAbbauPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Abbau von Geschlechterunterschieden in der MINT-Bildung"
        slug="/mint-bildungsforschung/themenspezial-artikel-abbau-von-geschlechterunterschieden"
        description="Praktische Tipps für mehr Chancengleichheit"
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
        <div className="hero-image h-72 lg:h-116 rounded-lg lg:rounded-3xl overflow-hidden">
          {data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.HeroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full object-cover"
              alt="Abbau von Geschlechterunterschieden in der MINT-Bildung: Praktische Tipps für mehr Chancengleichheit"
            />
          ) : null}          
        </div>              
      </section>

      <section className="container my-4 md:my-8 lg:my-8">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-10 md:flex-7/12 md:px-2 lg:px-4">
            <H2 className="font-semibold mb-4">
              Abbau von Geschlechterunterschieden in der MINT-Bildung
            </H2>
            <p className="font-semibold text-xl mb-8 lg:mb-12 text-primary">
              Praktische Tipps für mehr Chancengleichheit
            </p>
            <p className="font-bold" id="study_background">
              Wenige Frauen in MINT-Berufen, ungenutztes Potential und
              Lohnungleichheit: All das können Folgen von verinnerlichten
              Geschlechterstereotypen sein. Doch die Forschung zeigt auch, dass
              sich Geschlechterunterschiede abbauen lassen. Die Arbeitsgruppe
              Forschungssynthesen am ZIB, dem Zentrum für internationale
              Bildungsvergleichsstudien, hat mittels einer Metaanalyse
              erforscht, wie sich die Motivation und das Interesse von Kindern
              und Jugendlichen gezielt fördern lassen – und sich so Türen zu
              verschiedenen Berufswegen öffnen.
            </p>
            <p>
              Er gilt als die höchste Auszeichnung für Wissenschaftler:innen:
              der Nobelpreis. Doch häufig strahlen nur männliche Preisträger bei
              der alljährlichen Verleihung. In den Jahren von{" "}
              <a
                href="https://de.statista.com/statistik/daten/studie/1176126/umfrage/anteil-der-nobelpreistraeger-nach-geschlecht/"
                target="_blank"
                className="text-lilac-500 font-bold hover:underline whitespace-nowrap"
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
                1901 bis 2022
              </a>{" "}
              gingen nur 6,4% aller Auszeichnungen an Frauen. Auffällig jedoch
              ist, dass sich die Geschlechterverteilung in den verschiedenen
              Forschungsgebieten unterscheidet. In der Physik gingen nicht
              einmal 2% der Auszeichnungen an Frauen. Im Bereich der Literatur
              gab es immerhin einen Frauenanteil von 14,3%.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_1">
              Forschungsfeld: ungleiche Bildungschancen für Mädchen und Jungen
            </H4>
            <p>
              Die ungleiche Verteilung von Nobelpreisen ist nur ein Beispiel für
              ein Phänomen, das Wissenschaftler:innen aus verschiedensten
              Disziplinen seit Jahren erforschen: Geschlechterunterschiede im
              Bildungskontext. Dabei wird immer wieder deutlich, dass die
              Grundsteine für Ungleichheit in der Bildung bereits in der
              Kindheit gelegt werden. Aber auch, dass sie sich aufweichen lassen
              – je früher, desto effektiver. Zu diesen und weiteren
              Erkenntnissen kommen die Autor:innen in ihrer wissenschaftlichen
              Metaanalyse{" "}
              <a
                href="#ref_1"
                className="text-lilac-500 font-semibold hover:underline"
              >
                "Reducing gender differences in student motivational-affective
                factors: A meta-analysis of school-based interventions“ (2022)
              </a>
              .
            </p>
            <div className="border border-neutral-400 p-6 rounded-lg lg:rounded-2xl my-8 shadow-lg">
              <H4 className="font-semibold mb-4" id="study_results">
                Metaanalyse
              </H4>
              <p>
                Eine Metaanalyse fasst die Ergebnisse mehrerer Studien, die sich
                mit ähnlichen Fragestellungen beschäftigen, mit Hilfe
                statistischer Methoden zusammen. So sollen aussagekräftigere
                Erkenntnisse gewonnen werden, als es mit Einzelstudien möglich
                ist.
              </p>
            </div>
            <p>
              Die Autor:innen berücksichtigten Studien, die im Schulkontext
              Ungleichheiten zwischen Jungen und Mädchen erforschen. Doch die
              Erkenntnisse lassen sich auch auf die außerschulische Bildung
              übertragen.
            </p>
            <p className="text-lg text-primary font-semibold">
              „Unsere Studie unterstreicht: Merkmale wie Motivation und
              Interesse lassen sich mit schulischen Interventionen fördern. Das
              kann ein Schritt sein, auch außerhalb der Schule Mädchen und
              Frauen mehr für MINT-Themen zu begeistern“, so Studienleiterin
              Prof. Dr. Doris Holzberger.
            </p>
            <p>
              Die Forschung zeigt, dass Mädchen in den Naturwissenschaften
              schlechter abschneiden als Jungen, aber beim Lesen und Schreiben
              die Nase vorn haben. Bei Jungen scheinen die Stärken und Schwächen
              genau gegenteilig verteilt zu sein. Aber warum? Denn die
              kognitiven Fähigkeiten der Kinder sind gleich verteilt. Unter
              kognitiven Fähigkeiten versteht man – kurz gesagt – alle Denk- und
              Wahrnehmungsvorgänge.
            </p>
            <p>
              Als wichtigen Faktor für die Geschlechterunterschiede in den
              verschiedenen Fächern identifizieren die Autor:innen die
              sogenannten motivational-affektiven Merkmale. Mit motivationalen
              Merkmalen sind etwa innerer (intrinsischer) oder von außen
              angeregter (extrinsischer) Antrieb gemeint. Auch das Interesse an
              einer Sache oder einem Thema zählt zu diesen Merkmalen sowie das
              Selbstschema, also das Wissen einer Person über das eigene Selbst
              und somit über die eigene Art und Weise, Ereignisse wahrzunehmen.
              Unter affektiven Merkmalen versteht man vor allem emotionale
              Zustände.
            </p>

            <div className="border border-neutral-400 p-6 rounded-lg lg:rounded-2xl my-8 shadow-lg">
              <GatsbyImage
                image={data.Illustration.childImageSharp.gatsbyImageData}
                className=""
                alt=""
              />
            </div>

            <H4 className="font-semibold mt-10 mb-6" id="section_2">
              Merkmale: was die Entwicklung von Geschlechterunterschieden
              beeinflusst
            </H4>
            <p>
              Die motivational-affektiven Merkmale eines Menschen können von
              erlernten Geschlechterrollen beeinflusst sein. Ein Beispiel: Wenn
              ein Mädchen Mathematik als „Jungenfach“ wahrnimmt, kann es sein,
              dass es sich für mathematisch unbegabter hält oder das Fach als
              unwichtiger einstuft. Entsprechend zeigt es vielleicht weniger
              Interesse, schneidet schlechter ab und ist frustriert – was die
              Abneigung gegen das Fach verstärkt. Diese Erfahrung kann Folgen
              weit über die Schulzeit hinaus haben und später zum Beispiel die
              Entscheidung beeinflussen, ob eine Frau einen MINT-Beruf ergreift.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_3">
              Handlungsempfehlung: Interventionen, die Geschlechterunterschiede
              abbauen können
            </H4>
            <p>
              Für die Bildungspraxis sind die Fragen relevant, wie
              Geschlechterunterschiede gar nicht erst entstehen oder sich wieder
              reduzieren lassen. Und auch hierzu bieten die Autor:innen der
              Metaanalyse Antworten. Sie unterscheiden verschiedene Kategorien
              der schulischen Interventionen, an denen sich auch
              Bildungsanbieter:innen außerhalb von Schulen orientieren können.
              Es gibt zum einen die direkten beziehungsweise indirekten
              Maßnahmen, zum anderen Handlungsempfehlungen mit oder ohne
              geschlechtsspezifische Ausrichtung.
            </p>
            <p>So können Interventionen beispielsweise angewandt werden:</p>
            <p className="font-semibold">
              Praxisbeispiel 1: direkte, geschlechtsspezifische Intervention
            </p>
            <p>
              Für die Bildungspraxis sind die Fragen relevant, wie
              Geschlechterunterschiede gar nicht erst entstehen oder sich wieder
              reduzieren lassen. Und auch hierzu bieten die Autor:innen der
              Metaanalyse Antworten. Sie unterscheiden verschiedene Kategorien
              der schulischen Interventionen, an denen sich auch
              Bildungsanbieter:innen außerhalb von Schulen orientieren können.
              Es gibt zum einen die direkten beziehungsweise indirekten
              Maßnahmen, zum anderen Handlungsempfehlungen mit oder ohne
              geschlechtsspezifische Ausrichtung.
            </p>
            <p className="font-semibold">
              Praxisbeispiel 2: direkte, nicht geschlechtsspezifische
              Intervention
            </p>
            <p>
              Eine direkte Intervention, allerdings ohne geschlechtsspezifische
              Ausrichtung, wäre der Einsatz eines Lerntagebuchs. Dabei notieren
              Kinder regelmäßig, wofür sie das eben Gelernte wohl im späteren
              Leben brauchen. Gibt es zum Beispiel Probleme oder Berufe, in
              denen die neuen Fähigkeiten von Nutzen sind? Durch die Reflexion
              können sich spannende, neue Anwendungsfelder eröffnen. Außerdem
              schätzen die Kinder die Bedeutung ihres eigenen Wissens höher ein.
            </p>
            <p className="font-semibold">
              Praxisbeispiel 3: indirekte, geschlechtsspezifische Intervention
            </p>
            <p>
              Indirekte Interventionen sind nicht explizit darauf ausgerichtet,
              motivational-affektive Merkmale zu fördern, haben aber dennoch
              positive Auswirkungen auf sie. Ein Beispiel ist das kooperative
              Lernen in Gruppen. Wenn Schüler:innen etwa Matheaufgaben gemeinsam
              statt einzeln lösen, kann das Ängste vor dem Fach Mathematik
              reduzieren. In stereotyp männlichen oder weiblichen Fächern lässt
              sich so das jeweils benachteiligte Geschlecht besonders fördern.
            </p>
            <p className="font-semibold">
              Praxisbeispiel 4: indirekte, nicht geschlechtsspezifische
              Intervention
            </p>
            <p>
              Indirekte Interventionen ohne geschlechtsspezifische Ausrichtung
              sind zum Beispiel das problembasierte Lernen, also das Lernen mit
              Aufgaben, die sich mit der Lösung eines alltagspraktischen
              Problems beschäftigen. Alle Schüler:innen nehmen so beim Lernen
              eine aktivere Rolle ein und es zeigt sich eine gesteigerte
              Motivation.
            </p>
            <p>
              Weitere Beispiele und Praxistipps, wie sich
              Geschlechterunterschiede abbauen lassen, {" "}
              <a
                href="https://www.edu.sot.tum.de/suf/fuer-lehrkraefte/geschlechterunterschiede-im-bildungskontext/praxistipps/"
                target="_blank"
                className="text-lilac-500 font-bold hover:underline whitespace-nowrap"
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
                lest Ihr hier.                
              </a>
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_4">
              Ergebnisse: wann und wie stark die Interventionen wirken
            </H4>
            <p>
              Die Autor:innen der Metaanalyse erforschten auch, wie stark die
              Wirkung der jeweiligen Maßnahmen ist. Zusammenfassend lässt sich
              sagen, dass alle Interventionen, egal welcher Kategorie, eine
              positive Wirkung auf alle Kinder und Jugendlichen hatten und sich
              mit der Förderung Geschlechterunterschiede in der Bildung
              reduzieren lassen. Besonders erwähnenswert ist, dass
              Interventionen, die gezielt das stereotyp benachteiligte
              Geschlecht ansprechen, einen größeren Effekt für ebendieses
              Geschlecht haben als unspezifische Maßnahmen. Detaillierte
              Informationen zur Wirkung schulischer Interventionen findet Ihr{" "}
              <a
                href="https://www.edu.sot.tum.de/suf/fuer-lehrkraefte/geschlechterunterschiede-im-bildungskontext/themenheft-geschlechterunterschiede-im-bildungskontext/"
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
                im praxisorientierten Themenheft (ab Seite 20)</a>.
            </p>
            <p>
              Eine weitere Erkenntnis, die die Autor:innen extrahieren konnten,
              ist, dass Maßnahmen im Grundschulalter effektiver sind als zu
              einem späteren Zeitpunkt. Auch dieses Wissen kann für
              Bildungsanbieter:innen außerhalb von Schulen wichtig sein: Die
              motivational-affektiven Merkmale eines Menschen bleiben während
              seiner gesamten Lebenszeit formbar. Doch in jungen Jahren haben
              Interventionen stärkeren Einfluss.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="section_5">
              Chancengleichheit: MINT-Entscheidungen im Bildungsbereich
              verändern
            </H4>
            <p>
              Die Metaanalyse zeigt eindrücklich, dass es sich gerade im Bereich
              der Bildung lohnt, die Ungleichheiten zwischen den Geschlechtern
              im Blick zu behalten. Besonders Praktiker:innen in der
              MINT-Bildung sollten ihre eigenen Rollenbilder immer wieder
              hinterfragen und ihr Angebot und ihre Kommunikation daraufhin
              überprüfen.
            </p>
            <p>
              Langfristig könnten sich so die Türen zu verschiedenen Berufswegen
              öffnen und MINT-Entscheidungen verändern. Und vielleicht strahlen
              in Zukunft ähnlich viele Preisträger wie Preisträgerinnen bei der
              Vergabe des Nobelpreises – und das in allen Fachrichtungen.
            </p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="px-4 py-6 lg:px-6 rounded-lg lg:rounded-2xl bg-neutral-200 shadow-lg relative">
              <div className="study_summary mb-4">
                <H4 className="font-semibold mb-4">Zusammenfassung</H4>
                <p>
                  Mädchen schneiden beim Lesen besser ab, Jungen im Rechnen:
                  Immer wieder weisen Studien Geschlechterunterschiede im
                  Bildungskontext nach. Doch woher stammen diese? Die
                  Arbeitsgruppe Forschungssynthesen am ZIB, dem Zentrum für
                  internationale Bildungsvergleichsstudien, hat mittels einer
                  Metaanalyse erforscht, welche Aspekte die Entwicklung von
                  Geschlechterunterschieden beeinflussen. Aber auch, wie sich
                  die Unterschiede wieder reduzieren lassen. Und hierfür bieten
                  die Autor:innen der Metaanalyse allen Akteur:innen der
                  Bildungspraxis konkrete Handlungsempfehlungen und
                  Praxisbeispiele.
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
                      Forschungsfeld: ungleiche Bildungschancen für Mädchen und
                      Jungen
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_2"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Merkmale: was die Entwicklung von
                      Geschlechterunterschieden beeinflusst
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_3"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Handlungsempfehlung: Interventionen, die
                      Geschlechterunterschiede abbauen können
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_4"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Ergebnisse: wann und wie stark die Interventionen wirken
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#section_5"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Chancengleichheit: MINT-Entscheidungen im Bildungsbereich
                      verändern
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section_6"
                      className="block font-semibold text-lg text-secondary hover:underline"
                    >
                      Literatur
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="mb-6" />

              <p className="text-sm mb-0 text-neutral-600 text-center">
                Veröffentlicht am 14. November 2022<br />
                Originalartikel vom 27. April 2022
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <H4 className="font-semibold mb-4" id="section_6">
              Literatur (Originalartikel und begleitendes Themenheft)
            </H4>

            <ul>
              <li className="pb-4 font-semibold" id="ref_1">                
                Lesperance, K., Hofer, S., Retelsdorf, J., & Holzberger, D.
                (2022). Reducing gender differences in student
                motivational-affective factors: A meta-analysis of
                school-based interventions. British Journal of Educational
                Psychology, 1–35.{" "}
                <a
                  href="https://doi.org/10.1111/bjep.12512"
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
                  https://doi.org/10.1111/bjep.12512
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_2">                
                Lesperance, K., Munk, S., Holzmeier, Y., Braun, M., &
                Holzberger, D. (2022). Geschlechterunterschiede im
                Bildungskontext. Von wissenschaftlichen Studien zu Impulsen
                für die Unterrichtspraxis.{" "}
                <a
                  href="https://doi.org/10.31244/9783830995340"
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
                  https://doi.org/10.31244/9783830995340
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

export default DossierAbbau;

export const pageQuery = graphql`
  query DossierAbbauPage {
    HeroImage: file(
      relativePath: {
        eq: "hero_abbau-von-geschlechterunterschieden.jpg"
      }
    ) {
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
