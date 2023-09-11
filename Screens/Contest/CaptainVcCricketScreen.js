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
import CaptainVcCricketList from "./CaptainVcCricketList";
const CaptainVcCricketScreen = () => {
  const navigation = useNavigation();
  const selectedPlayerData = useSelector(
    (state) => state.createTeam.selectedPlayerData
  );

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View style={{ backgroundColor: "#662d91", paddingBottom: 10 }}>
          <Pressable
            style={{ marginTop: 10, marginBottom: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </Pressable>
        </View>
        <ScrollView style={{ marginBottom: 150 }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
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

          <View>
            {selectedPlayerData[0].wicketKeeper.map((item, index) => (
              <CaptainVcCricketList key={index} data={item} />
            ))}
          </View>

          <View>
            {selectedPlayerData[0].batsman.map((item, index) => (
              <CaptainVcCricketList key={index} data={item} />
            ))}
          </View>

          <View>
            {selectedPlayerData[0].allRounder.map((item, index) => (
              <CaptainVcCricketList key={index} data={item} />
            ))}
          </View>

          <View>
            {selectedPlayerData[0].bowler.map((item, index) => (
              <CaptainVcCricketList key={index} data={item} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CaptainVcCricketScreen;

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  txt1: {
    color: "white",
    paddingLeft: 10,
  },
});
