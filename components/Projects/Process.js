import { ASSETS, projects } from "@/data";
import Title from "../common/Title";
import Image from "next/image";
import styles from "./projects.module.scss";
import { capitalize } from "@/utils/string.utils";

export default function Process() {
  return (
    <>
      <div>
        <Title title="My Process" size="small" />

        <div className={`${styles.processContainer}`}>
          {projects?.process?.map((item, i) => (
            <>
              <div key={item?.id} className={`neu-box ${styles.processCard}`}>
                <div className={`${styles.imgContainer}`}>
                  <Image src={item?.icon} alt="" layout="fill" />
                </div>

                <p>{capitalize(item?.name)}</p>
              </div>

              {projects?.process?.length !== i + 1 && (
                <Image src={ASSETS?.arrow} alt="" height={5} width={50} />
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
