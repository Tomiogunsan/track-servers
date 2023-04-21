import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";


const SignupScreen = ({navigation}) => {
    const {state, signup } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text>Already have an account? Sign in instaed</Text>
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
});

export default SignupScreen;
