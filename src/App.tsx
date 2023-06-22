import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import UserSearchBar from "./Components/UserSearchBar/UserSearchBar";
import UserInfo from "./Components/UserInfo/UserInfo";
import axiosClient from "./axiosClient";
import { v4 as uuidv4 } from "uuid";

import UserLocation from "./assets/icon-location.svg";
import UserLocationDarkMode from "./assets/icon-location-DarkMode.svg";
import UserLink from "./assets/icon-website.svg";
import UserLinkDarkMode from "./assets/icon-website-DarkMode.svg";
import UserTwitter from "./assets/icon-twitter.svg";
import UserTwitterDarkMode from "./assets/icon-twitter-DarkMode.svg";
import UserCompany from "./assets/icon-company.svg";
import UserCompanyDarkMode from "./assets/icon-company-DarkMode.svg";

function App() {
  const [userName, setUserName] = useState<string>("octocat");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [data, setData] = useState<object | undefined>();
  const [date, setDate] = useState<any>();

  const [followersArray, setFollowersArray] = useState<Array>([]);
  const [personalInfoArray, setPersonalInfoArray] = useState<Array>([]);

  useEffect(() => {
    const followersArr = [];
    const personalInfoArr = [];
    if (data !== undefined) {
      // followersArray
      followersArr.push({
        name: "Repos",
        amount: data.public_repos,
        id: uuidv4(),
      });

      followersArr.push({
        name: "Followers",
        amount: data.followers,
        id: uuidv4(),
      });

      followersArr.push({
        name: "Following",
        amount: data.following,
        id: uuidv4(),
      });

      // personalInfoArray
      personalInfoArr.push({
        LightModeIcon: UserLocation,
        DarkModeIcon: UserLocationDarkMode,
        info: data.location,
        id: uuidv4(),
      });

      personalInfoArr.push({
        LightModeIcon: UserLink,
        DarkModeIcon: UserLinkDarkMode,
        info: data.blog,
        id: uuidv4(),
      });

      personalInfoArr.push({
        LightModeIcon: UserTwitter,
        DarkModeIcon: UserTwitterDarkMode,
        info: data.twitter_username,
        id: uuidv4(),
      });

      personalInfoArr.push({
        LightModeIcon: UserCompany,
        DarkModeIcon: UserCompanyDarkMode,
        info: data.company,
        id: uuidv4(),
      });

      const restApiDateString = data.created_at;
      const date = new Date(restApiDateString);
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setDate(formattedDate);
    }

    setPersonalInfoArray(personalInfoArr);

    setFollowersArray(followersArr);
  }, [data]);

  useEffect(() => {
    searchUser();
  }, []);

  const handleUserName = (userNameValue: string) => {
    setUserName(userNameValue);
  };

  const handleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  // sent request to API
  const searchUser = async () => {
    const response = await axiosClient.get(userName);
    setData(response.data);
  };

  return (
    <div className={isDarkMode ? "app appDarkMode" : "app  appLightMode"}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <UserSearchBar
        isDarkMode={isDarkMode}
        handleUserName={handleUserName}
        searchUser={searchUser}
      />
      <UserInfo
        isDarkMode={isDarkMode}
        date={date}
        data={data}
        followersArray={followersArray}
        personalInfoArray={personalInfoArray}
      />
    </div>
  );
}

export default App;
