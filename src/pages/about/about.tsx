import AboutText from "@/components/AboutText/AboutText";
import React from "react";
import styles from "./about.module.css";

const about = () => {
  return (
    <>
      <h2 className={styles.heading}>This is about page!!</h2>
      <AboutText />
    </>
  );
};

export default about;
