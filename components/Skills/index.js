import Details from "@/common/Details";
import Title from "@/common/Title";
import { skills } from "@/data";
import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <>
      <div className={`${styles.skillsContainer}`}>
        <div>
          <Title title={skills.title} subtitle={skills.subTitle} />

          <Details details={skills.details} />
        </div>

        <section>Some thing to be added here</section>
      </div>
    </>
  );
}
