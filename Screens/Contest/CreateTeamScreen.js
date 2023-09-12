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
import { useDispatch, useSelector } from "react-redux";
import PlayerList from "./PlayerList";
import { useNavigation } from "@react-navigation/native";
import { clearAll } from "../Slices/CreateTeamSlice";

const CreateTeamScreen = () => {
  const [team1Count, setTeam1Count] = useState(0);
  const [team2Count, setTeam2Count] = useState(0);

  const teamCreditValue = useSelector((state) => state.createTeam.creditsLeft);

  const dispatch = useDispatch();
  const wicketKeeperCount = useSelector(
    (state) => state.createTeam.wicketKeeper
  );
  const batsmanCount = useSelector((state) => state.createTeam.batsman);
  const allRounderCount = useSelector((state) => state.createTeam.allRounder);
  const bowlerCount = useSelector((state) => state.createTeam.bowler);
  const teamCreateSuccessValue = useSelector(
    (state) => state.createTeam.teamCreateSuccess
  );
  const playerSelectedCount = useSelector(
    (state) => state.createTeam.playerCount
  );
  const [selectedRole, setSelectedRole] = useState("wicketKeeper");
  const navigation = useNavigation();
  const matchData = [
    {
      pitch: "Batting",
      good_for: "Spin",
      avg_score: "148",
      stadium: "M A Chidambaram Stadium, Chennai",
    },
  ];
  const data = [
    {
      teamName1: "CSK",
      teamUrl1:
        "https://ssl.gstatic.com/onebox/media/sports/logos/exZiFUT_GXScTyr358t7SQ_96x96.png",
      teamName2: "KOL",
      teamUrl2:
        "https://ssl.gstatic.com/onebox/media/sports/logos/kkwGQB9t8WtGPx9WuiBGOw_96x96.png",
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

  const handleBack = () => {
    dispatch(clearAll());
    navigation.goBack();
  };

  const handleNext = () => {
    if (teamCreateSuccessValue == true) {
      navigation.navigate("CaptainVcCricketScreen");
    }
  };

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View style={{ backgroundColor: "#662d91" }}>
          <View>
            <Pressable onPress={() => handleBack()}>
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
                <Text style={{ color: "white" }}>{teamCreditValue}</Text>
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
              <Text>Select 1-8 Wicket Keeper</Text>
            ) : selectedRole === "batsman" ? (
              <Text>Select 1-8 Batsman</Text>
            ) : selectedRole === "allRounder" ? (
              <Text>Select 1-8 All-Rounders</Text>
            ) : selectedRole === "bowler" ? (
              <Text>Select 1-8 Bowlers</Text>
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
              onPress={() => handleNext()}
              style={
                teamCreateSuccessValue == false
                  ? {
                      borderWidth: 1,
                      backgroundColor: "#d1a8f0",
                      marginTop: 10,
                      padding: 10,
                      marginLeft: 20,
                      borderRadius: 10,
                      width: "25%",
                      position: "relative",
                    }
                  : {
                      borderColor: "#662d91",
                      borderWidth: 1,
                      backgroundColor: "#662d91",
                      marginTop: 10,
                      padding: 10,
                      marginLeft: 20,
                      borderRadius: 10,
                      width: "25%",
                      position: "relative",
                    }
              }
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
