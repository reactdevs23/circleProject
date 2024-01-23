import React from "react";
import styles from "./MainComponent.module.css";
import UserExperience from "../UserExperience/UserExperience";

const MainComponent = () => {
  const userExperience = {
    title: "Good User Experience",
    feature1: "Usability",
    feature2: "Functionality",
    feature3: "Aesthetics",
  };
  return (
    <div className={styles.wrapper}>
      <UserExperience {...userExperience} />
    </div>
  );
};

export default MainComponent;
