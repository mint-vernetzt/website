type Option = {
  id: string;
  name: string;
};

interface Props extends React.HTMLProps<HTMLSelectElement> {
  options: Option[];
  handleReset: () => void;
  label?: string;
}

export const Selector = (props: Props) => {
  const { options, label, placeholder, ...rest } = props;
  const sortedOptions = options.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <div className="form-control w-full">
      {label !== "" && (
        <label className="label">{label}</label>
      )}  
      <select {...rest} className="select select-bordered" required>
        <option value={""}>{placeholder}</option>
        {sortedOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      
      {props.value !== "" && (
        <div className="p-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.handleReset();
            }}
          >
            {props.value} x
          </button>
        </div>
      )}
    </div>
  );
};
