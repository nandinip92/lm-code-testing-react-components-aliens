import ErrorMessage from "./error-messages";
export interface SelectDropDownProps {
  dropDown: string;
  onChangeDropDown: (newValue: string) => void;
  validate: (newValue: string) => string[];
}

const SelectDropDown: React.FC<SelectDropDownProps> = ({
  dropDown,
  onChangeDropDown,
  validate,
}) => {
  const errorMessages = validate(dropDown);

  return (
    <>
      <label className="tag" htmlFor="dropDown">
        What is 2 + 2 :
      </label>
      <select
        name="dropDown"
        id="dropDown"
        onChange={(event) => {
          onChangeDropDown(event.target.value);
        }}
        defaultValue={dropDown}
      >
        <option value="">""</option>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
      <ErrorMessage messages={errorMessages} />
    </>
  );
};

export default SelectDropDown;
