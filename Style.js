import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "#F0F0F0",
    paddingTop: Platform.OS === "android" ? "10%" : 0,
  },
  bg: {
    backgroundColor: "#F0F0F0",
  },

  profileButtons: {
    flex: 1,
    borderBottomColor: "#662d91",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
  },

  profileText: {
    paddingLeft: 10,
  },
});
