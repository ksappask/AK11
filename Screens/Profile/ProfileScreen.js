import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import SecondHeader from "../Header/SecondHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Style from "../../Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SecondHeader />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            padding: 50,
          }}
        >
          <Pressable>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              source={{
                uri: "https://yt3.ggpht.com/yti/AHyvSCBEAGVOPHCpKNl-5nlT4ByL2nNoOqmpE0j65hxHFw=s88-c-k-c0x00ffffff-no-rj-mo",
              }}
            ></Image>
          </Pressable>
        </View>

        <View
          style={{
            padding: 20,
          }}
        >
          <Pressable style={Style.profileButtons}>
            <MaterialCommunityIcons
              name="view-dashboard-edit"
              size={24}
              color="#662d91"
            />
            <Text style={Style.profileText}>Dashboard</Text>
          </Pressable>

          <Pressable style={Style.profileButtons}>
            <Ionicons name="settings" size={24} color="#662d91" />
            <Text style={Style.profileText}>Info & Settings</Text>
          </Pressable>

          <Pressable style={Style.profileButtons}>
            <Ionicons name="people" size={24} color="#662d91" />
            <Text style={Style.profileText}>Refer & Earn</Text>
          </Pressable>

          <Pressable style={Style.profileButtons}>
            <MaterialCommunityIcons name="logout" size={24} color="#662d91" />
            <Text style={Style.profileText}>Logout</Text>
          </Pressable>

          <Pressable style={Style.profileButtons}>
            <MaterialIcons name="delete" size={24} color="#662d91" />
            <Text style={Style.profileText}>Delete Account</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
