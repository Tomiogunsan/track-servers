import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from 'react-native-elements';
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";


const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    
    
});

export default SignupScreen;
