import { useSwiperSlide } from "swiper/react";

import styles from "./styles.module.sass";

const SectionOneText = () => {
  const slide = useSwiperSlide();

  const isActiveClass = slide?.isActive ? styles.active : "";

  return (
    <p className={`${styles.sectionOneText} ${isActiveClass}`}>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>Место,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>где</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>роскошь</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>и</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>удовольствие</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>соединяются</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>воедино</span>
      </span>
    </p>
  );
};

export default SectionOneText;
