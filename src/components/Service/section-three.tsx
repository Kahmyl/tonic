import {
  FloatingImage,
  MainImage,
  SecThreeImage,
  SecThreeListDark,
  SecThreeListLight,
  SecThreeMargin,
  ServiceSectionThreeWrapper,
  ServiceSecTitle,
} from "./styles";
import Image from "../../Assets/Images/sec-three.png";
import FeatherIcon from "../../Assets/Images/starfeather.svg";
import EyeIcon from "../../Assets/Images/eye.svg";
import SunIcon from "../../Assets/Images/sun.svg";
import Float from "../../Assets/Images/float-two.svg";

const ServiceSectionThree = () => {
  return (
    <ServiceSectionThreeWrapper>
      <SecThreeMargin>
        <ServiceSecTitle>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </ServiceSecTitle>
        <SecThreeListDark>
          <img src={FeatherIcon} />
          <span>We connect our customers with the best.</span>
        </SecThreeListDark>
        <SecThreeListLight>
          <img src={EyeIcon} />
          <span>Advisor success customer launch party.</span>
        </SecThreeListLight>
        <SecThreeListLight>
          <img src={SunIcon} />
          <span>Business-to-consumer long tail.</span>
        </SecThreeListLight>
      </SecThreeMargin>
      <SecThreeImage>
        <MainImage src={Image} />
        <FloatingImage src={Float} />
      </SecThreeImage>
    </ServiceSectionThreeWrapper>
  );
};

export default ServiceSectionThree;
