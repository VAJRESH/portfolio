import styles from "./contact.module.scss";

export default function Input({
  type = "text",
  label = "",
  placeholder = "",
  value = "",
  handleChange = () => {},
}) {
  return (
    <>
      <label className={styles.labelInput}>
        {label} :
        {type === "textarea" ? (
          <textarea
            rows="3"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        )}
      </label>
    </>
  );
}
