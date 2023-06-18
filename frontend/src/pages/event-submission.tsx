import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

import * as schema from "../data/submission/eventvalidation.schema.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildYup } from "schema-to-yup";

import { H1, H2, H3, H4, H5 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Icon, { IconType } from "../components/Icon/Icon";

export interface EventFormData {
  name: string;
  place: string;
  date: string;
  description: string;
  contact_name: string;
  contact_email: string;
  terms_accepted: string;
  serverError?: string;
}

type InputProps<T> = React.HTMLProps<T> & {
  errorMessage?: string;
};
const Input = React.forwardRef((props: InputProps<HTMLInputElement>, ref) => {
  const { errorMessage, name, ...restProps } = props;
  const errorClass = errorMessage ? "border-rose-500" : "";
  return (
    <>
      <input
        id={props.id ?? name}
        className={`input ${errorClass}`}
        placeholder=" "
        {...restProps}
      />
      {errorMessage && <span>{errorMessage}</span>}
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
        {errorMessage && <span>{errorMessage}</span>}
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
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </>
    );
  }
);

type FormLabelProps = React.HTMLProps<HTMLLabelElement> & {
  children: React.ReactNode;
};
const FormLabel = function (props: FormLabelProps) {
  const {
    children,
    className: additionalClassName,
    required,
    ...generalProps
  } = props;
  return (
    <label
      {...generalProps}
      className={`label items-start ${additionalClassName}`}
    >
      <span>
        {children}
        {required && <sup>*</sup>}
      </span>
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
    },
    $minLength: (constraints: { minLength: number }) =>
      `Mindestlänge ${constraints.minLength} Zeichen`,
    $maxLength: (constraints: { maxLength: number }) =>
      `Maximallänge ${constraints.maxLength} Zeichen`,
    $email: "Ungültige E-Mail Adresse ",
    $required: "Pflichtfeld",
  },
});

