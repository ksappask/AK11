import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { useNavigation } from "@react-navigation/native";
const ContestsList = () => {
  const navigation = useNavigation();
  const contestData = [
    {
      contestType: "Head to Head",
      contests: [
        {
          noOfSpots: 2,
          noOfSpotsFilled: 2,
          noOfSpotsAvailable: 0,
          totalPrize: 20000,
          joiningAmount: 10000,
          entry: "Single Entry",
          winPercentage: "50%",
        },
        {
          noOfSpots: 2,
          noOfSpotsFilled: 1,
          noOfSpotsAvailable: 1,
          totalPrize: 10000,
          joiningAmount: 5198,
          entry: "Single Entry",
          winPercentage: "50%",
        },
        {
          noOfSpots: 2,
          noOfSpotsFilled: 1,
          noOfSpotsAvailable: 1,
          totalPrize: 5000,
          joiningAmount: 2500,
          entry: "Single Entry",
          winPercentage: "50%",
        },
      ],
    },

    {
      contestType: "Winner takes All",
      contests: [
        {
          noOfSpots: 3,
          noOfSpotsFilled: 2,
          noOfSpotsAvailable: 1,
          totalPrize: 100000,
          joiningAmount: 39999,
          entry: "Single Entry",
          winPercentage: "50%",
        },
        {
          noOfSpots: 3,
          noOfSpotsFilled: 1,
          noOfSpotsAvailable: 2,
          totalPrize: 75000,
          joiningAmount: 27499,
          entry: "Single Entry",
          winPercentage: "50%",
        },
        {
          noOfSpots: 4,
          noOfSpotsFilled: 3,
          noOfSpotsAvailable: 1,
          totalPrize: 100000,
          joiningAmount: 26999,
          entry: "Single Entry",
          winPercentage: "50%",
        },
      ],
    },
    {
      contestType: "Practice Contests",
      contests: [
        {
          noOfSpots: 2,
          noOfSpotsFilled: 1,
          noOfSpotsAvailable: 1,
          totalPrize: 0,
          joiningAmount: 0,
          entry: "Single Entry",
          winPercentage: "50%",
        },
        {
          noOfSpots: 2,
          noOfSpotsFilled: 1,
          noOfSpotsAvailable: 1,
          totalPrize: 0,
          joiningAmount: 0,
          entry: "Single Entry",
          winPercentage: "50%",
        },
      ],
    },
  ];

  return (
    <View>
      {contestData.map((dataItem, index1) => (
        <View key={index1} style={{ marginTop: 30, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 18,
                fontWeight: "600",
                marginLeft: 10,
              }}
            >
              {dataItem.contestType}
            </Text>

            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  fontWeight: "500",

                  marginRight: 10,
                }}
              >
                View All
              </Text>

              <Ionicons
                name="chevron-forward-circle"
                size={25}
                color="#662d91"
              />
            </Pressable>
          </View>
          {dataItem.contests.map((item, index) => (
            <View
              key={index}
              style={{
                borderColor: "#662d91",
                borderWidth: 0.7,
                padding: 10,
                margin: 10,
                borderRadius: 7,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  Prize Pool
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  Entry
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="rupee" size={15} color="#662d91" />
                  <Text
                    style={{
                      color: "#662d91",
                      fontSize: 17,
                      fontWeight: "700",
                      marginLeft: 5,
                    }}
                  >
                    {item.totalPrize}
                  </Text>
                </View>
                <Pressable
                  onPress={() => navigation.navigate("CreateTeamScreen")}
                  style={{
                    color: "gray",
                    fontSize: 12,
                    fontWeight: "500",
                    borderColor: "#662d91",
                    backgroundColor: "#662d91",
                    padding: 5,
                    width: 70,
                    borderRadius: 8,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignContent: "center",
                  }}
                >
                  <Text>
                    <FontAwesome name="rupee" size={14} color="#F0F0F0" />
                  </Text>
                  <Text style={{ color: "white" }}>{item.joiningAmount}</Text>
                </Pressable>
              </View>

              <View>
                <ProgressBar
                  progress={item.noOfSpotsFilled / item.noOfSpots}
                  width={null}
                  height={4}
                  color={"#662d91"}
                  borderColor={"#F0F0F0"}
                  unfilledColor={"#dcb1fc"}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                {item.noOfSpotsAvailable === 0 ? (
                  <Text>contest full</Text>
                ) : item.noOfSpotsAvailable === 1 ? (
                  <Text>{item.noOfSpotsAvailable} spot left</Text>
                ) : (
                  <Text>{item.noOfSpotsAvailable} spots left</Text>
                )}

                <Text>{item.noOfSpots} spots</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 14, color: "gray", fontWeight: "400" }}
                  >
                    1
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "gray",
                      fontWeight: "500",
                      marginRight: 5,
                    }}
                  >
                    st
                  </Text>
                  <FontAwesome name="rupee" size={14} color="gray" />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: "gray",
                    }}
                  >
                    {item.totalPrize}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="trophy-outline" size={15} color="gray" />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: "gray",
                    }}
                  >
                    {item.winPercentage}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: "gray",
                    }}
                  >
                    {item.entry}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ContestsList;

const styles = StyleSheet.create({});
