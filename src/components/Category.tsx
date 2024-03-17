import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/category.module.scss";

type CategoryPropsType = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  title: string;
  desc: string;
};

export const Category = ({ imgSrc, title, desc }: CategoryPropsType) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt="category" className="contain" />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
