import * as React from "react";

import * as schema from "../data/submission/newsvalidation.schema.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { buildYup } from "schema-to-yup";

import { H1, H2, H3 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

export interface NewsFormData {
  title: string;
  text: string;
  source: string;
  contact_name: string;
  contact_email: string;
  terms_accepted: string;
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
        className={`shadow appearance-none border roun ded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorClass}`}
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
          className={`shadow appearance-none border roun ded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorClass}`}
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
          className={`${errorClass}`}
          {...generalProps}
        />
        {errorMessage && <span>{errorMessage}</span>}
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
    <label
      {...generalProps}
      className="block text-gray-700 text-sm font-bold mb-2 ${additionalClassName}"
    >
      {children}
    </label>
  );
};

const FormRow = function ({ children }: { children: React.ReactNode }) {
  return <div className="mb-5">{children}</div>;
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

export function Submission() {
  const {
    formState: {
      isValid,
      errors,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
    },
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
    await new Promise((resolve) => {
      setTimeout(() => resolve(undefined), 1000);
    });

    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let response = await fetch(
      process.env.GATSBY_NEWSSUBMISSION_URL as string,
      {
        method: "POST",
        body: formData,
      }
    ).catch((error) => {
      throw new Error(error);
    });

    // Bad Request -> response text with errors
    if (response.status === 400) {
      throw new Error(await response.text());
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

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 lg:mb-20">
        <div className="flex flex-row">
          <div className="basis-2/3 p-12">
            <header className="text-left">
              <H1 like="h3">News eintragen</H1>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad
                dicta, nulla consequuntur error fugiat amet accusamus quae
                voluptate qui sunt officia quam. Possimus fuga natus quaerat
                consequatur dolorem minima?
              </p>
            </header>

            {isSubmitted && !isSubmitSuccessful && (
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

            {isSubmitted !== true && (
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

                <hr className="mt-5 mb-5" />

                <H2 like="h4">Nur für das MINTvernetzt Team sichtbar</H2>
                <FormRow>
                  <div className="grid gap-4 grid-cols-2">
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

                <FormRow>
                  <FormLabel htmlFor="terms_accepted">
                    Ich stimme der Verwendung meiner eingegebnenen Daten
                    entsprechend der Datenschutzerklärung zu
                  </FormLabel>
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
                </FormRow>

                <div className="flex gap-6 justify-end">
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

          <div className="basis-1/3 p-4">
            <div className="bg-slate-300 h-96 flex justify-center p-6 rounded-xl">
              <h5>Kontaktperson</h5>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Submission;
