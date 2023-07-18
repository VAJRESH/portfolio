// portfolio\components\Layout\index.js

import Button from "@/common/Button";
import { SECTIONS } from "@/constants";
import { capitalize } from "@/utils/string.utils";
import { useRouter } from "next/router";
import Banner from "./Banner";
import SectionContainer from "./SectionContainer";
import styles from "./pageContainer.module.scss";

export default function PageContainer() {
  const router = useRouter();
  const { section, active } = router?.query;

  return (
    <div className={`${styles.pageContainer}`}>
      <aside className={`neu-box`}>
        <Banner />

        <section className={`${styles.btnContainer}`}>
          {SECTIONS.map((sectionData) => {
            return (
              <Button
                key={sectionData?.id}
                isActive={
                  section === sectionData?.id || active === sectionData?.id
                }
                handleClick={() => {
                  router.replace(
                    { query: { active: sectionData?.id } },
                    undefined,
                    { shallow: true },
                  );
                }}
              >
                {capitalize(sectionData?.id)}
              </Button>
            );
          })}
        </section>
      </aside>

      <main>
        <SectionContainer sectionArr={SECTIONS} />
      </main>
    </div>
  );
}
