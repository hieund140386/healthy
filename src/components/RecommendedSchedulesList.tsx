import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/recommendedSchedulesList.module.scss";
import { RecommendedSchedule } from "./RecommendedSchedule";
import { RecommendedScheduleType } from "../types";

type RecommendedSchedulesListPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  recommendedScheduleList: Array<RecommendedScheduleType>;
};

export const RecommendedSchedulesList = ({
  className = "",
  recommendedScheduleList,
  ...props
}: RecommendedSchedulesListPropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {recommendedScheduleList.map(
        ({ id, imgSrc, content, dateTime, tags }) => (
          <RecommendedSchedule
            key={id}
            imgSrc={imgSrc}
            content={content}
            dateTime={dateTime}
            tags={tags}
          />
        )
      )}
    </div>
  );
};
