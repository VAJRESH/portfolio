// portfolio\components\Layout\index.js

import Button from "@/common/Button";
import { SECTIONS } from "@/constants";
import { capitalize } from "@/utils/string.utils";
import Image from "next/image";
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
                  router.replace({ query: { active: sectionData?.id } }, "/", {
                    shallow: true,
                  });
                }}
              >
                <Image height={15} width={15} src={sectionData?.icon} alt="" />

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
