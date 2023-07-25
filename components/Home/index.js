// portfolio\components\Home\index.js

import Title from "@/common/Title";
import { home } from "@/data";
import styles from "./home.module.scss";

export default function Home({ isFullScreen = false }) {
  return (
    <div
      className={`${styles.homeContainer}  ${
        isFullScreen ? styles.fullScreen : ""
      }`}
    >
      <section className={`${styles.gooeyContainer}`}>
        <div className={`${styles.gooey}`}></div>
      </section>

      <Title title={home.title} size="large" />
    </div>
  );
}
