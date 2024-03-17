import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/mealsList.module.scss";
import { MealItem } from "./MealItem";
import { Meal } from "../types";

type MealsListPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  mealsList: Array<Meal>;
};

export const MealsList = ({
  mealsList,
  className = "",
  ...props
}: MealsListPropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {mealsList.map(({ id, img, date, title }) => (
        <MealItem key={id} imgSrc={img} date={date} label={title} />
      ))}
    </div>
  );
};
