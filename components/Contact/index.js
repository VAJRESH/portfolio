import Button from "@/common/Button";
import Title from "@/common/Title";
import { ASSETS, contact } from "@/data";
import Image from "next/image";
import { useState } from "react";
import Input from "./Input";
import MobileNumberInput from "./MobileNumberInput";
import styles from "./contact.module.scss";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <div className={`${styles.contactContainer}`}>
        <div>
          <Title title={contact.title} subtitle={contact.subTitle} />

          <form className={`neu-box`}>
            <Input label="Full Name" placeholder="John Doe" />

            <MobileNumberInput
              label="Mobile Number"
              placeholder="9889 7889 89"
              value={contactData?.phoneNumber}
              handleChange={(val) =>
                setContactData((prev) => ({ ...prev, phoneNumber: val }))
              }
            />

            <Input label="Email" placeholder="johnDoe@gmail.com" />

            <Input label="Subject" placeholder="Freelance Work" />

            <Input
              type="textarea"
              label="Message"
              placeholder="Anything you want to talk about. Drop a message"
            />

            <Button isActive={true}>Send Message</Button>
          </form>
        </div>

        <section>
          <div className={styles.imgContainer}>
            <Image src={ASSETS?.onlineConnection} layout="fill" alt="" />
          </div>

          <div className={`neu-box ${styles.getInTouch}`}>
            <h4 className={`title`}>Get In Touch</h4>

            <p>
              Want to start a new project or need help in an ongoing project?
              I&apos;d love to hear from you. Here&apos;s how you can reach me.
            </p>

            <div className={`${styles.linkContainer}`}>
              <a href={`tel:${contact?.myPhoneNumber}`}>
                <div className={`neu-box`}>
                  <img src={ASSETS?.callRingIcon} alt="" />
                </div>

                <p>Call Now</p>
              </a>

              <a
                href={`https://wa.me/${contact?.myPhoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`neu-box`}>
                  <img src={ASSETS?.whatsappIcon} alt="" />
                </div>

                <p>Drop a message</p>
              </a>

              <a href={`mailto:${contact?.myEmail}`}>
                <div className={`neu-box`}>
                  <img src={ASSETS?.emailIcon} alt="" />
                </div>
                <p>Connect with email</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
