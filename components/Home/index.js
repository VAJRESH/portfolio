// portfolio\components\Home\index.js

import { home } from "../../data";
import Title from "../common/Title";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={`${styles.homeContainer}`}>
      <Title title={home.title} />

      <section className={`${styles.gooeyContainer}`}>
        <div className={`${styles.gooey}`}></div>
      </section>
    </div>
  );
}
