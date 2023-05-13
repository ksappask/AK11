import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ScrollPlayerList from "./ScrollPlayerList";

const PlayerList = (props) => {
  console.log(props.selectedRole);
  const playerData = [
    {
      wicketKeeper: [
        {
          name: "S Mahmood",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "84.18%",
          playedLastMatch: "yes",
          points: "77",
          credits: "6.5",
        },
        {
          name: "R Mandozai",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "31.48%",
          playedLastMatch: "yes",
          points: "51",
          credits: "7.5",
        },
        {
          name: "A Chaudhry",
          teamName: "ACT",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "13.19%",
          playedLastMatch: "yes",
          points: "44",
          credits: "5.5",
        },
      ],
      batsman: [
        {
          name: "S Dhawan",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "92.15%",
          playedLastMatch: "yes",
          points: "512",
          credits: "9",
        },
        {
          name: "D Warner",
          teamName: "ACT",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "84.73%",
          playedLastMatch: "yes",
          points: "521",
          credits: "79",
        },
      ],

      allRounder: [
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },

        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
        {
          name: "A Patel",
          teamName: "ADD",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "93.35%",
          playedLastMatch: "yes",
          points: "720",
          credits: "9.0",
        },
      ],
      bowler: [
        {
          name: "A Singh",
          teamName: "ACT",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
          selectedBy: "81.91%",
          playedLastMatch: "yes",
          points: "492",
          credits: "9.0",
        },
      ],
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text>SELECTED BY</Text>
        <Text style={{ paddingLeft: "20%", textAlign: "center" }}>POINTS</Text>
        <Text style={{ textAlign: "center" }}>CREDITS</Text>
      </View>

      <ScrollView>
        <View style={{}}>
          {props.selectedRole === "wicketKeeper" ? (
            <ScrollPlayerList playerData={playerData[0].wicketKeeper} />
          ) : props.selectedRole === "batsman" ? (
            <ScrollPlayerList playerData={playerData[0].batsman} />
          ) : props.selectedRole === "allRounder" ? (
            <ScrollPlayerList playerData={playerData[0].allRounder} />
          ) : props.selectedRole === "bowler" ? (
            <ScrollPlayerList playerData={playerData[0].bowler} />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayerList;

const styles = StyleSheet.create({});
