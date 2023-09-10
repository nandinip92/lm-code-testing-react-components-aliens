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
    };
    //ACT
    render(<NumberOfBeings {...requiredProps} />);
    const input = screen.getByLabelText("Number of beings:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: NumberOfBeingsProps = {
      numOfBeings: "20",
      onChangeNumOfBeings: mockOnChange,
    };
    const event = { target: { value: 201 } };
    //ACT
    render(<NumberOfBeings {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Number of beings:");

    expect(input.value).toBe("20");

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("201");
  });
});
