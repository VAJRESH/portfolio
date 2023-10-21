import Title from "@/common/Title";
import { ASSETS, experience } from "@/data";
import Image from "next/image";
import Details from "../common/Details";
import Process from "./Process";
import styles from "./experience.module.scss";

export default function Experience() {
  return (
    <>
      <div className={`${styles.experienceContainer}`}>
        <div className={`${styles.topSection}`}>
          <div>
            <Title title={experience?.title} subtitle={experience?.subTitle} />

            <Details details={experience?.details} />
          </div>

          <section>
            <Image src={ASSETS?.programming} fill={true} alt="" />
          </section>
        </div>

        <Process />
      </div>
    </>
  );
}
