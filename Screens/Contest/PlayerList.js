import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import ScrollPlayerList from "./ScrollPlayerList";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import {
  addPlayer,
  clearAll,
  addInitialPlayer,
  initialPlayersList,
  removePlayer,
} from "../Slices/CreateTeamSlice";

const PlayerList = ({ selectedRole }) => {
  const dispatch = useDispatch();

  const playerData = [
    {
      wicketKeeper: [
        {
          id: "CSK1",
          name: "D Conway",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244818/devon-conway.jpg",
          selectedBy: "90.91",
          playedLastMatch: "yes",
          points: "689",
          credits: "9.0",
          selected: false,
          type: "wicketKeeper",
        },
        {
          id: "KOL1",
          name: "R Gurbaz",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244760/rahmanullah-gurbaz.jpg",
          selectedBy: "65.62",
          playedLastMatch: "yes",
          points: "403",
          credits: "8.0",
          selected: false,
          type: "wicketKeeper",
        },
        {
          id: "CSK2",
          name: "M Dhoni",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170677/ms-dhoni.jpg",
          selectedBy: "10.22",
          playedLastMatch: "yes",
          points: "275",
          credits: "7.5",
          selected: false,
          type: "wicketKeeper",
        },
        {
          id: "KOL2",
          name: "J Charles",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244679/johnson-charles.jpg",
          selectedBy: "1.05",
          playedLastMatch: "no",
          points: "0",
          credits: "6.5",
          selected: false,
          type: "wicketKeeper",
        },
        {
          id: "KOL3",
          name: "N Jagadeesan",
          teamName: "KOL",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/339100/339153.png",
          selectedBy: "1.43",
          playedLastMatch: "no",
          points: "145",
          credits: "6.0",
          selected: false,
          type: "wicketKeeper",
        },
      ],
      batsman: [
        {
          id: "KOL4",
          name: "N Rana",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171047/nitish-rana.jpg",
          selectedBy: "78.18",
          playedLastMatch: "yes",
          points: "627",
          credits: "9.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "CSK3",
          name: "R Gaikwad",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226277/ruturaj-gaikwad.jpg",
          selectedBy: "87.97",
          playedLastMatch: "yes",
          points: "691",
          credits: "9.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "CSK4",
          name: "A Rahane",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171082/ajinkya-rahane.jpg",
          selectedBy: "53.07",
          playedLastMatch: "yes",
          points: "445",
          credits: "8.5",
          selected: false,
          type: "batsman",
        },
        {
          id: "KOL5",
          name: "V Iyer",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226278/venkatesh-iyer.jpg",
          selectedBy: "48.18",
          playedLastMatch: "yes",
          points: "546",
          credits: "8.5",
          selected: false,
          type: "batsman",
        },
        {
          id: "KOL6",
          name: "J Roy",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170941/jason-roy.jpg",
          selectedBy: "54.53",
          playedLastMatch: "yes",
          points: "350",
          credits: "8.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "KOL7",
          name: "R Singh",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c279125/rinku-singh.jpg",
          selectedBy: "29.4",
          playedLastMatch: "yes",
          points: "574",
          credits: "8.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "CSK5",
          name: "S Dube",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c183291/shivam-dube.jpg",
          selectedBy: "49.8",
          playedLastMatch: "yes",
          points: "528",
          credits: "8.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "CSK26",
          name: "A Rayudu",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171012/ambati-rayudu.jpg",
          selectedBy: "3.32",
          playedLastMatch: "yes",
          points: "196",
          credits: "7.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "KOL8",
          name: "Mandeep Singh",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171093/mandeep-singh.jpg",
          selectedBy: "0.3",
          playedLastMatch: "no",
          points: "26",
          credits: "6.0",
          selected: false,
          type: "batsman",
        },
        {
          id: "CSK6",
          name: "S Senapati",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356800/356837.1.png",
          selectedBy: "0.13",
          playedLastMatch: "no",
          points: "0",
          credits: "5.5%",
          selected: false,
          type: "batsman",
        },
        {
          id: "CSK7",
          name: "S Rasheed",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/345000/345086.png",
          selectedBy: "0.26",
          playedLastMatch: "no",
          points: "0",
          credits: "5.0",
          selected: false,
          type: "batsman",
        },
      ],

      allRounder: [
        {
          id: "CSK8",
          name: "R Jadeja",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170670/ravindra-jadeja.jpg",
          selectedBy: "92.35",
          playedLastMatch: "yes",
          points: "671",
          credits: "9.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "KOL9",
          name: "A Russel",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170821/andre-russell.jpg",
          selectedBy: "80.95",
          playedLastMatch: "yes",
          points: "584",
          credits: "8.5",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK9",
          name: "M Ali",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244796/moeen-ali.jpg",
          selectedBy: "47.27",
          playedLastMatch: "yes",
          points: "405",
          credits: "8.5",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK10",
          name: "B Stokes",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244791/ben-stokes.jpg",
          selectedBy: "2.66",
          playedLastMatch: "no",
          points: "41",
          credits: "8.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "KOL10",
          name: "S Narine",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c152654/sunil-narine.jpg",
          selectedBy: "13.61",
          playedLastMatch: "yes",
          points: "257",
          credits: "7.5",
          selected: false,
          type: "allRounder",
        },
        {
          id: "KOL11",
          name: "D Wiese",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244626/david-wiese.jpg",
          selectedBy: "0.48",
          playedLastMatch: "no",
          points: "49",
          credits: "7.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK11",
          name: "S Thakur",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226224/shardul-thakur.jpg",
          selectedBy: "9.05",
          playedLastMatch: "yes",
          points: "275",
          credits: "7.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK12",
          name: "M Santner",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244828/mitchell-santner.jpg",
          selectedBy: "0.55",
          playedLastMatch: "no",
          points: "111",
          credits: "7.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK13",
          name: "D Pretorious",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170695/dwaine-pretorius.jpg",
          selectedBy: "0.24",
          playedLastMatch: "no",
          points: "14",
          credits: "6.5",
          selected: false,
          type: "allRounder",
        },
        {
          id: "KOL12",
          name: "A Sudhakar Roy",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c153915/anukul-roy.jpg",
          selectedBy: "2.73",
          playedLastMatch: "yes",
          points: "145",
          credits: "6.5",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK14",
          name: "A Mandal",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/314900/314902.jpg",
          selectedBy: "0.1",
          playedLastMatch: "no",
          points: "0",
          credits: "5.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "CSK15",
          name: "N Sindhu",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/345000/345097.png",
          selectedBy: "0.14",
          playedLastMatch: "no",
          points: "0",
          credits: "5.0",
          selected: false,
          type: "allRounder",
        },
        {
          id: "KOL13",
          name: "A Desai",
          teamName: "KOL",
          playerImageUrl: "https://i.ibb.co/njxqqhc/avatar.png",
          selectedBy: "0.1",
          playedLastMatch: "no",
          points: "0",
          credits: "4.5",
          selected: false,
          type: "allRounder",
        },
      ],
      bowler: [
        {
          id: "CSK16",
          name: "T Deshpande",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c190903/tushar-deshpande.jpg",
          selectedBy: "66.84",
          playedLastMatch: "yes",
          points: "529",
          credits: "8.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL14",
          name: "V Chakravarthy",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226220/varun-chakaravarthy.jpg",
          selectedBy: "78.56",
          playedLastMatch: "yes",
          points: "604",
          credits: "8.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL15",
          name: "L Ferguson",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244820/lockie-ferguson.jpg",
          selectedBy: "3.14",
          playedLastMatch: "no",
          points: "29",
          credits: "8.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK17",
          name: "M Theekshana",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244668/maheesh-theekshana.jpg",
          selectedBy: "23.83",
          playedLastMatch: "yes",
          points: "197",
          credits: "8.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL16",
          name: "T Southee",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244824/tim-southee.jpg",
          selectedBy: "1.29",
          playedLastMatch: "no",
          points: "46",
          credits: "7.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK18",
          name: "D Chahar",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226392/deepak-chahar.jpg",
          selectedBy: "29.2",
          playedLastMatch: "yes",
          points: "117",
          credits: "7.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL17",
          name: "U Yadav",
          teamName: "KOL",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c153874/umesh-yadav.jpg",
          selectedBy: "0.95",
          playedLastMatch: "no",
          points: "93",
          credits: "7.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK19",
          name: "M Pathirana",
          teamName: "CSK",
          playerImageUrl:
            "https://www.cricbuzz.com/a/img/v1/152x152/i1/c226299/matheesha-pathirana.jpg",
          selectedBy: "50.94",
          playedLastMatch: "yes",
          points: "365",
          credits: "7.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL18",
          name: "S Sharma",
          teamName: "KOL",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/358000/358041.png",
          selectedBy: "9.57",
          playedLastMatch: "yes",
          points: "330",
          credits: "7.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK20",
          name: "A Singh",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/315000/315007.jpg",
          selectedBy: "0.67",
          playedLastMatch: "no",
          points: "161",
          credits: "6.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK21",
          name: "S Magala",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/324200/324217.png",
          selectedBy: "0.07",
          playedLastMatch: "no",
          points: "43",
          credits: "6.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL19",
          name: "V Arora",
          teamName: "KOL",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/357000/357019.1.png",
          selectedBy: "0.33",
          playedLastMatch: "no",
          points: "74",
          credits: "6.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL20",
          name: "H Rana",
          teamName: "KOL",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/358000/358042.png",
          selectedBy: "9.01",
          playedLastMatch: "yes",
          points: "130",
          credits: "6.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK22",
          name: "S Singh",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356800/356835.1.png",
          selectedBy: "0.09",
          playedLastMatch: "no",
          points: "0",
          credits: "5.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK23",
          name: "R Hangargekar",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/339100/339157.png",
          selectedBy: "0.23",
          playedLastMatch: "no",
          points: "83",
          credits: "5.5",
          selected: false,
          type: "bowler",
        },
        {
          id: "KOL21",
          name: "K Khejroliya",
          teamName: "KOL",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/358000/358043.png",
          selectedBy: "0.7",
          playedLastMatch: "no",
          points: "52",
          credits: "5.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK24",
          name: "P Solanki",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356800/356836.1.png",
          selectedBy: "0.1",
          playedLastMatch: "no",
          points: "0",
          credits: "5.0",
          selected: false,
          type: "bowler",
        },
        {
          id: "CSK25",
          name: "B Varma",
          teamName: "CSK",
          playerImageUrl:
            "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356800/356833.1.png",
          selectedBy: "0.09",
          playedLastMatch: "no",
          points: "0",
          credits: "4.5",
          selected: false,
          type: "bowler",
        },
      ],
    },
  ];
  //dispatch(clearAll());
  const [playerUpdate, setPlayerUpdate] = useState(false);
  if (playerUpdate === false) {
    dispatch(addInitialPlayer(playerData));
    setPlayerUpdate(true);
    console.log("**********  HI AKASH ************************");
  }

  const initialPlayerList = useSelector(
    (state) => state.createTeam.initialPlayersList
  );

  const [playerDataState, setPlayerDataState] = useState(initialPlayerList);

  //console.log("** playerDataState **");
  // console.log(initialPlayerList);
  useEffect(() => {
    setPlayerDataState(initialPlayerList);
  }, [initialPlayerList]);

  const checkValidation = (type) => {
    if (type === "wicketKeeper") {
      if (wicketKeeper.length >= 0 && wicketKeeper.length < 4) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const removePlayerFunc = (item, type) => {
    if (selectedRole === "wicketKeeper" && type === "remove") {
    }
  };

  const addPlayerFunc = (item, type, index) => {
    if (selectedRole === "wicketKeeper" && type === "add") {
      let res = true;
      if (res === true) {
        dispatch(
          addPlayer({
            type: "wicketKeeper",
            data: item,
            index: index,
            playerData: initialPlayerList,
          })
        );
      }
    }

    if (selectedRole === "batsman" && type === "add") {
      let res = true;
      if (res === true) {
        dispatch(
          addPlayer({
            type: "batsman",
            data: item,
            index: index,
            playerData: initialPlayerList,
          })
        );
      }
    }
    if (selectedRole === "allRounder" && type === "add") {
      let res = true;
      if (res === true) {
        dispatch(
          addPlayer({
            type: "allRounder",
            data: item,
            index: index,
            playerData: initialPlayerList,
          })
        );
      }
    }
    if (selectedRole === "bowler" && type === "add") {
      let res = true;
      if (res === true) {
        dispatch(
          addPlayer({
            type: "bowler",
            data: item,
            index: index,
            playerData: initialPlayerList,
          })
        );
      }
    }
  };

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
          {selectedRole === "wicketKeeper" ? (
            <View>
              {playerDataState[0].wicketKeeper.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    backgroundColor: "#F0F0F0",
                    borderBottomColor: "darkgray",
                    borderBottomWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 5,
                  }}
                >
                  <View style={{ width: "10%" }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                      }}
                      source={{
                        uri: item.playerImageUrl,
                      }}
                    ></Image>
                    <Text>{item.teamName}</Text>
                  </View>

                  <View style={{ marginLeft: "5%", width: "28%" }}>
                    <Text style={{ paddingBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                      Sel By {item.selectedBy} %
                    </Text>
                    {item.playedLastMatch === "yes" ? (
                      <Text style={{ fontSize: 10 }}>Played Last Match</Text>
                    ) : null}
                  </View>

                  <View style={{ marginLeft: "15%", width: "15%" }}>
                    <Text>{item.points}</Text>
                  </View>
                  <View style={{ marginLeft: "10%", width: "10%" }}>
                    <Text>{item.credits}</Text>
                  </View>

                  {item.selected === false ? (
                    <Pressable
                      onPress={() => addPlayerFunc(item, "add", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign name="plussquareo" size={24} color="#662d91" />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => removePlayerFunc(item, "remove", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign
                        name="minussquareo"
                        size={24}
                        color="#662d91"
                      />
                    </Pressable>
                  )}
                </Pressable>
              ))}
            </View>
          ) : selectedRole === "batsman" ? (
            <View>
              {playerDataState[0].batsman.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    backgroundColor: "#F0F0F0",
                    borderBottomColor: "darkgray",
                    borderBottomWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 5,
                  }}
                >
                  <View style={{ width: "10%" }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                      }}
                      source={{
                        uri: item.playerImageUrl,
                      }}
                    ></Image>
                    <Text>{item.teamName}</Text>
                  </View>

                  <View style={{ marginLeft: "5%", width: "28%" }}>
                    <Text style={{ paddingBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                      Sel By {item.selectedBy} %
                    </Text>
                    {item.playedLastMatch === "yes" ? (
                      <Text style={{ fontSize: 10 }}>Played Last Match</Text>
                    ) : null}
                  </View>

                  <View style={{ marginLeft: "15%", width: "15%" }}>
                    <Text>{item.points}</Text>
                  </View>
                  <View style={{ marginLeft: "10%", width: "10%" }}>
                    <Text>{item.credits}</Text>
                  </View>

                  {item.selected === false ? (
                    <Pressable
                      onPress={() => addPlayerFunc(item, "add", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign name="plussquareo" size={24} color="#662d91" />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => removePlayerFunc(item, "remove", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign
                        name="minussquareo"
                        size={24}
                        color="#662d91"
                      />
                    </Pressable>
                  )}
                </Pressable>
              ))}
            </View>
          ) : selectedRole === "allRounder" ? (
            <View>
              {playerDataState[0].allRounder.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    backgroundColor: "#F0F0F0",
                    borderBottomColor: "darkgray",
                    borderBottomWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 5,
                  }}
                >
                  <View style={{ width: "10%" }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                      }}
                      source={{
                        uri: item.playerImageUrl,
                      }}
                    ></Image>
                    <Text>{item.teamName}</Text>
                  </View>

                  <View style={{ marginLeft: "5%", width: "28%" }}>
                    <Text style={{ paddingBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                      Sel By {item.selectedBy} %
                    </Text>
                    {item.playedLastMatch === "yes" ? (
                      <Text style={{ fontSize: 10 }}>Played Last Match</Text>
                    ) : null}
                  </View>

                  <View style={{ marginLeft: "15%", width: "15%" }}>
                    <Text>{item.points}</Text>
                  </View>
                  <View style={{ marginLeft: "10%", width: "10%" }}>
                    <Text>{item.credits}</Text>
                  </View>

                  {item.selected === false ? (
                    <Pressable
                      onPress={() => addPlayerFunc(item, "add", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign name="plussquareo" size={24} color="#662d91" />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => removePlayerFunc(item, "remove", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign
                        name="minussquareo"
                        size={24}
                        color="#662d91"
                      />
                    </Pressable>
                  )}
                </Pressable>
              ))}
            </View>
          ) : selectedRole === "bowler" ? (
            <View>
              {playerDataState[0].bowler.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    backgroundColor: "#F0F0F0",
                    borderBottomColor: "darkgray",
                    borderBottomWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 5,
                  }}
                >
                  <View style={{ width: "10%" }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                      }}
                      source={{
                        uri: item.playerImageUrl,
                      }}
                    ></Image>
                    <Text>{item.teamName}</Text>
                  </View>

                  <View style={{ marginLeft: "5%", width: "28%" }}>
                    <Text style={{ paddingBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                      Sel By {item.selectedBy} %
                    </Text>
                    {item.playedLastMatch === "yes" ? (
                      <Text style={{ fontSize: 10 }}>Played Last Match</Text>
                    ) : null}
                  </View>

                  <View style={{ marginLeft: "15%", width: "15%" }}>
                    <Text>{item.points}</Text>
                  </View>
                  <View style={{ marginLeft: "10%", width: "10%" }}>
                    <Text>{item.credits}</Text>
                  </View>

                  {item.selected === false ? (
                    <Pressable
                      onPress={() => addPlayerFunc(item, "add", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign name="plussquareo" size={24} color="#662d91" />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => removePlayerFunc(item, "remove", index)}
                      style={{ marginLeft: "1%", width: "10%" }}
                    >
                      <AntDesign
                        name="minussquareo"
                        size={24}
                        color="#662d91"
                      />
                    </Pressable>
                  )}
                </Pressable>
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayerList;

const styles = StyleSheet.create({});
