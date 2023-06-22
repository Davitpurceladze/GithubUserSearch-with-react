import styles from "./PersonalInfo.module.css";

interface Props {
  isDarkMode: boolean;
  LightModeIcon: any;
  DarkModeIcon: any;
  info: any;
}

function PersonalInfo(props: Props) {
  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.personalInfoItem}>
        <img
          src={props.isDarkMode ? props.DarkModeIcon : props.LightModeIcon}
          alt="personalInfoIcon"
        />
        <p className={props.isDarkMode ? "textDarkMode" : "textLightMode"}>
          {props.info ? props.info : "Not Available"}
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
