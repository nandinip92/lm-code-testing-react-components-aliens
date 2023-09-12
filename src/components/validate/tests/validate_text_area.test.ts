import { validateReasonForSparringTextArea } from "../validate_text_area";

describe("Tests for Drop down selection", () => {
  test("Should be between 17 and 153", () => {
    const error =
      "You are supposed to make your case with minimum of 17 and maximum of 153 characters";
    expect(validateReasonForSparringTextArea("hello...!")).toEqual([error]);

    const input = "I donot like your planet so I want to destroy it";

    expect(validateReasonForSparringTextArea(input)).toEqual([]);
  });
});
