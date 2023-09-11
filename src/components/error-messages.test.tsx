import { render, screen } from "@testing-library/react";
import ErrorMessage from "./error-messages";

describe("<SpeciesName/>", () => {
  it(`Given the required props, 
      when the component is rendered, 
      then the error message should be displayed if there is an error`, () => {
    const requiredProps = {
      messages: [
        "Characters length must be between 3 and 23",
        "No numbers or special characters allowed!",
        "Characters length must be between 2 and 49",
        "Numbers are allowed, but no special characters!",
        "ONLY Numbers!",
        "numberOfBeings must be atleast 1,000,000,000",
        "ERROR: 2 + 2 is Not 4",
        "You are supposed to make you case with minimum of 17 and maximum of 153 characters",
      ],
    };

    render(<ErrorMessage {...requiredProps} />);
    const input = screen.getByText(requiredProps.messages[0]);
    expect(input).toBeInTheDocument();
  });
});
