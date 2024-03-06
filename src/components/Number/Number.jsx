import React from 'react'
import styles from './Number.module.css'

function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>963,000+</h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>690+</h3>
        <p>Companies Helped</p>
      </div>
      <div className={styles.number_items}>
        <h3>1</h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>99,999,999</h3>
        <p>Happy Clients</p>
      </div>
    </div>
  )
}

export default Number