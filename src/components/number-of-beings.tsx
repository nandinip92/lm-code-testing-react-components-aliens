import React from "react";

interface NumberOfBeingsProps {
  numOfBeings: string;
  onChangeNumOfBeings: (newValue: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numOfBeings,
  onChangeNumOfBeings,
}) => {
  return (
    <>
      <label className="tag" htmlFor="numberOfBeings">
        Number of beings :
      </label>
      <input
        id="numberOfBeings"
        type="text"
        value={numOfBeings}
        onChange={(event) => onChangeNumOfBeings(event.target.value)}
      />
    </>
  );
};

export default NumberOfBeings;
