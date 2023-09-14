import React, { useState } from "react";
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

const W12MForm: React.FC<{ onSubmit?: () => void }> = ({ onSubmit }) => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numOfBeings, setNumOfBeings] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [reasonForSparring, setReasonForSparring] = useState("");

  const submitForm = () => {
    onSubmit && onSubmit();
    console.log("speciesName: ", speciesName);
    console.log("planetName: ", planetName);
    console.log("numOfBeings: ", numOfBeings);
    console.log("dropDown: ", dropDown);
    console.log("reasonForSparring: ", reasonForSparring);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />

      <TextInput
        fieldId="speciesName"
        fieldValue={speciesName}
        onChangeFieldValue={setSpeciesName}
        validate={validateSpeciesName}
      />
      <TextInput
        fieldId="planetName"
        fieldValue={planetName}
        onChangeFieldValue={(value) => setPlanetName(value)}
        validate={validatePlanetName}
      />
      <TextInput
        fieldId="numOfBeings"
        fieldValue={numOfBeings}
        onChangeFieldValue={(value) => setNumOfBeings(value)}
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
        validate={validateReasonForSparringTextArea}
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
