import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/noti.module.scss";

type NotiPropsType = HTMLAttributes<HTMLDivElement> & {
  value?: number;
  className?: string;
};

export const Noti = ({
  value = 0,
  className = "",
  ...props
}: NotiPropsType) => {
  if (!value) return null;
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {value > 9 ? <>9+</> : value}
    </div>
  );
};
