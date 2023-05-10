import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Style from "../Style";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MatchHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="chevron-back-circle-sharp"
            size={40}
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
          <Pressable
            onPress={() => navigation.navigate("WalletScreen")}
            style={{ paddingRight: 20 }}
          >
            <Ionicons name="md-wallet-sharp" size={30} color="#662d91" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("NotificationsScreen")}>
            <Ionicons name="notifications" size={30} color="#662d91" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MatchHeader;

const styles = StyleSheet.create({});
