import bodyRecordImg from "../assets/images/body-record.svg";
import myExerciseImg from "../assets/images/my-exercise.svg";
import myDiaryImg from "../assets/images/my-diary.svg";
import { CategoryPropsType } from "../types";

export const categoriesList: Array<CategoryPropsType> = [
  {
    imgSrc: bodyRecordImg,
    title: "body record",
    desc: "自分のカラダの記録",
  },
  {
    imgSrc: myExerciseImg,
    title: "my exercise",
    desc: "自分の運動の記録",
  },
  {
    imgSrc: myDiaryImg,
    title: "my diary",
    desc: "自分の日記",
  },
];
