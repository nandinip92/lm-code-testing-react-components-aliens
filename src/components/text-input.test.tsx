import { render, screen, fireEvent } from "@testing-library/react";
import TextInput, { TextInputProps } from "./text-input";
import { Labels, labels } from "../data/inputfield-labels";

describe("<TextInput/> for 'Species Name' textbox", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then 'Species Name' Label must be present`, async () => {
    //Arrange
    const requiredProps: TextInputProps = {
      fieldId: "speciesName",
      fieldValue: "",
      onChangeFieldValue: () => {},
      validate: () => [],
    };
    render(<TextInput {...requiredProps} />);
    const input = screen.getByLabelText("Species Name:");
    expect(input).toBeInTheDocument();
  });
});

const mockOnChange = jest.fn();
const mockValidate = jest.fn();

/*
// setup using getByRole

 const setup = (requiredProps: TextInputProps) => {
  render(<TextInput {...requiredProps} />);
  const input = screen.getByRole<HTMLInputElement>("textbox");
  return input;
};*/
const setup = (requiredProps: TextInputProps) => {
  const id = requiredProps.fieldId;
  const textBoxLabel = labels[id as keyof Labels];
  render(<TextInput {...requiredProps} />);
  const input = screen.getByLabelText<HTMLInputElement>(textBoxLabel);
  return input;
};

const setUpSpeciesName = () => {
  const requiredProps: TextInputProps = {
    fieldId: "speciesName",
    fieldValue: "Human",
    onChangeFieldValue: mockOnChange,
    validate: mockValidate,
  };
  const input = setup(requiredProps);
  return input;
};

const setUpPlanetName = () => {
  const requiredProps: TextInputProps = {
    fieldId: "planetName",
    fieldValue: "Earth",
    onChangeFieldValue: mockOnChange,
    validate: mockValidate,
  };
  const input = setup(requiredProps);
  return input;
};

const setUpNumberOfBeings = () => {
  const requiredProps: TextInputProps = {
    fieldId: "numOfBeings",
    fieldValue: "",
    onChangeFieldValue: mockOnChange,
    validate: mockValidate,
  };
  const input = setup(requiredProps);
  return input;
};

describe("<TextInput/> for checking if the Labels are displayed properly or not", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then 'Species Name' Label must be present`, async () => {
    //Arrange and Act

    const input = setUpSpeciesName();
    expect(input).toBeInTheDocument();
  });
  it(`Given the required props, 
    when the component is rendered, 
    then 'Planet Name' Label must be present`, async () => {
    //Arrange and Act

    const input = setUpPlanetName();
    expect(input).toBeInTheDocument();
  });
  it(`Given the required props, 
    when the component is rendered, 
    then 'Number Of Species' Label must be present`, async () => {
    //Arrange and Act

    const input = setUpNumberOfBeings();
    expect(input).toBeInTheDocument();
  });
});

describe("<TextInput/> for textbox", () => {
  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Act
    const input = setUpSpeciesName();
    //Assert
    expect(input.value).toBe("Human");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    //Arrange
    const event = { target: { value: "HumanBeings" } };
    //Act
    const input = setUpSpeciesName();
    fireEvent.change(input, event); //// triggers onChange event

    //Assert
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("HumanBeings"); // tests if onChange handler is called with proper value
  });

  it(`Given the required props,
  when the input text is typed in the text box, 
  input field should call its 'validate' function to return empty [] when given input is Valid`, () => {
    mockValidate.mockReturnValue([]);
    //Act
    //const input= setUpPlanetName();
    //Checking for the non-existance of the element <p>
    const noErrorOnScreen = screen.queryByTestId(/error/i);
    expect(noErrorOnScreen).toBeNull();
  });

  it(`Given the required props,
  when the text is typed in the text box,
  input field should call its 'validate' function to return ONE Error`, () => {
    //Arrange
    const errorMessage = "Characters length must be between 2 and 49";
    mockValidate.mockReturnValue([errorMessage]); // return one error
    setUpPlanetName();
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
    mockValidate.mockReturnValue(errorMessage);
    setUpNumberOfBeings();
    const isTwoErrors = screen.queryAllByTestId(/error/i);
    const twoErrorOnScreen = screen.getByText(errorMessage[1]);
    //Assert
    expect(isTwoErrors).toHaveLength(2); //check if there is only one error
    expect(twoErrorOnScreen).toBeInTheDocument();
  });
});
