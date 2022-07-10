// portfolio\components\common\Button\index.js

import { bool, element, func, PropTypes } from "prop-types";
import styles from "./button.module.scss";

export default function Button({
  handleClick = function () {},
  isActive = false,
  children,
}) {
  return (
    <button
      className={`neu-box p ${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propType = {
  handleClick: func,
  isActive: bool,
  children: element.isRequired,
};
