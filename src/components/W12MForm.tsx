import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species-name";
import PlanetName from "./planet-name";
import NumberOfBeings from "./number-of-beings";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numOfBeings, setNumOfBeings] = useState("");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
      />
      <PlanetName planetName={planetName} onChangePlanetName={setPlanetName} />
      <NumberOfBeings
        numOfBeings={numOfBeings}
        onChangeNumOfBeings={(value) => setNumOfBeings(value)}
      />
    </section>
  );
};

export default W12MForm;
