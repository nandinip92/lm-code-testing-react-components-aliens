import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species-name";
import PlanetName from "./planet-name";
import NumberOfBeings from "./number-of-beings";
import SelectDropDown from "./select-dropdown";
import TextArea from "./text-area";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numOfBeings, setNumOfBeings] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [reasonForSparring, setReasonForSparring] = useState("");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
      />
      <br></br>
      <PlanetName planetName={planetName} onChangePlanetName={setPlanetName} />
      <br></br>
      <NumberOfBeings
        numOfBeings={numOfBeings}
        onChangeNumOfBeings={(value) => setNumOfBeings(value)}
      />
      <br></br>
      <SelectDropDown
        dropDown={dropDown}
        onChangeDropDown={(value) => setDropDown(value)}
      />
      <br></br>
      <TextArea
        reasonForSparring={reasonForSparring}
        onChangeReasonForSparring={(value) => setReasonForSparring(value)}
      />
    </section>
  );
};

export default W12MForm;
