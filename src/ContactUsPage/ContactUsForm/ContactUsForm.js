import React from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactUsForm.module.css'

export const ContactUsForm = ({customClass}) => {
  const USER_ID = 'user_CwWCFGGjjR9KKedoF5fv4'
  const SERVICE_ID = 'dc161060';
  const TEMPLATE_ID = 'feedback_form';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  }

  return (
      <form className={customClass && customClass} onSubmit={sendEmail}>
        <input className={styles.input} type="text" name="user_name" placeholder="Name" required />
        <input className={styles.input} type="email" name="user_email" placeholder="E-mail" required />
        <textarea className={styles.input} name="message" placeholder="Message" />
        <button className={styles.btn} type="submit">Send</button>
      </form>
  );
}
