import React from "react";
import ErrorMessage from "./error-messages";
export interface NumberOfBeingsProps {
  numOfBeings: string;
  onChangeNumOfBeings: (newValue: string) => void;
  validate: (newValue: string) => string[];
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numOfBeings,
  onChangeNumOfBeings,
  validate,
}) => {
  const errorMessages = validate(numOfBeings);
  return (
    <>
      <label className="tag" htmlFor="numberOfBeings">
        Number of beings:
      </label>
      <input
        id="numberOfBeings"
        type="text"
        value={numOfBeings}
        onChange={(event) => onChangeNumOfBeings(event.target.value)}
      />
      <ErrorMessage messages={errorMessages} />
    </>
  );
};

export default NumberOfBeings;
