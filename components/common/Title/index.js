"use client";
import { Fragment, useEffect, useRef } from "react";
import styles from "./title.module.scss";

export default function Title({ title = "", subtitle = "", size = "medium" }) {
  const h1Ref = useRef(null);

  // fade in title animation
  useEffect(() => {
    if (!h1Ref?.current) return;

    const h1 = h1Ref?.current;

    function fadeIn() {
      const fadeInDurationInMS = 100;
      let index = 0;
      const timer = setInterval(addClassToChild, fadeInDurationInMS);

      function addClassToChild() {
        const allChilds = h1Ref?.current?.children;
        const elem = allChilds?.[index];
        ++index;

        if (elem?.localName !== "span") return;

        elem?.classList?.add(styles.fadeIn);
        if (index === allChilds?.length) clearInterval(timer);
      }
    }

    h1.observer = new IntersectionObserver((e) => {
      const isIntersecting = e?.[0]?.isIntersecting;
      removeClass();

      if (isIntersecting) fadeIn();
    });

    function removeClass() {
      const allChilds = h1?.children;
      for (let i = 0; i < allChilds?.length; i++) {
        const elem = allChilds[i];

        elem.className = "";
      }
    }

    h1?.observer?.observe(h1);

    return () => h1?.observer?.disconnect();
  }, []);

  return (
    <>
      <h1 className={`h1 ${styles.title} ${styles[size]}`} ref={h1Ref}>
        {title?.split("").map((word, i) => {
          if (word === "*") return <br key={word + i} />;
          if (!word?.trim()) return <Fragment key={word + i}>&nbsp;</Fragment>;

          return <span key={word + i}>{word}</span>;
        })}
      </h1>

      <span className={`subtitle ${styles.subtitle}`}>{subtitle}</span>
    </>
  );
}
