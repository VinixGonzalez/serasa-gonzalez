import { render, screen } from "@testing-library/react";
import Card from "./Card";

import { FaUser } from "react-icons/fa";

describe("Card Component", () => {
  test("renders the card with title and subtitle", () => {
    render(<Card title="Card Title" subtitle="Card Subtitle" />);
    const titleElement = screen.getByText(/card title/i);
    const subtitleElement = screen.getByText(/card subtitle/i);
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders the card with an icon", () => {
    render(<Card title="Card Title" icon={<FaUser />} />);
    const iconElement = screen.getByTestId("icon-container");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders the card with content", () => {
    render(<Card title="Card Title" content={<p>Card Content</p>} />);
    const contentElement = screen.getByText(/card content/i);
    expect(contentElement).toBeInTheDocument();
  });

  test("does not render subtitle when not provided", () => {
    render(<Card title="Card Title" />);
    const subtitleElement = screen.queryByText(/card subtitle/i);
    expect(subtitleElement).not.toBeInTheDocument();
  });

  test("renders the card with the provided title", () => {
    render(<Card title="Custom Title" />);
    const titleElement = screen.getByText(/custom title/i);
    expect(titleElement).toBeInTheDocument();
  });
});
