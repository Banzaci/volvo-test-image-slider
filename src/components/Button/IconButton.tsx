import styles from "./Button.module.css";

type IconButtonType = {
  children: JSX.Element;
  onClick: () => void;
  ariaLabel: string;
}

const IconButton = ({ children, onClick, ariaLabel }: IconButtonType) => (
  <button className={styles.iconButton} onClick={onClick} aria-label={ariaLabel}>
    {children}
  </button>
)

export default IconButton;