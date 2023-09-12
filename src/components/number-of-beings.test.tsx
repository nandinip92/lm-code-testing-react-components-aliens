import { fireEvent, render, screen } from "@testing-library/react";
import NumberOfBeings, { NumberOfBeingsProps } from "./number-of-beings";

describe("<NumberOfBeings/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Number of species label must be present`, () => {
    //Arrange
    const requiredProps: NumberOfBeingsProps = {
      numOfBeings: "20",
      onChangeNumOfBeings: () => {},
      validate: () => [],
    };
    //ACT
    render(<NumberOfBeings {...requiredProps} />);
    const input = screen.getByLabelText("Number of beings:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: NumberOfBeingsProps = {
      numOfBeings: "20",
      onChangeNumOfBeings: () => {},
      validate: () => [],
    };
    //ACT
    render(<NumberOfBeings {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Number of beings:");

    expect(input.value).toBe("20");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: NumberOfBeingsProps = {
      numOfBeings: "",
      onChangeNumOfBeings: mockOnChange,
      validate: () => [],
    };
    const event = { target: { value: 201 } };
    //ACT
    render(<NumberOfBeings {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Number of beings:");

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("201");
  });

  //props for checking validate functions and below are the 3 tests
  const mockValidateNumberOfBeingsProps = jest.fn();
  const requiredProps: NumberOfBeingsProps = {
    numOfBeings: "20",
    onChangeNumOfBeings: () => {},
    validate: mockValidateNumberOfBeingsProps,
  };
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return empty [] when Species name is Valid`, () => {
    //Act
    mockValidateNumberOfBeingsProps.mockReturnValue([]);

    render(<NumberOfBeings {...requiredProps} />);
    //Checking for the non-existance of the element <p>
    const noErrorOnScreen = screen.queryByTestId(/error/i);
    expect(noErrorOnScreen).toBeNull();
  });
  it(`Given the required props,
  when the text is typed in the text box,
  input field should call its 'validate' function to return ONE Error`, () => {
    //Arrange
    const errorMessage = "ONLY Numbers!";

    //Act
    mockValidateNumberOfBeingsProps.mockReturnValue([errorMessage]); // return one error
    render(<NumberOfBeings {...requiredProps} />);

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
      "ONLY Numbers!",
      "numberOfBeings must be atleast 1,000,000,000",
    ];
    //Act
    mockValidateNumberOfBeingsProps.mockReturnValue(errorMessage); // // return two errors
    render(<NumberOfBeings {...requiredProps} />);

    const isTwoErrors = screen.queryAllByTestId(/error/i);
    const twoErrorOnScreen = screen.getByText(errorMessage[1]);
    expect(isTwoErrors).toHaveLength(2); //check if there is only one error
    expect(twoErrorOnScreen).toBeInTheDocument();
  });
});
