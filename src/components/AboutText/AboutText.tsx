import Image from "next/image";
import React from "react";
import styles from "./AboutText.module.css";
import testImage from "./../../assets/images/1.jpg";

const AboutText = () => {
  return (
    <div>
      <Image
        src={testImage}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <h2 className={styles.textheadlie}>About TEXT</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        repellendus.
      </p>
    </div>
  );
};

export default AboutText;
