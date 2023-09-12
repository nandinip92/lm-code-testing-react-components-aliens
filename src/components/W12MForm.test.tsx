import { render, screen, fireEvent } from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

test("renders form element", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(<W12MForm />);

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  expect(container.firstChild).toHaveClass("w12MForm");
});

/*describe("Submit Button", () => {
  it(`Check if the submit button calls its handler function and pass the correct parameters`, async () => {
    const mockOnSubmit = jest.fn();
    render(<W12MForm />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});*/
