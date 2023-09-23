import styled from "styled-components";
import { Container } from "./styles/Container.styled";
import { Box } from "./styles/Box.styled";
import Feature from "./Feature";

const StyledFeatures = styled.section`
  margin: 10rem 0;
`;

const FeatureBox = styled(Box)`
  gap: 10rem;
`;

const content = [
  {
    id: 1,
    title: "grow together",
    body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with feedback form.",
    image: "./images/illustration-grow-together.svg",
  },
  {
    id: 2,
    title: "Flowing Conversations",
    body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just in-time loading for a more natural flow.",
    image: "./images/illustration-flowing-conversation.svg",
  },
  {
    id: 3,
    title: "Your Users",
    body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting imediately.",
    image: "./images/illustration-your-users.svg",
  },
];

function Features() {
  return (
    <StyledFeatures>
      <Container>
        {content.map((item) => (
          <Feature item={item} key={item.id} />
        ))}
      </Container>
    </StyledFeatures>
  );
}

export default Features;
