import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H3, H4 } from "../../components/Heading/Heading";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import MoodCarousel from "../../components/MoodCarousel";
import Icon, { IconType } from "../../components/Icon/Icon";
import PdfDidaktik from "../../download/Kurzfassung_Studie_Didaktik-an-MINT-Lernorten.pdf";
import PdfDiversitaet from "../../download/Kurzfassung_Studie_Diversitaet-in-der-MINT-Bildung.pdf";

export function Datenfakten({
  data,
}: {
  data: GatsbyTypes.DatenfaktenPageQuery;
}) {
  
  const moodslides =
    [
      {
        image: (
          <GatsbyImage
            image={data.Slide1Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),

        headline: `MINT-Stimmungsbarometer 2022 `,
        excerpt: ``,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide2Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),

        headline: `MINT-Stimmungsbarometer 2022 `,
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide3Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die Qualität der MINT-Bildung steigt entlang der Bildungskette an"
          />
        ),

        headline: `Die Qualität der MINT-Bildung steigt entlang der Bildungskette an`,
        excerpt: `Über die Qualität der MINT-Bildung entlang der Bildungskette gehen die Meinungen auseinander: 
        Während in der vorschulischen Bildung nur jede:r fünfte Befragte die MINT-Bildung positiv bewertet, sind 
        es im schulischen und außerschulischen Bereich ein Drittel bis knapp die Hälfte der Befragten. Die 
        MINT-Hochschulbildung wird zu über 90% als eher gut bzw. sehr gut empfunden.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide4Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Keine einheitliche Meinung zu der MINT-Freundlichkeit Deutschlands"
          />
        ),

        headline: `Keine einheitliche Meinung zu der MINT-Freundlichkeit Deutschlands`,
        excerpt: `Während über zwei Drittel der Befragten aus der Kategorie öffentlicher Sektor Deutschland als ein 
        MINT-freundliches Land einschätzen, stimmen dieser Aussage weniger als die Hälfte der befragten Unternehmen zu.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide5Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Der Stand der MINT-Bildung in Deutschland wird schlechter bewertet"
          />
        ),

        headline: `Der Stand der MINT-Bildung in Deutschland wird schlechter bewertet`,
        excerpt: `Zwei Drittel der Befragten schätzt die MINT-Bildung in Deutschland weniger 
        gut ein als die MINT-Bildung in anderen Industrienationen.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide6Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="In der allgemeinen Wahrnehmung muss sich die Politik mehr für die MINT-Bildung einsetzen"
          />
        ),

        headline: `In der allgemeinen Wahrnehmung muss sich die Politik mehr für die MINT-Bildung einsetzen`,
        excerpt: `Insgesamt empfinden fast 80 % der Befragten das Engagement der Politik für die MINT-Bildung 
        als zu niedrig. Ein gutes Zeugnis erhalten hingegen die Wirtschaft und die Zivilgesellschaft: Beiden 
        Sektoren wird ein ähnlich hohes Engagement von über 70% zugeschrieben.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide7Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Kompetenzen sichern die Zukunft Deutschlands"
          />
        ),

        headline: `MINT-Kompetenzen sichern die Zukunft Deutschlands`,
        excerpt: `Die große Mehrheit von 75% verbindet mit dem Begriff MINT zuallererst wichtige Zukunftskompetenzen, 
        um den Wirtschafts- und Innovationsstandort Deutschland zu sichern. Weitere Assoziationen mit MINT sind, dass 
        es sich hierbei um Berufsfelder mit guten Perspektiven handelt, es zugleich aber im Bereich Frauen- und 
        Mädchenförderung Handlungsbedarf gibt.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide8Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die gesellschaftliche und alltägliche Relevanz von MINT-Themen muss verdeutlicht werden"
          />
        ),
        headline: `Die gesellschaftliche und alltägliche Relevanz von MINT-Themen muss verdeutlicht werden`,
        excerpt: `Die Antworten bestätigten den aktuellen Diskurs, dass Interdisziplinarität und Kontextualisierung von 
        MINT-Fächern notwendig sind, um bisher nicht erreichte Zielgruppen für MINT zu begeistern. Auch eine Verknüpfung 
        von MINT-Themen mit Alltagsthemen wird als Maßnahme empfohlen, um Gruppen zu erreichen, die sich durch reine 
        MINT-Themen vielleicht nicht angesprochen fühlen.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide9Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT birgt viele Herausforderungen"
          />
        ),

        headline: `MINT birgt viele Herausforderungen`,
        excerpt: `Die größten Herausforderungen sehen die Befragten in der Kombination aus technologischem Wandel und den 
        damit verbundenen Kompetenzlücken, dicht gefolgt von der lückenhaften MINT-Bildung entlang der Bildungskette. Weiter 
        gilt es, die Fachkräfteengpässe bei MINT-Berufen zu bewältigen.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide10Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Klare Meinung: Deutschlands MINT-Kompetenzen liegen eher in der Spitze als in der Breite"
          />
        ),

        headline: `Klare Meinung: Deutschlands MINT-Kompetenzen liegen eher in der Spitze als in der Breite`,
        excerpt: `Fast zwei Drittel der Befragten sehen die Stärke Deutschlands bei den MINT-Kompetenzen eher in der Spitze, 
        nur jede:r Vierte ist der Meinung, dass MINT-Kompetenzen eher in der Breite ausgeprägt sind.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide11Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Deutschlands Stärke liegt in der MINT-Forschung und dem dualen Ausbildungssystem"
          />
        ),

        headline: `Deutschlands Stärke liegt in der MINT-Forschung und dem dualen Ausbildungssystem`,
        excerpt: `Deutschland punktet mit seiner Forschung sowie mit seinem dualen Ausbildungssystem. Die Breitenförderung 
        hingegen landet auf dem letzten Platz.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide12Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Klarer Auftrag: das Potential weiblicher Fachkräfte berücksichtigen"
          />
        ),

        headline: `Klarer Auftrag: das Potential weiblicher Fachkräfte berücksichtigen`,
        excerpt: `Der Berücksichtigung weiblicher Fachkräftepotentiale wird im Zusammenhang mit der Fachkräftesicherung die 
        wichtigste Rolle zugeteilt. Ähnlich wichtig ist eine Verbesserung der Berufsorientierung, um mehr MINT-Fachkräfte 
        zu gewinnen. Im Bildungsbereich ist eine mögliche Lösung, mehr Durchlässigkeit innerhalb von MINT-Bildungswegen, 
        z.B. zwischen beruflichen und akademischen Bildungswegen, zuzulassen.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide13Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die Digitalisierung wird als größte Herausforderung der kommenden Jahre vermutet"
          />
        ),

        headline: `Die Digitalisierung wird als größte Herausforderung der kommenden Jahre vermutet`,
        excerpt: `Bei dieser offenen Frage wurde 170-mal die Digitalisierung als größte Herausforderung für die MINT-Bildung 
        genannt. Weitere häufig genannte Begriffe sind der Klimawandel, erneuerbare Energien sowie künstliche Intelligenz 
        und Robotik.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide14Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Konkrete Änderungsvorschläge für das Bildungssystem"
          />
        ),

        headline: `Konkrete Änderungsvorschläge für das Bildungssystem`,
        excerpt: `Bei dieser offenen Frage wurden über 400 Antworten geclustert und zusammengefasst. Die neun häufigsten 
        Änderungsvorschläge betreffen vorrangig die Schulbildung – von den MINT-Lehrkräften bis zum MINT-Unterricht. 
        Aber auch die Verzahnung von MINT-Bildungsangeboten wird als wichtiges To-do erwähnt.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide15Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2022 `,          
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide16Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2022 `,        
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide17Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2022 `,
      },      
  ];

  return (
    <Layout>
      <SEO
        title="Daten und Fakten"
        slug="/data/daten-fakten/"
        description="Vom MINT-DataLab bis zum Stimmungs-barometer: Hier findet Ihr Analysen, Statistiken und Studien rund um MINT"
        image={data?.heroImage?.publicURL}
        children=""
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          <GatsbyImage
            image={data.heroImage?.childImageSharp?.gatsbyImageData}
            className="w-full h-full"
            alt="MINTvernetzt Plattform"
          />

          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">Daten und Fakten</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Analysen, Statistiken und Studien rund um MINT
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <p className="text-xl md:px-8 lg:px-20 ">
            Auf dieser Seite lassen wir Fakten sprechen: Wir sammeln für Euch von A wie Analysen bis Z wie Zahlen – alles, 
            was mit MINT zu tun hat. Ihr findet im MINT-DataLab statistische Kennzahlen, in unseren Auftragsstudien 
            Rechercheergebnisse zu ausgewählten Themen und im MINT-Stimmungsbarometer ein aktuelles Stimmungsbild zur 
            MINT-Bildung in Deutschland.
          </p>
        </header>
      </section>

      <section className="container mt-8 md:mt-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">            
            <GatsbyImage
              image={
                data.dataLabImage?.childImageSharp?.gatsbyImageData
              }
              className="w-full h-auto"
              alt="MINT-DataLab (Betaversion)"
            />            
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H2 like="h1">
                MINT-DataLab (Betaversion)
              </H2>
              <p>
                Die Betaversion des MINT-DataLabs ist online! Das MINT-DataLab umfasst statistische Kennzahlen von der nationalen bis zur 
                regionalen Ebene, etwa Schul- und Hochschulstatistiken sowie Daten zum Ausbildungs- und Arbeitsmarkt. Es stehen stets zwei 
                Fragen im Vordergrund: Wie hoch ist der MINT-Anteil in den unterschiedlichen Bereichen? Und wie hoch ist der jeweilige 
                Frauenanteil? Je nach Verfügbarkeit der Daten kann z. B. nach einzelnen MINT-Fächern und Bereichen gefiltert werden. 
                In der Regel können die Daten für den Zeitraum vom Jahr 2000 bis heute abgerufen werden.
              </p>
              <p className="-m-2">
                <a href="https://mint-vernetzt.shinyapps.io/datalab/" target="_blank" className="btn-primary btn-icon m-2">                  
                  <Icon type={IconType.ExternalLink} />                  
                  Zum MINT-DataLab
                </a>
                <a href="https://survey.lamapoll.de/MINT-DataLab_Feedback/" target="_blank" className="btn-outline-primary m-2 btn-icon">
                  <Icon type={IconType.ExternalLink} />                  
                  Feedback geben
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <H2 like="h1" className="text-center mb-14">
          <span className="font-bold">MINT</span>vernetzt-Studien 
        </H2>
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 md:order-2">
            <div className="overflow-hidden rounded-lg">
              <GatsbyImage
                image={data.didaktikImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
                alt="Didaktik an außerschulischen Lernorten (MINTvernetzt/ Boris Loehrer)"
              />
            </div>
            <p className="text-xs">MINTvernetzt / Boris Loehrer</p>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center md:order-1">
            <div>
              <H3 like="h2" className="mb-6">
                Didaktik an außerschulischen Lernorten
              </H3>
              <p>
                Lehrende haben oft fachliche Expertise und praktische Erfahrung, aber nicht zwingend einen 
                pädagogischen Hintergrund. Entsprechend selten kommen didaktische Konzepte zum Einsatz. Die 
                Studie zeigt die Besonderheiten außerschulischer Lernorte auf und ermittelt konkrete Bedarfe 
                an didaktischer Weiterbildung. Eine Langfassung wird in Kürze verfügbar sein.
              </p>
              <p className="mb-2">
                <a href={PdfDidaktik} target="_blank" className="btn-primary btn-icon">                  
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />                  
                  <span>Download Kurzfassung</span>
                </a>
              </p>
              <p className="text-xs">
                PDF, ca. 235KB
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <div className="overflow-hidden rounded-lg">
              <GatsbyImage
                image={data.diversityImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
                alt="Diversität in der MINT-Bildung (Unsplash / John Schaidler)"
              />
            </div>
            <p className="text-xs">Unsplash / John Schaidler</p>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center md:order-1">
            <div>
              <H3 like="h2" className="mb-6">
                Diversität in der MINT-Bildung
              </H3>
              <p>
                Diese Studie untersucht, welchen Einfluss die Dimension „Soziale Herkunft“ auf die MINT-Bildung 
                von Kindern und Jugendlichen hat. Sie liefert gleichzeitig konkrete Empfehlungen für die Praxis, 
                um mehr Chancengleichheit zu schaffen und so die Diversität in MINT-Berufen zu verbessern. Eine 
                Langfassung wird in Kürze verfügbar sein.
              </p>
              <p className="mb-2">
                <a href={PdfDiversitaet} target="_blank" className="btn-primary btn-icon">                  
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />                  
                  <span>Download Kurzfassung</span>
                </a>
              </p>
              <p className="text-xs">
                PDF, ca. 260KB
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-10 lg:mt-10 mb-20 relative">
        <header>
          <H3 like="h2">MINT-Stimmungsbarometer</H3>
          <p className="md:px-8 lg:px-20 ">
            Das MINT-Stimmungsbarometer ist eine jährliche Befragung von MINTvernetzt, bei der Vertreter:innen aus Bildung, 
            Wissenschaft und Wirtschaft zu ihren persönlichen Einschätzungen und Eindrücken zur MINT-Bildung in Deutschland 
            befragt werden.
          </p>
        </header>
        <div className="max-w-4xl mx-auto md:relative">
          <MoodCarousel items={moodslides} />
        </div>  
      </section> 
      <section className="container mt-8 md:mt-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20 md:columns-2 md:gap-8">        
          <p>
            Wie steht es um die Qualität der MINT-Bildung in Deutschland? Wie hoch ist das Engagement der einzelnen Sektoren? Und 
            welche Veränderungen sind notwendig, um die MINT-Bildung in Deutschland voranzubringen? 
          </p>
          <p>  
            Mit diesen und anderen Fragen bildet das MINT-Stimmungsbarometer neben einem Gesamtüberblick auch die unterschiedlichen 
            sektoralen Perspektiven auf die MINT-Bildung in Deutschland ab. 
          </p>
          <p>
            Das MINT-Stimmungsbarometer soll Trends und Herausforderungen in der MINT-Bildung sichtbar machen und Handlungsfelder für 
            die unterschiedlichen Akteur:innen in der MINT-Bildungslandschaft aufzeigen.
          </p>      
      </section>        
      <section id="MINTStimmungsbarometer-2023" className="container mt-8 md:mt-10 lg:mt-10 mb-20 relative">
        <div className="bg-primary text-white pt-16 pb-6 px-8 lg:pt-32 lg:pb-20 lg:px-16">
          <header className="mb-0 text-center">
            <H3 like="h2" className="text-white">MINT-Stimmungsbarometer 2023</H3>
            <p className="pt-4">
              Jetzt teilnehmen und Eure Einschätzung zur MINT-Bildung abgeben.
            </p>
            <p className="pt-8 pb-0">
              <a href="https://survey.lamapoll.de/MINT-Stimmungsbarometer-2023/" target="_blank" className="btn-outline-primary btn-icon bg-white">
                  <Icon type={IconType.ExternalLink} />                  
                  Zur Umfrage 2023
              </a>
            </p>
          </header>
        </div>                
      </section>
    </Layout>
  );
}

export default Datenfakten;

export const pageQuery = graphql`
  query DatenfaktenPage {
    heroImage: file(relativePath: { eq: "daten_fakten_hero.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    dataLabImage: file(relativePath: { eq: "daten_und_fakten_mockup_datalab.png" }) {
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    didaktikImage: file(relativePath: { eq: "daten-fakten_didaktik.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }    
    diversityImage: file(relativePath: { eq: "daten-fakten_diversity.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }    
    Slide1Image: file(relativePath: { eq: "stimmungsbarometer/1.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide2Image: file(relativePath: { eq: "stimmungsbarometer/2.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide3Image: file(relativePath: { eq: "stimmungsbarometer/3.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide4Image: file(relativePath: { eq: "stimmungsbarometer/4.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide5Image: file(relativePath: { eq: "stimmungsbarometer/5.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide6Image: file(relativePath: { eq: "stimmungsbarometer/6.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide7Image: file(relativePath: { eq: "stimmungsbarometer/7.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide8Image: file(relativePath: { eq: "stimmungsbarometer/8.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide9Image: file(relativePath: { eq: "stimmungsbarometer/9.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide10Image: file(relativePath: { eq: "stimmungsbarometer/10.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide11Image: file(relativePath: { eq: "stimmungsbarometer/11.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide12Image: file(relativePath: { eq: "stimmungsbarometer/12.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide13Image: file(relativePath: { eq: "stimmungsbarometer/13.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide14Image: file(relativePath: { eq: "stimmungsbarometer/14.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide15Image: file(relativePath: { eq: "stimmungsbarometer/15.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide16Image: file(relativePath: { eq: "stimmungsbarometer/16.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
    Slide17Image: file(relativePath: { eq: "stimmungsbarometer/17.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    } 
  }
`;

