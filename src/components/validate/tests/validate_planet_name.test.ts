import { validatePlanetName } from "../validate_planet_name";

describe("Tests for user inputs given in 'Planet Name' textbox", () => {
  test("Should return corresponding error when number of characters is NOT in between 3 and 23", () => {
    const error = ["Characters length must be between 2 and 49"];
    expect(validatePlanetName("")).toEqual(error);
    expect(validatePlanetName("E")).toEqual(error);
    expect(validatePlanetName("Earth")).toEqual([]);
    expect(validatePlanetName("grrrrrrrrreeeeeeeeeeaaaat")).toEqual([]);
  });

  test("Should allow any numbers", () => {
    expect(validatePlanetName("1456")).toEqual([]);
    expect(validatePlanetName("Earth17")).toEqual([]);
  });

  test("Should not allow any special characters", () => {
    const error = ["Numbers are allowed, but no special characters!"];
    expect(validatePlanetName("_!")).toEqual(error);
    expect(validatePlanetName("Earth...!")).toEqual(error);
  });
});
