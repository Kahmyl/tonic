import {
  ExplorePage,
  ServiceCard,
  ServiceContainer,
  ServiceGrid,
  ServiceHeader,
} from "./styles";
import ArrowRight from "../../Assets/Images/arrow-right.svg";
import ServiceOne from "../../Assets/Images/service-one.png";
import ServiceTwo from "../../Assets/Images/service-two.png";
import ServiceThree from "../../Assets/Images/service-three.png";
import ServiceSectionTwo from "./section-two";
import ServiceSectionThree from "./section-three";

const cardDetails = [
  {
    key: "1",
    image: ServiceOne,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
  },
  {
    key: "2",
    image: ServiceTwo,
    title: "Even cooler feature",
    text: "Learning curve network effects return on investment.",
  },
  {
    key: "3",
    image: ServiceThree,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
  },
];

const Service = () => {
  return (
    <ServiceContainer>
      <ServiceHeader>
        <p>Our Service</p>
        <h1>Handshake infographic mass market crowdfunding iteration.</h1>
      </ServiceHeader>
      <ServiceGrid>
        {cardDetails.map((card) => (
          <ServiceCard key={card.key}>
            <img src={card.image} />
            <h1>{card.title}</h1>
            <p>{card.text}</p>
            <ExplorePage>
              <span>Explore Page</span>
              <div>
                <img src={ArrowRight} />
              </div>
            </ExplorePage>
          </ServiceCard>
        ))}
      </ServiceGrid>
      <ServiceSectionTwo />
      <ServiceSectionThree />
    </ServiceContainer>
  );
};

export default Service;
