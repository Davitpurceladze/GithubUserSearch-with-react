import styles from "./Followers.module.css";

interface Props {
  isDarkMode: boolean;
}

function Followers(props: Props) {
  return (
    <div
      className={
        props.isDarkMode
          ? `${styles.userFollowers} ${styles.userFollowersDarkModeBackground}`
          : `${styles.userFollowers} ${styles.userFollowersLightModeBackground}`
      }
    >
      <div>
        <div
          className={
            props.isDarkMode
              ? `${styles.repos} textDarkMode`
              : `${styles.repos} textLightMode`
          }
        >
          Repos
        </div>
        <p className={props.isDarkMode ? "textDarkMode" : ""}>8</p>
      </div>

      <div>
        <div
          className={
            props.isDarkMode
              ? `${styles.followers} textDarkMode`
              : `${styles.followers} textLightMode`
          }
        >
          Followers
        </div>
        <p className={props.isDarkMode ? "textDarkMode" : ""}>3934</p>
      </div>

      <div>
        <div
          className={
            props.isDarkMode
              ? `${styles.following} textDarkMode`
              : `${styles.following} textLightMode`
          }
        >
          Following
        </div>
        <p className={props.isDarkMode ? "textDarkMode" : ""}>56</p>
      </div>
    </div>
  );
}

export default Followers;
