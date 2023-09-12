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

  //props for checking validate functions and below are the 3 tests
  const mockValidatePlanetName = jest.fn();
  const requiredProps: PlanetNameProps = {
    planetName: "",
    onChangePlanetName: () => {},
    validate: mockValidatePlanetName,
  };
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return empty [] when Species name is Valid`, () => {
    //Act
    mockValidatePlanetName.mockReturnValue([]);

    render(<PlanetName {...requiredProps} />);
    //Checking for the non-existance of the element <p>
    const noErrorOnScreen = screen.queryByTestId(/error/i);
    expect(noErrorOnScreen).toBeNull();
  });
  it(`Given the required props,
  when the text is typed in the text box,
  input field should call its 'validate' function to return ONE Error`, () => {
    //Arrange
    const errorMessage = "Characters length must be between 2 and 49";

    //Act
    mockValidatePlanetName.mockReturnValue([errorMessage]); // return one error
    render(<PlanetName {...requiredProps} />);

    const isOneError = screen.queryAllByTestId(/error/i);
    const oneErrorOnScreen = screen.getByText(errorMessage);

    //Assert
    expect(isOneError).toHaveLength(1); //check if there is only one error
    expect(oneErrorOnScreen).toBeInTheDocument();
  });
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return TWO Errors`, () => {
    //Arrange
    const errorMessage = [
      "Characters length must be between 2 and 49",
      "Numbers are allowed, but no special characters!",
    ];
    //Act
    mockValidatePlanetName.mockReturnValue(errorMessage); // // return two errors
    render(<PlanetName {...requiredProps} />);

    const isTwoErrors = screen.queryAllByTestId(/error/i);
    const twoErrorOnScreen = screen.getByText(errorMessage[1]);
    expect(isTwoErrors).toHaveLength(2); //check if there is only one error
    expect(twoErrorOnScreen).toBeInTheDocument();
  });
});
