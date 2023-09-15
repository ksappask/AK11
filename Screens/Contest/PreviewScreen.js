import React, { useState } from "react";
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

const PreviewScreen = () => {
  const navigation = useNavigation();
  //require("../../assets/Pitch.png")
  const image = {
    uri: "https://as1.ftcdn.net/v2/jpg/01/11/97/34/1000_F_111973415_ERTPgrYkGkyoYHWPYiiIUTjRZmR9dD2h.jpg",
  };
  const { width } = Dimensions.get("window");
  https: return (
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
        <View>
          <Text>Hi AKash</Text>
        </View>
        <ScrollView>
          <ImageBackground
            source={require("../../assets/Pitch.png")}
            style={{
              width: "100%",
              aspectRatio: 0.6,
            }}
          >
            <View
              style={{
                marginTop: 25,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={{ color: "white" }}>WICKET-KEEPERS</Text>
            </View>
            <View
              style={{
                marginTop: 25,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              }}
            >
              <Image
                source={{
                  uri: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244818/devon-conway.jpg",
                }}
                style={{
                  width: 70,
                  height: 70,

                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 50,
                }}
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
