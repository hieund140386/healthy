import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/filterButtonsList.module.scss";
import { FilterButton } from "./FilterButton";
import { FilterButtonsType, MealType } from "../types";

type FilterButtonsListPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  filterButtonsList: Array<FilterButtonsType>;
  setMealTypeHandler: (mealType: MealType) => void;
};

export const FilterButtonsList = ({
  filterButtonsList,
  setMealTypeHandler,
  className = "",
  ...props
}: FilterButtonsListPropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {filterButtonsList.map((item) => (
        <FilterButton
          key={item.title}
          title={item.title}
          onClickHandler={() => setMealTypeHandler(item.title)}
        />
      ))}
    </div>
  );
};
