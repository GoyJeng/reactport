import React from 'react';
import styles from './Portfolio.module.css';

const User = {
  img1:"https://i.pinimg.com/236x/ec/88/23/ec88237079284a706a2bd5a3e20b6d0c.jpg",
  img2:"https://us-fbcloud.net/wb/data/1456/1456418-img.vyn3sv.2be85.jpg",
  img3:"https://digitalmore.co/wp-content/uploads/2022/09/Cat-Memes-29.jpg",
  img4:"https://i.pinimg.com/originals/db/6d/83/db6d8337cce84daf9ebbd667b04a8a1e.jpg",
  img5:"https://digitalmore.co/wp-content/uploads/2022/09/Cat-Memes-01.jpg",
  img6:"https://i.imgflip.com/8338y8.jpg?a474552"
}

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Favorite cat meme</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={User.img1} alt="" />
            <p>It's this size</p>
        </div>
        <div className={styles.port_items}>
            <img src={User.img2}  alt="" />
            <p>Hello Baby. this is you Flower</p>
        </div>
        <div className={styles.port_items}>
            <img src={User.img3}  alt="" />
            <p>distorted smile</p>
        </div>
        <div className={styles.port_items}>
            <img src={User.img4}  alt="" />
            <p>soul sucking smile</p>
        </div>
        <div className={styles.port_items}>
            <img src={User.img5}  alt="" />
            <p>IF This subject is F.</p>
        </div>
        <div className={styles.port_items}>
            <img src={User.img6} alt="" />
            <p>Huh?</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio