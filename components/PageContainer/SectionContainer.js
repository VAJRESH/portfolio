import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./pageContainer.module.scss";

export default function SectionContainer({ sectionArr = [] }) {
  const containerRef = useRef(null);
  const router = useRouter();
  let { section, active } = router?.query;

  const container = containerRef?.current;

  // get active section on scroll
  useEffect(() => {
    console.log(section, active);

    function handleScroll(e) {
      if (!!active) return;

      const sectionHeight = container?.scrollHeight / sectionArr?.length;
      const activeSection =
        sectionArr?.[Math.round(container?.scrollTop / sectionHeight)]?.id;

      router.replace({ query: { section: activeSection } }, undefined, {
        shallow: true,
      });
    }

    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [sectionArr, active, section]);

  // scroll to active section in click
  useEffect(() => {
    containerRef?.[section]?.scrollIntoView();
    containerRef?.[active]?.scrollIntoView();

    function handleScrollEnd(e) {
      if (!active) return;

      router.replace({ query: { section: active } }, undefined, {
        shallow: true,
      });
    }
    container?.addEventListener("scrollend", handleScrollEnd);

    return () => container?.removeEventListener("scrollend", handleScrollEnd);
  }, [section, active]);

  return (
    <>
      <div className={`${styles.sectionContainer}`} ref={containerRef}>
        {sectionArr?.map((section) => (
          <section
            key={section?.id}
            ref={(elem) => (containerRef[section?.id] = elem)}
          >
            {section?.comp}
          </section>
        ))}
      </div>
    </>
  );
}