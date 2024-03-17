import styles from "../assets/styles/components/recommendedList.module.scss";
import { recommendedList } from "../data/recommendedList";
import { RecommendItem } from "./RecommendItem";

export const RecommendedList = () => {
  return (
    <div className={styles.container}>
      {recommendedList.map(({ title, label }, idx) => (
        <RecommendItem key={idx} label={label} title={title} />
      ))}
    </div>
  );
};
