import { useSwiperSlide } from "swiper/react";

import barman from "../../images/barman.png";

import styles from "./styles.module.sass";

import { QuotsIcon } from "components/ui/QuotsIcon";
import SectionFourText from "../SectionFourText";

const SectionFour = () => {
  const swiper = useSwiperSlide();
  const isActiveClass = swiper?.isActive ? styles.active : "";

  return (
    <section className={`${styles.section} ${isActiveClass}`}>
      <div className={styles.barmanWrapper}>
        <div className={styles.quotsWrapper}>
          <QuotsIcon />
        </div>
        <img src={barman} alt="barman" loading="lazy" />
        <SectionFourText />
        <div className={styles.barmanName}>
          <h4>Artem Ten</h4>
          <h6>Главный бармен</h6>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
