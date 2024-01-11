import handleLinkClick from "../handleLinkClick";
import styles from "./NavbarSticky.module.css";

const NavbarSticky = () => {
  return (
    <nav className={styles.navbar}>
      <a
        href="#"
        className={styles.home}
        onClick={(e) => handleLinkClick("#", 0, e)}
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
          onClick={(e) => handleLinkClick("history", 50, e)}
        >
          01. HISTORY
        </a>
        <a
          href="#team"
          className={styles.nav_link}
          onClick={(event) => handleLinkClick("team", 50, event)}
        >
          02. TEAM
        </a>
      </div>
    </nav>
  );
};

export default NavbarSticky;
