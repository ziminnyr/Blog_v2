import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
  height: 40px;
  width: ${({ width = "100%" }) => width};
  padding: 10px;
  margin: 0 0 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
`;
