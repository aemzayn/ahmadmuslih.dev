import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  const onMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor hidden md:block" ref={cursorRef}>
      <img
        src="/images/ring.png"
        alt="ring"
        role="presentation"
        className="ringOne ring-cursor"
      />
      <img
        src="/images/ring.png"
        alt="ring"
        role="presentation"
        className="ringTwo ring-cursor"
      />
    </div>
  );
};

export default CustomCursor;
