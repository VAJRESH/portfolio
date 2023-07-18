import Title from "@/common/Title";
import { ASSETS } from "@/constants";
import { about } from "@/data";
import Image from "next/image";
import Details from "../common/Details";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <div className={`${styles.aboutContainer}`}>
        <div>
          <Title title={about.title} subtitle={about.subtitle} />

          <Details details={about.details} />
        </div>

        <section
        // style={{
        //   backgroundImage: `url(${ASSETS.developerActivity})`,
        // }}
        >
          <Image src={ASSETS.developerActivity} layout="fill" alt="" />
        </section>
      </div>
    </>
  );
}
