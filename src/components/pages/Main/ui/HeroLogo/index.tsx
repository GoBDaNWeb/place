import styles from "./styles.module.sass";

import Logo from "../Logo";

const HeroLogo = () => {
  return (
    <div className={`${styles.heroLogo} container`}>
      <Logo />
    </div>
  );
};

export default HeroLogo;
