import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Style from "../Style";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MatchHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.safeArea}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="chevron-back-circle-sharp"
            size={30}
            color="#662d91"
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Pressable>
            <Ionicons name="notifications" size={25} color="#662d91" />
          </Pressable>
          <Pressable>
            <Ionicons name="md-wallet-sharp" size={25} color="#662d91" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MatchHeader;

const styles = StyleSheet.create({});
