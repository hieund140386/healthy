import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/recommendItem.module.scss";

type RecommendItemPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  label: string;
  title: string;
};

export const RecommendItem = ({
  title,
  label,
  className = "",
  ...props
}: RecommendItemPropsType) => {
  const [label1, label2] = label.split(" ");
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div>{label1}</div>
      <div>{label2}</div>
      <hr />
      <div>{title}</div>
    </div>
  );
};
