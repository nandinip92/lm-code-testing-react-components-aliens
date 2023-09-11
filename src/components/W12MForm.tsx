import { useEffect, useState } from "react";
import W12MHeader from "./W12MHeader";
// import TextInput from "./text-input";
import SelectDropDown from "./select-dropdown";
import TextArea from "./text-area";

import SpeciesName from "./species-name";
import PlanetName from "./planet-name";
import NumberOfBeings from "./number-of-beings";

import { validateSpeciesName } from "./validate/validate_species_name";
import { validatePlanetName } from "./validate/validate_planet_name";
import { validateNumOfBeings } from "./validate/validate_number_of_beings";
import { validateSelectDropDown } from "./validate/validate_select_dropdown";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numOfBeings, setNumOfBeings] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [reasonForSparring, setReasonForSparring] = useState("");

  const submitForm = () => {
    console.log("speciesName: ", speciesName);
    console.log("planetName: ", planetName);
    console.log("numOfBeings: ", numOfBeings);
    console.log("dropDown: ", dropDown);
    console.log("reasonForSparring: ", reasonForSparring);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
        validate={validateSpeciesName}
      />
      <br></br>
      <PlanetName
        planetName={planetName}
        onChangePlanetName={setPlanetName}
        validate={validatePlanetName}
      />
      <br></br>
      <NumberOfBeings
        numOfBeings={numOfBeings}
        onChangeNumOfBeings={(value) => setNumOfBeings(value)}
        validate={validateNumOfBeings}
      />
      <br></br>
      <SelectDropDown
        dropDown={dropDown}
        onChangeDropDown={(value) => setDropDown(value)}
        validate={validateSelectDropDown}
      />
      <br></br>
      <TextArea
        reasonForSparring={reasonForSparring}
        onChangeReasonForSparring={(value) => setReasonForSparring(value)}
      />

      <input
        type="submit"
        title="Submit"
        value="Submit Form"
        onClick={submitForm}
      />
    </section>
  );
};

export default W12MForm;
