import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Style from "../../Style";

import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import ElevenProgressBar from "./ElevenProgressBar";
import { useSelector } from "react-redux";
import PlayerList from "./PlayerList";
import { useNavigation } from "@react-navigation/native";

const CreateTeamScreen = () => {
  const [team1Count, setTeam1Count] = useState(0);
  const [team2Count, setTeam2Count] = useState(0);
  const [totalCreditsAvailable, setTotalCreditsAvailable] = useState(100);
  const [playerSelectedCount, setPlayerSelectedCount] = useState(0);
  const [wicketKeeperCount, setwicketKeeperCount] = useState(0);
  const [batsmanCount, setbatsmanCount] = useState(0);

  const [allRounderCount, setallRounderCount] = useState(0);
  const [bowlerCount, setbowlerCount] = useState(0);
  const [selectedRole, setSelectedRole] = useState("wicketKeeper");

  const navigation = useNavigation();
  const matchData = [
    {
      pitch: "Batting",
      good_for: "Pace",
      avg_score: "161",
      stadium: "Rajiv Gandhi International Stadium, Hyderabad",
    },
  ];
  const data = [
    {
      teamName1: "ACT",
      teamUrl1:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-LSG1@2x.png",
      teamName2: "ADD",
      teamUrl2:
        "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RCB1@2x.png",
    },
  ];
  const playerData = [
    {
      wicketKeeper: [
        {
          team: "ACT",
          imageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View style={{ backgroundColor: "#662d91" }}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="white" />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Maximum 7 Players from One Team
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "white" }}>Players</Text>
              <Text style={{ color: "white" }}>{playerSelectedCount} / 11</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 10 }}
                source={{
                  uri: data[0].teamUrl1,
                }}
              ></Image>
              <View>
                <Text style={{ color: "white" }}>{data[0].teamName1}</Text>
                <Text style={{ color: "white" }}>{team1Count}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 10 }}
                source={{
                  uri: data[0].teamUrl2,
                }}
              ></Image>
              <View>
                <Text style={{ color: "white" }}>{data[0].teamName2}</Text>
                <Text style={{ color: "white" }}>{team2Count}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text style={{ color: "white" }}>Credits Left</Text>
                <Text style={{ color: "white" }}>{totalCreditsAvailable}</Text>
              </View>
            </View>
          </View>
          <View>
            <ElevenProgressBar count={playerSelectedCount} />
          </View>
          <View style={{ paddingTop: 10, color: "white" }}>
            {matchData.length !== 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.txt}>Match Info :</Text>
                  <Text style={styles.txt1}>Pitch {matchData[0].pitch}</Text>
                  <Text style={styles.txt1}>
                    Good for {matchData[0].good_for}
                  </Text>
                  <Text style={styles.txt1}>
                    Avg Score {matchData[0].avg_score}
                  </Text>
                  <Text style={styles.txt1}>Venue {matchData[0].stadium}</Text>
                </View>
              </ScrollView>
            ) : null}
          </View>
        </View>

        <View style={{ backgroundColor: "#F0F0F0" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Pressable
              onPress={() => setSelectedRole("wicketKeeper")}
              style={
                selectedRole === "wicketKeeper"
                  ? styles.roleActive
                  : styles.roleInActive
              }
            >
              <Text>WK ({wicketKeeperCount})</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedRole("batsman")}
              style={
                selectedRole === "batsman"
                  ? styles.roleActive
                  : styles.roleInActive
              }
            >
              <Text>BAT ({batsmanCount})</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedRole("allRounder")}
              style={
                selectedRole === "allRounder"
                  ? styles.roleActive
                  : styles.roleInActive
              }
            >
              <Text>AR ({allRounderCount})</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedRole("bowler")}
              style={
                selectedRole === "bowler"
                  ? styles.roleActive
                  : styles.roleInActive
              }
            >
              <Text>BOWL ({bowlerCount})</Text>
            </Pressable>
          </View>

          <View style={{ marginBottom: 20 }}>
            {selectedRole === "wicketKeeper" ? (
              <Text>Select 1-4 Wicket Keeper</Text>
            ) : selectedRole === "batsman" ? (
              <Text>Select 3-6 Batsman</Text>
            ) : selectedRole === "allRounder" ? (
              <Text>Select 1-4 All-Rounders</Text>
            ) : selectedRole === "bowler" ? (
              <Text>Select 3-6 Bowlers</Text>
            ) : null}
          </View>
          <View style={{ height: "60%" }}>
            <PlayerList selectedRole={selectedRole} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignContent: "center",
            }}
          >
            <Pressable
              style={{
                borderColor: "#662d91",
                borderWidth: 1,
                backgroundColor: "#662d91",
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                width: "25%",
                position: "relative",
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Preview
              </Text>
            </Pressable>
            <Pressable
              style={{
                borderColor: "#662d91",
                borderWidth: 1,
                backgroundColor: "#662d91",
                marginTop: 10,
                padding: 10,
                marginLeft: 20,
                borderRadius: 10,
                width: "25%",
                position: "relative",
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Next Step
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CreateTeamScreen;

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  txt1: {
    color: "white",
    paddingLeft: 10,
  },
  roleActive: {
    color: "#662d91",
    borderBottomColor: "#662d91",
    borderBottomWidth: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  roleInActive: {
    color: "gray",
    fontWeight: "600",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
