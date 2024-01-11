import styles from "./NavbarSticky.module.css";

const MobileNavbar = ({ handleSectionClick }) => {
  return (
    <nav id="navbar" className={`${styles.navbar} ${styles.navbar_mobile}`}>
      <a
        href="#"
        className={styles.home}
        onClick={() => handleSectionClick("#")}
      >
        <figure className={styles.figure}>
          <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
          <div className={styles.title_container}>
            <span className={styles.title}>LOSANGELES</span>
            <span className={styles.subtitle}>MOUNTAINS</span>
          </div>
        </figure>
      </a>

      <div className={styles.nav_list}>
        <a
          href="#history"
          className={styles.nav_link}
          style={{ marginRight: "2rem" }}
          onClick={() => handleSectionClick("history")}
        >
          01. HISTORY
        </a>
        <a
          href="#team"
          className={styles.nav_link}
          onClick={() => handleSectionClick("team")}
        >
          02. TEAM
        </a>
      </div>
    </nav>
  );
};

export default MobileNavbar;
