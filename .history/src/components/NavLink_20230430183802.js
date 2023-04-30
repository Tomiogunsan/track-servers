import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({navigation, text, routeName}) => {
return (

);
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);

