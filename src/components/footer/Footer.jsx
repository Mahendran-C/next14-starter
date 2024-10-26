import React from 'react'
import styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>mahidev</div>
      <div className={styles.text}>
        Mahi creative thoughts agency &copy; {new Date().getFullYear()} All rights
        reserved.
      </div>
    </div>
  )
}

export default Footer