import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import WalletScreen from "./WalletScreen";
import MyMatchesScreen from "./MyMatchesScreen";
import MoreScreen from "./MyMatchesScreen";

import HomeBottomTab from "./HomeBottomTab";
import MatchScreen from "./MatchScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
