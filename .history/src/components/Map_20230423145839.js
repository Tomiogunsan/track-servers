import React from 'react'
import {Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return <MapView 
    style={styles.map}
    initialRegion={{
        latitude:
        longi
    }}
    />
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;