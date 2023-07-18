import Title from "@/common/Title";
import { about } from "@/data";
import Details from "../common/Details";
import styles from "./about.module.scss";
import useGenerateSkillsCloud from "./useGenerateSkillsCloud";

export default function About() {
  const containerClass = "skillsContainer";
  const { elemRef } = useGenerateSkillsCloud(containerClass);

  return (
    <>
      <div className={`${styles.aboutContainer}`}>
        <div>
          <Title title={about.title} subtitle={about.subtitle} />

          <Details details={about.details} />
        </div>

        <section className={containerClass} ref={elemRef}></section>
      </div>
    </>
  );
}
