import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useSwiper, useSwiperSlide } from "swiper/react";

import useChangeColor from "shared/hooks/useChangeColor";

import styles from "./styles.module.sass";

import HeroLogo from "../HeroLogo";
import { Button } from "components/ui/Button";
import { ArrowDownIcon } from "components/ui/ArrowDownIcon";
import SectionOneText from "../SectionOneText";

const SectionOne = () => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(true);
  const [delay, setDelay] = useState(2000);

  const { bgColor } = useChangeColor();
  const swiper = useSwiper();
  const slide = useSwiperSlide();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleHover = (part: "left" | "right") => {
    if (part === "left") {
      setHoveredLeft(true);
      setHoveredRight(false);
    } else {
      setHoveredLeft(false);
      setHoveredRight(true);
    }
  };

  const handleNextSection = () => swiper?.slideNext();

  useEffect(() => {
    setTimeout(() => {
      setDelay(0);
    }, 2000);
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.mousewheel?.disable();
      setTimeout(() => {
        swiper.mousewheel?.enable();
      }, 2400);
    }
  }, [swiper]);

  const isViewClass = isInView ? styles.isInView : "";
  const isActiveClass = slide?.isActive ? styles.active : "";

  const leftImageWrapperClass = `${styles.imgWrapper} ${
    hoveredLeft ? styles.active : ""
  } ${isViewClass}`;
  const rightImageWrapperClass = `${styles.imgWrapper} ${
    hoveredRight ? styles.active : ""
  } ${isViewClass}`;

  return (
    <section ref={ref} className={`${styles.section} ${isActiveClass}`}>
      <HeroLogo />
      <div style={{ background: bgColor }} className={styles.backDrop} />

      <div
        onMouseEnter={() => handleHover("left")}
        onClick={() => handleHover("left")}
        className={`${styles.leftPart} ${
          delay === 2000 ? styles.disabled : ""
        }`}
      >
        <div
          style={{ transitionDelay: `${delay}ms` }}
          className={leftImageWrapperClass}
        />
        <SectionOneText />
      </div>
      <div
        onMouseEnter={() => handleHover("right")}
        onClick={() => handleHover("right")}
        className={`${styles.rightPart} ${
          delay === 2000 ? styles.disabled : ""
        }`}
      >
        <div
          style={{ transitionDelay: `${delay}ms` }}
          className={rightImageWrapperClass}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button
          size="small"
          variable="roundedPrimary"
          onClick={handleNextSection}
        >
          <ArrowDownIcon />
        </Button>
      </div>
    </section>
  );
};

export default SectionOne;
