import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ScrollPlayerList = (props) => {
  let playerData = props.playerData;
  return (
    <>
      {playerData.map((item, index) => (
        <Pressable
          key={index}
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
                uri: item.playerImageUrl,
              }}
            ></Image>
            <Text>{item.teamName}</Text>
          </View>

          <View style={{ marginLeft: "5%", width: "25%" }}>
            <Text>{item.name}</Text>
            <Text>{item.selectedBy}</Text>
          </View>

          <View style={{ marginLeft: "15%", width: "5%" }}>
            <Text>{item.points}</Text>
          </View>
          <View style={{ marginLeft: "15%", width: "10%" }}>
            <Text>{item.credits}</Text>
          </View>
          <Pressable style={{ marginLeft: "5%", width: "10%" }}>
            <AntDesign name="plussquareo" size={24} color="#662d91" />
          </Pressable>
        </Pressable>
      ))}
    </>
  );
};

export default ScrollPlayerList;

const styles = StyleSheet.create({});
