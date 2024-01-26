import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';

export const FinishedAuction = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/ring.gif')}
                style={styles.ring1}
            />
            <Image
                source={require('../assets/auction.png')}
                style={styles.message}
            />
            <TouchableOpacity style={[styles.logo, {bottom: 0}]} onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        height: 100 + '%',
        position: 'relative'
    },
    message: {
        position: 'absolute',
        left: 32,
        bottom: 363,
        width: 269,
        height: 168
    },
    logo: {
        width: 90,
        height: 14,
        bottom: 50,
        position: 'absolute',
        alignSelf: 'center'
    },
    ring1: {
        position: 'absolute',
        top: 0,
        right: 30
    }
});
