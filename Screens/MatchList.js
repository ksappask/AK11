import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import CountDown from "react-native-countdown-component";
const MatchList = () => {
  const matchInfo = [
    {
      title: "Rwanda T20 League",
      shortMatchName1: "RG",
      longMatchName1: "Right Guards CC",
      matchImageUrl1:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RG@2x.png",
      shortMatchName2: "ZCT",
      longMatchName2: "Zonic Tigers ",
      matchImageUrl2:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-ZT@2x.png",
      time: "05/02/2023 00:00:00",
    },
    {
      title: "Indian T20 League",
      shortMatchName1: "LUC",
      longMatchName1: "Lucknow",
      matchImageUrl1:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-LSG1@2x.png",
      shortMatchName2: "BLR",
      longMatchName2: "Bangalore",
      matchImageUrl2:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RCB1@2x.png",
      time: "05/06/2023 07:30:00",
    },
    {
      title: "Indian T20 League",
      shortMatchName1: "LUC",
      longMatchName1: "Lucknow",
      matchImageUrl1:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-LSG1@2x.png",
      shortMatchName2: "BLR",
      longMatchName2: "Bangalore",
      matchImageUrl2:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RCB1@2x.png",
      time: "05/09/2023 10:00:00",
    },
    {
      title: "Indian T20 League",
      shortMatchName1: "LUC",
      longMatchName1: "Lucknow",
      matchImageUrl1:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-LSG1@2x.png",
      shortMatchName2: "BLR",
      longMatchName2: "Bangalore",
      matchImageUrl2:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RCB1@2x.png",
      time: "05/10/2023 14:00:00",
    },
  ];

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
    console.log("\n\nCurrent Date : " + currentTime);
    console.log("End Date : " + endTime);
    console.log("Seconds : " + diff);
    return Math.abs(diff);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
          Upcoming Matches
        </Text>
      </View>
      {matchInfo.map((item, index) => (
        <Pressable
          key={index}
          style={{
            margin: 10,
            padding: 15,
            width: "auto",
            height: "auto",
            borderColor: "gray",
            borderWidth: 0.5,
            borderRadius: 7,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "gray",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              {item.title}
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                margin: "auto",
                padding: 10,
              }}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 10 }}
                source={{
                  uri: item.matchImageUrl1,
                }}
              ></Image>
              <Text
                style={{
                  fontWeight: "700",
                  color: "gray",
                  fontSize: 13,
                  marginLeft: 5,
                }}
              >
                {item.shortMatchName1}
              </Text>
            </View>

            <Text
              style={{
                fontWeight: "700",
                color: "gray",
                fontSize: 10,
              }}
            >
              <CountDown
                until={calculateSeconds(item.time)}
                size={12}
                digitStyle={{ backgroundColor: "#F0F0F0" }}
                digitTxtStyle={{ color: "#662d91" }}
                timeLabelStyle={{ color: "#662d91", fontWeight: "500" }}
                timeToShow={["D", "H", "M", "S"]}
              />
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "auto",
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  color: "gray",
                  fontSize: 13,
                  marginRight: 5,
                }}
              >
                {item.shortMatchName2}
              </Text>

              <Image
                style={{ width: 50, height: 50, borderRadius: 10 }}
                source={{
                  uri: item.matchImageUrl2,
                }}
              ></Image>
            </View>
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
            >
              {item.longMatchName1}
            </Text>
            <Text
              style={{
                color: "gray",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              {item.longMatchName2}
            </Text>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default MatchList;

const styles = StyleSheet.create({});
