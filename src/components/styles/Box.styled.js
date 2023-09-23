import styled, { css } from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  margin: 20px 0;

  @media (max-width: 768px) {
    ${(props) =>
      props.as
        ? css`
            & * {
              transform: scale(0.75);
            }
          `
        : css`
            flex-direction: column;
          `}
    gap: 3rem;
  }

  & ul {
    flex: 1;
  }
`;
