import { validateSpeciesName } from "../validate_species_name";

describe("Tests for user inputs given in SpeciesName textbox", () => {
  test("Should return corresponding error when number of characters is NOT in between 3 and 23", () => {
    const error = ["Characters length must be between 3 and 23"];
    expect(validateSpeciesName("")).toEqual(error);
    expect(validateSpeciesName("great")).toEqual([]);
    expect(validateSpeciesName("gr")).toEqual(error);
    expect(validateSpeciesName("grrrrrrrrreeeeeeeeeeaaaat")).toEqual(error);
  });

  test("Should not allow any numbers", () => {
    const error = ["No numbers or special characters allowed!"];
    expect(validateSpeciesName("1456")).toEqual(error);
    expect(validateSpeciesName("great17")).toEqual(error);
  });

  test("Should not allow any special characters", () => {
    const error = ["No numbers or special characters allowed!"];
    expect(validateSpeciesName("_!")).toEqual(error);
    expect(validateSpeciesName("great...!")).toEqual(error);
  });
});
