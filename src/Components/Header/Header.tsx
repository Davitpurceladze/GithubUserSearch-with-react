import styles from "./Header.module.css";
import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";

interface Props {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}

function Header(props: Props) {
  return (
    <div className={styles.title}>
      <p
        className={
          props.isDarkMode
            ? `${styles.titleText} ${styles.titleTextDarkMode}`
            : `${styles.titleText} ${styles.titleTextLightMode}`
        }
      >
        devfinder
      </p>
      <div
        className={styles.darkModeSwitcher}
        onClick={() => {
          props.handleDarkMode();
        }}
      >
        {props.isDarkMode ? (
          <div className={styles.darkModeSwitcher}>
            <p>LIGHT</p>
            <img src={SunIcon} alt="SunIcon" />
          </div>
        ) : (
          <div className={styles.darkModeSwitcher}>
            <p>DARK</p>
            <img src={MoonIcon} alt="MoonIcon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
