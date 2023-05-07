import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Wallet = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("More")}>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
