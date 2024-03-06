import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>Good at basic level Always try to learn new things as much as possible and use them to get better and develop yourself. enough to survive in this career The main way to write is to create basic HTML CSS Javascript.</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>The design is at the stage of creation. which came from studying and searching from many websites Therefore came across a variety of designs. I will keep the designs that I think I want to make in the future.</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>We who were born in an era with complete technology have seen many applications. I have seen various developments. For more than 10 years Makes it possible to find many references. The app must be smooth, modern, different, and good looking.</p>
        </div>
      </div>
    </div>
  )
}

export default Services