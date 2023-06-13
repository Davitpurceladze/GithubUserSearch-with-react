import "./App.css";
import { useState } from "react";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import SearchIcon from "./assets/icon-search.svg";
import UserIcon from "./assets/Oval.svg";
import UserLocation from "./assets/icon-location.svg";
import UserLocationDarkMode from "./assets/icon-location-DarkMode.svg";
import UserLink from "./assets/icon-website.svg";
import UserLinkDarkMode from "./assets/icon-website-DarkMode.svg";
import UserTwitter from "./assets/icon-twitter.svg";
import UserTwitterDarkMode from "./assets/icon-twitter-DarkMode.svg";
import UserCompany from "./assets/icon-company.svg";
import UserCompanyDarkMode from "./assets/icon-company-DarkMode.svg";
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
      {/* <div className="userInfoContainer contentBackgroundLightMode"> */}
      <div
        className={
          isDarkMode
            ? "userInfoContainer contentBackgroundDarkMode"
            : "userInfoContainer contentBackgroundLightMode"
        }
      >
        {/* userInfo */}
        <div className="userIconAndNameContainer">
          <div className="userIcon">
            <img src={UserIcon} alt="UserIcon" />
          </div>
          <div className="userNameContainer">
            {/* <p className="userName textDarkMode">The Octocat</p> */}
            <p className={isDarkMode ? "userName textDarkMode" : "userName  "}>
              The Octocat
            </p>

            <p className="userLink">@octocat</p>
            {/* <p className="userJoined">Joined 25 Jan 2011</p> */}
            <p
              className={
                isDarkMode
                  ? " textDarkMode userJoined  "
                  : "textLightMode userJoined  "
              }
            >
              Joined 25 Jan 2011
            </p>
          </div>
        </div>
        <div className="userInfo">
          {/* <div className="userBio"> */}
          <div
            className={
              isDarkMode ? "userBio textDarkMode" : "userBio textLightMode"
            }
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          {/* <div className="userFollowers userFollowersLightModeBackground"> */}
          <div
            className={
              isDarkMode
                ? "userFollowers userFollowersDarkModeBackground"
                : "userFollowers userFollowersLightModeBackground"
            }
          >
            <div>
              <div
                className={
                  isDarkMode ? "repos textDarkMode" : "repos textLightMode"
                }
              >
                Repos
              </div>
              <p className={isDarkMode ? "textDarkMode" : ""}>8</p>
            </div>
            <div>
              <div
                className={
                  isDarkMode
                    ? "followers textDarkMode"
                    : "followers textLightMode"
                }
              >
                Followers
              </div>
              <p className={isDarkMode ? "textDarkMode" : ""}>3934</p>
            </div>
            <div>
              <div
                className={
                  isDarkMode
                    ? "following textDarkMode"
                    : "following textLightMode"
                }
              >
                Following
              </div>
              <p className={isDarkMode ? "textDarkMode" : ""}>56</p>
            </div>
          </div>
          {/* footer */}
          <div className="footerContainer">
            <div className="footerItem">
              <img
                src={isDarkMode ? UserLocationDarkMode : UserLocation}
                alt="UserLocation"
                className="UserLocation"
              />
              <p className={isDarkMode ? "textDarkMode" : "textLightMode"}>
                san francisco
              </p>
            </div>
            <div className="footerItem">
              <img
                src={isDarkMode ? UserLinkDarkMode : UserLink}
                alt="UserLocation"
              />
              <p className={isDarkMode ? "textDarkMode" : "textLightMode"}>
                san francisco
              </p>
            </div>
            <div className="footerItem">
              <img
                src={isDarkMode ? UserTwitterDarkMode : UserTwitter}
                alt="UserLocation"
              />
              <p className={isDarkMode ? "textDarkMode" : "textLightMode"}>
                san francisco
              </p>
            </div>
            <div className="footerItem">
              <img
                src={isDarkMode ? UserCompanyDarkMode : UserCompany}
                alt="UserLocation"
              />
              <p className={isDarkMode ? "textDarkMode" : "textLightMode"}>
                san francisco
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
