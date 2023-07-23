import styles from "./contact.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function MobileNumberInput({
  label = "",
  value = "",
  handleChange = () => {},
}) {
  return (
    <>
      <label className={styles.labelInput}>
        {label}

        <PhoneInput
          international
          countryCallingCodeEditable={false}
          value={value}
          className={styles.mobileNumberInput}
          onChange={handleChange}
          defaultCountry="IN"
        />
      </label>
    </>
  );
}
