import { NavLink } from "react-router-dom";
import styles from "../assets/styles/components/subMenu.module.scss";
import { forwardRef } from "react";

export const SubMenu = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <ul>
        <li className={styles.item}>
          <NavLink
            to={"/my-records"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            自分の記録
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={"/unknow-route-1"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            体重グラフ
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={"/unknow-route-2"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            目標
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={"/unknow-route-3"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            選択中のコース
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={"/columns"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            コラム一覧
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={"/unknow-route-4"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            設定
          </NavLink>
        </li>
      </ul>
    </div>
  );
});
