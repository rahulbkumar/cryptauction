import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';

export const FinishedBid = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/ball.gif')}
                style={styles.ball}
            />
            <Image
                source={require('../assets/bid.png')}
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
        width: 278,
        height: 205
    },
    logo: {
        width: 90,
        height: 14,
        bottom: 50,
        position: 'absolute',
        alignSelf: 'center'
    },
    ball: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 100 + '%',
        height: 100 + '%'
    }
});
