import styled from "styled-components";
import { Container } from "./styles/Container.styled";
import { Box } from "./styles/Box.styled";
import { Button } from "./styles/Button.styled";
import { Heading } from "./styles/Heading.styled";
import { VerticalBox } from "./styles/VerticalBox.styled";

const StyledHeader = styled.header`
  background-color: var(--color-pale-cyan);
  background-image: url("./images/bg-hero-desktop.svg");
  object-fit: cover;
  padding: 40px 0;
`;

const StyledImage = styled.img`
  width: 51%;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Box as="nav">
            <img src="./images/logo.svg" alt="logo" />
            <Button $type="secondary">Try it Free</Button>
          </Box>
          <Box style={{ marginTop: "5rem" }}>
            <VerticalBox $type="vertical">
              <Heading as="h1">Build the community your fans will love</Heading>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <Button>Get Started For Free</Button>
            </VerticalBox>
            <StyledImage
              src="./images/illustration-mockups.svg"
              alt="header-img"
            />
          </Box>
        </Container>
      </StyledHeader>
    </>
  );
}

export default Header;
