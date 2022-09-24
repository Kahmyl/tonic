import Faq from "../components/FAQ";
import Hero from "../components/Hero";
import OurBlog from "../components/OurBlog";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Testimonials />
      <Faq />
      <OurBlog />
    </div>
  );
};

export default Home;
