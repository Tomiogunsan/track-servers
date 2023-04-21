import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";


const SignupScreen = ({navigation}) => {
    const {state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm 
      headerText={}
      errorMessage=''
      sub
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead</Text>
        </Spacer>
      </TouchableOpacity>
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
    errorMessage: {
      fontSize: 16,
      color: 'red',
      marginLeft: 15,
      marginTop: 15
    },
    link: {
      color: 'blue'
    }
});

export default SignupScreen;
