import bg from "../../images/bg.jpg";

import styles from "./styles.module.sass";

const SectionTwoMobile = () => {
  return (
    <div className={`${styles.section} container `}>
      <div className={styles.top}>
        <h5>
          <span>Концептуальный </span>
          <span>Cocktail Club Place</span>
        </h5>
      </div>
      <div className={styles.bottom}>
        <p>
          Уникальное место, где в чарующей атмосфере сочетаются высокий уровень
          сервиса, изысканные коктейли и яркие энергичные выступления. Здесь
          каждый вечер становится незабываемым шоу, где звуки, свет и настроение
          поражают воображение.
        </p>
        <div className={styles.imageWrapper}>
          <img src={bg} alt="section-2" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwoMobile;
