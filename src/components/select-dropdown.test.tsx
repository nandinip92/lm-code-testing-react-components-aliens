import { render, screen } from "@testing-library/react";
import SelectDropDown, { SelectDropDownProps } from "./select-dropdown";
import { fireEvent } from "@testing-library/react";

describe("<SelectDropDown/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then What is 2 + 2 : label must be present`, () => {
    //Arrange
    const requiredProps: SelectDropDownProps = {
      dropDown: "",
      onChangeDropDown: () => {},
      validate: () => [],
    };
    //ACT
    render(<SelectDropDown {...requiredProps} />);
    const input = screen.getByLabelText("What is 2 + 2 :");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: SelectDropDownProps = {
      dropDown: "4",
      onChangeDropDown: () => {},
      validate: () => [],
    };
    //ACT
    //ACT
    render(<SelectDropDown {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("What is 2 + 2 :");
    expect(input.value).toBe("4");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: SelectDropDownProps = {
      dropDown: "",
      onChangeDropDown: mockOnChange,
      validate: () => [],
    };
    const event1 = { target: { value: "4" } };
    const event2 = { target: { value: "Not 4" } };
    //ACT
    render(<SelectDropDown {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("What is 2 + 2 :");

    fireEvent.change(input, event1);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("4");

    fireEvent.change(input, event2);
    expect(mockOnChange).toHaveBeenCalledTimes(2);
    expect(mockOnChange).toHaveBeenCalledWith("Not 4");
  });
});
