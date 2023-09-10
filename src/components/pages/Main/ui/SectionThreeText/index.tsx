import { useSwiper } from "swiper/react";

import styles from "./styles.module.sass";

const SectionThreeText = () => {
  const swiper = useSwiper();

  const activeClass = swiper?.activeIndex >= 2 ? styles.active : "";
  return (
    <p className={`${activeClass} ${styles.sectionThreeText}`}>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>Уникальное</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>место,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>где</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>в</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>чарующей</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>атмосфере</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>сочетаются</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>высокий</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>уровень</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>сервиса,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>изысканные</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>коктейли</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>и</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>яркие</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>энергичные</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>выступления.</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>Здесь</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>каждый</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>вечер</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>становится</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>незабываемым</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>шоу,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>где</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>звуки,</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>и</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>настроение</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>поражают</span>
      </span>
      <span className={styles.wordWrapper}>
        <span className={styles.word}>воображение.</span>
      </span>
    </p>
  );
};

export default SectionThreeText;
