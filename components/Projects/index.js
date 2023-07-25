import { projects } from "@/data";
import { useGetWindowDimensions } from "@/utils/hooks.utils";
import { useRef } from "react";
import Title from "../common/Title";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.scss";
import useHandleFilter from "./useHandleFilter";

export default function Projects() {
  const containerRef = useRef(null);
  const { tags, selectedTags, handleSelect } = useHandleFilter();

  const { width } = useGetWindowDimensions();

  function getCardWidth() {
    let totalCardsInRow = 2;
    if (parseInt(width) > 900) ++totalCardsInRow;
    if (parseInt(width) > 1500) ++totalCardsInRow;
    if (parseInt(width) > 1700) ++totalCardsInRow;

    const containerWidth = containerRef?.current?.offsetWidth;
    const singleCardWidth = containerWidth / totalCardsInRow - 25;

    if (containerWidth < 400) return "100%";

    return `${singleCardWidth}px`;
  }

  return (
    <>
      <div className={`${styles.projectsContainer}`}>
        <Title
          title={`Projects (${projects?.length})`}
          subtitle="Filter projects based on programming languages"
        />

        <div className={`${styles.tags}`}>
          {tags?.map((item) => (
            <span
              key={item?.id}
              onClick={() => handleSelect(item?.id)}
              className={`${item?.isSelected ? styles.selected : "neu-box"}`}
            >
              {item?.tag}
              {!!item?.isSelected && <span className={styles.cross}>x</span>}
            </span>
          ))}
        </div>

        <div className={styles.projects} ref={containerRef}>
          {projects?.map((project) => {
            const isFiltered =
              selectedTags?.length &&
              !project?.tags?.some((tag) => selectedTags.includes(tag));

            return (
              <ProjectCard
                key={project?.title}
                project={project}
                isFiltered={isFiltered}
                width={getCardWidth()}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
