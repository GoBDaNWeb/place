import { useRef } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

import bg from "../../images/bg.jpg";

import styles from "./styles.module.sass";

import { Button } from "components/ui/Button";
import { ArrowDownIcon } from "components/ui/ArrowDownIcon";

const SectionTwo = () => {
  const ref = useRef(null);
  const slide = useSwiperSlide();

  const swiper = useSwiper();

  const handleNextSection = () => swiper?.slideNext();

  const activeClass = slide?.isActive ? styles.active : "";
  const secondaryScreenClass = swiper?.activeIndex >= 2 ? styles.small : "";

  return (
    <section
      className={`${styles.section} ${secondaryScreenClass} ${activeClass}`}
    >
      <div className={styles.lineLeft} />
      <div className={styles.imageWrapper}>
        <img ref={ref} src={bg} className={activeClass} alt="section-2" />
      </div>
      <div className={styles.lineRight} />
      <span className={styles.wordWrapper}>
        <span className={styles.word}>conception</span>
      </span>
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

export default SectionTwo;
