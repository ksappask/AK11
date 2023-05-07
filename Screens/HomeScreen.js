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
import Style from "../Style";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
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
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
