import styled from "styled-components";

export const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
