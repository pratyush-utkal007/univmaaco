import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopBtn = () => {
  const [scrollBtn, setScrollBtn] = useState(false);

  const checkScrollY = () => {
    if (window.scrollY > 120) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollY);
    return () => {
      window.removeEventListener("scroll", checkScrollY);
    };
  }, []);

  return (
    <>
      <Link
        to="home"
        className={`${
          scrollBtn ? "md:bottom-10 bottom-6" : "-bottom-10"
        } shadow-md shadow-black transition-all duration-300 bg-blue-800 hover:bg-orange-500 p-2 fixed md:right-6 right-6  z-50 rounded-full md:text-2xl text-xl text-white cursor-pointer`}
      >
        <GoArrowUp />
      </Link>
    </>
  );
};

export default ScrollToTopBtn;
