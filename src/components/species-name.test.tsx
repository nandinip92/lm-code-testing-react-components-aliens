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
    };
    //ACT
    render(<SpeciesName {...requiredProps} />);
    const input = screen.getByLabelText("Species Name:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: SpeciesNameProps = {
      speciesName: "Human",
      onChangeSpeciesName: mockOnChange,
    };
    const event = { target: { value: "HumanBeings" } };
    //Act
    render(<SpeciesName {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Species Name:");
    expect(input.value).toBe("Human"); // to test input value

    fireEvent.change(input, event); //// triggers onChange event
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("HumanBeings"); // tests if onChange handler is called with proper value
  });
});
