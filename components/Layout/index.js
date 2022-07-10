// portfolio\components\Layout\index.js

import styles from "./layout.module.scss";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className={`${styles.layoutContainer}`}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
