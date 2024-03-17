import dishImg from "../assets/images/sanwich_img.svg";
import moment from "moment";
import styles from "../assets/styles/components/mealItem.module.scss";

type MealItemType = {
  imgSrc?: string;
  date?: string;
  label?: string;
};

export const MealItem = ({
  imgSrc = dishImg,
  date = "2021.05.21",
  label = "Morning",
}: MealItemType) => {
  return (
    <div className={styles.container}>
      <img
        src={imgSrc}
        alt="dish"
        width={234}
        height={234}
        className="contain"
      />
      <div className={styles.label}>
        <span>{moment(new Date(date)).format("MM.DD.")}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};
