import styled from "styled-components";
import { Box } from "./styles/Box.styled";
import { Container } from "./styles/Container.styled";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const StyledFooter = styled.div`
  background-color: var(--color-dark-cyan);
  color: var(--color-pale-cyan);
  padding: 8rem 0 4rem;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 1.2rem;
    }
  }

  p {
    text-align: right;
  }

  img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(290deg)
      brightness(104%) contrast(104%);
  }

  @media (max-width: 768px) {
    text-align: center;
    p {
      text-align: center;
    }

    ul {
      padding: 0;
    }
  }
`;

const Icons = styled.ul`
  display: flex;
  gap: 1.5rem;
  li a {
    color: white;
    border: 2px solid white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.svg" alt="" />
        <Box>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, perspiciatis eaque vero reiciendis id non hic
            </li>
            <li>+1-532-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <Icons>
            <li>
              <a href="www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="www.instagram.com">
                <FaInstagram />
              </a>
            </li>
          </Icons>
        </Box>
        <p>
          &copy; Copyright {new Date().getFullYear()} Huddle. All rights
          reserved.
        </p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
