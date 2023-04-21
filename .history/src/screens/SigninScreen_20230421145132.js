import React from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const {}
  return (
  <View style={styles.container}>
    <AuthForm 
    headerText='Sign In to Your Account'
    errorMessage=''
    onSubmit={() => {}}
    submitButtonText='Sign in'
    />
    <NavLink 
    text='Dont have an account? Sign up instead'
    routeName='Signup'
    />
  </View>
    )
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;
