import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <figure className={styles.figure}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.title_container}>
          <span className={styles.title}>LOSANGELES</span>
          <span className={styles.subtitle}>MOUNTAINS</span>
        </div>
      </figure>
      <p className={styles.copyright}>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
// import styles from "./Footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={`${styles.footer} ${styles.mobile}`}>
//       <figure className={styles.figure}>
//         <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
//         <div className={styles.title_container}>
//           <span className={styles.title}>LOSANGELES</span>
//           <span className={styles.subtitle}>MOUNTAINS</span>
//         </div>
//       </figure>
//       <p className={styles.copyright}>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
//     </footer>
//   );
// };

// export default Footer;
