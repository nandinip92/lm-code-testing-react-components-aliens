import { validateSelectDropDown } from "../validate_select_dropdown";

describe("Tests for Drop down selection", () => {
  test("Should return error when 4 is not selected", () => {
    expect(validateSelectDropDown("Not 4")).toEqual(["ERROR: 2 + 2 is Not 4"]);
  });
});
