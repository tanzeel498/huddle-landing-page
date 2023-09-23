import styled from "styled-components";
import { Box } from "./styles/Box.styled";
import { VerticalBox } from "./styles/VerticalBox.styled";
import { Heading } from "./styles/Heading.styled";

const FeatureContainer = styled.div`
  padding: 4rem 3.5rem 4rem 10rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  margin: 3rem 0;

  @media (max-width: 768px) {
    padding: 4rem;
  }
`;

const P = styled.p`
  color: var(--color-grayish-blue);
`;

const Img = styled.img`
  width: 35%;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Feature({ item }) {
  return (
    <FeatureContainer>
      <Box>
        {item.id % 2 === 0 && <Img src={item.image} alt="" />}
        <VerticalBox>
          <Heading as="h2">{item.title}</Heading>
          <P>{item.body}</P>
        </VerticalBox>
        {item.id % 2 === 1 && <Img src={item.image} alt="" />}
      </Box>
    </FeatureContainer>
  );
}

export default Feature;
