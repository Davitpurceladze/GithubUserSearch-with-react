import styles from "./UserSearchBar.module.css";
import SearchIcon from "../../assets/icon-search.svg";

interface Props {
  isDarkMode: boolean;
  handleUserName: (userNameValue: string) => void;
  searchUser: () => void;
}

function UserSearchBar(props: Props) {
  return (
    <div
      className={
        props.isDarkMode
          ? `${styles.userSearchBar} contentBackgroundDarkMode`
          : `${styles.userSearchBar} contentBackgroundLightMode`
      }
    >
      <img
        src={SearchIcon}
        alt="SearchIcon"
        className={styles.userSearchIcon}
      />
      <input
        className={
          props.isDarkMode
            ? ` ${styles.userInput} contentBackgroundDarkMode textDarkMode `
            : ` ${styles.userInput} contentBackgroundLightMode textLightMode`
        }
        placeholder="Search GitHub username…"
        type="text"
        name="userSearch"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          props.handleUserName(e.target.value);
        }}
      />
      <button
        className={styles.userSearchButton}
        onClick={() => {
          props.searchUser();
        }}
      >
        Search
      </button>
    </div>
  );
}

export default UserSearchBar;
