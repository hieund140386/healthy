import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/catagoriesList.module.scss";
import { Category } from "./Category";
import { CategoryPropsType } from "../types";

type CatagoriesListPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  catagoriesList: Array<CategoryPropsType>;
};

export const CatagoriesList = ({
  catagoriesList,
  className = "",
  ...props
}: CatagoriesListPropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {catagoriesList.map(({ imgSrc, title, desc }, idx) => (
        <Category key={idx} imgSrc={imgSrc} title={title} desc={desc} />
      ))}
    </div>
  );
};
