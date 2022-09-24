import {
  BlogCard,
  BlogContainer,
  BlogGrid,
  BlogHeader,
  CardProfileText,
  CardProfileWrapper,
  CategoryWrapper,
  LoadMore,
} from "./styles";
import BlogOne from "../../Assets/Images/blog-one.png";
import BlogTwo from "../../Assets/Images/blog-two.png";
import BlogThree from "../../Assets/Images/blog-three.png";
import ProfileOne from "../../Assets/Images/blog-profile.png";
import ProfileTwo from "../../Assets/Images/blog-profile-one.png";
import ProfileThree from "../../Assets/Images/blog-profile-two.png";

const cardDetails = [
  {
    key: "1",
    image: BlogOne,
    title: "Pitch termsheet backing validation focus release.",

    profileImg: ProfileOne,
    profileText: "Chandler Bing",
  },
  {
    key: "2",
    image: BlogTwo,
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    profileImg: ProfileTwo,
    profileText: "Rachel Green",
  },
  {
    key: "3",
    image: BlogThree,
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    profileImg: ProfileThree,
    profileText: "Monica Geller",
  },
];

const OurBlog = () => {
  return (
    <BlogContainer>
      <BlogHeader>
        <p>Our Blog</p>
        <h1>Value proposition accelerator product management venture</h1>
      </BlogHeader>
      <BlogGrid>
        {cardDetails.map((card) => (
          <BlogCard key={card.key}>
            <img src={card.image} />
            <CategoryWrapper>
              <p>Category</p>
              <span>November 22, 2021</span>
            </CategoryWrapper>
            <p>{card.title}</p>
            <CardProfileWrapper>
              <img src={card.profileImg} />
              <CardProfileText>{card.profileText}</CardProfileText>
            </CardProfileWrapper>
          </BlogCard>
        ))}
      </BlogGrid>
      <LoadMore>
        <button>Load More</button>
      </LoadMore>
    </BlogContainer>
  );
};

export default OurBlog;
