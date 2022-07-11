// portfolio\components\Home\index.js

import { Fragment, useEffect, useRef } from "react";
import { home } from "../../data";
import styles from "./home.module.scss";

export default function Home() {
  const h1Ref = useRef(null);

  // fade in title animation
  useEffect(() => {
    if (!h1Ref?.current) return;

    const fadeInDurationInMS = 100;

    let index = 0;
    const timer = setInterval(() => {
      const allChilds = h1Ref?.current?.children;
      const elem = allChilds[index];
      ++index;

      if (elem?.localName !== "span") return;

      elem?.classList?.add(styles.fadeIn);
      if (index === allChilds?.length) clearInterval(timer);
    }, fadeInDurationInMS);
  }, []);

  return (
    <div className={`${styles.homeContainer}`}>
      <h1 className={`h1`} ref={h1Ref}>
        {home?.title?.split("").map((word, i) => {
          if (word === "*") return <br key={word + i} />;
          if (!word?.trim()) return <Fragment key={word + i}>&nbsp;</Fragment>;

          return <span key={word + i}>{word}</span>;
        })}
      </h1>

      <section className={`${styles.gooeyContainer}`}>
        <div className={`${styles.gooey}`}></div>
      </section>
    </div>
  );
}
