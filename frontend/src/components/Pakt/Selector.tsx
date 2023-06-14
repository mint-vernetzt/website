type Option = {
  id: string;
  name: string;
};

interface Props extends React.HTMLProps<HTMLSelectElement> {
  options: Option[];
  handleReset: () => void;
}

export const Selector = (props: Props) => {
  const { options, ...rest } = props;
  const sortedOptions = options.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <div className="flex">
      <select {...rest} className="border border-1 p-2">
        <option value={""}></option>
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
            x
          </button>
        </div>
      )}
    </div>
  );
};
