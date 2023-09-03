import { Text, View } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import Style from "../../Style";
import React from "react";
import Header from "../Header/Header";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const More = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View>
          <Header />
        </View>
        <ScrollView>
          <View
            style={{
              paddingBottom: 200,
              borderRadius: 7,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 50,
            }}
          >
            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <MaterialIcons
                    name="quick-contacts-mail"
                    size={24}
                    color="#662d91"
                  />
                  <Text style={{ marginLeft: 10 }}>Contact Us</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="#662d91" />
              </View>
            </View>

            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="information"
                    size={24}
                    color="#662d91"
                  />
                  <Text style={{ marginLeft: 10 }}>Fantasy Points System</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="#662d91" />
              </View>
            </View>

            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="file-document-edit"
                    size={24}
                    color="#662d91"
                  />
                  <Text style={{ marginLeft: 10 }}>Terms & Conditions</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="#662d91" />
              </View>
            </View>

            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <MaterialIcons name="privacy-tip" size={24} color="#662d91" />
                  <Text style={{ marginLeft: 10 }}>Privacy Policy</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="#662d91" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default More;

const innerStyles = StyleSheet.create({
  listButton: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
