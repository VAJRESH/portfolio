import { ASSETS } from "@/data";
import { useGetMouseCoordinates } from "@/utils/hooks.utils";
import Image from "next/image";
import { useRef } from "react";
import Button from "../common/Button";
import styles from "./projects.module.scss";
import { CodeSlashIcon } from "../common/icons";

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
          <Image src={project?.bannerPath} fill={true} sizes="33vw" alt="" />
        </div>

        <p>{project?.title}</p>

        <div className={styles.btnContainer}>
          <a
            href={project?.liveDemoPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button isDisabled={!project?.liveDemoPath} isActive={true}>
              Live Demo
            </Button>
          </a>
          <a
            href={project?.sourceCodePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button isDisabled={!project?.sourceCodePath}>
              <CodeSlashIcon height="15px" />
              Code
            </Button>
          </a>
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
