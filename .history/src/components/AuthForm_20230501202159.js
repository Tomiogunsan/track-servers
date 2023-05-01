import React from 'react';
import {Text, Button, Input} from 'react-native-elements'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <>
        <Spacer>
          <Text h3>{headerText}</Text>
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
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Spacer>
          <Button
            title={submitButtonText}
            onPress={() => onSubmit({ email, password })}
          />
        </Spacer>
      </>
    );
};



export default AuthForm;