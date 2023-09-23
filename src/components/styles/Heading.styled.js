import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2.5rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
    `}
  
  text-transform: capitalize;
  font-weight: 600;
`;
