import { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";

export default function useHandleContact() {
  const [contactData, setContactData] = useState(getContactDataObj());
  const [infoMsg, setInfoMsg] = useState(null);

  // https://stackoverflow.com/a/46181
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  function handleUpdate(obj = {}) {
    setInfoMsg(null);
    setContactData((prev) => {
      const data = { ...prev, ...obj };
      const isAllPresent =
        !!data?.name && !!data?.email && !!data?.subject && !!data?.message;
      const isAllEmpty =
        !data?.name && !data?.email && !data?.subject && !data?.message;
      let isBtnDisabled = true;
      if (isAllEmpty) isBtnDisabled = false;
      if (isAllPresent) isBtnDisabled = false;

      return { ...data, isBtnDisabled };
    });
  }

  function getContactDataObj(data = {}) {
    return {
      name: data?.name || "",
      phoneNumber: data?.phoneNumber || "",
      email: data?.email || "",
      subject: data?.subject || "",
      message: data?.message || "",
      isBtnDisabled: data?.isBtnDisabled || false,
      success: data?.success || null,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, phoneNumber, email, subject, message } = contactData;
    const isAllPresent =
      !!name && !!phoneNumber && !!email && !!subject && !!message;

    if (!isAllPresent) return setInfoMsg("Please fill all the input fields!!");
    if (!isValidPhoneNumber(phoneNumber))
      return setInfoMsg("Invalid Phone number!!");
    if (!String(email).toLowerCase().match(re))
      return setInfoMsg("Invalid Email!!");

    setInfoMsg(null);

    // TODO: api call
    console.log(contactData);

    setContactData(
      getContactDataObj({ success: "Message Send Successfully." }),
    );

    // clear success msg
    setTimeout(() => setContactData(getContactDataObj()), 1000);
  }

  return {
    infoMsg,
    contactData,
    handleUpdate,
    handleSubmit,
  };
}
