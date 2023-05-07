import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CountDown from "react-native-countdown-component";
const matchInfo = [
  {
    title: "Rwanda T20 League",
    status: "Upcoming",
    lineUps: "false",
    shortMatchName1: "RG",
    longMatchName1: "Right Guards CC",
    matchImageUrl1:
      "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RG@2x.png",
    shortMatchName2: "ZCT",
    longMatchName2: "Zonic Tigers ",
    matchImageUrl2:
      "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-ZT@2x.png",
    time: "05/07/2023 00:00:00",
  },
  {
    title: "Indian T20 League",
    status: "Upcoming",
    lineUps: "true",
    shortMatchName1: "LUC",
    longMatchName1: "Lucknow",
    matchImageUrl1:
      "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-LSG1@2x.png",
    shortMatchName2: "BLR",
    longMatchName2: "Bangalore",
    matchImageUrl2:
      "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RCB1@2x.png",
    time: "05/08/2023 07:30:00",
  },
  {
    title: "Indian T20 League",
    status: "Upcoming",
    lineUps: "true",
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
    status: "Upcoming",
    lineUps: "true",
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

const calculateCurrentTime = () => {
  const d = new Date();
  return d;
};

const calculateSeconds = (dateInput) => {
  const currentTime = calculateCurrentTime();

  const [dateValues, timeValues] = dateInput.split(" ");

  const [month, day, year] = dateValues.split("/");
  const [hours, minutes, seconds] = timeValues.split(":");

  const endTime = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

  var diff = (currentTime.getTime() - endTime.getTime()) / 1000;
  console.log("\n\nCurrent Date : " + currentTime);
  console.log("End Date : " + endTime);
  console.log("Seconds : " + diff);

  if (diff < 0) {
    return Math.abs(diff);
  }
  return 0;
};

const UpcomingScreen = () => {
  return (
    <ScrollView>
      {matchInfo.map((item, index) => (
        <Pressable
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
                fontSize: 14,
                fontWeight: "700",
                alignSelf: "flex-start",
                paddingLeft: 10,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                color: "#06992d",
                fontSize: 14,
                fontWeight: "600",
                alignSelf: "flex-end",
                paddingRight: 10,
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
                  paddingLeft: 10,
                }}
              >
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
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
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "500",
                  alignSelf: "flex-start",
                  paddingLeft: 10,
                }}
              >
                {item.longMatchName1}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "700",
                  color: "gray",
                  fontSize: 10,
                  width: 80,
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
                    Something Went Wrong !!!
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
                  paddingRight: 10,
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
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "500",
                  alignSelf: "flex-end",
                  paddingRight: 10,
                }}
              >
                {item.longMatchName2}
              </Text>
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
      ))}
    </ScrollView>
  );
};

export default UpcomingScreen;

const styles = StyleSheet.create({});
