import styles from "./App.module.css";
import UserExperience from "./components/UserExperience/UserExperience";

//  font-family: "Poppins", sans-serif;
//  font-family: "Inter", sans-serif;
function App() {
  const userExperience = {
    title: "Good User Experience",
    fontFamily: "'Inter', sans-serif",
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
}

export default App;
