import styles from "./details.module.scss";

export default function Details({ details = "" }) {
  const paragraphs = details.split("*");

  return (
    <>
      <article className={styles.details}>
        {paragraphs?.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </article>
    </>
  );
}
