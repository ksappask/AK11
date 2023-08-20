import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import MatchList from "./MatchList";
import Header from "./Header/Header";
import SportsTab from "./SportsTab";

import Carousel from "./Carousel";
import Style from "../Style";
import { CRICKET_MATCH_LIST_API } from "../constants";
import { CAROUSEL_IMAGE_LIST_API } from "../constants";

const HomeScreen = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [matchListInfo, setMatchListInfo] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getMatchList = async () => {
    setRefreshing(true);

    const matchListData = await fetch(CRICKET_MATCH_LIST_API);
    const matchData = await matchListData.json();

    setMatchListInfo(matchData);

    const carouselData = await fetch(CAROUSEL_IMAGE_LIST_API);
    const carouselImageList = await carouselData.json();

    setCarouselImages(carouselImageList);

    setRefreshing(false);
  };

  return (
    <>
      <SafeAreaView style={Style.safeArea}>
        <View>
          <Header />
          <SportsTab />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: "auto" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getMatchList} />
          }
        >
          <Carousel carouselImages={carouselImages} />
          <MatchList matchListInfo={matchListInfo} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