export function Submission({ data }: { data: GatsbyTypes.SubmissionQuery }) {
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
  } = useForm<EventFormData>({
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  const termsAccepted = watch("terms_accepted");

  const onSubmit: SubmitHandler<EventFormData> = async (data) => {
    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let response = (await fetch(
      process.env.GATSBY_EVENTSUBMISSION_URL as string,
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

  console.log(errors);

  return (
    <Layout>
      <SEO
        title="Event einreichen"
        slug="/event-submission/"
        description=""
        image=""
        children=""
      />
      <section className="container my-8 md:my-10 lg:my-20 hidden md:flex">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.HeroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="MINTnews: Informieren, inspirieren und Emotionen wecken mit MINT"
            />
          ) : null}
        </div>
      </section>
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 lg:mb-20">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-4 my-10">
          <div className="order-2 md:order-1 flex-100 pb-8 md:pb-0 md:flex-1/2 lg:flex-2/3 md:px-4">
            <header className="text-left">
              {!isSubmitSuccessful && !errors.serverError && (
                <>
                  <H1 like="h2" className="font-bold">
                    Veranstaltung eintragen
                  </H1>

                  <p className="text-md">
                    Über dieses Formular könnt Ihr Eure Veranstaltung mit der
                    MINT-Community teilen. Einfach alle relevanten Informationen
                    als kurze Meldung in unser Formular eintragen und nach einer
                    kurzen Prüfung, findet Ihr diese auf unserer Webseite.
                  </p>
                </>
              )}

              {isSubmitted && errors.serverError && (
                <>
                  <H1 like="h2" className="font-bold">
                    Leider gab es einen Fehler
                  </H1>
                  <p>
                    Bitte versuche es noch einmal oder kontaktiere{" "}
                    {data?.PageContact?.contactInformations?.firstName}.
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
                  <H1 like="h2" className="font-bold">
                    Vielen Dank!
                  </H1>
                  <p>
                    Wir posten deine Veranstaltung sobald sie von unserem Team
                    gesichtet wurde.
                  </p>
                  <button className="btn-primary" onClick={() => reset()}>
                    Weitere Veranstaltung einreichen
                  </button>
                </>
              )}
            </header>

            {!errors.serverError && !isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-end">
                  <div>
                    <sup>*</sup>Pflichtfeld
                  </div>
                </div>
                <FormRow>
                  <FormLabel htmlFor="title" required>
                    Name der Veranstaltung
                  </FormLabel>

                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} errorMessage={errors.name?.message} />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <div>
                      <FormLabel htmlFor="place" required>
                        Ort der Veranstaltung
                      </FormLabel>
                      <Controller
                        name="place"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            errorMessage={errors.place?.message}
                          />
                        )}
                      />
                    </div>
                    <div>
                      <FormLabel htmlFor="date" required>
                        Datum der Veranstaltung
                      </FormLabel>
                      <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="date"
                            errorMessage={errors.date?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                </FormRow>

                <FormRow>
                  <FormLabel htmlFor="description" required>
                    Beschreibung
                  </FormLabel>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        errorMessage={errors.description?.message}
                      />
                    )}
                  />
                </FormRow>

                <hr className="mt-6 mb-6 border-neutral-400" />

                <H5 className="font-bold mb-4">
                  Nur für das MINTvernetzt Team sichtbar
                </H5>
                <FormRow>
                  <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <div>
                      <FormLabel htmlFor="contact_name" required>
                        Kontaktpersonen für Rückfragen
                      </FormLabel>
                      <Controller
                        name="contact_name"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            errorMessage={errors.contact_name?.message}
                          />
                        )}
                      />
                    </div>

                    <div>
                      <FormLabel htmlFor="contact_email" required>
                        E-Mail für Rückfragen
                      </FormLabel>
                      <Controller
                        name="contact_email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            errorMessage={errors.contact_email?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                </FormRow>

                <FormRowCheckbox>
                  <FormLabel htmlFor="terms_accepted">
                    <Controller
                      name="terms_accepted"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          errorMessage={errors.terms_accepted?.message}
                          value={"true"}
                          checked={
                            termsAccepted === "true" || termsAccepted === true
                          }
                        />
                      )}
                    />
                    <span className="label-text">
                      Ich stimme der Verwendung meiner eingegebnenen Daten
                      entsprechend der{" "}
                      <a className="underline" href="/privacy" target="_blank">
                        Datenschutzerklärung
                      </a>{" "}
                      zu<sup>*</sup>
                    </span>
                  </FormLabel>
                </FormRowCheckbox>

                <div className="flex gap-6 justify-end mt-10">
                  <button
                    type="reset"
                    onClick={() => {
                      reset({
                        name: "",
                        place: "",
                        date: "",
                        description: "",
                        contact_name: "",
                        contact_email: "",
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
              </form>
            )}
          </div>
          <div className="flex-100 md:flex-1/2 lg:flex-1/3 pb-8 md:pb-0 md:px-4 order-1 md:order-2">
            <div className="p-8 rounded-lg bg-neutral-200 shadow-lg">
              <div className="contact-card">
                <H3 className="font-bold mb-6">Ansprechpartner:in</H3>
                <div className="flex mb-8">
                  <div className="flex-16 mr-4">
                    {data?.PageContact?.contactInformations?.photo?.localFile
                      ?.childImageSharp?.gatsbyImageData !== undefined ? (
                      <GatsbyImage
                        image={
                          data.PageContact.contactInformations.photo.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        className="w-16 h-16 object-cover rounded-md"
                        alt={
                          data.PageContact.contactInformations
                            .lastName as string
                        }
                      />
                    ) : null}
                  </div>
                  <div className="flex-auto">
                    <H4 className="mb-1 font-semibold">
                      {data?.PageContact?.contactInformations?.firstName}{" "}
                      {data?.PageContact?.contactInformations?.lastName}
                    </H4>
                    <p className="mb-0 font-bold text-sm">
                      {data?.PageContact?.contactInformations?.position}
                    </p>
                  </div>
                </div>

                <H5 className="font-bold mb-6">Kontakt</H5>
                <div className="">
                  <p className="text-mb text-neutral-800 mb-2">
                    <a
                      href={`mailto:${data?.PageContact?.contactInformations?.email}`}
                      className="flex items-center px-4 py-3 bg-1300"
                    >
                      <span className="icon w-4 h-4 mr-3">
                        <Icon type={IconType.Envelope} />
                      </span>
                      <span>
                        {data?.PageContact?.contactInformations?.email}
                      </span>
                    </a>
                  </p>
                  <p className="text-md text-neutral-800 mb-2">
                    <a
                      href={`tel:${data?.PageContact?.contactInformations?.phone}`}
                      className="flex items-center px-4 py-3 bg-neutral-100"
                    >
                      <span className="icon w-4 h-4 mr-3">
                        <Icon type={IconType.Telephone} />
                      </span>
                      <span>
                        {data?.PageContact?.contactInformations?.phone}
                      </span>
                    </a>
                  </p>
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
  query EventSubmission {
    HeroImage: file(relativePath: { eq: "news_submit_large.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
    PageContact: wpContact(contactInformations: { lastName: { eq: "Novik" } }) {
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
