import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Style from "../../Style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { selectCaptainViceCaptain } from "../Slices/CreateTeamSlice";

const CaptainVcCricketScreen = () => {
  const navigation = useNavigation();
  const selectedPlayerData = useSelector(
    (state) => state.createTeam.selectedPlayerData
  );

  const captainViceCaptainSuccess = useSelector(
    (state) => state.createTeam.captainViceCaptainSuccess
  );

  const [captainSelected, setCaptainSelected] = useState(false);
  const [viceCaptainSelected, setViceCaptainSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {}, [selectedPlayerData, captainViceCaptainSuccess]);

  const handleCaptainSelection = (id, type) => {
    dispatch(
      selectCaptainViceCaptain({
        id: id,
        type: type,
        playerData: selectedPlayerData,
      })
    );
  };

  const handleViceCaptainSelection = (id, type) => {
    dispatch(
      selectCaptainViceCaptain({
        id: id,
        type: type,
        playerData: selectedPlayerData,
      })
    );
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    var newArray = [...selectedPlayerData];

    console.log(JSON.stringify(selectedPlayerData));
    //console.log(JSON.parse(JSON.stringify(selectedPlayerData)));
    /* console.log("\n*********** Printing Selected Player Data ***********\n");
    console.log("\n WicketKeeper \n");
    newArray[0].wicketKeeper.map((item, index) => {
      console.log(
        "\n" +
          item.name +
          "  Selected : " +
          item.isSelected +
          "  Captain : " +
          item.isCaptain +
          "  Vice Captain : " +
          item.isViceCaptain +
          "\n"
      );
    });

    console.log("\n\n Batsman \n\n");
    newArray[0].batsman.map((item, index) => {
      console.log(
        "\n" +
          item.name +
          "  Selected : " +
          item.isSelected +
          "  Captain : " +
          item.isCaptain +
          "  Vice Captain : " +
          item.isViceCaptain +
          "\n"
      );
    });

    console.log("\n\n All-Rounder \n\n");
    newArray[0].allRounder.map((item, index) => {
      console.log(
        "\n" +
          item.name +
          "  Selected : " +
          item.isSelected +
          "  Captain : " +
          item.isCaptain +
          "  Vice Captain : " +
          item.isViceCaptain +
          "\n"
      );
    });

    console.log("\n\n Bowler \n\n");
    newArray[0].bowler.map((item, index) => {
      console.log(
        "\n" +
          item.name +
          "  Selected : " +
          item.isSelected +
          "  Captain : " +
          item.isCaptain +
          "  Vice Captain : " +
          item.isViceCaptain +
          "\n"
      );
    });*/
  };

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View>
          <View style={{ backgroundColor: "#662d91", paddingBottom: 10 }}>
            <Pressable
              style={{ marginTop: 10, marginBottom: 10 }}
              onPress={() => handleBack()}
            >
              <Ionicons name="arrow-back" size={28} color="white" />
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15 }}>
              Choose your Captain and Vice Captain
            </Text>
            <Text style={{ fontSize: 12, marginTop: 10 }}>
              C gets 2X points, VC gets 1.5X points
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <Text>Points</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>%C by</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>%VC by</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ height: "70%" }}>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Text>Wicket keeper</Text>
              {selectedPlayerData[0].wicketKeeper.map((item, index) => (
                <View key={index}>
                  <View
                    style={{
                      borderColor: "black",
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    <View
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
                          {item.points} points
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleCaptainSelection(item.id, "captain");
                          }}
                          style={
                            item.isCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            C
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByCaptain} %
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleViceCaptainSelection(item.id, "viceCaptain");
                          }}
                          style={
                            item.isViceCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isViceCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            VC
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByViceCaptain} %
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Text>Batsman</Text>
              {selectedPlayerData[0].batsman.map((item, index) => (
                <View key={index}>
                  <View
                    style={{
                      borderColor: "black",
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    <View
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
                          {item.points} points
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleCaptainSelection(item.id, "captain");
                          }}
                          style={
                            item.isCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            C
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByCaptain} %
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleViceCaptainSelection(item.id, "viceCaptain");
                          }}
                          style={
                            item.isViceCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isViceCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            VC
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByViceCaptain} %
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Text>All Rounder</Text>
              {selectedPlayerData[0].allRounder.map((item, index) => (
                <View key={index}>
                  <View
                    style={{
                      borderColor: "black",
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    <View
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
                          {item.points} points
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleCaptainSelection(item.id, "captain");
                          }}
                          style={
                            item.isCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            C
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByCaptain} %
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleViceCaptainSelection(item.id, "viceCaptain");
                          }}
                          style={
                            item.isViceCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isViceCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            VC
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByViceCaptain} %
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Text>Bowler</Text>
              {selectedPlayerData[0].bowler.map((item, index) => (
                <View key={index}>
                  <View
                    style={{
                      borderColor: "black",
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    <View
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
                          {item.points} points
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleCaptainSelection(item.id, "captain");
                          }}
                          style={
                            item.isCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            C
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByCaptain} %
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: "5%",
                          width: "28%",
                          flexDirection: "column",
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            handleViceCaptainSelection(item.id, "viceCaptain");
                          }}
                          style={
                            item.isViceCaptain === "true"
                              ? {
                                  borderColor: "black",
                                  backgroundColor: "#662d91",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                              : {
                                  borderColor: "black",
                                  borderWidth: 1,
                                  borderRadius: 30,
                                  height: 30,
                                  width: 30,
                                }
                          }
                        >
                          <Text
                            style={
                              item.isViceCaptain === "true"
                                ? {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                    color: "white",
                                  }
                                : {
                                    marginLeft: 8,
                                    marginTop: 5.5,
                                  }
                            }
                          >
                            VC
                          </Text>
                        </Pressable>
                        <Text style={{ fontSize: 13, paddingBottom: 5 }}>
                          {item.selectedByViceCaptain} %
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => handleSave()}
              style={
                captainViceCaptainSuccess === true
                  ? {
                      borderColor: "#662d91",
                      borderWidth: 1,
                      backgroundColor: "#662d91",
                      marginTop: 10,
                      padding: 10,

                      borderRadius: 10,
                      width: "25%",
                      position: "relative",
                    }
                  : {
                      borderColor: "#662d91",
                      borderWidth: 1,
                      backgroundColor: "#d1a8f0",
                      marginTop: 10,
                      padding: 10,

                      borderRadius: 10,
                      width: "25%",
                      position: "relative",
                    }
              }
            >
              <Text style={{ color: "white", textAlign: "center" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CaptainVcCricketScreen;

const styles = StyleSheet.create({});
