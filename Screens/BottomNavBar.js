import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const BottomNavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  return (
    <SafeAreaView>
      <Pressable
        style={{
          backgroundColor: "#F0F0F0",
          padding: 20,
          height: 70,
          width: "auto",
          margin: "auto",
          marginBottom: "auto",
          borderRadius: 7,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => setSelectedMenu("Home")}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="ios-home"
            size={24}
            color={selectedMenu === "Home" ? "#662d91" : "gray"}
          />
          <Text
            style={
              selectedMenu === "Home"
                ? { color: "#662d91", fontWeight: "500" }
                : { color: "gray", fontWeight: "500" }
            }
          >
            Home
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedMenu("MyMatches")}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="trophy"
            size={24}
            color={selectedMenu === "MyMatches" ? "#662d91" : "gray"}
          />
          <Text
            style={
              selectedMenu === "MyMatches"
                ? { color: "#662d91", fontWeight: "500" }
                : { color: "gray", fontWeight: "500" }
            }
          >
            My Matches
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedMenu("Wallet")}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="ios-wallet"
            size={24}
            color={selectedMenu === "Wallet" ? "#662d91" : "gray"}
          />
          <Text
            style={
              selectedMenu === "Wallet"
                ? { color: "#662d91", fontWeight: "500" }
                : { color: "gray", fontWeight: "500" }
            }
          >
            Wallet
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedMenu("More")}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="more-vert"
            size={24}
            color={selectedMenu === "More" ? "#662d91" : "gray"}
          />
          <Text
            style={
              selectedMenu === "More"
                ? { color: "#662d91", fontWeight: "500" }
                : { color: "gray", fontWeight: "500" }
            }
          >
            More
          </Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({});
