import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/recommendedSchedule.module.scss";
import moment from "moment";
import { RecommendedScheduleType } from "../types";

export type RecommendedSchedulePropsType = HTMLAttributes<HTMLDivElement> &
  Omit<RecommendedScheduleType, "id"> & {
    id?: number;
  };

export const RecommendedSchedule = ({
  imgSrc,
  dateTime,
  content,
  tags,
  className = "",
  ...props
}: RecommendedSchedulePropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <img src={imgSrc} alt="recommended schedule img" />
      <div>{moment(new Date(dateTime)).format("YYYY.MM.DD HH:mm")}</div>
      <div>{content}</div>
      <div>{tags.join(" ")}</div>
    </div>
  );
};
