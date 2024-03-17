import styles from "../assets/styles/pages/column.module.scss";
import { RecommendedList } from "../components/RecommendedList";
import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RecommendedScheduleType } from "../types";
import { getRecommendedSchedulesList } from "../apis";
import { RecommendedSchedulesList } from "../components/RecommendedSchedulesList";
import { Button } from "../components/Button";
import { useScrollToTop } from "../utils/hooks";
import { ScrollToTop } from "../components/ScrollToTopButton";

const ColumnPage = () => {
  const { scrollToTopHandler, isShowScrollToTopBtn } = useScrollToTop(20);

  const [recommendedSchedulesLst, setRecommendedSchedulesLst] = useState(
    (useLoaderData() as Array<RecommendedScheduleType>) ?? []
  );

  const getMoreData = useCallback(async () => {
    const res = await getRecommendedSchedulesList();
    if (res.isOk) {
      const { data } = res;
      setRecommendedSchedulesLst((prev) => [...prev, ...data]);
    }
  }, []);

  return (
    <div className={styles.container}>
      <RecommendedList />
      <RecommendedSchedulesList
        recommendedScheduleList={recommendedSchedulesLst}
      />
      <div>
        <Button label="コラムをもっと見る" onClick={getMoreData} />
      </div>
      {isShowScrollToTopBtn && <ScrollToTop onClick={scrollToTopHandler} />}
    </div>
  );
};

export default ColumnPage;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const res = await getRecommendedSchedulesList();

  if (res.isOk) {
    return res.data;
  }
};
