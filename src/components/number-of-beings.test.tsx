import { render, screen } from "@testing-library/react";
import NumberOfBeings, { NumberOfBeingsProps } from "./number-of-beings";

describe("<SpeciesName/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Number of species label must be present`, () => {
    //Arrange
    const requiredProps: NumberOfBeingsProps = {
      numOfBeings: "20",
      onChangeNumOfBeings: () => {},
    };
    //ACT
    render(<NumberOfBeings {...requiredProps} />);
    const input = screen.getByLabelText("Number of beings:");

    //Assert
    expect(input).toBeInTheDocument();
  });
});
