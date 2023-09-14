import { useState } from "react";
import W12MHeader from "./W12MHeader";
import TextInput from "./text-input";
import SelectDropDown from "./select-dropdown";
import TextArea from "./text-area";

// import SpeciesName from "./deprecated_components/species-name";
// import PlanetName from "./deprecated_components/planet-name";
// import NumberOfBeings from "./deprecated_components/number-of-beings";

import { validateSpeciesName } from "./validate/validate_species_name";
import { validatePlanetName } from "./validate/validate_planet_name";
import { validateNumOfBeings } from "./validate/validate_number_of_beings";
import { validateSelectDropDown } from "./validate/validate_select_dropdown";
import { validateReasonForSparringTextArea } from "./validate/validate_text_area";

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
      <form onSubmit={submitForm}>
        <TextInput
          fieldId="speciesName"
          fieldValue={speciesName}
          onChangeFieldValue={setSpeciesName}
          validate={validateSpeciesName}
        />
        <TextInput
          fieldId="planetName"
          fieldValue={planetName}
          onChangeFieldValue={setPlanetName}
          validate={validatePlanetName}
        />
        <TextInput
          fieldId="numOfBeings"
          fieldValue={numOfBeings}
          onChangeFieldValue={setNumOfBeings}
          validate={validateNumOfBeings}
        />
        <br></br>
        <SelectDropDown
          dropDown={dropDown}
          onChangeDropDown={setDropDown}
          validate={validateSelectDropDown}
        />
        <br></br>
        <TextArea
          reasonForSparring={reasonForSparring}
          onChangeReasonForSparring={(value) => setReasonForSparring(value)}
          validate={validateReasonForSparringTextArea}
        />

        <button type="submit" title="Submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default W12MForm;
