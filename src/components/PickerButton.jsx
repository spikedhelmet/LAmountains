import styles from "./PickerButton.module.css";

function PickerButton({ name, selected, onSelected }) {
  return (
    <button
      className={`${styles.mountain} ${
        selected.name === name ? styles.active : ""
      }`}
      onClick={onSelected}
    >
      <span>{name}</span>
    </button>
  );
}

export default PickerButton;
