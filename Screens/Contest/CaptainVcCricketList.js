import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const CaptainVcCricketList = ({ data, key }) => {
  return (
    <View
      style={{
        borderColor: "black",
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "center",
          backgroundColor: "#F0F0F0",
          borderBottomColor: "darkgray",
          borderBottomWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 5,
        }}
      >
        <View style={{ width: "10%" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
            }}
            source={{
              uri: data.playerImageUrl,
            }}
          ></Image>
          <Text>{data.teamName}</Text>
        </View>

        <View style={{ marginLeft: "5%", width: "28%" }}>
          <Text style={{ paddingBottom: 5 }}>{data.name}</Text>
          <Text style={{ fontSize: 13, paddingBottom: 5 }}>
            {data.points} points
          </Text>
        </View>

        <View
          style={{
            marginLeft: "5%",
            width: "28%",
            flexDirection: "column",
          }}
        >
          <Pressable
            onPress={() => {}}
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 30,
              height: 30,
              width: 30,
            }}
          >
            <Text style={{ marginLeft: 8, marginTop: 5.5 }}>C</Text>
          </Pressable>
          <Text style={{ fontSize: 13, paddingBottom: 5 }}>
            {data.selectedByCaptain} %
          </Text>
        </View>

        <View
          style={{
            marginLeft: "5%",
            width: "28%",
            flexDirection: "column",
          }}
        >
          <Pressable
            onPress={() => {
              selectViceCaptain();
            }}
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 30,
              height: 30,
              width: 30,
            }}
          >
            <Text style={{ marginLeft: 4.5, marginTop: 5.5 }}>VC</Text>
          </Pressable>
          <Text style={{ fontSize: 13, paddingBottom: 5 }}>
            {data.selectedByViceCaptain} %
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CaptainVcCricketList;

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  txt1: {
    color: "white",
    paddingLeft: 10,
  },
});
