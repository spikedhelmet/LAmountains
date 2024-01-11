import Schedule from "./Schedule";
import styles from "./ClimbPage.module.css";
import { useState } from "react";
import PickerButton from "./PickerButton";
import PageHeading from "./PageHeading";

const mountain1 = {
  name: "MOUNTAIN 1",
  dates: [
    "12 Jan 2024",
    "Vestibulum viverra",
    "22 Jan 2024",
    "Vestibulum viverra",
    "2 Feb 2024",
    "Vestibulum viverra",
    "7 Feb 2024",
    "Vestibulum viverra",
  ],
};

const mountain2 = {
  name: "MOUNTAIN 2",
  dates: [
    "15 Jan 2024",
    "Vestibulum viverra",
    "28 Jan 2024",
    "Vestibulum viverra",
    "5 Feb 2024",
    "Vestibulum viverra",
    "10 Feb 2024",
    "Vestibulum viverra",
  ],
};

const mountains = [mountain1, mountain2];

const MobileClimbPage = ({ openSection }) => {
  const [selected, setSelected] = useState(mountain1);

  const handleSelected = (mount) => {
    setSelected(mount);
  };

  return (
    <>
      {openSection === "team" ? (
        <section className={`${styles.climbPage} ${styles.mobile}`} id="team">
          <img
            src="/assets/climb-bg.jpg"
            alt="A tall dark snowy mountain with forests covering it"
            className={styles.bg_img}
          />
          <div className={styles.flex_column}>
            <div className={styles.content_container}>
              <PageHeading
                number={"02."}
                heading={"CLIMB"}
                mainText={
                  "Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.  "
                }
                content={"climb"}
              />
            </div>

            <div className={styles.bg_color_bar}>
              <div className={styles.mountain_picker}>
                {mountains.map((mount) => {
                  return (
                    <PickerButton
                      key={mount.name}
                      name={mount.name}
                      selected={selected}
                      onSelected={() => handleSelected(mount)}
                    />
                  );
                })}
              </div>
            </div>
            <Schedule dates={selected.dates} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default MobileClimbPage;
