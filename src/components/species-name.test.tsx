import { render, screen, fireEvent } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./species-name";

describe("<SpeciesName/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Species Name label must be present`, () => {
    //Arrange
    const requiredProps: SpeciesNameProps = {
      speciesName: "Human",
      onChangeSpeciesName: () => {},
      validate: () => [],
    };
    //ACT
    render(<SpeciesName {...requiredProps} />);
    const input = screen.getByLabelText("Species Name:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    const requiredProps: SpeciesNameProps = {
      speciesName: "Human",
      onChangeSpeciesName: () => {},
      validate: () => [],
    };
    //ACT
    render(<SpeciesName {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Species Name:");
    expect(input.value).toBe("Human"); // to test input value
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'onChange' function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: SpeciesNameProps = {
      speciesName: "Human",
      onChangeSpeciesName: mockOnChange,
      validate: () => [],
    };
    const event = { target: { value: "HumanBeings" } };
    //Act
    render(<SpeciesName {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Species Name:");

    fireEvent.change(input, event); //// triggers onChange event
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("HumanBeings"); // tests if onChange handler is called with proper value
  });

  //props for checking validate functions and below are the 3 tests

  const mockValidateSpeciesName = jest.fn();
  const requiredProps: SpeciesNameProps = {
    speciesName: "Human",
    onChangeSpeciesName: () => {},
    validate: mockValidateSpeciesName,
  };
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return empty [] when Species name is Valid`, () => {
    //Act

    mockValidateSpeciesName.mockReturnValue([]);

    render(<SpeciesName {...requiredProps} />);
    //Checking for the non-existance of the element <p>
    const noErrorOnScreen = screen.queryByTestId(/error/i);
    expect(noErrorOnScreen).toBeNull();
  });
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return ONE Error`, () => {
    //Act

    mockValidateSpeciesName.mockReturnValue([
      "Characters length must be between 3 and 23",
    ]); // return one error
    render(<SpeciesName {...requiredProps} />);

    const isOneError = screen.queryAllByTestId(/error/i);
    const oneErrorOnScreen = screen.getByText(
      "Characters length must be between 3 and 23"
    );
    expect(isOneError).toHaveLength(1); //check if there is only one error
    expect(oneErrorOnScreen).toBeInTheDocument();
  });
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return TWO Errors`, () => {
    ///Arrange

    mockValidateSpeciesName.mockReturnValue([
      "Characters length must be between 3 and 23",
      "No numbers or special characters allowed!",
    ]); // // return two errors
    //Act
    render(<SpeciesName {...requiredProps} />);

    const isTwoErrors = screen.queryAllByTestId(/error/i);
    const twoErrorOnScreen = screen.getByText(
      "Characters length must be between 3 and 23"
    );
    expect(isTwoErrors).toHaveLength(2); //check if there is only one error
    expect(twoErrorOnScreen).toBeInTheDocument();
  });
});
