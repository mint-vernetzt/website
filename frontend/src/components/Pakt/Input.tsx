interface Props extends React.HTMLProps<HTMLInputElement> {
  handleReset: () => void;
}

export const Input = (props: Props) => {
  const { handleReset, label, ...rest } = props;
  return (
    <div className="form-control">
      {label !== "" && (
        <label className="label">{label}</label>
      )}
      <div className="relative">
        <input className="input" {...props} />
        {label == "Suche" && (
          <div className="search-icon absolute top-0 left-2 h-[36px] w-8 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="#4D5970" d="M17.613 15.516A9.706 9.706 0 0 0 19.5 9.75C19.5 4.365 15.135 0 9.75 0S0 4.365 0 9.75s4.365 9.75 9.75 9.75a9.706 9.706 0 0 0 5.767-1.888l-.001.001c.044.06.093.118.148.172l5.775 5.776a1.5 1.5 0 0 0 2.122-2.122l-5.776-5.775a1.517 1.517 0 0 0-.172-.148ZM18 9.75a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0Z"/>
            </svg>
          </div>
        )}
      </div>    
      {props.value !== "" && (
        <div className="p-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.handleReset();
            }}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
};
