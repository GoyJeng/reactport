import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail, MdCall } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa6';

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>How to contact?</h3>
                <p className={styles.contact_desc}>
                We really want to work with everyone to gain work experience. To be able to continue in this career. Every project that we accept to do is like a good book that makes us develop further. Thank you for trusting us.
                </p>
                <p>
                    <address>
                    London  <br />
                    Khaosan Road , Thailand
                    </address>
                </p>
                <p><MdAlternateEmail/>65021105@up.ac.th</p>
                <p><FaInstagram/>Goy_jxeng04</p>
                <p><MdCall/>096-xxx-xxxx</p>

            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Somchai"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Jaidee"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder="eg. asdfsa@dddd.com" />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact