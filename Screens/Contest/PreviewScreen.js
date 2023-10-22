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
import PreviewScreenPlayerList from "./PreviewScreenPlayerList";

const PreviewScreen = () => {
  const navigation = useNavigation();
  //require("../../assets/Pitch.png")
  const image = {
    uri: "https://imgtr.ee/images/2023/09/16/84a771af201b8ca2f34289197f9b66d7.png",
  };

  const initialPlayerList = useSelector(
    (state) => state.createTeam.initialPlayersList
  );

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View style={{ backgroundColor: "#4a4948", paddingBottom: 10 }}>
          <Pressable
            style={{ marginTop: 10, marginBottom: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={image}
            style={{
              width: "auto",
              height: "auto",
              aspectRatio: "1/2",
            }}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginTop: 20,
                marginBottom: 40,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>WICKET-KEEPERS</Text>
              </View>

              <PreviewScreenPlayerList
                initialPlayerList={initialPlayerList[0].wicketKeeper}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>BATSMAN</Text>
              </View>

              <PreviewScreenPlayerList
                initialPlayerList={initialPlayerList[0].batsman}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>ALL-ROUNDERS</Text>
              </View>

              <PreviewScreenPlayerList
                initialPlayerList={initialPlayerList[0].allRounder}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>BOWLERS</Text>
              </View>

              <PreviewScreenPlayerList
                initialPlayerList={initialPlayerList[0].bowler}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({});
