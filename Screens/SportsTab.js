import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const SportsTab = () => {
  const [selectedSport, setSelectedSport] = useState("Cricket");
  const sports = [
    { sportName: "Cricket", iconName: "cricket" },
    { sportName: "Football", iconName: "football" },
    { sportName: "Basketball", iconName: "basketball-outline" },
    { sportName: "Baseball", iconName: "baseball-outline" },
  ];

  return (
    <SafeAreaView>
      <ScrollView
        style={{ marginTop: 5, marginBottom: -5 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {sports.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedSport(item.sportName)}
            style={
              item.sportName === selectedSport
                ? {
                    margin: 10,

                    paddingTop: 7.5,
                    paddingBottom: 7.5,
                    paddingLeft: 30,
                    paddingRight: 30,
                    borderColor: "#662d91",
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: "center",
                    flexDirection: "row",
                    backgroundColor: "#662d91",
                    alignContent: "space-between",
                  }
                : {
                    margin: 10,

                    paddingTop: 7.5,
                    paddingBottom: 7.5,
                    paddingLeft: 30,
                    paddingRight: 30,
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: "center",
                    flexDirection: "row",
                    backgroundColor: "white",
                  }
            }
          >
            {item.sportName === "Cricket" ? (
              <MaterialCommunityIcons
                name={item.iconName}
                size={20}
                color={item.sportName === selectedSport ? "white" : "gray"}
              />
            ) : (
              <Ionicons
                name={item.iconName}
                size={20}
                color={item.sportName === selectedSport ? "white" : "gray"}
              />
            )}

            <Text
              style={
                item.sportName === selectedSport
                  ? {
                      color: "white",
                      fontSize: 14,
                      fontWeight: "500",
                      marginLeft: 10,
                    }
                  : {
                      color: "gray",
                      fontSize: 14,
                      fontWeight: "500",
                      marginLeft: 10,
                    }
              }
            >
              {item.sportName}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SportsTab;

const styles = StyleSheet.create({});
