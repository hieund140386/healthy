import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/icon.module.scss";

type IconPropsType = HTMLAttributes<HTMLDivElement> & {
  icon?: string;
  label?: string;
  width?: number;
  height?: number;
};

export const Icon = ({
  icon = "",
  label = "",
  width = 32,
  height = 32,
  className = "",
  ...props
}: IconPropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {icon && <img src={icon} alt="icon" width={width} height={height} />}
      {label && <p>{label}</p>}
    </div>
  );
};
