import styles from "./Schedule.module.css";

const Schedule = ({ dates }) => {
  return (
    <div className={styles.schedule_container}>
      <h4 className={styles.schedule_title}>SCHEDULE</h4>
      <div className={styles.grid_container}>
        {dates ? (
          dates.map((date, index) => (
            <span key={index} className={styles.date_item}>
              {date}
            </span>
          ))
        ) : (
          <span className={styles.date_item}>No dates currently available</span>
        )}
      </div>
    </div>
  );
};

export default Schedule;
