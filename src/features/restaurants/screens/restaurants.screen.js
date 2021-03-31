import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";


const SafeView = styled(SafeAreaView)`
  flex: 1;
  marginTop: StatusBar.currentHeight%;
`

const SearchContainer = styled(View)`
  padding: 16px;
`

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`

export const RestaurantsScreen = () => (
  <SafeView>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeView>
);


