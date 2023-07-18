import Details from "@/common/Details";
import Title from "@/common/Title";
import { skills } from "@/data";
import styles from "./skills.module.scss";
import useGenerateSkillsCloud from "./useGenerateSkillsCloud";

export default function Skills() {
  const containerClass = "skillsContainer";
  const { elemRef } = useGenerateSkillsCloud(containerClass);

  return (
    <>
      <div className={`${styles.skillsContainer}`}>
        <div>
          <Title title={skills.title} subtitle={skills.subTitle} />

          <Details details={skills.details} />
        </div>

        <section className={containerClass} ref={elemRef}></section>
      </div>
    </>
  );
}
