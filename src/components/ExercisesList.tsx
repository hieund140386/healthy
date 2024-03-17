import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/exercisesList.module.scss";
import { ExercisesListDataType } from "../types";
import { ExerciseItem } from "./ExerciseItem";
import moment from "moment";

type ExercisesListPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  data: ExercisesListDataType;
};

export const ExercisesList = ({
  data,
  className = "",
  ...props
}: ExercisesListPropsType) => {
  if (!data?.data?.length) return null;

  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={styles.label}>
        <h3>MY EXERCISE</h3>
        <span>
          {moment(new Date(data.dateTime ?? "")).format("YYYY.MM.DD")}
        </span>
      </div>
      <div className={styles.container}>
        {data.data.map((item) => (
          <ExerciseItem
            key={item.id}
            id={item.id}
            duration={item.duration}
            activity={item.activity}
            assumedCalo={item.assumedCalo}
          />
        ))}
      </div>
    </div>
  );
};
