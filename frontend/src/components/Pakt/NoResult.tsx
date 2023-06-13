interface NoResultProps {
  handleReset: () => void;
}
export const NoResult = (props: NoResultProps) => (
  <div>
    <h2>Leider kein Ergebnis</h2>
    <a
      href="#reset"
      className="btn-primary"
      onClick={(e) => {
        e.preventDefault();
        props.handleReset();
      }}
    >
      Formular zurücksetzen
    </a>
  </div>
);
