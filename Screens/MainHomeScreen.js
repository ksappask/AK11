import React, { useEffect, useState } from "react";

import Style from "../Style";
import HomeScreen from "./HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { addAuthInfo } from "../Screens/Slices/AuthInfoSlice";
import LoginScreen from "./Auth/LoginScreen";
import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const MainHomeScreen = () => {
  const authInformation = useSelector((state) => state.authInfo);
  const authToken = authInformation.authInfo.authToken;
  const isLoading = authInformation.authInfo.isLoading;
  const [authInfo, setAuthInfo] = useState(false);

  const isLoggedin = async () => {
    try {
      let authToken = await AsyncStorage.getItem("authToken");
      console.log("main screeen  " + authToken);
      if (authToken !== null) {
        setAuthInfo(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedin();
  }, []);

  return <>{authInfo === false ? <LoginScreen /> : <HomeScreen />}</>;
};
export default MainHomeScreen;
