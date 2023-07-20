import styles from "./contact.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function MobileNumberInput({
  label = "",
  value = "",
  placeholder = "",
  handleChange = () => {},
}) {
  return (
    <>
      <label className={styles.labelInput}>
        {label}

        <PhoneInput
          international
          countryCallingCodeEditable={false}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          defaultCountry="IN"
        />
      </label>
    </>
  );
}
