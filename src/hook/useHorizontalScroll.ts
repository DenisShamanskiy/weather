import { useEffect, useRef, RefObject } from "react";

export const useHorizontalScroll = (): RefObject<HTMLUListElement> => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    let isScrolling = false;
    let clientX = 0;
    let scrollX = 0;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (container) {
        container.scrollTo({
          left: container.scrollLeft + event.deltaY,
        });
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        isScrolling = true;
        clientX = event.touches[0].clientX;
        scrollX = container?.scrollLeft || 0;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isScrolling && event.touches.length === 1 && container) {
        const delta = clientX - event.touches[0].clientX;
        container.scrollLeft = scrollX + delta;
      }
    };

    const handleTouchEnd = () => {
      isScrolling = false;
    };

    if (container) {
      container.addEventListener("wheel", handleWheel);
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return containerRef;
};
