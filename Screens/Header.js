import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Header = () => {
  return (
    <SafeAreaView>
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
        <Pressable>
          <Image
            style={{ width: 40, height: 40, borderRadius: 25 }}
            source={{
              uri: "https://yt3.ggpht.com/yti/AHyvSCBEAGVOPHCpKNl-5nlT4ByL2nNoOqmpE0j65hxHFw=s88-c-k-c0x00ffffff-no-rj-mo",
            }}
          ></Image>
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#662d91" }}>
          AK11
        </Text>
        <Ionicons name="md-wallet-outline" size={30} color="#662d91" />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
