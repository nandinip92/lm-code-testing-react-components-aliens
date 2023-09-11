import { fireEvent, render, screen } from "@testing-library/react";
import PlanetName, { PlanetNameProps } from "./planet-name";

describe("<PlanetName/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Planet Name label must be present`, () => {
    //Arrange
    const requiredProps: PlanetNameProps = {
      planetName: "Earth",
      onChangePlanetName: () => {},
      validate: () => [],
    };
    //ACT
    render(<PlanetName {...requiredProps} />);
    const input = screen.getByLabelText("Planet Name:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: PlanetNameProps = {
      planetName: "Earth",
      onChangePlanetName: () => {},
      validate: () => [],
    };
    //ACT
    render(<PlanetName {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Planet Name:");
    expect(input.value).toBe("Earth"); // to test input value
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: mockOnChange,
      validate: () => [],
    };

    const event = { target: { value: "Planet Earth" } };
    //ACT
    render(<PlanetName {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Planet Name:");
    fireEvent.change(input, event); //// triggers onChange event

    // tests if onChange handler is called with proper value. Also under the alias: .toBeCalledWith() - to ensure that a mock function was called with specific arguments.
    expect(mockOnChange).toHaveBeenCalledWith("Planet Earth");

    //to ensure that a mock function got called exact number of times. Also under the alias: .toBeCalledTimes(number)
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
