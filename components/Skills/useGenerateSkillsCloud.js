import { about } from "@/data";

import { TextSphere } from "@/lib/TagCloud";
import { useEffect, useRef } from "react";
import styles from "./skills.module.scss";

export default function useGenerateSkillsCloud(
  containerClass = "skillsContainer",
) {
  const elemRef = useRef(null);

  useEffect(() => {
    let instance;

    const elem = elemRef.current;
    if (!elem?.sphere) instance = createSkillsSphere();
    elem.sphere = instance;

    elem.observer = new IntersectionObserver((e) => {
      const isIntersecting = e[0].isIntersecting;

      if (!isIntersecting) instance?.pause();
      if (isIntersecting) instance?.resume();
    });

    elem.observer.observe(elemRef?.current);
  }, []);

  function createSkillsSphere() {
    const texts = about?.skills;
    const options = {
      radius: 250,
      maxSpeed: "fast",
      containerClass: "skillCloud",
      itemClass: `skills`,
      shades: {
        front: styles.primaryLight,
        sideways: styles.primaryNeutral,
        back: styles.primaryDark,
      },
    };

    if (window.innerWidth < 350) options.radius = 120;
    if (window.innerWidth < 450) options.radius = 150;
    if (window.innerWidth > 2000) options.radius = 300;
    if (window.innerWidth > 2560) options.radius = 350;

    elemRef?.current?.sphere?.destroy();
    return TextSphere(`.${containerClass}`, texts, options);
  }

  return { elemRef };
}
