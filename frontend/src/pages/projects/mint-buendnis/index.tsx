import React from "react";
import { graphql, Link } from "gatsby";
import CountUp from "react-countup";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2 } from "../../../components/Heading/Heading";
import { isBeforeOneDayAfterDate } from "../../../utils/eventFilter";
import TestimonialSwiper from "../../../components/Swiper/TestimonialSwiper";
import EventCards from "../../../components/EventCards/EventCards";
import Icon, { IconType } from "../../../components/Icon/Icon";
import { ReactComponent as HeaderImage } from "../../../images/buendnis/MINTvernetzt_Key_Visual_Buendnisseite.svg";

export function Alliance({ data }: { data: GatsbyTypes.AlliancePageQuery }) {
  const now = new Date();

  const events = data.events.nodes
    .filter((event) =>
      isBeforeOneDayAfterDate(
        now,
        new Date(event?.eventInformations?.endDate || "")
      )
    )
    .map((event) => {
      return {
        headline: event?.title ?? "NO HEADLINE SET",
        body: (
          <span
            dangerouslySetInnerHTML={{
              __html: (event?.excerpt ?? "")
                .replace(/<[^>]*>/g, "")
                .substr(0, 250),
            }}
          />
        ),
        date: new Date(event?.eventInformations?.startDate ?? ""),
        slug: `/event/${event.slug}/`,
        image: (
          <GatsbyImage
            image={
              event?.featuredImage?.node?.localFile?.childImageSharp
                ?.gatsbyImageData ??
              data?.MemberImage?.childImageSharp?.gatsbyImageData
            }
            className="w-full h-auto aspect-[16/9]"
            alt={event?.title || ""}
          />
        ),
        tags: event?.tags?.nodes?.map((tag) => ({
          title: tag?.name,
          slug: tag?.slug,
        })),
      };
    })
    .slice(0, 3);
  const testimonials = [
    {
      provider_foto: (
        <GatsbyImage
          image={data?.ProviderFischer?.childImageSharp?.gatsbyImageData}
          className="w-full h-auto"
          alt="Susann Fischer"
        />
      ),
      provider_name: `Susann Fischer`,
      provider_position: `Head of Personal and Organisational Development bei Deichmann SE`,
      testimonial_text: (
        <p>
          Chancengleichheit und Teilhabe sind der Motor für gesellschaftliches
          Wachstum. Gesellschaftliche Veränderungen können aber nur gemeinsam
          erreicht werden und leben von wahrnehmbaren Vorbildern. Vielfalt ist
          für uns als Unternehmen ein wichtiger Erfolgsfaktor. Dabei ist das
          Bündnis für uns eine ideale Möglichkeit für Austausch, gemeinsame
          Ideen und Aktionen.
        </p>
      ),
      provider_profile: `https://community.mint-vernetzt.de/profile/agnieszkaspizewska`,
      projectlink: `https://www.little-lab.de/verein/`,
    },
    {
      provider_foto: (
        <GatsbyImage
          image={data?.ProviderCetinkaya?.childImageSharp?.gatsbyImageData}
          className="w-full h-auto"
          alt="Digitalexpertin Fatime Cetinkaya"
        />
      ),
      provider_name: `Fatime Cetinkaya`,
      provider_position: `Digitalexpertin, Geschäftsführerin cekaso GmbH und Co-Vorsitzende MINT-Kommission VdU`,
      testimonial_text: (
        <p>
          Ich möchte, dass Frauen aufhören aus MINT-Themen einen Mythos zu
          machen, den nur Männer verstehen. Die Zukunft gehört denen, die die
          Technologie gestalten. Lassen Sie uns sicherstellen, dass Frauen eine
          entscheidende Rolle dabei spielen!
        </p>
      ),
      provider_profile: `https://community.mint-vernetzt.de/profile/fatimecetinkaya-ld2ybdza`,
      projectlink: `https://www.cekaso.com/`,
    },
    {
      provider_foto: (
        <GatsbyImage
          image={data?.ProviderBusch?.childImageSharp?.gatsbyImageData}
          className="w-full h-auto"
          alt="Prof. Dr.-Ing. Carsten Busch"
        />
      ),
      provider_name: `Prof. Dr.-Ing. Carsten Busch`,
      provider_position: `HAWtech – HochschulAllianz für Angewandte Wissenschaften`,
      testimonial_text: (
        <p>
          Erfolgreiche Wissenschaft und Technik basiert auf Objektivität, Nachprüfbarkeit und 
          Transparenz – zum Wohle der Menschheit. Dies einzulösen, erfordert die gleichberechtigte 
          Beteiligung aller: Frauen, Männer, diverser Menschen. Also natürlich: Mehr Frauen in 
          MINT-Berufe!
        </p>
      ),
      provider_profile: `https://community.mint-vernetzt.de/profile/agnieszkaspizewska`,
      projectlink: `https://www.little-lab.de/verein/`,
    },
    {
      provider_foto: (
        <GatsbyImage
          image={data?.ProviderTuncer?.childImageSharp?.gatsbyImageData}
          className="w-full h-auto"
          alt="Prof.in Dr. Zeynep Tuncer"
        />
      ),
      provider_name: `Prof.in Dr. Zeynep Tuncer`,
      provider_position: `Professorin für Medieninformatik und Mensch-Computer-Interaktion an der Wilhelm Büchner Hochschule`,
      testimonial_text: (
        <p>
          Keine Frau in MINT ist selbstverständlich. Aber unser Ziel sollte es sein, dass es selbstverständlich wird! 
        </p>
      ),
      provider_profile: `https://community.mint-vernetzt.de/profile/agnieszkaspizewska`,
      projectlink: `https://www.little-lab.de/verein/`,
    },
  ];

  React.useEffect(() => {
    // accordeon toggle
    document
      .querySelectorAll(".accordion-item button")
      .forEach(($accordion) => {
        $accordion.addEventListener("click", (event) => {
          // event.preventDefault();
          document
            .querySelectorAll(".accordion-item button.active")
            .forEach(($active) => {
              if ($accordion !== $active) {
                $active.classList.remove("active");
              }
            });
          $accordion.classList.toggle("active");
        });
      });
  }, []);

  return (
    <Layout>
      <SEO
        title={`Bündnis für Frauen in MINT-Berufen`}
        slug={`/projects/mint-buendnis/`}
        description="Gemeinsam mehr Frauen für MINT begeistern"
        image={data.HeroImage?.publicURL}
        children=""
      />
      <section className="bg-lilac-50 relative overflow-hidden">
        <div className="container w-full  md:h-[480px] flex-col md:flex-row justify-between flex items-center xl:relative">
          <div className="-mx-4 flex pt-16 pb-12 md:w-full flex-auto">
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-5/12 px-4 md:pr-8">
              <H1 className="font-black text-5xl lg:text-8xl">
                Bündnis für Frauen in MINT-Berufen
              </H1>
              <p className="font-semibold text-primary text-lg lg:text-3xl lg:leading-snug">
                Gemeinsam mehr Frauen für MINT begeistern
              </p>
            </div>
          </div>

          <div className="hero-image md:absolute md:right-0 xl:right-auto xl:left-[50%] md:bottom-0 md:w-1/2 lg:max-h-[480px] text-right">
            <div className="max-w-xs md:max-w-none md:w-full md:h-full mx-auto md:mx-0 text-right flex justify-end buendis-heroimage">
              <HeaderImage />
            </div>
          </div>
        </div>   
        <div className="absolute right-0 bottom-0">
            <div
              className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700"
              style={{ writingMode: "vertical-rl" }}
            >
              istock / Anastasia Usenko
            </div>
        </div>     
      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container flex justify-center">
          <div className="lg:w-10/12">
            <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-[1.9rem] md:text-[2.2rem] tracking-wider leading-none font-semibold">
              Ein gemeinsames Ziel
            </H2>
            <p className="text-3xl leading-snug text-primary font-semibold">
              Mehr Mädchen und Frauen in MINT! Das Bündnis für Frauen in
              MINT-Berufen ist ein{" "}
              <span className="bg-lilac-200">
                Zusammenschluss von mehr als 300 Organisationen
              </span>
              , die gemeinsam dazu beitragen, dass Mädchen und Frauen stärker
              für Naturwissenschaft, Technik oder Informatik begeistert und für
              MINT-Berufe gewonnen werden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige-500 pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-salmon-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 784 649"
            className="absolute left-0 md:left-[50%] top-[40%] md:top-0 w-[120%] md:w-[70%] rotate-[-0deg] aspect-[1.2]"
          >
            <path
              stroke="currentColor"
              strokeWidth="3"
              d="M173.132 566.549C-155.751 445.81 42.189-23.058 323.981 3.049 451.258 14.84 428.398 69.097 516.076 125.654c126.1 81.342 397.154 81.342 190.917 387.849-18.394 27.336-83.747 87.752-114.315 106.098-66.069 39.654-146.207 47.296-419.546-53.052Z"
            />
          </svg>
        </div>
        <div className="container relative z-20">
          <div className="md:flex md:items-center md:justify-center -mx-4">
            <div className="md:w-4/12 px-4 mb-8 md:mb-0">
              <H2 className="mb-6 font-bold">
                Das ist das Bündnis für Frauen in MINT-Berufen{" "}
              </H2>
              <p className="md:text-xl leading-snug text-neutral-700">
                Auf einen Klick zeigt unser Film vom Netzwerktreffen 2023, was 
                sich hinter dem Bündnis verbirgt, und warum ein gemeinsames 
                Engagement wichtig ist.
              </p>
            </div>
            <div className="md:w-8/12 xl:w-6/12 px-4">
              <div
                id={`imagefilm-container`}
                className="bg-blue-500 md:aspect-16/9 flex items-center"
              >
                <iframe
                  id={`imagefilm-embed`}
                  style={{
                    display: "none",
                    border: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  data-src={`https://www.youtube-nocookie.com/embed/QrDYldBVjAA?autoplay=1`}
                  title="Live Stream"
                  allowFullScreen={true}
                  allow="autoplay"
                ></iframe>
                <div id={`imagefilm-optin`} className="flex p-8">
                  <div className="text-center">
                    <h3 className="text-white mb-8 font-bold">
                      Bündnis für Frauen in MINT-Berufen
                    </h3>
                    <p className="text-white">
                      Mit dem Klick auf den Button wird ein Youtube-Video geöffnet und 
                      Sie willigen ausdrücklich ein, Inhalte von Youtube angezeigt zu bekommen.
                    </p>
                    <p>
                      <button
                        className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-white text-blue-500 my-2"
                        onClick={() => {
                          const embeddiv = document.querySelector(
                            `#imagefilm-container`
                          ) as HTMLDivElement;

                          const embed = document.querySelector(
                            `#imagefilm-embed`
                          ) as HTMLDivElement;
                          if (embed) {
                            embed.setAttribute("src", embed.dataset?.src ?? "");
                            embed.style.display = "block";

                            const optIn = document.querySelector(
                              `#imagefilm-optin`
                            ) as HTMLDivElement;
                            if (optIn) {
                              embeddiv.classList.add("aspect-16/9");
                              optIn.style.display = "none";
                            }
                          }
                        }}
                      >
                        Externen Inhalt anzeigen
                      </button>
                    </p>
                    <p className="text-white mb-0">
                      Beim Abspielen des Videos werden Daten an die Server von Youtube übertragen. 
                      Weitere Infos dazu finden Sie in der{" "}
                      <a
                        href="https://www.google.com/intl/de/policies/privacy/"
                        target="_blank"
                        className="underline underline-offset-1 "
                      >
                        Datenschutzerklärung
                        <br />
                        <span className="break-all">
                          (www.google.com/intl/de/policies/privacy/)
                        </span>
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-[1.9rem] md:text-[2.2rem] tracking-wider leading-none font-semibold text-white">
            Das Bündnis in Zahlen
          </H2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-60 text-white text-center">
              <div className="h0 text-[4rem] md:text-[5rem]">
                <CountUp
                  start={1}
                  end={300}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                  scrollSpyOnce={true}     
                  suffix="+"           
                />
              </div>
              <p>Mitglieder</p>
            </div>
            <div className="w-60 text-white text-center">
              <div className="h0 text-[4rem] md:text-[5rem]">1</div>
              <p>Ziel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="md:flex md:items-center -mx-4">
            <div className="md:w-6/12 px-4 mb-8 md:mb-0 flex justify-center relative">
              <div className="absolute inset-4 md:inset-0 text-salmon-400 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 655 418"
                >
                  <path
                    fill="currentColor"
                    d="M378.948 11.1C237.002 57.323 38.234 97.368 6.514 153.865c-15.86 28.248-2.345 83.864 66.84 150.371C188.6 415.024 265.997 421.811 342.19 416.529c76.193-5.282 362.284-203.55 304.405-312.815C596.837 9.776 463.628-16.476 378.948 11.1Z"
                  />
                </svg>
              </div>
              <div className="relative max-w-[180px] md:max-w-[260px] lg:max-w-[360px] my-8">
                <GatsbyImage
                  image={data?.MemberImage?.childImageSharp?.gatsbyImageData}
                  className=""
                  alt="Liste der aktuellen Bündnismitglieder (Unsplash / Omar Flores)"
                />
                <div className="absolute right-0 bottom-[-1px]">
                  <div
                    className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700 "
                    style={{ writingMode: "vertical-rl" }}
                  >
                    Unsplash / Omar Flores
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/12 px-4"> </div>
            <div className="md:w-6/12 lg:w-4/12 px-4">
              <H2 className="mb-6 font-bold">
                Liste der aktuellen Bündnis&shy;mit&shy;glieder
              </H2>
              <p className="md:text-xl leading-snug text-neutral-700">
                Bereits mehr als 300 Mitglieder aus Wirtschaft, Bildung,
                Wissenschaft, Medien und Politik setzen sich dafür ein, mehr
                Mädchen und Frauen für MINT-Ausbildungen, -Studiengänge und{" "}
                <span className="whitespace-nowrap">-Berufe</span> zu begeistern.
              </p>
              <p>
                <Link to={"list"} className="btn-primary">
                  Zur Mitgliederliste
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {events.length > 0 && (
        <section
          className="bg-yellow-100 pt-16 pb-20 lg:pt-24 lg:pb-28"
          id="events"
        >
          <div className="container">
            <div className="-mx-4 xl:flex xl:justify-center">
              <div className="xl:w-10/12 px-4">
                <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-[1.9rem] md:text-[2.2rem] tracking-wider leading-none font-semibold">
                  Aktuelle Events
                </H2>
                <EventCards
                  eventCardItemsProps={events}
                  onChipClick={(slug) => {
                    if (window) {
                      document.location.href = `/events/?tags=${slug}`;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-beige-500 pt-16 pb-28 lg:pt-24 lg:pb-40 relative">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-lilac-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="708"
            fill="none"
            viewBox="0 0 1440 708"
            className="absolute  w-[150%] h-[100%] rotate-[25deg] md:rotate-0 md:w-[100%] md:h-[100%] -left-[25%] -bottom-[25%] md:inset-0"
          >
            <path
              stroke="currentColor"
              strokeWidth="3"
              d="M282.617 682.382C-500.026 481.566 95.879-101.491 784.292-29.966 1095.23 2.34 1026.38 69.816 1229.41 155.03c292 122.554 959.97 158.712 381.06 529.615-51.63 33.08-226.62 102.894-306.18 122.664-171.96 42.731-371.21 41.974-1021.673-124.926Z"
            />
          </svg>
        </div>
        <div className="container relative z-20">
          <div className="lg:w-10/12 mb-8 lg:mb-16 mx-auto">
            <H2 className="all-small-caps text-center mb-8 text-[1.9rem] md:text-[2.2rem] tracking-wider leading-none font-semibold">
              Motivation und Erfolge – deshalb sind wir dabei!
            </H2>
            <p className="text-center px-8 lg:text-xl">
              Mehr Frauen für MINT gewinnen – wie gelingt das? Und warum lohnt
              sich der Einsatz, gesellschaftlich oder für einzelne Unternehmen
              oder Teams? Das sagen Bündnismitglieder:
            </p>
          </div>
          <div className="text-neutral-700">
            <TestimonialSwiper items={testimonials} />
          </div>
        </div>
      </section>

      <section className="bg-lilac-400 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="lg:w-1/2 mx-auto">
            <H2 className="text-center mb-8 text-white">
              Informationen zum Bündnis für Frauen in MINT-Berufen
            </H2>
            <p className="text-center mb-8 lg:mb-12 text-white lg:text-xl">
              Hier finden Sie die wichtigsten Antworten.
            </p>
            <ul className="accordion mb-16">
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="text-left font-bold text-primary md:text-lg md:leading-snug py-4 pl-8 pr-5 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>Wer kann Mitglied werden?</span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-3"
                      viewBox="0 0 8 12"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M7.3 6a.626.626 0 0 0-.23-.49L1.93.9a.722.722 0 0 0-.24-.14.857.857 0 0 0-.27-.05c-.09 0-.18.02-.27.05C1.06.79.98.84.91.9c-.07.06-.13.14-.16.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22L5.5 6 .91 10.12c-.07.06-.13.14-.17.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22.07.06.15.11.23.14.09.03.18.05.27.05.09 0 .18-.02.27-.05.09-.03.17-.08.23-.14l5.14-4.61c.07-.06.13-.14.17-.22A.66.66 0 0 0 7.27 6h.03Z"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-8 md:px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Die Mitgliedschaft steht allen Organisationen offen, die die
                    Vorhaben des Bündnisses unterstützen und sich im Sinne des
                    gemeinsamen{" "}
                    <a
                      href="#leitbild"
                      className="text-lilac-500 hover:underline"
                    >
                      Leitbilds
                    </a>{" "}
                    engagieren möchten. Eine Mitgliedschaft für Einzelpersonen
                    ist nicht möglich.
                  </div>
                </div>
              </li>
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="text-left font-bold text-primary md:text-lg md:leading-snug py-4 pl-8 pr-5 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>Was ist der Mehrwert einer Bündnismitgliedschaft?</span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-3"
                      viewBox="0 0 8 12"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M7.3 6a.626.626 0 0 0-.23-.49L1.93.9a.722.722 0 0 0-.24-.14.857.857 0 0 0-.27-.05c-.09 0-.18.02-.27.05C1.06.79.98.84.91.9c-.07.06-.13.14-.16.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22L5.5 6 .91 10.12c-.07.06-.13.14-.17.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22.07.06.15.11.23.14.09.03.18.05.27.05.09 0 .18-.02.27-.05.09-.03.17-.08.23-.14l5.14-4.61c.07-.06.13-.14.17-.22A.66.66 0 0 0 7.27 6h.03Z"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Bündnismitglieder profitieren von Vernetzungsmöglichkeiten,
                    Austauschformaten und Unterstützungsangeboten. Die
                    Mitgliedsinstitutionen erhalten für sich und ihr Engagement
                    für Mädchen und Frauen in MINT eine höhere Sichtbarkeit.
                    Durch die Einbettung des Bündnisses in die MINT-Community in
                    Deutschland und die damit verbundenen Aktivitäten von
                    MINTvernetzt entstehen Synergien und Kooperationen.
                  </div>
                </div>
              </li>
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="text-left font-bold text-primary md:text-lg md:leading-snug py-4 pl-8 pr-5 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>
                    Wie kann ich mit meiner Organisation Mitglied werden?
                  </span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-3"
                      viewBox="0 0 8 12"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M7.3 6a.626.626 0 0 0-.23-.49L1.93.9a.722.722 0 0 0-.24-.14.857.857 0 0 0-.27-.05c-.09 0-.18.02-.27.05C1.06.79.98.84.91.9c-.07.06-.13.14-.16.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22L5.5 6 .91 10.12c-.07.06-.13.14-.17.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22.07.06.15.11.23.14.09.03.18.05.27.05.09 0 .18-.02.27-.05.09-.03.17-.08.23-.14l5.14-4.61c.07-.06.13-.14.17-.22A.66.66 0 0 0 7.27 6h.03Z"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Der Aufnahmeprozess ist niedrigschwellig. Eine erste
                    Kontaktaufnahme ist über unser{" "}
                    <Link
                      to="submission"
                      className="text-lilac-500 hover:underline"
                    >
                      Formular
                    </Link>{" "}
                    möglich. Wir melden uns daraufhin bei Ihnen und begleiten
                    Sie durch die nächsten Schritte.
                  </div>
                </div>
              </li>
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="text-left font-bold text-primary md:text-lg md:leading-snug py-4 pl-8 pr-5 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>
                    Wie erfahre ich von den Aktivitäten des Bündnisses?
                  </span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-3"
                      viewBox="0 0 8 12"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M7.3 6a.626.626 0 0 0-.23-.49L1.93.9a.722.722 0 0 0-.24-.14.857.857 0 0 0-.27-.05c-.09 0-.18.02-.27.05C1.06.79.98.84.91.9c-.07.06-.13.14-.16.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22L5.5 6 .91 10.12c-.07.06-.13.14-.17.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22.07.06.15.11.23.14.09.03.18.05.27.05.09 0 .18-.02.27-.05.09-.03.17-.08.23-.14l5.14-4.61c.07-.06.13-.14.17-.22A.66.66 0 0 0 7.27 6h.03Z"
                      />
                    </svg>
                  </span>
                </button>
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Mitglieder erhalten regelmäßig einen Newsletter und
                    Mailings, die über Neuigkeiten, Veranstaltungen und
                    Veröffentlichungen informieren.{" "}
                    {events.length > 0 && (
                      <>
                        <a
                          href="#events"
                          className="text-lilac-500 hover:underline"
                        >
                          Hier
                        </a>{" "}
                        sind zudem immer unsere aktuellen Events zu finden.
                      </>
                    )}
                  </div>
                </div>
              </li>
            </ul>
            <p className="mb-0 text-center">
              <Link to="submission" className="btn-primary">
                Zum Kontaktformular
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28"
        id="leitbild"
      >
        <div className="container">
          <div className="md:flex md:items-center -mx-4">
            <div className="hidden lg:flex lg:w-1/12 px-4 "></div>
            <div className="md:w-6/12 lg:w-4/12 px-4 mb-8 md:mb-0">
              <H2 className="mb-6 font-bold">Unser Leitbild</H2>
              <p className="md:text-xl leading-snug text-neutral-700">
                Gemeinsam aktiv sein: Damit aus Worten Taten werden,
                verpflichten sich die Bündnismitglieder zu einem Leitbild mit
                Ideen für konkrete Unterstützungsmöglichkeiten von Mädchen und
                Frauen.
              </p>
              <p className="mb-2">
                <a
                  href="https://cms.mint-vernetzt.de/app/uploads/2023/02/230208_Leitbild_Buendnis_fuer_Frauen.pdf"
                  target="_blank"
                  className="btn-primary btn-icon"
                >
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />
                  <span>Download Leitbild</span>
                </a>
              </p>
              <p className="text-xs">PDF, ca. 200KB</p>
            </div>
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-5/12 px-4 flex justify-center relative">
              <div className="absolute inset-0 text-salmon-400 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 270 215"
                >
                  <path
                    fill="#FCC433"
                    d="M.788 101.52c5.95-38.838 66.074-68.85 90.186-78.903l.264-.11C119.315 10.799 154.14-3.723 196.675.87c27.153 2.932 83.398 42.996 71.761 110.422-11.637 67.426-96.976 114.331-177.462 101.628C27.48 202.898-5.636 143.45.788 101.52Z"
                  />
                </svg>
              </div>
              <div className="relative max-w-[180px] md:max-w-[260px] lg:max-w-[360px] my-8">
                <GatsbyImage
                  image={data?.LeitbildImage?.childImageSharp?.gatsbyImageData}
                  className=""
                  alt="(Unsplash / krakenimages)"
                />
                <div className="absolute right-0 bottom-[-1px]">
                  <div
                    className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700 "
                    style={{ writingMode: "vertical-rl" }}
                  >
                    Unsplash / krakenimages 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 pt-16 pb-20 lg:pt-24 lg:pb-28 -mb-20">
        <div className="container">
          <div className="-mx-4 xl:flex xl:justify-center">
            <div className="xl:w-10/12 px-4">
              <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-[1.9rem] md:text-[2.2rem] tracking-wider leading-none font-semibold">
                Ansprechpartnerin
              </H2>

              <div className="rounded-lg bg-neutral-50 shadow-sm p-8">
                <div className="flex gap-8 md:gap-16 flex-col md:flex-row md:items-center">
                  <div className="flex justify-center">
                    <GatsbyImage
                      image={
                        data.wpContact?.contactInformations?.photo?.localFile?.childImageSharp?.gatsbyImageData
                      }
                      className="rounded-full w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                      alt="${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}"
                    />
                  </div>
                  <div className="flex-auto">
                    <p className="font-semibold text-primary mb-2 text-lg md:text-3xl">
                      {`${data.wpContact?.contactInformations?.title || ""} ${
                        data.wpContact?.contactInformations?.firstName
                      } ${data.wpContact?.contactInformations?.lastName}`.trim()}
                    </p>
                    <p className="text-base md:text-lg text-primary">
                      {data.wpContact?.contactInformations?.position}
                    </p>
                    <p className="text-base md:text-lg">
                      <a
                        href={`mailto:${data.wpContact?.contactInformations?.email}`}
                        className="w-full flex items-center rounded-lg bg-neutral-100 p-4 text-primary"
                      >
                        <span className="icon w-4 h-4 mr-2 ">
                          <Icon type={IconType.Mail} />
                        </span>
                        <span>{data.wpContact?.contactInformations?.email}</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Alliance;

export const pageQuery = graphql`
  query AlliancePage {    
    HeroImage: file(relativePath: { eq: "buendnis/MINTvernetzt_Key_Visual_Buendnisseite.svg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(height: 1280)
      }
    }
    ProviderFischer: file(relativePath: { eq: "buendnis/Statements_Profil_Susann_Fischer_480x480.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    ProviderCetinkaya: file(relativePath: { eq: "buendnis/Statements_Profil_Fatime-Cetinkaya_480x480.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    ProviderBusch: file(relativePath: { eq: "buendnis/Statements_Profil_Carsten-Busch_480x480.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    ProviderTuncer: file(relativePath: { eq: "buendnis/Statements_Profil_Zeynep-Tuncer_480x480.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    MemberImage: file(
      relativePath: {
        eq: "buendnis/Mitglieder-Datenbank_Teaser_480x480.jpg"
      }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    LeitbildImage: file(
      relativePath: { eq: "buendnis/Leitbild_Teaser_480x480.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    events: allWpEvent(      
      filter: {
        parentId: { eq: null }
        tags: { nodes: { elemMatch: { slug: { eq: "gender" } } } }
      }
      sort: { fields: eventInformations___startDate, order: ASC }
    ) {
      nodes {
        excerpt
        eventInformations {
          startTime
          startDate
          endTime
          endDate
        }
        tags {
          nodes {
            name
            slug
          }
        }
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 640, aspectRatio: 1.77777777778)
              }
            }
          }
        }
      }
    }
    wpContact(contactInformations: { lastName: { eq: "Gerkens" } }) {
      id
      contactInformations {
        phone
        firstName
        lastName
        email
        position
        title
        photo {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 320)
            }
          }
        }
      }
    }
  }
`;
