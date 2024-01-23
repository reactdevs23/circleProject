import React from "react";
import styles from "./MainComponent.module.css";
import UserExperience from "../UserExperience/UserExperience";

const MainComponent = () => {
  const userExperience = {
    title: "Good User Experience",
    feature1: {
      text: "Aesthetics",
      color: "#EDC999",
    },
    feature2: {
      text: "Usability",
      color: "#F3A851",
    },
    feature3: {
      text: "Functionality",
      color: "#CD906E",
    },
  };
  return (
    <div className={styles.wrapper}>
      <UserExperience {...userExperience} />
    </div>
  );
};

export default MainComponent;
