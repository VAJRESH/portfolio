import { projects } from "@/data";
import { useEffect, useState } from "react";

export default function useHandleFilter() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const allTags = [];
    projects?.forEach((project) => allTags?.push(...project?.tags));

    setTags(
      [...new Set(allTags)]?.map((tag, i) => ({
        id: i,
        tag,
        isSelected: false,
      })),
    );
  }, []);

  const selectedTags = tags
    ?.map((item) => (item?.isSelected ? item?.tag : null))
    ?.filter((t) => !!t);

  function handleSelect(id = null) {
    setTags(
      tags
        ?.map((tag) => {
          if (id === tag?.id) return { ...tag, isSelected: !tag?.isSelected };

          return tag;
        })
        ?.sort((a, b) => {
          if (a?.isSelected) return -1;
          if (b?.isSelected) return 1;

          return 0;
        }),
    );
  }

  return { tags, selectedTags, handleSelect };
}
