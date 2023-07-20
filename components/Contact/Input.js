import styles from "./contact.module.scss";

export default function Input({ type = "text", label = "", placeholder = "" }) {
  return (
    <>
      <label className={styles.labelInput}>
        {label} :
        {type === "textarea" ? (
          <textarea rows="3" placeholder={placeholder}></textarea>
        ) : (
          <input type={type} placeholder={placeholder} />
        )}
      </label>
    </>
  );
}
