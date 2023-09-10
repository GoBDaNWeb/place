import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.sass";

import { Header } from "components/layout/Header";
import { Menu } from "components/layout/Menu";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
