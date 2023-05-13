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
    status: "Live",
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

const LiveScreen = () => {
  return <ScrollView></ScrollView>;
};

export default LiveScreen;

const styles = StyleSheet.create({});
