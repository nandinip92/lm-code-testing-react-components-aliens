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

  const mockValidateTextArea = jest.fn();
  const requiredProps: TextAreaProps = {
    reasonForSparring: "Hellooo I donot like you!",
    onChangeReasonForSparring: () => {},
    validate: mockValidateTextArea,
  };
  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'validate' function to return empty [] textArea requirements are met`, () => {
    //Act
    mockValidateTextArea.mockReturnValue([]);
    render(<TextArea {...requiredProps} />);
    const noErrorOnScreen = screen.queryByTestId(/error/i);
    expect(noErrorOnScreen).toBeNull();
  });

  it(`Given the required props,
  when the text is typed in the text box,
  input field should call its 'validate' function to return Error extArea requirements are NOT met`, () => {
    //Arrange
    const errorMessage =
      "You are supposed to make your case with minimum of 17 and maximum of 153 characters";

    //Act
    mockValidateTextArea.mockReturnValue([errorMessage]); // return one error
    render(<TextArea {...requiredProps} />);

    const isOneError = screen.queryAllByTestId(/error/i);
    const oneErrorOnScreen = screen.getByText(errorMessage);

    //Assert
    expect(isOneError).toHaveLength(1); //check if there is only one error
    expect(oneErrorOnScreen).toBeInTheDocument();
  });
});
