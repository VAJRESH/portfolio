import Title from "@/common/Title";
import { ASSETS, projects } from "@/data";
import Image from "next/image";
import Details from "../common/Details";
import Process from "./Process";
import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <>
      <div className={`${styles.projectsContainer}`}>
        <div className={`${styles.topSection}`}>
          <div>
            <Title title={projects.title} subtitle={projects.subTitle} />

            <Details details={projects.details} />
          </div>

          <section>
            <Image src={ASSETS?.programming} layout="fill" alt="" />
          </section>
        </div>

        <Process />
      </div>
    </>
  );
}
