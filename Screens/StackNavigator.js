import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import WalletScreen from "./Wallet/WalletScreen";
import MyMatchesScreen from "./MyMatches/MyMatchesScreen";
import MoreScreen from "./More/MoreScreen";

import HomeBottomTab from "./HomeBottomTab";
import MatchScreen from "./Contest/MatchScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import NotificationsScreen from "./Notification/NotificationsScreen";
import CreateTeamScreen from "./Contest/CreateTeamScreen";
import LoginScreen from "./Auth/LoginScreen";
import MainHomeScreen from "./MainHomeScreen";
import RegisterScreen from "./Auth/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import { addAuthInfo } from "../Screens/Slices/AuthInfoSlice";
import AuthStack from "./AuthStack";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainHomeScreen"
          component={MainHomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeBottomTab"
          component={HomeBottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MatchScreen"
          component={MatchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WalletScreen"
          component={WalletScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTeamScreen"
          component={CreateTeamScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
