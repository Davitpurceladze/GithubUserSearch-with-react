import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import UserSearchBar from "./Components/UserSearchBar/UserSearchBar";
import UserInfo from "./Components/UserInfo/UserInfo";
import axiosClient from "./axiosClient";
import { v4 as uuidv4 } from "uuid";
import { UserDataType } from "./userInterface";
import { FollowerType } from "./userInterface";
import { PersonalInfoType } from "./userInterface";
import { iconObj } from "./assets/iconObj";

// need to catch errors
// responsive design

function App() {
  const [userName, setUserName] = useState<string>("octocat");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [data, setData] = useState<UserDataType | undefined>();
  const [date, setDate] = useState<string | undefined>();

  const [followersArray, setFollowersArray] = useState<FollowerType[]>([]);
  const [personalInfoArray, setPersonalInfoArray] = useState<
    PersonalInfoType[]
  >([]);

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
        LightModeIcon: iconObj.UserLocation,
        DarkModeIcon: iconObj.UserLocationDarkMode,
        info: data.location,
        id: uuidv4(),
      });

      personalInfoArr.push({
        LightModeIcon: iconObj.UserLink,
        DarkModeIcon: iconObj.UserLinkDarkMode,
        info: data.blog,
        id: uuidv4(),
      });

      personalInfoArr.push({
        LightModeIcon: iconObj.UserTwitter,
        DarkModeIcon: iconObj.UserTwitterDarkMode,
        info: data.twitter_username,
        id: uuidv4(),
      });

      personalInfoArr.push({
        LightModeIcon: iconObj.UserCompany,
        DarkModeIcon: iconObj.UserCompanyDarkMode,
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
