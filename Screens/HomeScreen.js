import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MatchList from "./MatchList";
import Header from "./Header";
import SportsTab from "./SportsTab";
import { useNavigation } from "@react-navigation/native";
import Carousel from "./Carousel";
import BottomNavBar from "./BottomNavBar";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header />
          <SportsTab />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: "auto" }}
        >
          <Carousel />
          <MatchList />
        </ScrollView>

        <BottomNavBar />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F0F0F0",
    paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
});
