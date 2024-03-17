import styles from "../assets/styles/pages/myRecord.module.scss";
import { LineChart } from "../components/LineChart";
import { chartData } from "../data/chartData";
import { getDiariesList, getExercisesListData } from "../apis";
import { useLoaderData } from "react-router-dom";
import { useCallback, useState } from "react";
import { Button } from "../components/Button";
import { DiariesList } from "../components/DiariesList";
import { CatagoriesList } from "../components/CatagoriesList";
import { categoriesList } from "../data/categoriesList";
import { DiaryType, ExercisesListDataType, TimePointType } from "../types";
import { ScrollToTop } from "../components/ScrollToTopButton";
import { useScrollToTop } from "../utils/hooks";
import { ExercisesList } from "../components/ExercisesList";

export const MyRecordPage = () => {
  const { scrollToTopHandler, isShowScrollToTopBtn } = useScrollToTop(10);
  const [timePoint, setTimePoint] = useState<TimePointType>("year");
  const [diariesListData, exercisesListData] =
    useLoaderData() as Array<unknown>;

  const [myDiaryData, setMyDiaryData] = useState(
    (diariesListData as Array<DiaryType>) ?? []
  );

  const getMoreData = useCallback(async () => {
    const res = await getDiariesList();
    if (res.isOk) {
      const { data } = res;
      setMyDiaryData((prev) => [...prev, ...data]);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <CatagoriesList catagoriesList={categoriesList} />
      <div className={styles.lineChart}>
        <LineChart
          data={chartData}
          isActionsAllowed
          isShowChartTitle
          currentTimePoint={timePoint}
          onChangeTimePointHandler={setTimePoint}
        />
      </div>
      <ExercisesList
        className={styles.exercise}
        data={(exercisesListData as ExercisesListDataType) ?? {}}
      />
      <DiariesList
        title="my diary"
        diariesList={myDiaryData}
        className={styles.diariesList}
      />
      <div>
        <Button onClick={getMoreData} />
      </div>
      {isShowScrollToTopBtn && <ScrollToTop onClick={scrollToTopHandler} />}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const [res1, res2] = await Promise.all([
    getDiariesList(),
    getExercisesListData(),
  ]);
  if (res1.isOk && res2.isOk) {
    return [res1.data, res2.data];
  }
  return new Error("Something went wrongs");
};
