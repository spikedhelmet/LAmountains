import styles from "./Hero.module.css";

function MobileHero({ openSection }) {
  return (
    <>
      {openSection === "#" ? (
        <div className={`${styles.hero_container} ${styles.mobile}`}>
          <img
            src="/assets/hero-bg.jpg"
            alt="Snowy Mountains"
            className={styles.hero_bg_img}
          />
          <img
            src="/assets/snow-layer_light.png"
            className={styles.snow_layer}
          />
          <div className={styles.title_container}>
            <span className={styles.title}>LOSANGELES</span>
            <span className={styles.subtitle}>MOUNTAINS</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MobileHero;
