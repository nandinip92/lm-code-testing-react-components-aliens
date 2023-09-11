import { render, screen } from "@testing-library/react";
import TextArea, { TextAreaProps } from "./text-area";
import { fireEvent } from "@testing-library/react";

describe("<TextArea/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Planet Name label must be present`, () => {
    //Arrange
    const requiredProps: TextAreaProps = {
      reasonForSparring: "Hellooo I donot like you!",
      onChangeReasonForSparring: () => {},
      validate: () => [],
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByLabelText("Reason For Sparring:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: TextAreaProps = {
      reasonForSparring: "Hellooo I donot like you!",
      onChangeReasonForSparring: () => {},
      validate: () => [],
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>(
      "Reason For Sparring:"
    );
    expect(input.value).toEqual("Hellooo I donot like you!");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: TextAreaProps = {
      reasonForSparring: "",
      onChangeReasonForSparring: mockOnChange,
      validate: () => [],
    };

    const event = {
      target: { value: "Hellooo I donot like you! and I want to destory you!" },
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>(
      "Reason For Sparring:"
    );

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(event.target.value);
  });
});
