// portfolio\components\Layout\Sidebar.js

import { useRouter } from "next/router";
import { sidebarBtns } from "../../../data";
import Button from "../../common/Button";
import styles from "../layout.module.scss";
import Banner from "./Banner";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className={`neu-box`}>
      <Banner />

      <section className={`${styles.btnContainer}`}>
        {sidebarBtns.map((btn) => {
          return (
            <Button
              key={btn?.name}
              isActive={router.pathname === btn?.route}
              handleClick={() => router.push(btn?.route)}
            >
              {btn?.name}
            </Button>
          );
        })}
      </section>
    </aside>
  );
}
