// portfolio\components\common\Button\index.js

import { useGetMouseCoordinates } from "@/utils/hooks.utils";
import { bool, element, func } from "prop-types";
import styles from "./button.module.scss";

export default function Button({
  handleClick = function () {},
  isActive = false,
  isDisabled = false,
  children,
}) {
  const { elemRef, position } = useGetMouseCoordinates();

  return (
    <button
      className={`neu-box p ${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
      disabled={isDisabled}
      ref={elemRef}
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
