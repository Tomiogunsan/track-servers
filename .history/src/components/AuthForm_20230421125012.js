import React from 'react';
import {Text, Button, Input} from 'react-native-elements'
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

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
          <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
        </Spacer>
      </>
    );
};

const styles = StyleSheet.create({
    
});

export default AuthForm;