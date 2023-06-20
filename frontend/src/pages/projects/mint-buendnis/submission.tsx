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
      <span className="error-message">{props.message}</span>
    )}
  </>
);

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
    const { errorMessage, name, ...generalProps } = props;
    const errorClass = errorMessage ? "border-rose-500" : "";
    return (
      <>
        <input
          id={name}
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
      <pre>{JSON.stringify(errors)}</pre>
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 lg:mb-20">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-4 my-10">
          <div className="order-2 md:order-1 flex-100 pb-8 md:pb-0 md:flex-1/2 lg:flex-2/3 md:px-4">
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
                    htmlFor="title"
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
                      <Input {...field} errorMessage={errors.email?.message} />
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
                      <Input {...field} errorMessage={errors.phone?.message} />
                    )}
                  />
                </FormRow>

                <FormRow>
                  <FormLabel required error={errors.reachableBy !== undefined}>
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
                              errorMessage={errors.reachableBy?.message}
                              value={"email"}
                              checked={reachableBy === "email"}
                            />{" "}
                            per E-Mail
                          </label>
                          <label>
                            <RadioGroup
                              {...field}
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
                      className="flex items-center px-4 py-3 bg-neutral-100"
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
  query PaktSubmission {
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
