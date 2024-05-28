import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(({title = "Seoul"}: {title: string}) => {
  return (
    <header class={styles.header}>
      <h1>
        ${title}
      </h1>
    </header>
  );
});