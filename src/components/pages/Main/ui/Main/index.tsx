import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";

import useWindowSize from "shared/hooks/useWindowSize";

import styles from "./styles.module.sass";

import SectionOne from "../SectionOne";
import Carousel from "../Carousel";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import SectionFour from "../SectionFour";
import SectionTwoMobile from "../SectionTwoMobile";

const Main = () => {
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 1024) {
      if (document.body.className.includes("noScrollDisable")) {
        return;
      }
      document.body.classList.add("noScroll");
      setTimeout(() => {
        document.body.classList.remove("noScroll");
        document.body.classList.add("noScrollDisable");
      }, 2400);
    }
    if (width > 1024) {
      document.body.classList.remove("noScrollDisable");
    }
  }, [width]);

  return (
    <div className={styles.main}>
      {width <= 1024 ? (
        <>
          <SectionOne />
          <SectionTwo />
          <SectionTwoMobile />
          <SectionFour />
        </>
      ) : (
        <Carousel>
          <SwiperSlide>
            <SectionOne />
          </SwiperSlide>
          <SwiperSlide>
            <SectionTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SectionThree />
          </SwiperSlide>
          <SwiperSlide>
            <SectionFour />
          </SwiperSlide>
        </Carousel>
      )}
    </div>
  );
};

export default Main;
