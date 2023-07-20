// portfolio\components\common\Button\index.js

import { bool, element, func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "./button.module.scss";

export default function Button({
  handleClick = function () {},
  isActive = false,
  children,
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    if (!buttonRef?.current) return;

    const btn = buttonRef?.current;
    btn?.addEventListener("mousemove", mouseMoveEvent);

    return () => btn?.removeEventListener("mousemove", mouseMoveEvent);
  }, [buttonRef]);

  function mouseMoveEvent(e) {
    const { x, y } = buttonRef?.current?.getBoundingClientRect();
    setPosition({ x: e.clientX - x, y: e.clientY - y });
  }
  console.log(position);

  return (
    <button
      className={`neu-box p ${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
      ref={buttonRef}
    >
      <div
        className={styles.gradientHover}
        style={{
          top: `calc(${position?.y || 0} * 1px - 75px)`,
          left: `calc(${position?.x || 0} * 1px - 75px)`,
        }}
      ></div>
      {children}
    </button>
  );
}

Button.propType = {
  handleClick: func,
  isActive: bool,
  children: element.isRequired,
};
