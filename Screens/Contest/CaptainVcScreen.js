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
import Style from "../../Style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CaptainViceCaptainList from "./CaptainViceCaptainList";
const CaptainVcScreen = () => {
  const navigation = useNavigation();
  const initialPlayerList = useSelector(
    (state) => state.createTeam.initialPlayerList
  );

  let temp = initialPlayerList[0].wicketKeeper[0];

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View>
          <View style={{ backgroundColor: "#662d91", paddingBottom: 10 }}>
            <Pressable
              style={{ marginTop: 10, marginBottom: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={28} color="white" />
            </Pressable>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Choose your Captain and Vice Captain
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "250", marginTop: 10 }}>
                C gets 2X points, VC gets 1.5X points
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity>
                <Text>Points</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>%C by</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>%VC by</Text>
              </TouchableOpacity>
            </View>

            {initialPlayerList[0].wicketKeeper.map((item, index) => (
              <CaptainViceCaptainList key={index} data={item} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CaptainVcScreen;

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  txt1: {
    color: "white",
    paddingLeft: 10,
  },
});
