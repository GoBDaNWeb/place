import { LogoIcon } from "components/ui/LogoIcon";
import styles from "./styles.module.sass";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "components/ui/Button";
import { BurgerIcon } from "components/ui/BurgerIcon";
import { observer } from "mobx-react-lite";
import { useStores } from "shared/context";
const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { menu } = useStores();

  const handleOpenMenu = () => {
    menu.handleOpenMenu();
  };

  const btnColorClass = menu.menuIsOpen ? styles.darkBtn : "";
  const isViewClass = isInView ? styles.isInView : "";
  const headerClass = `${styles.header} ${isViewClass} container`;

  return (
    <header ref={ref} className={headerClass}>
      <LogoIcon />
      <Button onClick={handleOpenMenu} size="small" className={btnColorClass}>
        {menu.menuIsOpen ? "Закрыть" : "Меню"} <BurgerIcon />
      </Button>
    </header>
  );
};

export default observer(Header);
