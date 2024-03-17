import utils from "../utils/index";
import sanwichImg from "../assets/images/sanwich_img.svg";
import panImg from "../assets/images/banh_mi_img.svg";
import porkImg from "../assets/images/pork_img.svg";
import ramenImg from "../assets/images/ramen_img.svg";
import creamImg from "../assets/images/ice_cream_img.svg";
import riceImg from "../assets/images/rice_img.svg";
import mainMealImg from "../assets/images/meal_set_img.svg";
import { Meal, MealType } from "../types";

type MeasList = Array<Meal>;

export const mealsList: MeasList = Array.from({ length: 20 }, (_, i) => {
  const randomNum = utils.getRandNum(1, 7);
  let title: MealType,
    img = "";
  switch (randomNum) {
    case 1:
      title = "Morning";
      img = sanwichImg;
      break;
    case 2:
      title = "Lunch";
      img = panImg;
      break;
    case 3:
      title = "Dinner";
      img = porkImg;
      break;
    case 4:
      title = "Dinner";
      img = ramenImg;
      break;
    case 5:
      title = "Lunch";
      img = riceImg;
      break;
    case 6:
      title = "Morning";
      img = mainMealImg;
      break;
    default:
      title = "Snack";
      img = creamImg;
  }
  return {
    id: i + 1,
    date: "2024.05.21",
    title,
    img,
  };
});
