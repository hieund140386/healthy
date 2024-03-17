import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/button.module.scss";

type ButtonType = HTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const Button = ({
  label = "記録をもっと見る",
  ...props
}: ButtonType) => {
  return (
    <button className={`${styles.container} ${props.className}`} {...props}>
      {label}
    </button>
  );
};
