import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

import * as schema from "../data/submission/newsvalidation.schema.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildYup } from "schema-to-yup";

import { H1, H2, H3, H4, H5 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Icon, { IconType } from "../components/Icon/Icon";

export interface NewsFormData {
  title: string;
  text: string;
  source: string;
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
        id={name}
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
  const { children, className: additionalClassName, ...generalProps } = props;
  return (
    <label {...generalProps} className={`label ${additionalClassName}`}>
      {children}
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
  } = useForm<NewsFormData>({
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  const termsAccepted = watch("terms_accepted");

  const onSubmit: SubmitHandler<NewsFormData> = async (data) => {
    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let response = (await fetch(
      process.env.GATSBY_NEWSSUBMISSION_URL as string,
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
        title="News einreichen"
        slug="/submission/"
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
              <H1 like="h2" className="font-bold">
                News eintragen
              </H1>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad
                dicta, nulla consequuntur error fugiat amet accusamus quae
                voluptate qui sunt officia quam. Possimus fuga natus quaerat
                consequatur dolorem minima?
              </p>
            </header>

            {isSubmitted && errors.serverError && (
              <>
                <H2 like="h4">Leider gab es einen Fehler bei der Versendung</H2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  quod minus repellat non quibusdam tempora! Temporibus
                  consequuntur sunt dignissimos quia expedita ad alias,
                  laboriosam distinctio aut! Quos esse tempora commodi.
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
                <H2 like="h4">News eingereicht</H2>
                <H3 like="h5">Vielen Dank!</H3>
                <p>
                  Wir posten deine News sobald sie von unserem Team gesichtet
                  wurde.
                </p>
                <button className="btn-primary" onClick={() => reset()}>
                  Juhu
                </button>
              </>
            )}

            {!errors.serverError && !isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow>
                  <FormLabel htmlFor="title">Titel</FormLabel>

                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} errorMessage={errors.title?.message} />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel htmlFor="text">Inhalt</FormLabel>
                  <Controller
                    name="text"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        errorMessage={errors.text?.message}
                      />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel>Quelle / Link zur Meldung</FormLabel>
                  <Controller
                    name="source"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} errorMessage={errors.source?.message} />
                    )}
                  />
                </FormRow>

                <hr className="mt-6 mb-6 border-neutral-400" />

                <H5 className="font-bold mb-4">
                  Nur für das MINTvernetzt Team sichtbar
                </H5>
                <FormRow>
                  <div className="grid gap-8 grid-cols-2">
                    <div>
                      <FormLabel>Kontaktpersonen für Rückfragen</FormLabel>
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
                      <FormLabel>E-Mail für Rückfragen</FormLabel>
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
                      entsprechend der Datenschutzerklärung zu
                    </span>
                  </FormLabel>
                </FormRowCheckbox>

                <div className="flex gap-6 justify-end mt-10">
                  <button
                    type="reset"
                    onClick={() => {
                      reset({
                        title: "",
                        text: "",
                        source: "",
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
                    {isSubmitting ? "sende ..." : "senden"}
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
                    <img
                      className="w-16 h-16 object-cover rounded-md"
                      src="/static/c2bc73869320ff95a2a35901a6b5169d/8670d/210913_MINTvernetzt_Anna_matrix_1.jpg"
                      alt="Anna Schröter"
                    />
                  </div>
                  <div className="flex-auto">
                    <H4 className="mb-1 font-semibold">Anna Schröter</H4>
                    <p className="mb-0 font-bold text-sm">
                      Community-Management MINTvernetzt
                    </p>
                  </div>
                </div>

                <H5 className="font-bold mb-6">Kontakt</H5>
                <div className="">
                  <p className="text-mb text-neutral-800 mb-2">
                    <a
                      href="anna.schroeter@mint-vernetzt.de"
                      className="flex items-center px-4 py-3 bg-neutral-300"
                    >
                      <span className="icon w-4 h-4 mr-3">
                        <Icon type={IconType.Envelope} />
                      </span>
                      <span>anna.schroeter@mint-vernetzt.de</span>
                    </a>
                  </p>
                  <p className="text-md text-neutral-800 mb-2">
                    <a
                      href="492117570762"
                      className="flex items-center px-4 py-3 bg-neutral-300"
                    >
                      <span className="icon w-4 h-4 mr-3">
                        <Icon type={IconType.Telephone} />
                      </span>
                      <span>+49 211 7570762</span>
                    </a>
                  </p>
                </div>
              </div>
              {/*
              <ContactCard
                headline="Ansprechpartner:in"
                name="Anna Schröter"
                position="Community-Management MINTvernetzt"
                phone="+49 211 7570762"
                email="anna.schroeter@mint-vernetzt.de"
                avatar={{
                  src: "/static/c2bc73869320ff95a2a35901a6b5169d/8670d/210913_MINTvernetzt_Anna_matrix_1.jpg",
                  alt: "Anna Schröter",
                }}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query Submission {
    HeroImage: file(relativePath: { eq: "news_submit_large.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
  }
`;

export default Submission;
