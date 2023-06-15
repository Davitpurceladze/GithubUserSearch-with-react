import styles from "./UserInfo.module.css";
import Followers from "./Followers/Followers";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import UserIcon from "../../assets/Oval.svg";

interface Props {
  isDarkMode: boolean;
}

function UserInfo(props: Props) {
  return (
    <div
      className={
        props.isDarkMode
          ? `${styles.userInfoContainer} contentBackgroundDarkMode`
          : `${styles.userInfoContainer} contentBackgroundLightMode`
      }
    >
      <div className={styles.userIconAndNameContainer}>
        <div>
          <img src={UserIcon} alt="UserIcon" />
        </div>
        <div className={styles.userNameContainer}>
          <p
            className={
              props.isDarkMode
                ? `${styles.userName} textDarkMode`
                : `${styles.userName}`
            }
          >
            The Octocat
          </p>

          <p className={styles.userLink}>@octocat</p>
          <p
            className={
              props.isDarkMode
                ? `textDarkMode ${styles.userJoined}`
                : `textLightMode ${styles.userJoined}`
            }
          >
            Joined 25 Jan 2011
          </p>
        </div>
      </div>

      <div className={styles.userInfo}>
        <div
          className={
            props.isDarkMode
              ? `${styles.userBio} textDarkMode`
              : `${styles.userBio} textLightMode`
          }
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <Followers isDarkMode={props.isDarkMode} />
        <PersonalInfo isDarkMode={props.isDarkMode} />
      </div>
    </div>
  );
}

export default UserInfo;
