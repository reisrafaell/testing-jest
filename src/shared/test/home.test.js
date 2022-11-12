import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../pages";

describe("Casos de Testes fase da vida", () => {
  test("result", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Fases da vida humana")).toBeTruthy();
  });

  test("Calcular Infância ", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    screen.debug();
    userEvent.type(input, "5");
    userEvent.click(button);
    screen.debug();

    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Calcular Adolescência", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    screen.debug();
    userEvent.type(input, "17");
    userEvent.click(button);
    screen.debug();

    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Calcular Adulto", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    screen.debug();
    userEvent.type(input, "35");
    userEvent.click(button);
    screen.debug();

    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Calcular Velhice", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    screen.debug();
    userEvent.type(input, "70");
    userEvent.click(button);
    screen.debug();

    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });
  test("Nenhum Valor Informado", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    screen.debug();
    userEvent.type(input, " ");
    userEvent.click(button);
    screen.debug();

    expect(getByText("Resultado: Informe um valor")).toBeTruthy();
  });
});
