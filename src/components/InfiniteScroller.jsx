import { useEffect, useRef } from "react";

const InfiniteScroller = ({
  children,
  speed = "normal", // fast | normal | slow
  direction = "left", // left | right
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.setAttribute("data-animated", "true");

    const inner = scroller.querySelector(".scroller__inner");
    const items = Array.from(inner.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      inner.appendChild(clone);
    });
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="scroller"
      data-speed={speed}
      data-direction={direction}
    >
      <div className="scroller__inner">
        {children}
      </div>
    </div>
  );
};

export default InfiniteScroller;
