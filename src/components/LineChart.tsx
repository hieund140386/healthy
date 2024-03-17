import {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import Chart from "chart.js/auto";
import { ChartOptions, Plugin } from "chart.js";
import moment from "moment";
import styles from "../assets/styles/components/lineChart.module.scss";
import { LineChartDataType, TimePointType } from "../types";

type LineChartProps = {
  data: LineChartDataType;
  title?: string;
  isShowChartTitle?: boolean;
  isActionsAllowed?: boolean;
  props?: HTMLAttributes<HTMLDivElement>;
  options?: ChartOptions;
  plugins?: Array<Plugin>;
  currentTimePoint?: TimePointType;
  onChangeTimePointHandler?: Dispatch<SetStateAction<TimePointType>>;
};

const defaultChartOptions: ChartOptions = {
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 50,
      bottom: 50,
    },
  },
  scales: {
    y: {
      display: false,
      suggestedMax: 200,
      suggestedMin: 0,
      beginAtZero: true,
    },
    x: {
      display: true,
      beginAtZero: true,
      grid: {
        color: "white",
        lineWidth: 0.25,
      },
      ticks: {
        display: true,
        color: "white",
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const defaultPlugins: Plugin[] = [];

export const LineChart = ({
  data,
  title = "BODY RECORD",
  isActionsAllowed = false,
  isShowChartTitle = false,
  options = {},
  plugins = [],
  currentTimePoint,
  onChangeTimePointHandler,
}: LineChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current && data?.datasets && data?.labels?.length) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              ...data.datasets[0],
              borderWidth: 1,
              borderColor: "yellow",
              pointBackgroundColor: "yellow",
              pointStyle: "round",
            },
            {
              ...data.datasets[1],
              borderWidth: 1,
              borderColor: "seagreen",
              pointBackgroundColor: "seagreen",
              pointStyle: "round",
            },
          ],
        },
        options: { ...defaultChartOptions, ...options },
        plugins: [...defaultPlugins, ...plugins],
      });
      return () => {
        canvasRef.current = null;
      };
    }
  }, [options, data, plugins]);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        style={{
          inset: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      ></canvas>
      {isShowChartTitle && (
        <div className={styles.title}>
          <p style={{ flexBasis: 20, textAlign: "left" }}>{title}</p>
          <p>{moment(new Date(data.dateTime ?? "")).format("YYYY.M.D")}</p>
        </div>
      )}
      {isActionsAllowed && (
        <div className={styles.actions}>
          <button
            type="button"
            className={currentTimePoint === "day" ? styles.chosen : ""}
            onClick={() =>
              onChangeTimePointHandler && onChangeTimePointHandler("day")
            }
          >
            日
          </button>
          <button
            type="button"
            className={currentTimePoint === "week" ? styles.chosen : ""}
            onClick={() =>
              onChangeTimePointHandler && onChangeTimePointHandler("week")
            }
          >
            週
          </button>
          <button
            type="button"
            className={currentTimePoint === "month" ? styles.chosen : ""}
            onClick={() =>
              onChangeTimePointHandler && onChangeTimePointHandler("month")
            }
          >
            月
          </button>
          <button
            type="button"
            className={currentTimePoint === "year" ? styles.chosen : ""}
            onClick={() =>
              onChangeTimePointHandler && onChangeTimePointHandler("year")
            }
          >
            年
          </button>
        </div>
      )}
    </div>
  );
};
