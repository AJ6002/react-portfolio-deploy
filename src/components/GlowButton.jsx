// import { useEffect, useMemo, useRef, useState } from "react";

// const GlowButton = ({ children, href, onClick }) => {
//   const buttonRef = useRef(null);

//   const [offsetWidth, setOffsetWidth] = useState(0);
//   const [offsetHeight, setOffsetHeight] = useState(0);
//   const [translateX, setTranslateX] = useState("-40%");
//   const [translateY, setTranslateY] = useState("-30%");

//   useEffect(() => {
//     if (buttonRef.current) {
//       setOffsetWidth(buttonRef.current.offsetWidth);
//       setOffsetHeight(buttonRef.current.offsetHeight);
//     }
//   }, []);

//   const onMove = (e) => {
//     if (!buttonRef.current) return;

//     const rect = buttonRef.current.getBoundingClientRect();

//     setTranslateX(
//       `${e.clientX - rect.left - offsetWidth / 2}px`
//     );
//     setTranslateY(
//       `${e.clientY - rect.top - offsetHeight / 2}px`
//     );
//   };

//   const styleValue = useMemo(
//     () => ({
//       transform: `translate(${translateX}, ${translateY})`,
//     }),
//     [translateX, translateY]
//   );

//   const Component = href ? "a" : "button";

//   return (
//     <Component
//       ref={buttonRef}
//       href={href}
//       target={href ? "_blank" : undefined}
//       rel={href ? "noopener noreferrer" : undefined}
//       onClick={onClick}
//       onPointerMove={onMove}
//       className="glow-button"
//     >
//       {children}

//       <div className="glow-button__glow">
//         <div
//           className="glow-button__glow-light"
//           style={styleValue}
//         />
//       </div>

//       <div className="glow-button__border">
//         <div
//           className="glow-button__border-light"
//           style={styleValue}
//         />
//       </div>
//     </Component>
//   );
// };

// export default GlowButton;
import { useEffect, useMemo, useRef, useState } from "react";

const GlowButton = ({ children, onClick, href }) => {
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);

  const [translateX, setTranslateX] = useState("-40%");
  const [translateY, setTranslateY] = useState("-30%");

  const buttonRef = useRef(null);

  const getPosition = () => {
    if (buttonRef.current) {
      setOffsetWidth(buttonRef.current.offsetWidth);
      setOffsetHeight(buttonRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  const onMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const { pageX, pageY } = e;

    setTranslateX(
      `${pageX - rect.left - window.scrollX - offsetWidth / 2}px`
    );
    setTranslateY(
      `${pageY - rect.top - window.scrollY - offsetHeight / 2}px`
    );
  };

  const styleValue = useMemo(
    () => ({
      transform: `translate(${translateX}, ${translateY})`,
    }),
    [translateX, translateY]
  );

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={buttonRef}
      onPointerMove={onMove}
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="glow-button"
    >
      {children}

      <div className="glow-button__glow">
        <div className="glow-button__glow-light" style={styleValue} />
      </div>

      <div className="glow-button__border">
        <div className="glow-button__border-light" style={styleValue} />
      </div>
    </Component>
  );
};

export default GlowButton;
