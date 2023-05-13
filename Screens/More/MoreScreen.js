import { StyleSheet, Text, View } from "react-native";
import React from "react";

const More = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>More</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
