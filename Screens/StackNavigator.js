import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import WalletScreen from "./WalletScreen";
import MyMatchesScreen from "./MyMatchesScreen";
import MoreScreen from "./MyMatchesScreen";
import MainContainer from "./MainContainer";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wallet"
          component={WalletScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyMatches"
          component={MyMatchesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="More"
          component={MoreScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
