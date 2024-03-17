import { HTMLAttributes } from "react";

export type CardPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  imgSrc: string;
  dateTime: string | Date;
  content: string;
  tags: Array<string>;
};

export type MealType = "Morning" | "Lunch" | "Dinner" | "Snack";

export type FilterButtonsType = {
  title: MealType;
};

export type HealthOverviewDataType = {
  chartData: LineChartDataType;
  currentStatus: { percentage: number; dateTime: string | Date };
};

export type DiaryType = {
  id: number;
  dateTime: string | Date;
  title: string;
  content: string;
};

export type Meal = {
  id: number;
  date: string;
  title: MealType;
  img: string;
};

export type RecommendedListType = {
  title: string;
  label: string;
};

export type CategoryPropsType = {
  imgSrc: string;
  title: string;
  desc: string;
};

export type RecommendedScheduleType = {
  id: number;
  imgSrc: string;
  dateTime: string | Date;
  content: string;
  tags: Array<string>;
};

export type ResponseType<T> = {
  message?: string;
  data: T;
  isOk: boolean;
};

export type TimePointType = "year" | "month" | "week" | "day";

export type ExerciseItemType = {
  id: number;
  activity: string;
  assumedCalo: number;
  duration: number;
};

export type ExercisesListDataType = {
  dateTime: string | Date;
  data: Array<ExerciseItemType>;
};

export type LineChartDataType = {
  dateTime: string | Date;
  labels: Array<string>;
  datasets: Array<{
    data: Array<number>;
  }>;
};
