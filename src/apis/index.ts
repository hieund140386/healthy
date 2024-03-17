import { diariesList } from "../data/diariesList";
import { mealsList } from "../data/mealsList";
import utils from "../utils/index";
import { chartData } from "../data/chartData";
import {
  DiaryType,
  ExercisesListDataType,
  HealthOverviewDataType,
  Meal,
  RecommendedScheduleType,
  ResponseType,
} from "../types";
import { recommendedSchedulesList } from "../data/recommendedSchedulesList";
import { exercisesList } from "../data/exercisesList";

export const getRecommendedSchedulesList = async (
  limit = 8
): Promise<ResponseType<Array<RecommendedScheduleType>>> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const randNum = utils.getRandNum(1, limit);
      resolve({
        isOk: true,
        data: limit
          ? recommendedSchedulesList.slice(randNum, randNum + limit)
          : recommendedSchedulesList,
      });
    }, 100);
  });
};

export const getMealsList = async (
  limit = 8
): Promise<ResponseType<Array<Meal>>> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const randNum = utils.getRandNum(1, limit);
      resolve({
        isOk: true,
        data: limit ? mealsList.slice(randNum, randNum + limit) : mealsList,
      });
    }, 100);
  });
};

export const getDiariesList = async (
  limit = 8
): Promise<ResponseType<Array<DiaryType>>> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const randNum = utils.getRandNum(1, limit);
      resolve({
        isOk: true,
        data: limit ? diariesList.slice(randNum, randNum + limit) : diariesList,
      });
    }, 0);
  });
};

export const getExercisesListData = async (): Promise<
  ResponseType<ExercisesListDataType>
> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        isOk: true,
        data: { dateTime: "2021.05.21", data: exercisesList },
      });
    }, 100);
  });
};

export const getHealthOverviewData = async (): Promise<
  ResponseType<HealthOverviewDataType>
> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        isOk: true,
        data: {
          chartData: chartData,
          currentStatus: {
            percentage: 75,
            dateTime: "2021.05.21",
          },
        },
      });
    }, 300);
  });
};

export const getLineChartData = async (): Promise<
  ResponseType<HealthOverviewDataType>
> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        isOk: true,
        data: {
          chartData: chartData,
          currentStatus: {
            percentage: 75,
            dateTime: "2021.05.21",
          },
        },
      });
    }, 300);
  });
};
