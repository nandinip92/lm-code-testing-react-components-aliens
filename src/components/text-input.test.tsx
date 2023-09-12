import { render, screen, fireEvent } from "@testing-library/react";
import TextInput, { TextInputProps } from "./text-input";
import { Labels, labels } from "../data/inputfield-labels";

const setup = (requiredProps: TextInputProps) => {
  render(<TextInput {...requiredProps} />);
  const input = screen.getByRole<HTMLInputElement>("textbox");
  //const id = requiredProps.fieldId;
  //const label = labels[id as keyof Labels];
  //console.log("label-->", label);
  //const input = screen.getByLabelText(label);

  //console.log("--->input", input);

  return input;
};
describe("<TextInput/> for 'Species Name' textbox", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then 'Species Name' textbox must be present`, () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "speciesName",
      fieldValue: "",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    //Act
    const input = setup(requiredProps);
    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "speciesName",
      fieldValue: "Human",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    //Act
    const input = setup(requiredProps);
    //Assert
    expect(input.value).toBe("Human");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    //Arrange
    const mockOnChange = jest.fn();
    const requiredProps: TextInputProps = {
      fieldId: "speciesName",
      fieldValue: "",
      onChangeFieldValue: mockOnChange,
      validate: () => [],
    };
    const event = { target: { value: "HumanBeings" } };
    //Act
    const input = setup(requiredProps);
    fireEvent.change(input, event); //// triggers onChange event

    //Assert
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("HumanBeings"); // tests if onChange handler is called with proper value
  });
});

describe("<TextInput/> for 'Planet Name:' textbox", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then 'Planet Name' textbox must be present`, () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "planetName",
      fieldValue: "",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    //Act
    const input = setup(requiredProps);
    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "planetName",
      fieldValue: "Earth",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    //Act
    const input = setup(requiredProps);
    //Assert
    expect(input.value).toBe("Earth");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    //Arrange
    const mockOnChange = jest.fn();
    const requiredProps: TextInputProps = {
      fieldId: "planetName",
      fieldValue: "",
      onChangeFieldValue: mockOnChange,
      validate: () => [],
    };
    const event = { target: { value: "Planet Earth" } };

    //Act
    const input = setup(requiredProps);
    fireEvent.change(input, event); //// triggers onChange event

    //Assert
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("Planet Earth"); // tests if onChange handler is called with proper value
  });
});

describe("<TextInput/> for 'Number of beings:' textbox", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then 'Number of beings' textbox must be present`, () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "numOfBeings",
      fieldValue: "",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    //Act
    const input = setup(requiredProps);
    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "numOfBeings",
      fieldValue: "20",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    //Act
    const input = setup(requiredProps);
    //Assert
    expect(input.value).toBe("20");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    //Arrange
    const mockOnChange = jest.fn();
    const requiredProps: TextInputProps = {
      fieldId: "numOfBeings",
      fieldValue: "",
      onChangeFieldValue: mockOnChange,
      validate: () => [],
    };
    const event = { target: { value: 201 } };

    //Act
    const input = setup(requiredProps);
    fireEvent.change(input, event); //// triggers onChange event

    //Assert
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("201"); // tests if onChange handler is called with proper value
  });
});
