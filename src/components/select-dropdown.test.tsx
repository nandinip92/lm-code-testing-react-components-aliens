import { render, screen } from "@testing-library/react";
import SelectDropDown, { SelectDropDownProps } from "./select-dropdown";

describe("<SelectDropDown/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then What is 2 + 2 : label must be present`, () => {
    //Arrange
    const requiredProps: SelectDropDownProps = {
      dropDown: "",
      onChangeDropDown: () => {},
    };
    //ACT
    render(<SelectDropDown {...requiredProps} />);
    const input = screen.getByLabelText("What is 2 + 2 :");

    //Assert
    expect(input).toBeInTheDocument();
  });
});
