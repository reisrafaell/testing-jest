import React, { useState } from "react";

import * as S from "./styles";
export const Home = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = parseInt(value);
    if (value) {
      if (newValue < 11) {
        setResult("Infância");
      } else if (newValue < 20) {
        setResult("Adolescência");
      } else if (newValue < 65) {
        setResult("Adulto");
      } else if (newValue > 65) {
        setResult("Velhice");
      } else {
        setResult("Insira um valor Válido");
      }
    } else {
      setResult("Informe um valor");
    }
  };
  return (
    <S.Section>
      <S.Container>
        <S.Text as="h1">Fases da vida humana</S.Text>
        <S.Text as="h3">
          Resultado:<span> {result}</span>
        </S.Text>
        <S.Form onSubmit={handleSubmit}>
          <S.Label htmlFor="idade">Informe sua idade para calcular:</S.Label>

          <S.Input
            placeholder="Idade"
            id="idade"
            type="number"
            min="0"
            onChange={(e) => setValue(e.target.value)}
          />

          <S.Button>Calcular</S.Button>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};
