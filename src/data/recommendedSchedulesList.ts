import { RecommendedScheduleType } from "../types";
import sleepImg from "../assets/images/sleep_img.svg";
import manWithDrinkImg from "../assets/images/man_drink_orange_img.svg";

export const recommendedSchedulesList: Array<RecommendedScheduleType> =
  Array.from({ length: 20 }, (_, idx) => {
    return {
      id: idx + 1,
      imgSrc: sleepImg,
      dateTime: "2021.05.21 23:55",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリテキストテキスト",
      tags: ["#魚料理", "#和食", "#DHA"],
    };
  });
