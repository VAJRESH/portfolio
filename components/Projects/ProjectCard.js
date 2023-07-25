import { ASSETS } from "@/data";
import {
  useGetMouseCoordinates,
  useGetWindowDimensions,
} from "@/utils/hooks.utils";
import Image from "next/image";
import Button from "../common/Button";
import styles from "./projects.module.scss";
import { useRef } from "react";

export default function ProjectCard({
  project = null,
  isFiltered = null,
  width = "30%",
}) {
  const projectCardRef = useRef(null);
  const { elemRef, position } = useGetMouseCoordinates(
    projectCardRef?.current?.offsetWidth,
    projectCardRef?.current?.offsetHeight,
  );
  const { width: screenWidth } = useGetWindowDimensions();

  return (
    <>
      <div
        className={`neu-box ${styles.projectCard} ${
          isFiltered ? styles.hide : ""
        }`}
        style={{ width }}
        ref={elemRef}
      >
        <div className={styles.imgContainer}>
          <Image src={project?.bannerPath} height={500} width={500} alt="" />
        </div>

        <p>{project?.title}</p>

        <div className={styles.btnContainer}>
          <Button isDisabled={!project?.liveDemoPath} isActive={true}>
            <a
              href={project?.liveDemoPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
          <Button isDisabled={!project?.sourceCodePath}>
            <a
              href={project?.sourceCodePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={ASSETS?.codeSlash} height={15} width={15} alt="" />
              Code
            </a>
          </Button>
        </div>

        <div
          className={styles.infoBox}
          ref={projectCardRef}
          style={{
            left: `${position?.x + 10}px`,
            top: `${position?.y + 10}px`,
            transformOrigin: `${position?.overFlowY ? "bottom" : "top"} ${
              position?.overFlowX ? "right" : "left"
            }`,
          }}
        >
          <article className={styles.title}>
            <p>{project?.title}</p>
            <small>{project?.category}</small>
          </article>

          <p className={styles.description}>{project?.description}</p>

          <div className={styles.tags}>
            {project?.tags?.map((tag) => (
              <span key={tag} className={`${styles.tag}`}>
                {ASSETS?.[`${tag?.replaceAll(" ", "")?.toLowerCase()}Logo`] && (
                  <Image
                    src={
                      ASSETS?.[`${tag?.replaceAll(" ", "")?.toLowerCase()}Logo`]
                    }
                    height={30}
                    width={30}
                    alt=""
                  />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
