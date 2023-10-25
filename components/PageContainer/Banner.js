// portfolio\components\Layout\Sidebar\Banner.js

import { LogoIcon } from "../common/icons";
import styles from "./pageContainer.module.scss";

export default function Banner() {
  return (
    <>
      <section className={`neu-box ${styles.banner}`}>
        <div className={`neu-box ${styles.imageContainer}`}>
          <LogoIcon />
        </div>

        <p className={`title ${styles.name}`}>VAJRESH</p>
        <p className={`p-bold ${styles.position}`}>
          <span
            className={`p-bold desc`}
            data-desc="MongoDb-Express-React-Node"
          >
            Fullstack
          </span>
          &nbsp; Developer
        </p>
      </section>
    </>
  );
}
