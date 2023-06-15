import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H4 } from "../../../components/Heading/Heading";
import { isBeforeOneDayAfterDate } from "../../../utils/eventFilter";
import TestimonialSwiper from "../../../components/ProjectSwiper";
import { ReactComponent as HeaderImage } from "../../../images/MINTvernetzt_Key_Visual_Diversitaet.svg";
import EventCards from "../../../components/EventCards/EventCards";
import Icon, { IconType } from "../../../components/Icon/Icon";

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
    });
  const testimonials = [
    {
      provider_foto: (
        <GatsbyImage
          image={data.ProviderFischer.childImageSharp.gatsbyImageData}
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
          image={data.ProviderCetinkaya.childImageSharp.gatsbyImageData}
          className="w-full h-auto"
          alt="Digitalexpertin Fatime Cetinkaya"
        />
      ),
      provider_name: `Digitalexpertin Fatime Cetinkaya`,
      provider_position: `Geschäftsführerin cekaso GmbH und Co-Vorsitzende MINT-Kommission VdU`,
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
        image={data?.HeroImage?.publicURL}
        children=""
      />
      <section className="bg-lilac-50 relative md:h-[480px] md:flex md:items-center overflow-hidden">
        <div className="container pt-16 pb-12">
          <div className="-mx-4 flex">
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-5/12 px-4 md:pr-8">
              <H1 like="h0" className="font-black">
                Bündnis für Frauen in MINT-Berufen
              </H1>
              <p className="font-semibold text-primary text-lg lg:text-3xl lg:leading-snug">
                Gemeinsam mehr Frauen für MINT begeistern
              </p>
            </div>
          </div>
        </div>

        <div className="hero-image md:absolute md:right-0 md:bottom-0 md:w-1/2">
          <div className="max-w-xs md:max-w-none mx-auto md:mx-0">
            <HeaderImage />
          </div>
          <div className="absolute right-0 bottom-0">
            <div
              className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700"
              style={{ writingMode: "vertical-rl" }}
            >
              iStock / cienpies
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container flex justify-center">
          <div className="lg:w-10/12">
            <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">
              Ein gemeinsames Ziel
            </H2>
            <p className="text-3xl leading-snug text-primary font-semibold">
              Mehr Frauen und Mädchen in MINT! Das Bündnis für Frauen in
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
            className="absolute left-[50%] w-[70%] rotate-[-0deg] aspect-[1.2]"
          >
            <path
              stroke="currentColor"
              stroke-width="3"
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
              <p className="lg:text-xl leading-snug text-neutral-700">
                Auf einen Klick zeigt unser Film vom Netzwerktreffen 2023, was
                sich hinter dem Bündnis verbirgt und warum es heute noch starke
                Bündnisse braucht?
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
                  data-src={`https://www.youtube-nocookie.com/embed/K5oReyP1Jx0?autoplay=1`}
                  title="Live Stream"
                  allowFullScreen="true"
                  allow="autoplay"
                ></iframe>
                <div id={`imagefilm-optin`} className="flex p-8">
                  <div className="text-center">
                    <h3 className="text-white mb-8 font-bold">
                      Bündnis Image Film
                    </h3>
                    <p className="text-white">
                      Mit dem Klick auf den Button wird ein Youtube-Video
                      geöffnet und Ihr willigt ausdrücklich ein, Inhalte von
                      Youtube angezeigt zu bekommen.
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
                      Beim Abspielen des Videos werden Daten an die Server von
                      Youtube übertragen. Weitere Infos dazu findet Ihr in der{" "}
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
          <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold text-white">
            Das Bündnis in Zahlen
          </H2>
          <div className="flex justify-center gap-8">
            <div className="w-60 text-white text-center">
              <div className="h0">200+</div>
              <p>Mitglieder</p>
            </div>
            <div className="w-60 text-white text-center">
              <div className="h0">1</div>
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
                  alt=""
                />
                <div className="absolute right-0 bottom-[-1px]">
                  <div
                    className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700 "
                    style={{ writingMode: "vertical-rl" }}
                  >
                    Unsplash/ John Schaidler
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/12 px-4"> </div>
            <div className="md:w-6/12 lg:w-4/12 px-4">
              <H2 className="mb-6 font-bold">
                Liste der aktuellen Bündnis-Mitglieder
              </H2>
              <p className="md:text-xl leading-snug text-neutral-700">
                Bereits mehr als 300 Mitglieder aus Wirtschaft, Bildung,
                Wissenschaft, Medien und Politik setzen sich dafür ein, mehr
                Mädchen und Frauen für MINT-Ausbildungen, -Studiengänge und
                -Berufe zu begeistern.
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
        <section className="bg-yellow-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container">
            <div className="-mx-4 xl:flex xl:justify-center">
              <div className="xl:w-10/12 px-4">
                <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">
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
            className="absolute w-[100%] h-[100%] inset-x-0"
          >
            <path
              stroke="currentColor"
              stroke-width="3"
              d="M282.617 682.382C-500.026 481.566 95.879-101.491 784.292-29.966 1095.23 2.34 1026.38 69.816 1229.41 155.03c292 122.554 959.97 158.712 381.06 529.615-51.63 33.08-226.62 102.894-306.18 122.664-171.96 42.731-371.21 41.974-1021.673-124.926Z"
            />
          </svg>
        </div>
        <div className="container relative z-20">
          <div className="lg:w-10/12 mb-8 lg:mb-16 mx-auto">
            <H2 className="all-small-caps text-center mb-8 text-4xl md:text-5xl tracking-widest font-semibold">
              Motivation und Erfolge – deshalb sind wir dabei!
            </H2>
            <p className="text-center px-8">
              Mehr Frauen für MINT gewinnen – wie gelingt das? Und warum lohnt
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
          <div className="lg:w-1/2 mb-8 lg:mb-16 mx-auto">
            <H2 className="text-center mb-8 text-white">
              Informationen zum Bündnis für Frauen in MINT-Berufen
            </H2>
            <p className="text-center mb-8 lg:mb-12 text-white">
              Hier finden Sie die wichtigsten Antworten.
            </p>
            <ul className="accordion">
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="font-bold text-primary md:text-lg md:leading-snug p-4 md:px-8 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>Wer kann Mitglied werden?</span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0">
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
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-4 md:px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Hier kommt ein Text rein
                  </div>
                </div>
              </li>
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="font-bold text-primary md:text-lg md:leading-snug p-4 md:px-8 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>Was ist der Mehrwert einer Bündnismitgliedschaft?</span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0">
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
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-4 md:px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Bündnismitglieder profitieren von Vernetzungsmöglichkeiten,
                    Austauschformaten und Unterstützungsangeboten. Die
                    Mitgliedsinstitutionen erhalten für sich und ihr Engagement
                    für Mädchen und Frauen in MINT eine höhere Sichtbarkeit.
                  </div>
                </div>
              </li>
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="font-bold text-primary md:text-lg md:leading-snug p-4 md:px-8 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>
                    Wie kann ich mit meiner Organisation Mitglied werden?
                  </span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0">
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
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-4 md:px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Hier kommt ein Text rein
                  </div>
                </div>
              </li>
              <li className="accordion-item relative overflow-hidden mb-8">
                <button className="font-bold text-primary md:text-lg md:leading-snug p-4 md:px-8 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                  <span>
                    Wie erfahre ich von den Aktivitäten des Bündnisses?
                  </span>
                  <span className="accordion-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0">
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
                <div className="accordion-item-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-4 md:px-8 bg-white rounded-b-lg">
                  <div className="accordion-item-content-body md:text-lg">
                    Hier kommt ein Text rein
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="md:flex md:items-center -mx-4">
            <div className="hidden lg:flex lg:w-1/12 px-4 "></div>
            <div className="md:w-6/12 lg:w-4/12 px-4 mb-8 md:mb-0">
              <H2 className="mb-6 font-bold">Unser Leitbild</H2>
              <p className="text-xl leading-snug text-neutral-700">
                Gemeinsam aktiv sein: Damit aus Worten Taten werden,
                verpflichten sich die Bündnis-Mitglieder zu einem Leitbild mit
                Ideen für konkrete Fördermöglichkeiten von Mädchen und Frauen.
              </p>
              <p className="mb-2">
                <a
                  href="https://cms.mint-vernetzt.de/app/uploads/2023/02/230208_Leitbild_Buendnis_fuer_Frauen.pdf"
                  target="_blank"
                  className="btn-primary btn-icon"
                >
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />
                  <span>Download</span>
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
                  image={data?.GlossarImage?.childImageSharp?.gatsbyImageData}
                  className=""
                  alt=""
                />
                <div className="absolute right-0 bottom-[-1px]">
                  <div
                    className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700 "
                    style={{ writingMode: "vertical-rl" }}
                  >
                    Unsplash/ Surendran MP
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
              <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">
                Ansprechpartnerin
              </H2>

              <div className="rounded-lg bg-neutral-50 shadow-sm p-8">
                <div className="flex gap-8 md:gap-16 flex-col md:flex-row md:items-center">
                  <div className="flex justify-center">
                    <GatsbyImage
                      image={
                        data.wpContact.contactInformations.photo.localFile
                          .childImageSharp?.gatsbyImageData
                      }
                      className="rounded-full w-[120px] h-[120px]"
                      alt="${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}"
                    />
                  </div>
                  <div className="">
                    <p className="font-semibold text-primary mb-2 md:text-3xl">
                      {`${data.wpContact.contactInformations.title || ""} ${
                        data.wpContact.contactInformations.firstName
                      } ${data.wpContact.contactInformations.lastName}`.trim()}
                    </p>
                    <p className="text-base md:text-lg text-primary">
                      {data.wpContact.contactInformations.position}
                    </p>
                    <p className="text-base md:text-lg">
                      <a
                        href={`mailto:${data.wpContact.contactInformations.email}`}
                        className="flex items-center rounded-lg bg-neutral-100 p-4 text-primary"
                      >
                        <span className="icon w-4 h-4 mr-2 ">
                          <Icon type={IconType.Mail} />
                        </span>
                        <span>{data.wpContact.contactInformations.email}</span>
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
    ProviderFischer: file(relativePath: { eq: "buendnis/susann_fischer.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    ProviderCetinkaya: file(
      relativePath: { eq: "buendnis/fatime_cetinkaya_cekaso.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    MemberImage: file(
      relativePath: {
        eq: "topic-diversity/Studie_Teaser_Diversitaet_480x480.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    GlossarImage: file(
      relativePath: { eq: "topic-diversity/Glossar_Teaser_480x480.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    ContactImage: file(relativePath: { eq: "contact_nele_gerkens.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    events: allWpEvent(
      limit: 3
      filter: {
        parentId: { eq: null }
        tags: { nodes: { elemMatch: { slug: { eq: "diversitaet" } } } }
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
              gatsbyImageData(width: 144)
            }
          }
        }
      }
    }
  }
`;
