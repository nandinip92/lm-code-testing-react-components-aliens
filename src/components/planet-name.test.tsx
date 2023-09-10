import { render, screen } from "@testing-library/react";
import PlanetName, { PlanetNameProps } from "./planet-name";

describe("<SpeciesName/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Planet Name label must be present`, () => {
    //Arrange
    const requiredProps: PlanetNameProps = {
      planetName: "Earth",
      onChangePlanetName: () => {},
    };
    //ACT
    render(<PlanetName {...requiredProps} />);
    const input = screen.getByLabelText("Planet Name:");

    //Assert
    expect(input).toBeInTheDocument();
  });
});
