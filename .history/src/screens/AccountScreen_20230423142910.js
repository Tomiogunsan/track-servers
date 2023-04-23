import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useC
    return (
      <>
        <Text style={{ fontSize: 48 }}>Account Screen</Text>
        <Button title='Sign Out' onPress={} />
      </>
    );
}

const styles = StyleSheet.create({});

export default AccountScreen;