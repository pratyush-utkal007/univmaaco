import Navbar from "../components/Navbar";
import "../App.css";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";
import Reviews from "../components/Reviews";

import SalesforcePage from "../components/SalesforcePage";
import SalesforceTabs from "../components/SalesforceTabs";
// import ScrollToTopBtn from "../components/ScrollToTopBtn";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <ScrollToTopBtn /> */}
        <HeroSection2 />
        <SalesforcePage />
        <SalesforceTabs />
        <ServiceSection />
        {/* <WhyChooseUs /> */}
        {/* <Reviews /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
