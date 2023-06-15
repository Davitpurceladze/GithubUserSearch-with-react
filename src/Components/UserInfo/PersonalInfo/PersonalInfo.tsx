import styles from "./PersonalInfo.module.css";

import UserLocation from "../../../assets/icon-location.svg";
import UserLocationDarkMode from "../../../assets/icon-location-DarkMode.svg";
import UserLink from "../../../assets/icon-website.svg";
import UserLinkDarkMode from "../../../assets/icon-website-DarkMode.svg";
import UserTwitter from "../../../assets/icon-twitter.svg";
import UserTwitterDarkMode from "../../../assets/icon-twitter-DarkMode.svg";
import UserCompany from "../../../assets/icon-company.svg";
import UserCompanyDarkMode from "../../../assets/icon-company-DarkMode.svg";

interface Props {
  isDarkMode: boolean;
}

function PersonalInfo(props: Props) {
  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.personalInfoItem}>
        <img
          src={props.isDarkMode ? UserLocationDarkMode : UserLocation}
          alt="UserLocation"
        />
        <p className={props.isDarkMode ? "textDarkMode" : "textLightMode"}>
          san francisco
        </p>
      </div>
      <div className={styles.personalInfoItem}>
        <img
          src={props.isDarkMode ? UserLinkDarkMode : UserLink}
          alt="UserLink"
        />
        <p className={props.isDarkMode ? "textDarkMode" : "textLightMode"}>
          san francisco
        </p>
      </div>
      <div className={styles.personalInfoItem}>
        <img
          src={props.isDarkMode ? UserTwitterDarkMode : UserTwitter}
          alt="UserTwitter"
        />
        <p className={props.isDarkMode ? "textDarkMode" : "textLightMode"}>
          san francisco
        </p>
      </div>
      <div className={styles.personalInfoItem}>
        <img
          src={props.isDarkMode ? UserCompanyDarkMode : UserCompany}
          alt="UserCompany"
        />
        <p className={props.isDarkMode ? "textDarkMode" : "textLightMode"}>
          san francisco
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
