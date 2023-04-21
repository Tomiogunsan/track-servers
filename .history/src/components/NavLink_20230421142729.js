import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({navigation, text, ro}) => {
return (
  <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
    <Spacer>
      <Text style={styles.link}>Already have an account? Sign in instead</Text>
    </Spacer>
  </TouchableOpacity>
);
};

const styles = StyleSheet.create({});

export default withNavigation(NavLink);

