import { Icon } from "./Icon";
import arrowUpIcon from "../assets/images/arrow-up.svg";
import styles from "../assets/styles/components/scrollToTopButton.module.scss";
import { HTMLAttributes } from "react";

type ScrollToTopPropsType = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const ScrollToTop = ({
  className = "",
  ...props
}: ScrollToTopPropsType) => {
  return (
    <button className={`${styles.container} ${className}`} {...props}>
      <Icon icon={arrowUpIcon} width={14.92} height={8.08} />
    </button>
  );
};
