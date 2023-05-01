import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
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
      <SafeAreaView style={{ backgroundColor: "#F0F0F0" }}>
        <View>
          <Header />
          <SportsTab />
        </View>
        <ScrollView style={{ marginBottom: "auto" }}>
          <Carousel />
          <MatchList />
        </ScrollView>

        <BottomNavBar />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
