import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ElevenProgressBar = ({ count }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",

        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 18,
          width: 18,
          borderRadius: 7,
          transform: [{ skewX: "0deg" }, { skewY: "0deg" }],
        }}
      >
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          {}
        </Text>
      </View>
    </View>
  );
};

export default ElevenProgressBar;

const styles = StyleSheet.create({});
