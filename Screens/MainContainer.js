import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import BottomNavBar from "./BottomNavBar";

const MainContainer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
