import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import UserSearchBar from "./Components/UserSearchBar/UserSearchBar";
import UserInfo from "./Components/UserInfo/UserInfo";

function App() {
  const [userName, setUserName] = useState<string>();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleUserName = (userNameValue: string) => {
    console.log(userNameValue);
    setUserName(userNameValue);
  };

  const handleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  // sent request to github
  // const searchUser = async () => {
  //   const response = await axiosClient.get(userName);
  //   console.log(response);
  // };

  // console.log(isDarkMode);

  return (
    <div className={isDarkMode ? "app appDarkMode" : "app  appLightMode"}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <UserSearchBar isDarkMode={isDarkMode} handleUserName={handleUserName} />
      <UserInfo isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
