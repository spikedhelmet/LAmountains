/* eslint-disable react/prop-types */
import styles from "./PageHeading.module.css";

const PageHeading = ({ number, heading, mainText, content }) => {
  return (
    <article
      className={
        content === history
          ? styles.heading_container
          : styles.heading_container_climb
      }
    >
      <span className={styles.number}>{number}</span>
      <span
        className={
          content === history ? styles.heading_history : styles.heading_climb
        }
      >
        {heading}
      </span>
      <p className={styles.text}>{mainText}</p>
    </article>
  );
};

export default PageHeading;
