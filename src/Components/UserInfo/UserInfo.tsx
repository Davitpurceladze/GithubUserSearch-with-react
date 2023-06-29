import styles from "./UserInfo.module.css";
import Followers from "./Followers/Followers";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import { UserData } from "../../userInterface";
import { FollowerType } from "../../userInterface";
import { PersonalInfoType } from "../../userInterface";

interface Props {
  isDarkMode: boolean;
  data: UserData | undefined;
  followersArray: FollowerType[];
  personalInfoArray: PersonalInfoType[];
  date: string | undefined;
}

const aboutBio = (data: any) => {
  if (data) {
    if (data.bio === null) {
      return "This profile has no bio";
    } else {
      return data.bio;
    }
  }
};

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
          <img
            className={styles.avatarIcon}
            src={props.data ? props.data.avatar_url : ""}
            alt="avatarIcon"
          />
        </div>
        <div className={styles.userNameContainer}>
          <p
            className={
              props.isDarkMode
                ? `${styles.userName} textDarkMode`
                : `${styles.userName}`
            }
          >
            {props.data ? props.data.name : "The Octocat"}
          </p>

          <p className={styles.userLink}>
            {`@${props.data ? props.data.login : "@octocat"}`}
          </p>
          <p
            className={
              props.isDarkMode
                ? `textDarkMode ${styles.userJoined}`
                : `textLightMode ${styles.userJoined}`
            }
          >
            {props.date}
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
          <p>{aboutBio(props.data)}</p>
        </div>

        {/* followers */}
        <div
          className={
            props.isDarkMode
              ? `${styles.userFollowersContainer} ${styles.userFollowersDarkModeBackground}`
              : `${styles.userFollowersContainer} ${styles.userFollowersLightModeBackground}`
          }
        >
          {props.followersArray.map((item: FollowerType) => (
            <Followers
              isDarkMode={props.isDarkMode}
              name={item.name}
              amount={item.amount}
              key={item.id}
            />
          ))}
        </div>

        {/* personal information */}
        {props.personalInfoArray.map((item: PersonalInfoType) => (
          <PersonalInfo
            isDarkMode={props.isDarkMode}
            LightModeIcon={item.LightModeIcon}
            DarkModeIcon={item.DarkModeIcon}
            info={item.info}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
