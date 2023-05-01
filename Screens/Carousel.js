import {
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

const Carousel = () => {
  const carouselImageUrls = [
    "https://e0.pxfuel.com/wallpapers/397/676/desktop-wallpaper-ipl-team.jpg",
    "https://wallpapercave.com/dwp2x/wp2506454.jpg",
    "https://wallpapercave.com/dwp2x/wp12232622.jpg",
  ];
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carouselImageUrls.map((imageUrl, index) => (
          <Pressable key={index} style={{ padding: 10, margin: 2 }}>
            <Image
              style={{ width: 300, height: 120, borderRadius: 10 }}
              source={{
                uri: imageUrl,
              }}
            ></Image>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
