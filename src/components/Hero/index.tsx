import {
  BackgroungImage,
  BuyTemplateButton,
  Content,
  ExploreButton,
  HeaderLeft,
  HeaderRight,
  HeroBase,
  HeroButtonWrapper,
  HeroContainer,
  HeroHeader,
  HeroHeaderText,
  HeroHeaderTitle,
} from "./styles";
import Ellipse from "../../Assets/Images/background.svg";
import NavBar from "../Nav";
import HeroImage from "../../Assets/Images/hero.svg";
import BaseImage from "../../Assets/Images/herobase.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroungImage>
        <img src={Ellipse} />
      </BackgroungImage>
      <Content>
        <NavBar />
        <HeroHeader>
          <HeaderLeft>
            <HeroHeaderTitle>
              Save time by building fast with Boldo Template{" "}
            </HeroHeaderTitle>
            <HeroHeaderText>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </HeroHeaderText>
            <HeroButtonWrapper>
              <BuyTemplateButton>Buy Template</BuyTemplateButton>
              <ExploreButton>Explore</ExploreButton>
            </HeroButtonWrapper>
          </HeaderLeft>
          <HeaderRight>
            <img src={HeroImage} />
          </HeaderRight>
        </HeroHeader>
        <HeroBase>
          <img src={BaseImage} />
        </HeroBase>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
