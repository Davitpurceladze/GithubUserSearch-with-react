import "./App.css";
import { useState } from "react";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import SearchIcon from "./assets/icon-search.svg";
// import axiosClient from "./axiosClient";

function App() {
  const [userName, setUserName] = useState<string>();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleUserName = (userNameValue: string) => {
    console.log(userNameValue);
    setUserName(userNameValue);
  };

  // sent request to github
  // const searchUser = async () => {
  //   const response = await axiosClient.get(userName);
  //   console.log(response);
  // };

  // console.log(isDarkMode);

  return (
    <div className={isDarkMode ? "app appDarkMode" : "app  appLightMode"}>
      {/* title and dark/light switcher */}
      <div className="title">
        <p
          className={
            isDarkMode
              ? "titleText titleTextDarkMode"
              : "titleText titleTextLightMode"
          }
        >
          devfinder
        </p>
        <div
          className="darkModeSwitcher"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? (
            <div className="darkModeSwitcher">
              <p>LIGHT</p>
              <img src={SunIcon} alt="SunIcon" />
            </div>
          ) : (
            <div className="darkModeSwitcher">
              <p>DARK</p>
              <img src={MoonIcon} alt="MoonIcon" />
            </div>
          )}
        </div>
      </div>
      {/* userSearchBar */}
      <div
        // className="userSearchBar contentBackgroundLightMode"
        className={
          isDarkMode
            ? "userSearchBar contentBackgroundDarkMode"
            : "userSearchBar contentBackgroundLightMode"
        }
      >
        <img src={SearchIcon} alt="SearchIcon" className="userSearchIcon" />
        <input
          className={
            isDarkMode
              ? "userInput contentBackgroundDarkMode textDarkMode"
              : "userInput contentBackgroundLightMode textLightMode"
          }
          placeholder="Search GitHub username…"
          type="text"
          name="userSearch"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            handleUserName(e.target.value);
          }}
        />
        <button
          className="userSearchButton"
          onClick={() => {
            // searchUser();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
