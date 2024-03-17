import { Link } from "react-router-dom";
import styles from "../assets/styles/components/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to="/">会員登録</Link>
          </li>
          <li>
            <Link to="/">運営会社</Link>
          </li>
          <li>
            <Link to="/">利用規約</Link>
          </li>
          <li>
            <Link to="/">個人情報の取扱について</Link>
          </li>
          <li>
            <Link to="/">特定商取引法に基づく表記</Link>
          </li>
          <li>
            <Link to="/">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
