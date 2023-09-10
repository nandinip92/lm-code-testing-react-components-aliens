import React from "react";

export interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (newValue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
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
    </>
  );
};
export default SpeciesName;
