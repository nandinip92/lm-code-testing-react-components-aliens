import React from "react";

export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (newValue: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => {
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
    </>
  );
};

export default PlanetName;
