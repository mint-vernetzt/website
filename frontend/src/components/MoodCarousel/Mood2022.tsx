import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MoodCarousel from "./MoodCarousel";

export function Mood2022() { 
  const data = useStaticQuery(graphql`
    query {
      Slide1Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_01.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide2Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_03.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide3Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_05.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide4Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_06.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide5Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_07.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide6Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_08.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide7Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_09.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide8Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_10.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide9Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_11.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide10Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_12.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide11Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_13.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide12Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_14.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide13Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_15.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide14Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_16.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide15Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_17.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide16Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_18.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide17Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_19.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide18Image: file(relativePath: { eq: "stimmungsbarometer/2022/MINT_Stimmungsbarometer2022_Seite_20.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    }
  `);
  const moodslides =
    [
      {
        image: (
          <GatsbyImage
            image={data.Slide1Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die Qualität der MINT-Bildung steigt entlang der Bildungskette an"
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
            alt="Die Qualität der MINT-Bildung steigt entlang der Bildungskette an"
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
      {
        image: (
          <GatsbyImage
            image={data.Slide18Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2022 `,        
      },
  ];
  return (
    <>
      <MoodCarousel id="mood2022" items={moodslides} />
    </>
  );
}

export default Mood2022;
