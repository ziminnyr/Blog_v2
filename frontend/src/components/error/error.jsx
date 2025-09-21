import { H2 } from "../h2/h2";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
`;

export const Error = ({ error }) =>
  error && (
    <Div>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </Div>
  );
