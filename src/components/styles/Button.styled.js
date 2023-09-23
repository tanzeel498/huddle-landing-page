import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) =>
    props.$type === "primary"
      ? css`
          background-color: var(--color-pink);
          color: var(--color-grey-0);
        `
      : css`
          background-color: white;
          color: var(--color-dark-cyan);
        `}

  border-radius: 50px;
  padding: 1rem 4rem;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  font-family: inherit;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

Button.defaultProps = {
  $type: "primary",
};
