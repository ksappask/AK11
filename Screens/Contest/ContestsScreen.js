import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Style from "../../Style";
import ContestsList from "./ContestsList";

const ContestsScreen = () => {
  return (
    <SafeAreaView style={Style.bg}>
      <ScrollView>
        <ContestsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContestsScreen;

const styles = StyleSheet.create({});
