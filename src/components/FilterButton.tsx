import forkAndKnifeIcon from "../assets/images/icon_knife.svg";
import snackIcon from "../assets/images/icon_cup.svg";
import hexIcon from "../assets/images/hex_img.svg";
import { ButtonHTMLAttributes, useMemo } from "react";
import styles from "../assets/styles/components/filterButton.module.scss";
import { MealType } from "../types";

type FilterButtonProps = {
  title: MealType;
  onClickHandler: (mealType: MealType) => void;
  className?: string;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export const FilterButton = ({
  title,
  onClickHandler,
  className,
  ...props
}: FilterButtonProps) => {
  const imgSrc = title !== "Snack" ? forkAndKnifeIcon : snackIcon;
  const label = useMemo(() => {
    return title;
  }, [title]);

  return (
    <button
      {...props}
      className={`${styles.container} ${className ?? ""}`}
      type="button"
      onClick={() => onClickHandler(title)}
    >
      <img src={hexIcon} alt={label} />
      <div className={styles.content}>
        <img src={imgSrc} alt={label} />
        <p className={styles.label}>{label}</p>
      </div>
    </button>
  );
};
