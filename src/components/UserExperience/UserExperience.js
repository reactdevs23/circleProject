import React from "react";
import styles from "./UserExperience.module.css";

import TopImage from "../../images/UserExperience/TopImage";
import LeftImage from "../../images/UserExperience/LeftImage";
import RightImage from "../../images/UserExperience/RightImage";

const UserExperience = ({ title, feature1, feature2, feature3 }) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.middleContainer}>
          <p className={styles.middleText}>{title} </p>
        </div>
        <div className={styles.top}>
          <div className={styles.container}>
            <TopImage color={feature1.color} />
            <p className={styles.textTop}>{feature1.text} </p>
          </div>
        </div>
        <div className={styles.bottomLeft}>
          <div className={styles.container}>
            <LeftImage color={feature2.color} />
            <p className={styles.textLeft}>{feature2.text} </p>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.container}>
            <RightImage color={feature3.color} />
            <p className={styles.textBottom}>{feature3.text} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
