import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "./Header";
import SportsTab from "./SportsTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UpcomingScren from "./UpcomingScreen";
import LiveScreen from "./LiveScreen";
import CompletedScreen from "./CompletedScreen";
import Style from "../Style";
const Tab = createMaterialTopTabNavigator();

const MyMatchesScreen = ({ navigation }) => {
  return (
    <>
      <View style={Style.safeArea}>
        <Header />
        <SportsTab />
      </View>
      <Tab.Navigator
        initialRouteName="Upcoming"
        screenOptions={{
          tabBarActiveTintColor: "#662d91",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
          tabBarStyle: { backgroundColor: "#F0F0F0" },
          tabBarIndicatorStyle: { backgroundColor: "#662d91" },
        }}
      >
        <Tab.Screen
          name="Upcoming"
          component={UpcomingScren}
          options={{ tabBarLabel: "Upcoming" }}
        />
        <Tab.Screen
          name="Notifications"
          component={LiveScreen}
          options={{ tabBarLabel: "Live" }}
        />
        <Tab.Screen
          name="Profile"
          component={CompletedScreen}
          options={{ tabBarLabel: "Completed" }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MyMatchesScreen;

const styles = StyleSheet.create({});
