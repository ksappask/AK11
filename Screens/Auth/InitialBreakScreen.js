import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import LoginScreen from "./LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const initialLogin = async () => {
    console.log("Welcome Screen Initial Login clicked");

    try {
      let authToken = await AsyncStorage.getItem("authToken");
      console.log("Auth Token " + authToken);
      if (authToken !== null) {
        console.log(" AUthtoken Present login authtoken " + authToken);
        navigation.navigate("HomeBottomTab");
      } else {
        navigation.navigate("LoginScreen");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initialLogin();
  }, []);

  return
  (<></>);
};

export default WelcomeScreen;
