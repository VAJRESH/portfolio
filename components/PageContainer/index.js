// portfolio\components\Layout\index.js

import Button from "@/common/Button";
import { FULLSCREEN_WIDTH, SECTIONS, SOCIAL_MEDIA } from "@/data";
import { useGetWindowDimensions } from "@/utils/hooks.utils";
import { capitalize } from "@/utils/string.utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import SectionContainer from "./SectionContainer";
import styles from "./pageContainer.module.scss";
import ToggleBtn from "./ToggleBtn";

export default function PageContainer() {
  const [showMenu, setShowMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { section, active } = router?.query;

  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timerId);
  }, []);

  const { width } = useGetWindowDimensions(({ width }) =>
    setShowMenu(width >= FULLSCREEN_WIDTH),
  );
  const isFullScreen = width < FULLSCREEN_WIDTH;

  return (
    <div
      className={`${styles.pageContainer} ${
        isFullScreen ? styles.fullScreen : ""
      } ${isLoading ? styles.skeletonLoader : ""}`}
    >
      {!!showMenu && (
        <aside className={`neu-box`}>
          <div className={`${styles.sidebar}`}>
            <Banner />

            <section className={`${styles.btnContainer}`}>
              {SECTIONS?.map((sectionData) => {
                if (sectionData?.isHidden) return null;

                return (
                  <Button
                    key={sectionData?.id}
                    isActive={
                      section === sectionData?.id || active === sectionData?.id
                    }
                    handleClick={() => {
                      router.replace(
                        { query: { active: sectionData?.id } },
                        "/",
                        {
                          shallow: true,
                        },
                      );
                    }}
                  >
                    <div className={styles.icon}>
                      <Image fill={true} src={sectionData?.icon} alt="" />
                    </div>

                    {capitalize(sectionData?.id)}
                  </Button>
                );
              })}
            </section>

            <div className={styles.socialMedia}>
              {SOCIAL_MEDIA?.map((item) => (
                <a href={item?.link} key={item.id} className="neu-box">
                  <img src={item.icon} alt="" />
                </a>
              ))}
            </div>

            <ToggleBtn />
          </div>
        </aside>
      )}
      <main>
        <SectionContainer
          sectionArr={SECTIONS?.filter((section) => !section?.isHidden)}
        />
      </main>
    </div>
  );
}
