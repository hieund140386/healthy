import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "../assets/styles/layouts/index.module.scss";
import { ReactElement } from "react";

type LayoutProps = {
  children?: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
