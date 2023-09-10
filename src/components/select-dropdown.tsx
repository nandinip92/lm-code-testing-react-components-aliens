export interface SelectDropDownProps {
  dropDown: string;
  onChangeDropDown: (newValue: string) => void;
}

const SelectDropDown: React.FC<SelectDropDownProps> = ({
  dropDown,
  onChangeDropDown,
}) => {
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
    </>
  );
};

export default SelectDropDown;
