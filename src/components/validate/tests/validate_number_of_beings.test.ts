import { validateNumOfBeings } from "../validate_number_of_beings";

describe("Tests for user inputs given in Number of Beings textbox", () => {
  test("Should ONLY contain numbers", () => {
    const error = ["ONLY Numbers!"];
    expect(validateNumOfBeings("asebdsa")).toEqual(error);
    expect(validateNumOfBeings("!_!")).toEqual(error);
  });
  test("number should be greater than 1,000,000,000", () => {
    const error = ["numberOfBeings must be atleast 1,000,000,000"];
    expect(validateNumOfBeings("8976")).toEqual(error);
    expect(validateNumOfBeings("1000000100")).toEqual([]);
  });
});
