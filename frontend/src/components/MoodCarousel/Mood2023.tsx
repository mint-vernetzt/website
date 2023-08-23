import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import MoodCarousel from "./MoodCarousel";

export function Mood2023() { 
  const data = useStaticQuery(graphql`
    query {
      Slide1Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_01.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide2Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_02.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide3Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_03.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide4Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_04.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide5Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_05.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide6Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_06.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide7Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_07.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide8Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_08.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide9Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_09.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide10Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_10.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide11Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_11.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide12Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_12.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide13Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_13.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide14Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_14.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide15Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_15.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide16Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_16.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 900, placeholder: BLURRED)
      }
    } 
    Slide17Image: file(relativePath: { eq: "stimmungsbarometer/2023/MINT_Stimmungsbarometer2023_Seite_17.jpg" }) {
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
            alt="MINT-Stimmungsbarometer 2023"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2023`,
        excerpt: ``,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide2Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2023"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2023`,
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide3Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die Qualität der MINT-Bildung scheint in allen Bereichen zu sinken"
          />
        ),

        headline: `Die Qualität der MINT-Bildung scheint in allen Bereichen zu sinken`,
        excerpt: `Wie auch im vergangenen Jahr sind sich die Befragten einig, dass die Qualität der MINT-Bildung 
        zwar entlang der Bildungstreppe steigt, allerdings schneiden alle Bereiche schlechter ab als im Jahr zuvor. 
        Auffällig ist dieser Negativtrend im schulischen Bereich: Während 2022 noch fast 40 % aller Befragten die 
        MINT-Bildung an Schulen als (eher bis sehr) gut eingeschätzt haben, sind dieses Jahr nur noch ein Viertel 
        aller Befragten davon überzeugt. Im Vorschulbereich empfindet nur mehr jede:r Sechste die MINT-Bildung 
        als gut, während der Hochschulbereich mit 84 % als qualitativ (eher bis sehr) gut bewertet wird.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide4Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Der Stand der MINT-Bildung in Deutschland wird im internationalen Vergleich kritisch bewertet"
          />
        ),

        headline: `Der Stand der MINT-Bildung in Deutschland wird im internationalen Vergleich kritisch bewertet`,
        excerpt: `Die Ergebnisse zu den einzelnen Bildungsbereichen aus der vorherigen Frage decken sich mit dem 
        Gesamteindruck der MINT-Bildung im internationalen Vergleich: Mehr als drei Viertel der Befragten schätzt 
        die MINT-Bildung in Deutschland weniger gut ein als die MINT-Bildung in anderen Industrienationen. Im 
        vergangenen Jahr urteilten so immerhin nur gut zwei Drittel.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide5Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Das Engagement der Politik für die MINT-Bildung schneidet schlecht ab"
          />
        ),

        headline: `Das Engagement der Politik für die MINT-Bildung schneidet schlecht ab`,
        excerpt: `Das Engagement der gesellschaftlichen Akteur:innen wird sehr unterschiedlich wahrgenommen: Acht 
        von zehn Befragten bewerten das Engagement der Politik für die MINT-Bildung als zu niedrig, mehr als die
        Hälfte nehmen bei der Zivilgesellschaft und der Wirtschaft ein hohes Engagement wahr. Hier ist der 
        positive Eindruck im Vergleich zum Vorjahr allerdings jeweils von fast drei Viertel auf 57 % bei der 
        Zivilgesellschaft und auf 64 % bei der Wirtschaft gesunken.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide6Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die MINT-Freundlichkeit Deutschlands ist aus Sicht der Unternehmen gestiegen"
          />
        ),

        headline: `Die MINT-Freundlichkeit Deutschlands ist aus Sicht der Unternehmen gestiegen`,
        excerpt: `Trotz negativer Wahrnehmung der MINT-Bildung (s. vorherige Folien) wird Deutschland im Vergleich 
        zum Vorjahr insgesamt etwas „MINT-freundlicher“ bewertet. Am auffälligsten hat sich hier die Meinung der 
        Unternehmen geändert: Während im Jahr 2022 weniger als die Hälfte von ihnen Deutschland als ein 
        MINT-freundliches Land bezeichneten, stimmen dieses Jahr mit fast zwei Dritteln überdurchschnittlich 
        viele Unternehmen dieser Aussage zu.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide7Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Doppelspitze: Deutschlands Stärke liegt in der MINT-Forschung und dem dualen Ausbildungssystem"
          />
        ),

        headline: `Doppelspitze: Deutschlands Stärke liegt in der MINT-Forschung und dem dualen Ausbildungssystem`,
        excerpt: `Während sich im Jahr 2022 noch alle Befragten einig waren, dass die MINT-Forschung Deutschlands 
        größte Stärke war, kommt dieses Jahr ein weiterer Sieger hinzu: Die Sektoren Wirtschaft und Politik setzen 
        das duale Ausbildungssystem in Deutschland auf Platz 1, gefolgt von der MINT-Forschung. Einig sind sich 
        wiederum alle Befragten, dass es sowohl in der Breiten- als auch in der Talentförderung 
        Verbesserungspotenzial gibt.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide8Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die Relevanz von Kooperationen variiert je nach Kooperationspartner"
          />
        ),
        headline: `Die Relevanz von Kooperationen variiert je nach Kooperationspartner`,
        excerpt: `Aus der Perspektive außerschulischer Bildungsakteur:innen werden beispielsweise Kooperationen mit 
        Unternehmen von mehr als der Hälfte als „sehr wichtig“ angesehen, während diese Einschätzung umgekehrt aus 
        Sicht der Unternehmen von weniger als einem Viertel der Befragten geteilt wird.
        Bei den Antworten schulischer Bildungsakteur:innen fällt auf, dass mehr als ein Viertel der Befragten 
        Kooperationen zwischen Schulen und sowohl frühkindlichen Bildungseinrichtungen als auch Berufsschulen
        eher unwichtig findet.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide9Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Kooperationen sind eine Frage der Ressourcen"
          />
        ),

        headline: `Kooperationen sind eine Frage der Ressourcen`,
        excerpt: `Die beiden Aussagen, die am meisten Zustimmung erhalten haben, bedingen sich gegenseitig: Um dem 
        Fachkräftemangel entgegenzuwirken, müssen Bildung, Politik und Wirtschaft enger zusammenarbeiten – dafür 
        werden jedoch ausreichend finanzielle und personelle Ressourcen benötigt.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide10Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Das Potenzial der Ganztagsbetreuung muss besser genutzt werden"
          />
        ),

        headline: `Das Potenzial der Ganztagsbetreuung muss besser genutzt werden`,
        excerpt: `Insgesamt wird die Integration außerschulischer Bildungsangebote in die Ganztagsbetreuung als das 
        beste Instrument für Kooperationen angesehen. Bei Betrachtung der differenzierten Antworten nennen außerschulische 
        Bildungsakteur:innen und Vertreter:innen der Kategorie Kommune/Verwaltung vorrangig „ein Kooperationsmanagement 
        an öffentlichen Bildungseinrichtungen (z. B. durch entsprechende Planstellen)“.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide11Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Die Verbindung von MINT und Alltag muss deutlicher werden"
          />
        ),

        headline: `Die Verbindung von MINT und Alltag muss deutlicher werden`,
        excerpt: `Alle Sektoren sind sich einig: Die MINT-Bildung muss zugänglicher gemacht werden, indem MINT-Fächer 
        mit Alltagsthemen verknüpft werden, die einen Bezug zu den Lebenswelten der Zielgruppe herstellen. Außerdem 
        wichtig: das MINT-Image durch passende Vorbilder zu verbessern. Und nicht zuletzt sollte die Berufsorientierung 
        so ausgebaut werden, dass sie die Vielfalt der Zukunftsberufe im MINT-Bereich gut aufzeigt.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide12Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Viele Tipps für eine bessere MINT-Bildung"
          />
        ),

        headline: `Viele Tipps für eine bessere MINT-Bildung`,
        excerpt: `Bei dieser offenen Frage wurden mehr als 1000 Antworten geclustert und zusammengefasst. Übergreifend 
        für alle Bildungsstätten sehen die Befragten großen Handlungsbedarf beim Thema Ressourcen: Mehr Personal und 
        bessere Ausstattungen werden dringend benötigt, damit MINT-Bildung besser gelingt. Auch Vorschläge wie mehr 
        Kooperationen, Entlastung von Personal und mehr Fortbildungen sind ein Ressourcenthema. Darüber hinaus gibt 
        es für die einzelnen Bildungsstätten (sinngemäß und nach Häufigkeit) zusammengefasst weitere Empfehlungen 
        (s. Grafik).`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide13Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT braucht einen Image-Wandel und erhöhte Aufmerksamkeit"
          />
        ),

        headline: `MINT braucht einen Image-Wandel und erhöhte Aufmerksamkeit`,
        excerpt: `Bei dieser offenen Frage wurden mehr als 600 Antworten geclustert. In der Gesellschaft bedarf 
        es einer Verbesserung des MINT-Images z.B. durch einen Abbau von Gender- und MINT-Stereotypen. Die 
        gesellschaftspolitische Bedeutung von MINT muss seitens der Politik durch mehr Ressourcen verdeutlicht 
        werden. Die Wirtschaft sollte sich mit mehr Engagement und Kooperationsbereitschaft, z. B. durch 
        Praktika für die Gewinnung von MINT-Fachkräften einsetzen.`,            
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide14Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Informationen zur Datenerhebung und Methodik"
          />
        ),

        headline: `Informationen zur Datenerhebung und Methodik`,        
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide15Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Informationen zur Datenerhebung und Methodik"
          />
        ),
        headline: `Informationen zur Datenerhebung und Methodik`,          
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide16Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="Informationen zur Datenerhebung und Methodik"
          />
        ),
        headline: `Informationen zur Datenerhebung und Methodik`,        
      },
      {
        image: (
          <GatsbyImage
            image={data.Slide17Image.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2023"
          />
        ),
        headline: `MINT-Stimmungsbarometer 2023 `,
      },      
  ];
  return (
    <>
      <MoodCarousel id="mood2023" items={moodslides} />
    </>
  );
}

export default Mood2023;
