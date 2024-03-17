import { LineChartDataType } from "../types";

export const chartData: LineChartDataType = {
  dateTime: "2021.05.21",
  labels: [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "３月",
    "４月",
    "5月",
  ],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 100],
    },
    {
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 0, 100].reverse(),
    },
  ],
};
// export const lineChartData: LineChartDataType & {
//   month: Omit<LineChartDataType, "dateTime">;
// } & {
//   week: Omit<LineChartDataType, "dateTime">;
// } & { day: Omit<LineChartDataType, "dateTime"> } = {
//   dateTime: "2021.05.21",
//   labels: [
//     "6月",
//     "7月",
//     "8月",
//     "9月",
//     "10月",
//     "11月",
//     "12月",
//     "1月",
//     "2月",
//     "３月",
//     "４月",
//     "5月",
//   ],
//   datasets: [
//     {
//       data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 100],
//     },
//     {
//       data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 0, 100].reverse(),
//     },
//   ],
//   month: {
//     labels: Array.from({ length: 365 }, (_, idx) => {
//       return `${idx + 1}日`;
//     }),
//     datasets: [
//       {
//         data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 100],
//       },
//       {
//         data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 0, 100].reverse(),
//       },
//     ],
//   },
//   week: {
//     labels: Array.from({ length: Math.floor(365 / 7) }, (_, idx) => {
//       return `週${idx + 1}`;
//     }),
//     datasets: [
//       {
//         data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 100],
//       },
//       {
//         data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 0, 100].reverse(),
//       },
//     ],
//   },
//   day: {
//     labels: Array.from({ length: 365 * 24 }, (_, idx) => {
//       return `${idx + 1}時間`;
//     }),
//     datasets: [
//       {
//         data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 100],
//       },
//       {
//         data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 0, 100].reverse(),
//       },
//     ],
//   },
// };
