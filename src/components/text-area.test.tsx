import { render, screen } from "@testing-library/react";
import TextArea, { TextAreaProps } from "./text-area";

describe("<TextArea/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Planet Name label must be present`, () => {
    //Arrange
    const requiredProps: TextAreaProps = {
      reasonForSparring: "Hellooo I not like you!",
      onChangeReasonForSparring: () => {},
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByLabelText("Reason For Sparring :");

    //Assert
    expect(input).toBeInTheDocument();
  });
});
