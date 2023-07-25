import Title from "@/common/Title";
import { ASSETS, about } from "@/data";
import Image from "next/image";
import Details from "@/common/Details";
import styles from "./about.module.scss";

export default function About({ isFullScreen = false }) {
  return (
    <>
      <div
        className={`${styles.aboutContainer} ${
          isFullScreen ? styles.fullScreen : ""
        }`}
      >
        <div>
          <Title title={about.title} subtitle={about.subTitle} />

          <Details details={about.details} />
        </div>

        <section>
          <Image src={ASSETS?.developerActivity} layout="fill" alt="" />
        </section>
      </div>
    </>
  );
}
