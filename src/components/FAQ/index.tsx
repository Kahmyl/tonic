import {
  DropDown,
  DropWrapper,
  FaqContainer,
  FaqWrapper,
  ImageWrapper,
} from "./styled";
import Image from "../../Assets/Images/Image.png";
import Drop from "../../Assets/Images/drop-icon.svg";

const Faq = () => {
  return (
    <FaqContainer>
      <ImageWrapper>
        <img src={Image} />
      </ImageWrapper>
      <FaqWrapper>
        <h1>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h1>
        <DropWrapper>
          <DropDown>
            <span>We connect our customers with the best?</span>
            <div>
              <img src={Drop} />
            </div>
          </DropDown>
          <DropDown>
            <span>Android research & development rockstar? </span>
            <div>
              <img src={Drop} />
            </div>
          </DropDown>
        </DropWrapper>
      </FaqWrapper>
    </FaqContainer>
  );
};

export default Faq;
