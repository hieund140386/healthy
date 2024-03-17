import { DiaryType } from "../types";

export const diariesList: Array<DiaryType> = Array.from(
  { length: 20 },
  (_, i) => {
    return {
      id: i + 1,
      dateTime: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストトテキストテキストテキストテキストテキストテキストテキスト",
    };
  }
);
