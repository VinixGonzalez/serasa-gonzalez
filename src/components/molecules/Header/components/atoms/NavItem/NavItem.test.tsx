import { render, screen, fireEvent } from "@testing-library/react";
import NavItem from "./NavItem";
import { NavItemProps } from "./NavItem.types";

describe("NavItem Component", () => {
  const defaultProps: NavItemProps = {
    isActive: false,
    icon: <span data-testid="icon">Icon</span>,
    text: "Nav Item",
    onClick: jest.fn(),
  };

  it("renders icon and text correctly", () => {
    render(<NavItem {...defaultProps} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Nav Item")).toBeInTheDocument();
  });

  it("applies active styling when isActive is true", () => {
    render(<NavItem {...defaultProps} isActive={true} />);

    const navItem = screen.getByText("Nav Item").parentElement;
    expect(navItem).toHaveClass("text-primary font-bold");
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("does not apply active styling when isActive is false", () => {
    render(<NavItem {...defaultProps} isActive={false} />);

    const navItem = screen.getByText("Nav Item").parentElement;
    expect(navItem).toHaveClass("text-gray-500");
    expect(navItem).not.toHaveClass("text-primary font-bold");
  });

  it("renders the active indicator when isActive is true", () => {
    render(<NavItem {...defaultProps} isActive={true} />);

    const indicator = screen.getByRole("listitem").querySelector("div");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass("border-b-primary border-b-2");
  });

  it("does not render the active indicator when isActive is false", () => {
    render(<NavItem {...defaultProps} isActive={false} />);

    const indicator = screen.getByRole("listitem").querySelector("div");
    expect(indicator).not.toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<NavItem {...defaultProps} onClick={handleClick} />);

    const navItem = screen.getByText("Nav Item").parentElement;
    fireEvent.click(navItem!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
