import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
  <SafeAreaView forceInset={{top: 'always'}}>
      <Text h3>Create a Track</Text>
      <Map/>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
