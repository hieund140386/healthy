import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/diaryItem.module.scss";
import moment from "moment";

type DiaryItemPropsType = HTMLAttributes<HTMLDivElement> & {
  dateTime: string | Date;
  title: string;
  content: string;
};

export const DiaryItem = ({ dateTime, title, content }: DiaryItemPropsType) => {
  return (
    <div className={styles.container}>
      <div>
        <div>{moment(new Date(dateTime)).format("YYYY.MM.DD")}</div>
        <div>{moment(new Date(dateTime)).format("HH:mm")}</div>
      </div>
      <div>
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};
