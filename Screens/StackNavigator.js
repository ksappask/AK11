import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
import AuthStack from "./AuthStack";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AuthStack />
       {/* <Stack.Navigator>
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
  </Stack.Navigator>*/}

    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
