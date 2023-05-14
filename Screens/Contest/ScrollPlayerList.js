import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlayer,
  clearAll,
  addInitialPlayer,
  initialPlayersList,
  removePlayer,
} from "../Slices/CreateTeamSlice";
import { useState } from "react";

const ScrollPlayerList = ({ playerData, selectedRole }) => {
  const dispatch = useDispatch();
  const wicketKeeper = useSelector((state) => state.createTeam.wicketKeeper);
  const batsman = useSelector((state) => state.createTeam.batsman);
  const allRounder = useSelector((state) => state.createTeam.allRounder);
  const bowler = useSelector((state) => state.createTeam.bowler);
  const totalPlayersSelected =
    wicketKeeper.length + batsman.length + allRounder.length + bowler.length;

  const playerBucket = useSelector((state) => state.createTeam.playerBucket);
  const initialPlayerList = useSelector(
    (state) => state.createTeam.initialPlayersList
  );

  const checkValidation = (type) => {
    if (totalPlayersSelected > 11) {
      return false;
    }

    if (
      type === "wicketKeeper" &&
      wicketKeeper.length >= 0 &&
      wicketKeeper.length < 4 &&
      totalPlayersSelected <= 11
    ) {
      return true;
    } else {
      return false;
    }
  };

  const removePlayerFunc = (item) => {};

  const addPlayerFunc = (item, type) => {
    if (selectedRole === "wicketKeeper" && type === "add") {
      let res = checkValidation("wicketKeeper");
      if (res === true) {
        dispatch(
          addPlayer({
            type: "wicketKeeper",
            data: item,
          })
        );
      }
      if (selectedRole === "wicketKeeper" && type === "remove") {
        dispatch(
          removePlayer({
            type: "wicketKeeper",
            data: item,
          })
        );
      }
    }

    //dispatch(clearAll());
  };

  return (
    <>
      {playerData.map((item, index) => (
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
          <Pressable
            onPress={() => addPlayerFunc(item, "add")}
            style={{ marginLeft: "1%", width: "10%" }}
          >
            {initialPlayerList.includes(item.name) === true ? (
              <AntDesign name="plussquareo" size={24} color="#662d91" />
            ) : null}
          </Pressable>

          <Pressable
            onPress={() => removePlayerFunc(item, "remove")}
            style={{ marginLeft: "1%", width: "10%" }}
          >
            {playerBucket.includes(item.name) ? (
              <AntDesign name="minussquareo" size={24} color="#662d91" />
            ) : null}
          </Pressable>
        </Pressable>
      ))}
    </>
  );
};

export default ScrollPlayerList;

const styles = StyleSheet.create({});
