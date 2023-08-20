import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import CountDown from "react-native-countdown-component";
import { useNavigation } from "@react-navigation/native";
import { CRICKET_MATCH_LIST_API } from "../constants";

const MatchList = ({ matchListInfo }) => {
  const navigation = useNavigation();

  const [matchInfo, setMatchInfo] = useState(matchListInfo);
  const [matchListLoaded, setMatchListLoaded] = useState([false]);

  useEffect(() => {
    if (matchListInfo.length == 0) {
      getMatchList();
    } else {
      setMatchInfo(matchListInfo);
    }
  }, [matchListInfo]);

  const getMatchList = async () => {
    const data = await fetch(CRICKET_MATCH_LIST_API);
    const matchData = await data.json();

    setMatchInfo(matchData);
    setMatchListLoaded(true);
  };

  const [currentDate, setCurrentDate] = useState("");
  const calculateCurrentTime = () => {
    const d = new Date();
    return d;
  };

  const calculateSeconds = (dateInput) => {
    const currentTime = calculateCurrentTime();

    const [dateValues, timeValues] = dateInput.split(" ");

    const [month, day, year] = dateValues.split("/");
    const [hours, minutes, seconds] = timeValues.split(":");

    const endTime = new Date(
      +year,
      +month - 1,
      +day,
      +hours,
      +minutes,
      +seconds
    );

    var diff = (currentTime.getTime() - endTime.getTime()) / 1000;
    // console.log("\n\nCurrent Date : " + currentTime);
    // console.log("End Date : " + endTime);
    //console.log("Seconds : " + diff);

    if (diff < 0) {
      return Math.abs(diff);
    }
    return 0;
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
          Upcoming Matches
        </Text>
      </View>

      {matchListLoaded == "false" ? (
        <Text>Getting the Match List ...</Text>
      ) : (
        matchInfo.map((item, index) => (
          <Pressable
            onPress={() => navigation.navigate("MatchScreen")}
            key={index}
            style={{
              margin: 10,
              padding: 13,
              width: "auto",
              height: "auto",
              borderColor: "gray",
              borderWidth: 0.5,
              borderRadius: 7,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 11,
                  fontWeight: "700",
                  alignSelf: "flex-start",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  color: "#06992d",
                  fontSize: 11,
                  fontWeight: "600",
                  alignSelf: "flex-end",
                }}
              >
                {item.lineUps == "true" ? "LineUps Out" : ""}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginRight: 50,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    alignSelf: "flex-start",
                    paddingLeft: 20,
                    paddingTop: 15,
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30 / 2,
                    }}
                    source={{
                      uri: item.matchImageUrl1,
                    }}
                  ></Image>
                  <Text
                    style={{
                      fontWeight: "700",
                      color: "gray",
                      fontSize: 14,
                      paddingLeft: 15,
                    }}
                  >
                    {item.shortMatchName1}
                  </Text>
                </View>
              </View>
              <View style={{ paddingTop: 15 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    color: "gray",
                    fontSize: 10,
                    width: 100,
                  }}
                >
                  {calculateSeconds(item.time) !== 0 ? (
                    <CountDown
                      until={calculateSeconds(item.time)}
                      size={12}
                      digitStyle={{ backgroundColor: "#F0F0F0" }}
                      digitTxtStyle={{ color: "#662d91" }}
                      timeLabelStyle={{ color: "#662d91", fontWeight: "500" }}
                      timeToShow={["D", "H", "M", "S"]}
                    />
                  ) : (
                    <Text
                      style={{
                        color: "#662d91",
                        fontSize: 14,
                        fontWeight: "500",
                      }}
                    >
                      Something Wrong
                    </Text>
                  )}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: 50,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignSelf: "flex-end",
                    paddingRight: 25,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      color: "gray",
                      fontSize: 13,
                      paddingRight: 15,
                    }}
                  >
                    {item.shortMatchName2}
                  </Text>

                  <Image
                    style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
                    source={{
                      uri: item.matchImageUrl2,
                    }}
                  ></Image>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 15,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "500",
                  alignSelf: "flex-start",
                }}
              >
                {item.longMatchName1}
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "500",
                  alignSelf: "flex-end",
                }}
              >
                {item.longMatchName2}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "500",
                }}
              ></Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "500",
                }}
              ></Text>
            </View>
          </Pressable>
        ))
      )}
    </SafeAreaView>
  );
};

export default MatchList;

const styles = StyleSheet.create({});
