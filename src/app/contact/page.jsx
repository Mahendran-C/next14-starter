import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            placeholder="Message"
            name="message"
            rows="10"
            cols="30"
            id="message"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
