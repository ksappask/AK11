import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import Style from "../../Style";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const PreviewScreenPlayerList = (initialPlayerList) => {
  const data = initialPlayerList.initialPlayerList;

  return (
    <View
      style={{
        marginTop: 25,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((item, index) => (
        <>
          {item.isSelected === "true" ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: item.playerImageUrl,
                }}
                style={{
                  width: 35,
                  height: 35,

                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: 100,
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
            </View>
          ) : null}
        </>
      ))}
    </View>
  );
};

export default PreviewScreenPlayerList;
