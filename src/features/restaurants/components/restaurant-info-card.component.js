import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: gold;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

