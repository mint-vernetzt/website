interface NoResultProps {
  handleReset: () => void;
}
export const NoResult = (props: NoResultProps) => (
  <div className="text-center">
    <p className="text-xl mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="inline-block mr-4">
        <g id="ExclamationCircle" fill="#3C4658" clip-path="url(#clip0_5721_79502)">
          <path id="Vector" d="M10 18.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5ZM10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/>
          <path id="Vector_2" d="M8.753 13.75a1.25 1.25 0 1 1 2.501 0 1.25 1.25 0 0 1-2.501 0Zm.122-7.506a1.131 1.131 0 0 1 2.201-.468c.05.15.066.31.05.468l-.438 4.383a.69.69 0 0 1-1.375 0l-.438-4.383Z"/>
        </g>
        <defs>
          <clipPath id="clip0_5721_79502">
            <path fill="#fff" d="M0 0h20v20H0z"/>
          </clipPath>
        </defs>
      </svg>{' '}
      Leider konnten für diese Anfrage keine Ergebnisse gefunden werden.</p>
    <p>
      <a
        href="#reset"
        className="btn-primary"
        onClick={(e) => {
          e.preventDefault();
          props.handleReset();
        }}
      >
        Filter zurücksetzen
      </a>
    </p>  
  </div>
);
