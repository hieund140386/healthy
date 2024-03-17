import styles from "../assets/styles/pages/myPage.module.scss";
import { Button } from "../components/Button";

import { useLoaderData } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { getHealthOverviewData, getMealsList } from "../apis/";
import { ScrollToTop } from "../components/ScrollToTopButton";
import { useScrollToTop } from "../utils/hooks";
import { MealsList } from "../components/MealsList";
import { FilterButtonsList } from "../components/FilterButtonsList";
import { filterButtonsList } from "../data/filterButtonsList";
import { HealthOverview } from "../components/HealthOverview";
import { HealthOverviewDataType, Meal, MealType } from "../types";

export const MyPage = () => {
  const data = useLoaderData() as Array<unknown>;

  const { scrollToTopHandler, isShowScrollToTopBtn } = useScrollToTop(10);

  const [mealsLst, setMealsLst] = useState<Array<Meal>>(
    (data[0] as Array<Meal>) ?? []
  );

  const [mealType, setMealType] = useState<MealType>();

  const filteredData = useMemo(() => {
    if (mealType) {
      return mealsLst.filter((item) => item.title === mealType);
    }
    return mealsLst;
  }, [mealsLst, mealType]);

  const getMoreData = useCallback(async () => {
    const res = await getMealsList();
    if (res.isOk) {
      const { data } = res;
      setMealsLst((prev) => [...prev, ...data]);
      setMealType(undefined);
    }
  }, []);

  return (
    <div className={styles.container}>
      <HealthOverview chartData={data[1] as HealthOverviewDataType} />
      <div>
        <FilterButtonsList
          filterButtonsList={filterButtonsList}
          setMealTypeHandler={setMealType}
        />
        <MealsList mealsList={mealType ? filteredData : mealsLst} />
        <div>
          <Button onClick={getMoreData} />
        </div>
      </div>
      {isShowScrollToTopBtn && <ScrollToTop onClick={scrollToTopHandler} />}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const [res1, res2] = await Promise.all([
    getMealsList(),
    getHealthOverviewData(),
  ]);
  if (res1.isOk && res2.isOk) {
    return [res1.data, res2.data];
  }
  return new Error("Something went wrongs");
};
