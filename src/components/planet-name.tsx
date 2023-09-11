import React from "react";
import ErrorMessage from "./error-messages";

export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (newValue: string) => void;
  validate: (newValue: string) => string[];
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => {
  const errorMessages = validate(planetName);

  return (
    <>
      <label className="tag" htmlFor="planetName">
        Planet Name:
      </label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={(event) => onChangePlanetName(event.target.value)}
      />
      <ErrorMessage messages={errorMessages} />
    </>
  );
};

export default PlanetName;
