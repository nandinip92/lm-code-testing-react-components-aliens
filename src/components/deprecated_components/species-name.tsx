import React from "react";
import ErrorMessage from "../error-messages";

export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (newValue: string) => void;
  validate: (newValue: string) => string[];
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  validate,
}) => {
  const errorMessages = validate(speciesName);
  return (
    <>
      <label className="tag" htmlFor="speciesName">
        Species Name:
      </label>
      <input
        id="speciesName"
        type="text"
        value={speciesName}
        onChange={(event) => onChangeSpeciesName(event.target.value)}
      />
      <ErrorMessage messages={errorMessages} />
    </>
  );
};
export default SpeciesName;
