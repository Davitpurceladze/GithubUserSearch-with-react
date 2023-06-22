import styles from "./Followers.module.css";

interface Props {
  isDarkMode: boolean;
  name: string;
  amount: number;
}

function Followers(props: Props) {
  return (
    <div
      className={
        props.isDarkMode
          ? `${styles.followersItem} textDarkMode`
          : `${styles.followersItem} textLightMode`
      }
    >
      <div>{props.name}</div>
      <p
        className={
          props.isDarkMode ? " textDarkMode" : styles.followersParagraph
        }
      >
        {props.amount}
      </p>
    </div>
  );
}

export default Followers;
