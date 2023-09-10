import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./species-name";

describe("<SpeciesName/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Species Name label must be present`, () => {
    //Arrange
    const requiredProps: SpeciesNameProps = {
      speciesName: "Human",
      onChangeSpeciesName: () => {},
    };
    //ACT
    render(<SpeciesName {...requiredProps} />);
    const input = screen.getByLabelText("Species Name :");

    //Assert
    expect(input).toBeInTheDocument();
  });
});
