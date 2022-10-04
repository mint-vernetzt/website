import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Seite wurde nicht gefunden</h1>
      <p style={paragraphStyles}>
        Es tut uns leid: Diese Seite ist leider nicht erreichbar.
        <br />
        {typeof document !== "undefined" ? (
          <>
            Vielleicht enthält{" "}
            <Link to={`${document.location.pathname}`}>
              {document.location.href}
            </Link>{" "}
            einen Tippfehler?
          </>
        ) : null}
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        Hier findet Ihr viele Informationen über uns und die MINT-Bildung in
        Deutschland: Zu <Link to="/">MINTvernetzt</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
