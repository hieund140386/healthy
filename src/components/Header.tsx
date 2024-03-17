import { NavLink } from "react-router-dom";
import logoIcon from "../assets/images/logo.svg";
import styles from "../assets/styles/components/header.module.scss";
import { Icon } from "./Icon";
import memoIcon from "../assets/images/memo.svg";
import challengeIcon from "../assets/images/icon_challenge.svg";
import notiIcon from "../assets/images/icon_info.svg";
import menuIcon from "../assets/images/icon_menu.svg";
import { useRef, useState } from "react";
import { SubMenu } from "./SubMenu";
import closeIcon from "../assets/images/icon_close.svg";
import { Noti } from "./Noti";
import { useClickOutSide } from "../utils/hooks";

export const Header = () => {
  const [isShowSubMenu, setShowSubMenu] = useState<boolean>(false);
  const subMenuRef = useRef(null);
  const ref = useClickOutSide(() => setShowSubMenu(false), subMenuRef);

  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              <Icon icon={logoIcon} width={144} height={64} />
            </NavLink>
          </li>
          <li>
            <ul className={styles.right}>
              <li>
                <NavLink
                  to="/my-records"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  end
                >
                  <Icon label="自分の記録" icon={memoIcon} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/unknown-route-1"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  end
                >
                  <Icon label="チャレンジ" icon={challengeIcon} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/unknown-route-2"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  style={{ position: "relative" }}
                >
                  <Icon label="お知らせ" icon={notiIcon} />
                  <Noti
                    value={9}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "calc(50% - 32px)",
                    }}
                  />
                </NavLink>
              </li>

              <li
                // className={styles.subMenu}
                ref={subMenuRef}
                onClick={() => setShowSubMenu((prev) => !prev)}
              >
                <Icon
                  icon={isShowSubMenu ? closeIcon : menuIcon}
                  style={{ justifyContent: "start" }}
                />
                {isShowSubMenu && <SubMenu ref={ref} />}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
