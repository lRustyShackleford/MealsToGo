import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://4.bp.blogspot.com/-lDiaVQQFlVw/Xqi2HiN-F7I/AAAAAAABS5Y/xCUQqqnp6dk2bhR_mY-HSmP5cEG3vvlLQCNcBGAsYHQ/w1200-h630-p-k-no-nu/krabby-patty-spongebob-squarepants-nickelodeon-nick-sbsp-animated-gif.gif",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  text: {
      padding: 16
  }
});
