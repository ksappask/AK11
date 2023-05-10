import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "#F0F0F0",
    paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
  bg: {
    backgroundColor: "#F0F0F0",
  },
});
