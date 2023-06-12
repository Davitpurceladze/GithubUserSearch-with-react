import "./App.css";
import { useState } from "react";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import SearchIcon from "./assets/icon-search.svg";
import UserIcon from "./assets/Oval.svg";
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
      {/* userInfo */}
      <div className="userInfoContainer contentBackgroundLightMode">
        <div className="userIconAndNameContainer">
          <div className="userIcon">
            <img src={UserIcon} alt="UserIcon" />
          </div>
          <div className="userNameContainer">
            <p className="userName">The Octocat</p>
            <p className="userLink">@octocat</p>
            <p className="userJoined">Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="userInfo">
          <div className="userBio">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="userFollowers">
            <div>
              <div className="repos">Repos</div>
              <p>8</p>
            </div>
            <div>
              <div className="followers">Followers</div>
              <p>3934</p>
            </div>
            <div>
              <div className="following">Following</div>
              <p>56</p>
            </div>
          </div>
          <div>four icons</div>
        </div>
      </div>
    </div>
  );
}

export default App;
