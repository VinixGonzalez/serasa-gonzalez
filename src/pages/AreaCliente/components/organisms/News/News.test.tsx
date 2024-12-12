import { render, screen } from "@testing-library/react";
import News from "./News";

const mockNewsList = [
  {
    img: (
      <span role="img" aria-label="news-icon">
        📰
      </span>
    ),
    description: "Primeira notícia",
  },
  {
    img: (
      <span role="img" aria-label="news-icon">
        📢
      </span>
    ),
    description: "Segunda notícia",
  },
];

describe("News Component", () => {
  test("renders without crashing", () => {
    render(<News newsList={mockNewsList} />);
    mockNewsList.forEach((news) => {
      expect(screen.getByText(news.description)).toBeInTheDocument();
    });
  });

  test("renders images correctly", () => {
    render(<News newsList={mockNewsList} />);
    const newsIcons = screen.getAllByRole("img", { name: "news-icon" });
    expect(newsIcons).toHaveLength(mockNewsList.length);
  });

  test("applies styles correctly", () => {
    render(<News newsList={mockNewsList} />);
    const newsElements = screen.getAllByText("Novidade");
    newsElements.forEach((newsElement) => {
      expect(newsElement).toHaveClass("bg-blue-700");
      expect(newsElement).toHaveClass("text-white");
      expect(newsElement).toHaveClass("font-bold");
    });
  });

  test("handles an empty news list", () => {
    render(<News newsList={[]} />);
    expect(screen.queryByText("Novidade")).not.toBeInTheDocument();
  });
});
