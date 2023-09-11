import { useSwiperSlide } from "swiper/react";

import styles from "./styles.module.sass";

import SectionThreeText from "../SectionThreeText";

const SectionThree = () => {
  const slide = useSwiperSlide();

  const activeClass = slide?.isActive || slide?.isPrev ? styles.active : "";

  return (
    <section className={`${styles.section} ${activeClass}`}>
      <p className={styles.mainText}>
        <span className={styles.wordWrapper}>
          <span className={styles.word}>Концептуальный</span>
        </span>
        <span className={styles.wordWrapper}>
          <span className={styles.word}>Cocktail Club Place</span>
        </span>
      </p>
      <SectionThreeText />
    </section>
  );
};

export default SectionThree;
