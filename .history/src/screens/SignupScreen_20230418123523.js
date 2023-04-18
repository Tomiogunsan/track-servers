import React from "react";
import { View, StyleSheet} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";

const SignupScreen = ({navigation}) => {
  return (
    <>
    <Spacer>
        
    </Spacer>
      <Text h3>Sign Up for Tracker</Text>
      <Input label='Email' />
      <Input label='Password' />
      <Button 
      title='Sign Up'
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
