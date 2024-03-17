import { ExerciseItemType } from "../types";

export const exercisesList: Array<ExerciseItemType> = Array.from(
  { length: 20 },
  (_, idx) => {
    return {
      id: idx + 1,
      activity: "家事全般（立位・軽い）",
      assumedCalo: 26,
      duration: 10,
    };
  }
);
