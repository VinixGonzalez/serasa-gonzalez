import { render, screen } from "@testing-library/react";
import FastMenu from "./FastMenu";

const menuItemsText = [
  "Negociar dívidas",
  "Pedir cartão de crédito",
  "Consultas ao meu CPF",
  "Pedir empréstimo",
  "Bloqueio do Score",
  "Antecioação do FGTS",
];

describe("FastMenu Component", () => {
  test("renders all menu items with correct text", () => {
    render(<FastMenu />);
    menuItemsText.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test("renders all menu icons", () => {
    render(<FastMenu />);
    const icons = screen.getAllByRole("listitem");
    expect(icons).toHaveLength(6);
  });
});
