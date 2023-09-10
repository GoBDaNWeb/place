import { useSwiperSlide } from "swiper/react";

import styles from "./styles.module.sass";

const SectionFourText = () => {
  const swiper = useSwiperSlide();
  const isActiveClass = swiper?.isActive ? styles.active : "";

  return (
    <p className={`${isActiveClass} ${styles.sectionFourText}`}>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>Как</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>бармен,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>я</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>стараюсь</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>создавать</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>не</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>только</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>коктейли,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>но</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>и</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>волшебные</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>вечера,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>где</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>каждый</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>глоток</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>становится</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>приключением,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>а</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>каждый</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>разговор</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>-</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>прекрасной</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>историей</span>
      </span>
    </p>
  );
};

export default SectionFourText;
