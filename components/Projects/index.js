import { projects } from "@/data";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.scss";
import useHandleFilter from "./useHandleFilter";

export default function Projects() {
  const { tags, selectedTags, handleSelect } = useHandleFilter();

  return (
    <>
      <div className={`${styles.projectsContainer}`}>
        <h4 className={`title`}>Projects ({projects?.length})</h4>

        <p className={`${styles.helperText}`}>
          Filter projects based on programming languages
        </p>

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

        <div className={styles.projects}>
          {projects?.map((project) => {
            const isFiltered =
              selectedTags?.length &&
              !project?.tags?.some((tag) => selectedTags.includes(tag));

            return (
              <ProjectCard
                key={project?.title}
                project={project}
                isFiltered={isFiltered}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
