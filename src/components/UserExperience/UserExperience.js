import React from "react";
import styles from "./UserExperience.module.css";

import TopImage from "../../images/UserExperience/TopImage";
import LeftImage from "../../images/UserExperience/LeftImage";
import RightImage from "../../images/UserExperience/RightImage";

const UserExperience = ({ title, feature1, feature2, feature3 }) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.container}>
            <TopImage color="#F3A851" />
            <p className={styles.textTop}>{feature3} </p>
          </div>
        </div>
        <div className={styles.bottomLeft}>
          <div className={styles.container}>
            <LeftImage color="#CD906E" />

            <p className={styles.textLeft}>{feature1} </p>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.container}>
            <RightImage color="#EDC999" />

            <p className={styles.textBottom}>{feature2} </p>
          </div>
        </div>
        <div className={styles.middleContainer}>
          <p className={styles.middleText}>{title} </p>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
