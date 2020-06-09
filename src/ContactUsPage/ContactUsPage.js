import React from 'react';
import styles from './ContactUsPage.module.css'
import cn from 'classnames';
import {ContactUsForm} from './ContactUsForm/ContactUsForm';
import {Visit} from './Visit/Visit'

export const ContactUsPage = () => (
    <div className={styles.page}>
      <div className={cn('container', styles.container)}>
        <div className={cn('section--head', styles.pageHead)}>
          <h1 className={cn('section--title', styles.pageTitle)}>Get in touch</h1>
          <div className="section--subtitle">Let us know <br/>how we can help</div>
        </div>
        <div className={styles.pageBody}>
          <div className={styles.formWrapper}>
            <ContactUsForm customClass={styles.form} />
          </div>
          <div className={styles.whatNext}>
            <h3 className={styles.whatNextTitle}>What's next</h3>
            <p>
              We’ll contact you within a few hours with our next steps. We normally schedule a call with our engineers to
            discuss your project in more detail. If you’d like to sign an NDA, please let us know. We’ll prepare it for
            you.
            </p>
            <p>
              Since we live on two different continents (Australia and Europe) we are available around the clock.
            </p>
          </div>
        </div>
      </div>
      <Visit />
    </div>
)
