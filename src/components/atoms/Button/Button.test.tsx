import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with the provided text", () => {
    render(<Button btnText="Click" />);
    const buttonElement = screen.getByRole("button", { name: /click/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const className = "custom-class";
    render(<Button btnText="Styled Button" className={className} />);
    const buttonElement = screen.getByRole("button", {
      name: /styled button/i,
    });
    expect(buttonElement).toHaveClass(className);
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button btnText="Click" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /click/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props to the button", () => {
    render(<Button btnText="Extra Props" data-testid="custom-button" />);
    const buttonElement = screen.getByTestId("custom-button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with no text if btnText is not provided", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeEmptyDOMElement();
  });
});
