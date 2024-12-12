import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuItem from "./MenuItem";

describe("MenuItem Component", () => {
  it("should renders the icon and text correctly", () => {
    render(
      <MenuItem
        icon={
          <span role="img" aria-label="icon">
            🔔
          </span>
        }
        text="Menu Item"
      />
    );

    expect(screen.getByRole("img", { name: "icon" })).toBeInTheDocument();

    expect(screen.getByText("Menu Item")).toBeInTheDocument();
  });

  it("should applies the provided className", () => {
    render(
      <MenuItem
        icon={<span />}
        text="Styled Menu Item"
        className="custom-class"
      />
    );

    const menuItem = screen.getByText("Styled Menu Item").closest("li");
    expect(menuItem).toHaveClass("custom-class");
  });

  it("should supports additional props", async () => {
    const handleClick = jest.fn();

    render(<MenuItem icon={<span />} text="Clickable" onClick={handleClick} />);

    const menuItem = screen.getByText("Clickable").closest("li");

    expect(menuItem).toBeInTheDocument();

    await userEvent.click(menuItem as HTMLElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with default styling", () => {
    render(<MenuItem icon={<span />} text="Default Styled Item" />);

    const menuItem = screen.getByText("Default Styled Item").closest("li");
    expect(menuItem).toHaveClass(
      "group h-24 w-24 flex flex-col text-center max-w-24 flex-flex-col items-center justify-center gap-2 text-sm cursor-pointer my-2"
    );
  });
});
