import {
  FloatingImage,
  MainImage,
  SecTwoImage,
  SecTwoListText,
  SecTwoMargin,
  ServiceSectionTwoWrapper,
  ServiceSecTitle,
  StartNow,
} from "./styles";
import Image from "../../Assets/Images/sec-two.png";
import CheckIcon from "../../Assets/Images/check.svg";
import Float from "../../Assets/Images/float.svg";

const ServiceSectionTwo = () => {
  return (
    <ServiceSectionTwoWrapper>
      <SecTwoImage>
        <MainImage src={Image} />
        <FloatingImage src={Float} />
      </SecTwoImage>
      <SecTwoMargin>
        <ServiceSecTitle>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </ServiceSecTitle>
        <SecTwoListText>
          <img src={CheckIcon} />
          <p>We connect our customers with the best.</p>
        </SecTwoListText>
        <SecTwoListText>
          <img src={CheckIcon} />
          <p>Advisor success customer launch party.</p>
        </SecTwoListText>
        <SecTwoListText>
          <img src={CheckIcon} />
          <p>Business-to-consumer long tail.</p>
        </SecTwoListText>
        <StartNow>Start now</StartNow>
      </SecTwoMargin>
    </ServiceSectionTwoWrapper>
  );
};

export default ServiceSectionTwo;
