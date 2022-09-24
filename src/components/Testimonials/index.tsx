import {
  CardProfileText,
  CardProfileWrapper,
  IconWrapper,
  LeftArrowIcon,
  RightArrowIcon,
  TestimonialsCard,
  TestimonialsContainer,
  TestimonialsGrid,
  TestimonialsHeader,
} from "./styles";
import RightIcon from "../../Assets/Images/right-arrow.svg";
import LeftIcon from "../../Assets/Images/left-arrow.svg";
import ProfileOne from "../../Assets/Images/profile-one.png";
import ProfileTwo from "../../Assets/Images/profile-two.png";
import ProfileThree from "../../Assets/Images/profile-three.png";

const cardDetails = [
  {
    key: 1,
    image: ProfileOne,
    header:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    title: "Albus Dumbledore",
    text: "Manager @ Howarts",
  },
  {
    key: 2,
    image: ProfileTwo,
    header:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    title: "Severus Snape",
    text: "Manager @ Slytherin",
  },
  {
    key: 3,
    image: ProfileThree,
    header:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    title: "Harry Potter",
    text: "Team Leader @ Gryffindor",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsHeader>
        <h1>An enterprise template to ramp up your company website</h1>
        <IconWrapper>
          <LeftArrowIcon src={LeftIcon} />
          <RightArrowIcon src={RightIcon} />
        </IconWrapper>
      </TestimonialsHeader>
      <TestimonialsGrid>
        {cardDetails.map((card) => (
          <TestimonialsCard key={card.key}>
            <h1>{card.header}</h1>
            <CardProfileWrapper>
              <img src={card.image} />
              <CardProfileText>
                <h1>{card.title}</h1>
                <p>{card.text}</p>
              </CardProfileText>
            </CardProfileWrapper>
          </TestimonialsCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
