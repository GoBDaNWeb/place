import { observer } from "mobx-react-lite";
import { useStores } from "shared/context";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./styles.module.sass";
import "react-lazy-load-image-component/src/effects/blur.css";

import menu from "../images/menu.jpg";
import { Button } from "components/ui/Button";
import { InstagramIcon } from "components/ui/InstagramIcon";
import { TelegramIcon } from "components/ui/TelegramIcon";
import { WhatsAppIcon } from "components/ui/WhatsAppIcon";
const Menu = () => {
  const { menu: menuStore } = useStores();

  const isOpen = menuStore.menuIsOpen ? styles.open : "";
  const menuClass = `${styles.menu} ${isOpen}`;

  return (
    <div className={menuClass}>
      <div className={styles.leftPart}>
        <img src={menu} alt="menu" loading="lazy" />
      </div>
      <div className={styles.rightPart}>
        <ul>
          <li>
            <a href="#">conception</a>
          </li>
          <li>
            <a href="#">Afisha</a>
          </li>
          <li>
            <a href="#">Cocktail card</a>
          </li>
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">Interior</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <div className={styles.btns}>
          <Button size="large" variable="secondary">
            Бронировать
          </Button>
          <Button size="large" variable="secondary">
            +7 (900) 003-90-44
          </Button>
          <div className={styles.socialBtns}>
            <Button size="small" variable="roundedSecondary">
              <InstagramIcon />
            </Button>
            <Button size="small" variable="roundedSecondary">
              <TelegramIcon />
            </Button>
            <Button size="small" variable="roundedSecondary">
              <WhatsAppIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Menu);
