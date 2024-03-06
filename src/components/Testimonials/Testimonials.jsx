import React from "react";
import styles from "./Testimonials.module.css";

const USer = {
  img1:"data:image/jpeg;base64,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",
  img2:"https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/d54cc16eb922429aae847cc424f025b2~tplv-tej9nj120t-origin.webp",
  img3:"https://cdn.readawrite.com/publicassets/966358/images/9GAG_on_Twitter.png"
}

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          It works very well. I give it 5 stars.
          </p>
          <img
            src={USer.img1}
            alt=""
          />
          <h4>Somchay</h4>
          <p className={styles.bio}>cat at 7-11</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Very friendly, no pressure, see you next time.
          </p>
          <img
            src={USer.img2}
            alt=""
          />
          <h4>KhaiWhan</h4>
          <p className={styles.bio}>cat at house</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          I saw the reviews and really wanted to work with them.
          </p>
          <img
            src={USer.img3}
            alt=""
          />
          <h4>TangMo</h4>
          <p className={styles.bio}>cat at buffet restaurant</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;