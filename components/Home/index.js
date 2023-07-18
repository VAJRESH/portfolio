// portfolio\components\Home\index.js

import Title from "@/common/Title";
import { home } from "@/data";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={`${styles.homeContainer}`}>
      <Title title={home.title} size="large" />

      <section className={`${styles.gooeyContainer}`}>
        <div className={`${styles.gooey}`}></div>
      </section>
    </div>
  );
}
