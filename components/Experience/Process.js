import { ASSETS, experience } from "@/data";
import { capitalize } from "@/utils/string.utils";
import Image from "next/image";
import { Fragment } from "react";
import Title from "../common/Title";
import styles from "./experience.module.scss";

export default function Process() {
  return (
    <>
      <div>
        <Title title="My Process" size="small" />

        <div className={`${styles.processContainer}`}>
          {experience?.process?.map((item, i) => (
            <Fragment key={item?.id}>
              <div className={`neu-box ${styles.processCard}`}>
                <div className={`${styles.imgContainer}`}>
                  <Image src={item?.icon} alt="" layout="fill" />
                </div>

                <p>{capitalize(item?.name)}</p>
              </div>

              {experience?.process?.length !== i + 1 && (
                <Image src={ASSETS?.arrow} alt="" height={5} width={50} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
