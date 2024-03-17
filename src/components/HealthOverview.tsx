import { LineChart } from "../components/LineChart";
import { ProgressCircle } from "../components/ProgressCircle";
import mainImg from "../assets/images/main_photo.svg";
import styles from "../assets/styles/components/healthOverview.module.scss";
import { HTMLAttributes } from "react";
import { HealthOverviewDataType } from "../types";

type HealthOverviewPropsType = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  chartData: HealthOverviewDataType;
};

export const HealthOverview = ({
  chartData,
  className = "",
  ...props
}: HealthOverviewPropsType) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div className={styles.image}>
        <img src={mainImg} alt="main photo" className="contain" />
        <ProgressCircle
          date={chartData?.currentStatus?.dateTime}
          progress={chartData?.currentStatus?.percentage}
          className={styles.progressCircle}
        />
      </div>
      <div className={styles.chart}>
        <LineChart
          data={chartData.chartData}
          options={{
            layout: {
              padding: {
                top: 0,
                bottom: 0,
                left: 50,
                right: 50,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
