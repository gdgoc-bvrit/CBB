import { useEffect } from "react";

const DEFAULT_TITLE = "Coding Brigade BVRIT (CBB)";
const DEFAULT_DESC =
  "Coding Brigade BVRIT (CBB) - the student-driven coding club at BVRIT Narsapur. Hackathons, workshops, contests and TechSurge.";

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets the document title and meta description for the current route,
 * restoring the site defaults on unmount.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE;
    setMeta("description", description || DEFAULT_DESC);
    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESC);
    };
  }, [title, description]);
}
