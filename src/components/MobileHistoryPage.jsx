import styles from "./HistoryPage.module.css";
import PageHeading from "./PageHeading";
import SliderComponent from "./Slider";
import "../App.css";

const MobileHistoryPage = ({ openSection }) => {
  return (
    <>
      {openSection === "history" ? (
        <section
          className={`${styles.section_container} ${styles.mobile}`}
          id="history"
        >
          <img
            src="/assets/history-bg.jpg"
            alt="A tall dark snowy mountain with forests covering it"
            className={styles.bg_img}
          />
          <PageHeading
            number={"01."}
            heading={"HISTORY"}
            mainText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Crasscelerisque id quam sed dignissim Pellentesque urna nunc, gravida quishendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor neccongue."
            }
            content={history}
          />
          <SliderComponent />
        </section>
      ) : null}
    </>
  );
};

export default MobileHistoryPage;
