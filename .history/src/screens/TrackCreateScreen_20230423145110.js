import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

const TrackCreateScreen = () => {
  return (
  <SafeAreaView forceInset={{top: 'always'}}>
      <Text>Create a Track</Text>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
