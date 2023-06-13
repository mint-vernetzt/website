interface Props extends React.HTMLProps<HTMLInputElement> {
  handleReset: () => void;
}

export const Input = (props: Props) => {
  const { handleReset, ...rest } = props;
  return (
    <div className="flex">
      <input className="border border-violet-600 p-2" {...props} />
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
