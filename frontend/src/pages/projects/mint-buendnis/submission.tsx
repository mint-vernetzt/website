import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import * as schema from "../../../data/submission/paktvalidation.schema.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildYup } from "schema-to-yup";

import { H1, H2, H3, H4, H5 } from "../../../components/Heading/Heading";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";

import Icon, { IconType } from "../../../components/Icon/Icon";

export interface PaktFormData {
  institution: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  reachableBy: string;
  terms_accepted: string;
  serverError?: string;
}

const ErrorMessage = (props: { message: string | undefined }) => (
  <>
    {typeof props.message !== "undefined" && (
      <span className="error-message text-salmon-500 text-xs">{props.message}</span>
    )}
  </>
);

type InputProps<T> = React.HTMLProps<T> & {
  errorMessage?: string;
};
const Input = React.forwardRef((props: InputProps<HTMLInputElement>, ref) => {
  const { errorMessage, name, ...restProps } = props;
  const errorClass = errorMessage ? "border-salmon-500 bg-[#F35F5F]" : "";
  return (
    <>
      <input
        id={name}
        className={`input ${errorClass}`}
        placeholder=" "
        {...restProps}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
});

const Textarea = React.forwardRef(
  (props: InputProps<HTMLTextAreaElement>, ref) => {
    const { errorMessage, name, ...restProps } = props;
    const errorClass = errorMessage ? "border-rose-500" : "";
    return (
      <>
        <textarea
          id={name}
          className={`textarea ${errorClass}`}
          placeholder=" "
          {...restProps}
        />
        <ErrorMessage message={errorMessage} />
      </>
    );
  }
);

const Checkbox = React.forwardRef(
  (props: InputProps<HTMLInputElement>, ref) => {
    const { errorMessage, name, ...generalProps } = props;
    const errorClass = errorMessage ? "border-rose-500" : "";
    return (
      <>
        <input
          id={name}
          type="checkbox"
          className={`checkbox ${errorClass}`}
          {...generalProps}
        />
      </>
    );
  }
);

const RadioGroup = React.forwardRef(
  (props: InputProps<HTMLInputElement>, ref) => {
    const { errorMessage, name, id, ...generalProps } = props;
    const errorClass = errorMessage ? "border-rose-500" : "";
    return (
      <>
        <input
          id={id || name}
          name={name}
          type="radio"
          className={`radiogroup ${errorClass}`}
          {...generalProps}
        />
      </>
    );
  }
);

type FormLabelProps = React.HTMLProps<HTMLLabelElement> & {
  children: React.ReactNode;
  required?: boolean;
  error: boolean;
};
const FormLabel = function (props: FormLabelProps) {
  const {
    children,
    required,
    error,
    className: additionalClassName,
    ...generalProps
  } = props;
  return (
    <label
      {...generalProps}
      className={`label ${additionalClassName}`}
      style={{ justifyContent: "space-between" }}
    >
      <div>
        {children}
        {required === true && <sup>*</sup>}
      </div>
      {error && "ERROR ICON"}
    </label>
  );
};

const FormRow = function ({ children }: { children: React.ReactNode }) {
  return <div className="form-control w-full">{children}</div>;
};

const FormRowCheckbox = function ({ children }: { children: React.ReactNode }) {
  return <div className="form-control checkbox w-full">{children}</div>;
};

const yupSchema = buildYup(schema, {
  errMessages: {
    terms_accepted: {
      enum: "Ihre Zustimmung ist notwendig.",
      required: "Ihre Zustimmung ist notwendig.",
    },
    $minLength: (constraints: { minLength: number }) =>
      `Mindestlänge ${constraints.minLength} Zeichen`,
    $maxLength: (constraints: { maxLength: number }) =>
      `Maximallänge ${constraints.maxLength} Zeichen`,
    $email: "Ungültige E-Mail Adresse ",
    $required: "Pflichtfeld",
  },
});

export function Submission({
  data,
}: {
  data: GatsbyTypes.PaktSubmissionQuery;
}) {
  const {
    formState: {
      isValid,
      errors,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
    },
    setError,
    handleSubmit,
    reset,
    control,
    watch,
  } = useForm<PaktFormData>({
    mode: "all",
    resolver: yupResolver(yupSchema),
    defaultValues: {
      institution: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const termsAccepted = ["true", true].includes(watch("terms_accepted"));
  const reachableBy = watch("reachableBy");

  const onSubmit: SubmitHandler<PaktFormData> = async (data) => {
    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let response = (await fetch(
      process.env.GATSBY_PAKTSUBMISSION_URL as string,
      {
        method: "POST",
        body: formData,
      }
    ).catch((error) => {
      setError("serverError", {
        type: "custom",
        message: error.message,
      });
    })) as Response;

    // Bad Request -> response text with errors
    if (response.status !== 200) {
      let message = await response.text();
      setError("serverError", {
        type: "custom",
        message,
      });
    }
  };

  return (
    <Layout>
      <SEO
        title="Bündnismitglied werden"
        slug="/projects/mint-buendnis/submission"
        description=""
        image=""
        children=""
      />
      <section className="bg-lilac-50 relative overflow-hidden">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-lilac-400">
          <svg
            width="809"
            height="695"
            viewBox="0 0 809 695"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute mt-[60%] md:mt-0 left-[5%] md:left-[42%] w-[90%] md:w-[60%] h-[80%] md:h-[110%] xl:h-[150%] rotate-[-0deg]"
          >
            <path
              d="M637.862 91.3002C973.1 223.765 753.674 722.111 463.915 691.176C333.039 677.203 358.384 619.535 269.807 558.208C142.414 470.005 -137.123 467.055 85.5645 142.115C105.425 113.135 174.794 49.354 206.917 30.1026C276.347 -11.5078 359.242 -18.7927 637.862 91.3002Z"
              stroke="currentColor"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="container pt-8 pb-4 md:pb-12 relative z-20">
          <div className="">
            <a
              className="inline-block border border-primary py-2 px-4 text-primary font-semibold rounded-lg text-sm leading-[22px]"
              href="/projects/mint-buendins/"
            >
              <span className="flex items-center">
                <span className="mr-2">
                  <Icon type={IconType.ChevronLeft} />
                </span>
                zur Übersicht
              </span>
            </a>
          </div>
          <div className="-mx-4 mt-8 md:-mt-[24px] md:flex md:items-center">
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-1/2 lg:w-5/12 px-4 py-12 mb-8 md:mb-0">
              <H1 like="h0" className="font-black">
                Sie möchten Mitglied im Bündnis für Frauen in MINT-Berufen werden?
              </H1>
              <p className="font-semibold text-primary lg:text-3xl lg:leading-snug">
                Dann nehmen Sie Kontakt zu uns auf! 
              </p>
            </div>

            {data.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
              <div className="hero-image md:w-1/2 px-4">
                <div className="relative">
                  <GatsbyImage
                    image={data.HeroImage.childImageSharp.gatsbyImageData}
                    className="w-full h-auto aspect-[16/9]"
                    alt="Didaktik: Themenseite mit Erkenntnissen aus Wissenschaft und Praxis"
                  />
                  <div className="absolute right-0 bottom-0">
                    <div
                      className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      Unsplash / Towfiqu Barbhuiya
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-lilac-400 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="lg:w-1/2 mx-auto">
            <p className="mb-0 text-white text-3xl">
              Sie engagieren Sich für Mädchen und Frauen in MINT und möchten dies im Bündnis sichtbar machen? Dannfüllen 
              Sie unser Kontaktformular aus, und wir melden uns im Anschluss mit allen notwendigen Informationen zum 
              Beitritt bei Ihnen.
            </p>
          </div>  
        </div>
      </section>
              
      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="lg:w-1/2 mx-auto">
            <header className="text-left">
              {isSubmitted && errors.serverError && (
                <>
                  <p>
                    Ihre Anmeldung konnte leider nicht gesendet werden. Bitte
                    versuchen Sie es später noch einmal.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      reset({ terms_accepted: "true" }, { keepValues: true });
                    }}
                  >
                    Zurück zum Formular
                  </button>
                </>
              )}

              {isSubmitSuccessful && (
                <>
                  <p>Ihre Anmeldung wurde erfolgreich gesendet.</p>
                  <button className="btn-primary" onClick={() => reset()}>
                    Zurück zum Formular
                  </button>
                </>
              )}
            </header>

            {!errors.serverError && !isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow>
                  <FormLabel
                    htmlFor="institution"
                    required
                    error={errors.institution !== undefined}
                  >
                    Institution
                  </FormLabel>

                  <Controller
                    name="institution"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        errorMessage={errors.institution?.message}
                      />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel
                    htmlFor="firstName"
                    required
                    error={errors.firstName !== undefined}
                  >
                    Vorname
                  </FormLabel>

                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        errorMessage={errors.firstName?.message}
                        autoComplete="given-name"
                      />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel
                    htmlFor="lastName"
                    error={errors.lastName !== undefined}
                  >
                    Nachname
                  </FormLabel>

                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        errorMessage={errors.lastName?.message}
                        autoComplete="family-name"
                      />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel
                    htmlFor="email"
                    required
                    error={errors.email !== undefined}
                  >
                    E-Mail
                  </FormLabel>

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        errorMessage={errors.email?.message}
                        autoComplete="email"
                      />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel
                    htmlFor="phone"
                    required
                    error={errors.phone !== undefined}
                  >
                    Telefon
                  </FormLabel>

                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        errorMessage={errors.phone?.message}
                        autoComplete="tel-national"
                      />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel
                    htmlFor="reachableBy"
                    required
                    error={errors.reachableBy !== undefined}
                  >
                    Wie sind Sie am besten zu erreichen?
                  </FormLabel>
                  <Controller
                    name="reachableBy"
                    control={control}
                    render={({ field }) => (
                      <>
                        <div className="flex gap-x-3">
                          <label>
                            <RadioGroup
                              {...field}
                              name="reachableBy"
                              id="reachableByEmail"
                              errorMessage={errors.reachableBy?.message}
                              value={"email"}
                              checked={reachableBy === "email"}
                            />{" "}
                            per E-Mail
                          </label>
                          <label>
                            <RadioGroup
                              {...field}
                              id="reachableByphone"
                              name="reachableBy"
                              errorMessage={errors.reachableBy?.message}
                              value={"phone"}
                              checked={reachableBy === "phone"}
                            />{" "}
                            telefonisch
                          </label>
                        </div>
                        <ErrorMessage message={errors.reachableBy?.message} />
                      </>
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel
                    htmlFor="message"
                    error={errors.message !== undefined}
                  >
                    Nachricht
                  </FormLabel>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        errorMessage={errors.message?.message}
                      />
                    )}
                  />
                </FormRow>

                <FormRowCheckbox>
                  <FormLabel
                    htmlFor="terms_accepted"
                    error={errors.terms_accepted !== undefined}
                  >
                    <Controller
                      name="terms_accepted"
                      control={control}
                      render={({ field }) => (
                        <>
                          <Checkbox
                            {...field}
                            errorMessage={errors.terms_accepted?.message}
                            value={"true"}
                            checked={termsAccepted}
                          />
                        </>
                      )}
                    />

                    <span className="label-text">
                      Ich stimme der Verwendung meiner eingegebnenen Daten
                      entsprechend der{" "}
                      <a className="underline" href="/privacy" target="_blank">
                        Datenschutzerklärung
                      </a>{" "}
                      zu
                    </span>
                  </FormLabel>
                  <ErrorMessage message={errors.terms_accepted?.message} />
                </FormRowCheckbox>

                <div className="flex gap-6 justify-end mt-10">
                  <button
                    type="reset"
                    onClick={() => {
                      reset({
                        institution: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                        reachableBy: "",
                        terms_accepted: "true",
                      });
                    }}
                  >
                    Abbrechen
                  </button>
                  <button
                    className={`btn-primary ${!isValid ? "opacity-50" : ""}`}
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? "sende ..." : "Senden"}
                  </button>
                </div>
                <div className="text-right mt-10">
                  <sup>*</sup> Pflichtfeld
                </div>
              </form>
            )}
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
                      image={data.PageContact.contactInformations.photo.localFile.childImageSharp?.gatsbyImageData}
                      className="rounded-full w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                      alt="${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}"
                    />
                  </div>
                  <div className="flex-auto">
                    <p className="font-semibold text-primary mb-2 md:text-3xl">{`${data.PageContact.contactInformations.title || ""} ${data.PageContact.contactInformations.firstName} ${data.PageContact.contactInformations.lastName}`.trim()}</p>
                    <p className="text-base md:text-lg text-primary">{data.PageContact.contactInformations.position}</p>
                    <p className="text-base md:text-lg">
                      <a href={`mailto:${data.PageContact.contactInformations.email}`} className="w-full flex items-center rounded-lg bg-neutral-100 p-4 text-primary">
                        <span className="icon w-4 h-4 mr-2 ">
                          <Icon type={IconType.Mail} />
                        </span>
                        <span>{data.PageContact.contactInformations.email}</span>
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

export const pageQuery = graphql`
  query PaktSubmission {
    HeroImage: file(
      relativePath: { eq: "buendnis/mitglieder_Stage_1280x720.jpg" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1280)
      }
    }
    PageContact: wpContact(
      contactInformations: { lastName: { eq: "Gerkens" } }
    ) {
      contactInformations {
        firstName
        lastName
        position
        email
        phone
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 64)
            }
          }
        }
      }
    }
  }
`;

export default Submission;
