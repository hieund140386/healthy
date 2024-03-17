import styles from "../assets/styles/components/exerciseItem.module.scss";
import { ExerciseItemType } from "../types";

type ExerciseItemPropsType = ExerciseItemType;

export const ExerciseItem = ({
  activity,
  assumedCalo,
  duration,
  id,
}: ExerciseItemPropsType) => {
  return (
    <div className={styles.container} key={id}>
      <div>
        <div>・{activity}</div>
        <div>{duration}min</div>
      </div>
      <div>{assumedCalo}Kcal</div>
    </div>
  );
};
