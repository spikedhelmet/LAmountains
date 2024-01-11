import handleLinkClick from "../handleLinkClick";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id="navbar" className={styles.navbar}>
      <a href="#" className={styles.home}>
        <figure className={styles.figure}>
          <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        </figure>
      </a>

      <div className={styles.nav_list}>
        <a
          href="#history"
          className={styles.nav_link}
          style={{ marginRight: "2rem" }}
          onClick={(e) => handleLinkClick("history", 0, e)}
        >
          01. HISTORY
        </a>
        <a
          href="#team"
          className={styles.nav_link}
          onClick={(event) => handleLinkClick("team", 0, event)}
        >
          02. TEAM
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
