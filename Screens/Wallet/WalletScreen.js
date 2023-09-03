import { ScrollView, StyleSheet } from "react-native";
import { Pressable, Text, View, Image } from "react-native";
import Style from "../../Style";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../Header/Header";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const Wallet = ({ navigation }) => {
  const [totalBalance, setTotalBalance] = useState("0");
  const [totalDeposited, setTotalDeposited] = useState("0");
  const [totalWinnings, setTotalWinnings] = useState("0");
  const [totalBonus, setTotalBonus] = useState("0");

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
            <View style={Style.alignCenterColumn}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "gray",
                }}
              >
                Total Balance
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <FontAwesome name="rupee" size={18} color="black" />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  {totalBalance}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                  backgroundColor: "#662d91",
                  borderRadius: 20,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Add Cash
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
              <View>
                <Text>Deposited</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,

                  borderBottomColor: "darkgrey",
                  borderBottomWidth: 1,
                }}
              >
                <Text>{totalDeposited}</Text>
                <Feather name="info" size={14} color="black" />
              </View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
              <View>
                <Text>Winnings</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,

                  borderBottomColor: "darkgrey",
                  borderBottomWidth: 1,
                }}
              >
                <Text>{totalWinnings}</Text>
                <Feather name="info" size={14} color="black" />
              </View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
              <View style={Style.alignCenterRow}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: 10,
                    backgroundColor: "#662d91",
                    borderRadius: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "500",
                      width: 80,
                      textAlign: "center",
                    }}
                  >
                    Verify
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    backgroundColor: "#662d91",
                    borderRadius: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "500",
                      width: 80,
                      textAlign: "center",
                    }}
                  >
                    Withdraw
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
              <View>
                <Text>Bonus</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,

                  borderBottomColor: "darkgrey",
                  borderBottomWidth: 1,
                }}
              >
                <Text>{totalBonus}</Text>
                <Feather name="info" size={14} color="black" />
              </View>
            </View>

            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",

                  marginLeft: 10,
                }}
              >
                <Text>My Recent Transactions</Text>
                <MaterialIcons name="navigate-next" size={14} color="black" />
              </View>
            </View>
            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",

                  marginLeft: 10,
                }}
              >
                <Text>TDS Dashboard</Text>
                <MaterialIcons name="navigate-next" size={14} color="black" />
              </View>
            </View>
            <View style={innerStyles.listButton}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text>Contact US</Text>
                <MaterialIcons name="navigate-next" size={14} color="black" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Wallet;

const innerStyles = StyleSheet.create({
  listButton: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
