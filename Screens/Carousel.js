import {
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CAROUSEL_IMAGE_LIST_API } from "../constants";

const Carousel = ({ carouselImages }) => {
  const [carouselImageUrls, setCarouselImageUrls] = useState(carouselImages);
  useEffect(() => {
    if (carouselImages.length === 0) {
      getCarouselImageList();
    } else {
      setCarouselImageUrls(carouselImages);
    }
  }, [carouselImages]);

  const getCarouselImageList = async () => {
    const data = await fetch(CAROUSEL_IMAGE_LIST_API);
    const carouselImageList = await data.json();

    setCarouselImageUrls(carouselImageList);
  };

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carouselImageUrls.map((imageUrl, index) => (
          <Pressable key={index} style={{ padding: 10, margin: 2 }}>
            <Image
              style={{ width: 300, height: 120, borderRadius: 10 }}
              source={{
                uri: imageUrl.ImageUrl,
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
