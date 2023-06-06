import { useEffect, useRef, RefObject } from "react";

export const useHorizontalScroll = (): RefObject<HTMLUListElement> => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (container) {
        container.scrollTo({
          left: container.scrollLeft + event.deltaY,
        });
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return containerRef;
};
