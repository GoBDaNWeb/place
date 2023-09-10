import { FC, PropsWithChildren } from "react";

import { IButtonProps } from "../types/button.interface";

import styles from "./styles.module.sass";

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  variable = "primary",
  onClick,
  size,
  className,
  children,
}) => {
  const btnClass = `${styles.button} ${styles[variable]} ${styles[size]} ${className}`;

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
