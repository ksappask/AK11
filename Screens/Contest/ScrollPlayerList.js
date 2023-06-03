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
import { useState, useEffect } from "react";
import {
  addPlayer,
  clearAll,
  addInitialPlayer,
  initialPlayersList,
  removePlayer,
} from "../Slices/CreateTeamSlice";

const ScrollPlayerList = ({ playerData, selectedRole }) => {
  const dispatch = useDispatch();

  const wicketKeeper = useSelector((state) => state.createTeam.wicketKeeper);
  const batsman = useSelector((state) => state.createTeam.batsman);
  const allRounder = useSelector((state) => state.createTeam.allRounder);
  const bowler = useSelector((state) => state.createTeam.bowler);
  const totalPlayersSelected =
    wicketKeeper.length + batsman.length + allRounder.length + bowler.length;
  const playerBucket = useSelector((state) => state.createTeam.playerBucket);

  /*const initialPlayerList = useSelector(
    (state) => state.createTeam.initialPlayersList
  );

  const [playerDataState, setPlayerDataState] = useState(initialPlayerList);

  useEffect(() => {
    setPlayerDataState(initialPlayerList);
  }, [initialPlayerList]);*/

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
    if (item.type === "wicketKeeper" && type === "add") {
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

    if (item.type === "batsman" && type === "add") {
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
    if (item.type === "allRounder" && type === "add") {
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
    if (item.type === "bowler" && type === "add") {
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
  //dispatch(clearAll());

  return (
    <>
      {selectedRole === "wicketKeeper" &&
        playerDataState[0].wicketKeeper.map((item, index) => (
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
                <AntDesign name="minussquareo" size={24} color="#662d91" />
              </Pressable>
            )}
          </Pressable>
        ))}

      {selectedRole === "batsman" &&
        playerDataState[0].batsman.map((item, index) => (
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
                <AntDesign name="minussquareo" size={24} color="#662d91" />
              </Pressable>
            )}
          </Pressable>
        ))}

      {selectedRole === "allRounder" &&
        playerDataState[0].allRounder.map((item, index) => (
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
                <AntDesign name="minussquareo" size={24} color="#662d91" />
              </Pressable>
            )}
          </Pressable>
        ))}

      {selectedRole === "bowler" &&
        playerDataState[0].bowler.map((item, index) => (
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
                <AntDesign name="minussquareo" size={24} color="#662d91" />
              </Pressable>
            )}
          </Pressable>
        ))}
    </>
  );
};

export default ScrollPlayerList;

const styles = StyleSheet.create({});
