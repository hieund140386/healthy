import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Layout } from "../layout";
import styles from "../assets/styles/components/error.module.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate("/");
  };
  return (
    <Layout>
      <div className={styles.container}>
        <p>Not Found</p>
        <div>
          <Button
            label="Go To My Page"
            onClick={onNavigateHandler}
            className={styles.button}
          />
        </div>
      </div>
    </Layout>
  );
};
