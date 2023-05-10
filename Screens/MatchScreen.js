import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import ContestsScreen from "./ContestsScreen";
import MyContestsScreen from "./MyContestsScreen";
import MyTeamsScreen from "./MyTeamsScreen";

import Header from "./Header";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Style from "../Style";
import MatchHeader from "./MatchHeader";
import MyMatchesScreen from "./MyMatchesScreen";

const Tab = createMaterialTopTabNavigator();

const MatchScreen = () => {
  return (
    <>
      <View>
        <MatchHeader />
      </View>
      <Tab.Navigator
        initialRouteName="Contests"
        screenOptions={{
          tabBarActiveTintColor: "#662d91",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
          tabBarStyle: { backgroundColor: "#F0F0F0" },
          tabBarIndicatorStyle: { backgroundColor: "#662d91" },
        }}
      >
        <Tab.Screen
          name="Contests"
          component={ContestsScreen}
          options={{ tabBarLabel: "Contests" }}
        />
        <Tab.Screen
          name="MyContestsScreen"
          component={MyContestsScreen}
          options={{ tabBarLabel: "My Contests" }}
        />
        <Tab.Screen
          name="MyTeams"
          component={MyTeamsScreen}
          options={{ tabBarLabel: "My Teams" }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({});
