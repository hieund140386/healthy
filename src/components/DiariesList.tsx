import { HTMLAttributes } from "react";
import styles from "../assets/styles/components/diariesList.module.scss";
import { DiaryItem } from "./DiaryItem";
import { DiaryType } from "../types";

type DiariesListPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  diariesList: Array<DiaryType>;
  title?: string;
};

export const DiariesList = ({
  diariesList,
  className = "",
  title = "",
  ...props
}: DiariesListPropsType) => {
  return (
    <div className={className}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={`${styles.container}`} {...props}>
        {diariesList.map(({ id, title, content, dateTime }) => (
          <DiaryItem
            key={id}
            title={title}
            content={content}
            dateTime={dateTime}
          />
        ))}
      </div>
    </div>
  );
};
