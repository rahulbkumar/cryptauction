import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon, SearchBar, BottomSheet} from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';

export const Bid = ({navigation}) => {
    const [quality, setQuality] = useState('new');
    const [bid, setBid] = useState('');

    const sendBid = () => {
        doBid();
        navigation.navigate('FinishedBid');
    };

    const doBid = () => {
        const request = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "item":"weweewewe",
                "buyer":"turbo",
                "bid":99
            })
        };

        fetch('http://35.222.10.206:5000/bidding', request)
            .then(response => {
                return response.json()})
            .then(json => console.log(json))
            .catch(err => {
                console.log(err.name);
                console.log(err.message);
            })
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#242424'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
                        <Icon
                            name='chevron-back'
                            type='ionicon'
                            color='#fff'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Icon style={{display: 'none'}} name="heart-outline" type='ionicon' size={20} color={'#fff'}/>
                </View>
                <View style={styles.marketplaceText}>
                    <Text style={styles.marketplaceItem}>iPad Pro</Text>
                    <View style={{flexDirection: 'row', paddingTop: 4, marginLeft:20}}>
                        <Icon
                            name='desktop-outline'
                            type='ionicon'
                            color='#fff'
                            size={15}
                        />
                        <Text style={styles.marketplaceLabel}>Technology</Text>
                    </View>
                </View>
                <Image
                    source={require('../assets/ipad.png')}
                    style={styles.ipad}
                />

                <View style={styles.auction}>
                    <LinearGradient
                        colors={['#383B55', '#313131']}
                        style={styles.gradient}
                        start={{ x: -0.4, y: -0.6 }}
                    />
                    <Text style={styles.auctionHeader}>Place Bid</Text>
                    <Text style={styles.auctionText}>Product Details</Text>
                    <View style={styles.specs}>
                        <View>
                            <Text style={styles.specLabel}>display size</Text>
                            <Text style={styles.specInfo}>12.9"</Text>
                        </View>
                        <View>
                            <Text style={styles.specLabel}>storage</Text>
                            <Text style={styles.specInfo}>128<Text style={{fontSize: 12}}>GB</Text></Text>
                        </View>
                        <View>
                            <Text style={styles.specLabel}>colour</Text>
                            <Text style={styles.specInfo}>Space Gray</Text>
                        </View>
                    </View>
                    <Text style={styles.auctionText}>Quality</Text>
                    <View style={styles.quality}>
                        <TouchableOpacity style={quality === 'new' ? styles.qualityButtonActive : styles.qualityButton} onPress={() => setQuality('new')}>
                            <View style={[quality === 'new' ? styles.qualityCircleActive : styles.qualityCircle, {backgroundColor: '#6AB251'}]}/>
                            <Text style={quality === 'new' ? styles.qualityTextActive : styles.qualityText}>New</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={quality === 'lightly used' ? styles.qualityButtonActive : styles.qualityButton} onPress={() => setQuality('lightly used')}>
                            <View style={[quality === 'lightly used' ? styles.qualityCircleActive : styles.qualityCircle, {backgroundColor: '#FFA755'}]}/>
                            <Text style={quality === 'lightly used' ? styles.qualityTextActive : styles.qualityText}>Lightly Used</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={quality === 'used' ? styles.qualityButtonActive : styles.qualityButton} onPress={() => setQuality('used')}>
                            <View style={[quality === 'used' ? styles.qualityCircleActive : styles.qualityCircle, {backgroundColor: '#EA7272'}]}/>
                            <Text style={quality === 'used' ? styles.qualityTextActive : styles.qualityText}>Used</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.auctionText}>Place Bid Amount</Text>
                    <Text style={styles.dollar}>$</Text>
                    <TextInput
                        value={bid}
                        onChangeText={(text) => {
                            setBid(text);
                        }}
                        onSubmitEditing={doBid()}
                        style={[styles.input, {paddingLeft:40}]}
                    />
                    <TouchableOpacity style={styles.sell} onPress={sendBid}>
                        <Text style={styles.sellText}>Bid</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        height: 100 + '%',
        paddingTop: 65,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20
    },
    backButton: {
        position: 'relative',
        marginLeft: 20
    },
    marketplaceItem: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 29.3,
        width: 127,
        paddingBottom: 2,
        marginLeft: 20
    },
    marketplaceLabel: {
        color: '#fff',
        fontSize: 10,
        letterSpacing: 0.5,
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingLeft: 8,
        paddingTop: 3,
    },
    marketplaceText: {
        paddingTop: 37,
        paddingBottom: 11,
        paddingLeft: 12
    },
    ipad: {
        position: 'absolute',
        width: 45 + '%',
        height: 20 + '%',
        top: 70,
        right: 15,
        zIndex: 99
    },

    auction: {
        height: 775,
        width: 100 + '%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: 95,
        overflow: 'hidden'
    },
    gradient: {
        width: 100 + '%',
        height: 100 + '%',
        position: 'absolute',
        flex: 1,
    },
    auctionHeader: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        marginLeft: 22,
        marginTop: 38,
        marginBottom: 6
    },
    auctionText: {
        fontWeight: '500',
        fontSize: 15,
        color: '#fff',
        marginTop: 20,
        marginLeft: 22
    },
    specs: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 27,
        marginBottom: 8
    },
    specLabel: {
        textTransform: 'uppercase',
        fontWeight: '500',
        letterSpacing: 0.5,
        fontSize: 10,
        lineHeight: 12,
        color: '#C5C5C5',
        textAlign: 'center',
        paddingBottom: 8
    },
    specInfo: {
        color: '#F7F7F7',
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    quality: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 18,
        marginBottom: 15
    },
    qualityButton: {
        backgroundColor: 'transparent',
        height: 66,
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#6C6C6C',
        position: 'relative'
    },
    qualityButtonActive: {
        backgroundColor: 'transparent',
        height: 66,
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative'
    },
    qualityCircle: {
        width: 15,
        height: 15,
        borderRadius: 15,
        position: 'absolute',
        top: 11,
        alignSelf: 'center'
    },
    qualityCircleActive: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'absolute',
        top: 11,
        alignSelf: 'center'
    },
    qualityText :{
        fontSize: 12,
        fontWeight: '700',
        color: '#6C6C6C',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 12
    },
    qualityTextActive :{
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 12
    },
    input: {
        borderRadius:5,
        height:52,
        width:90 + '%',
        alignSelf: "center",
        backgroundColor: '#20212B',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:8,
        paddingBottom:8,
        color: "#fff",
        fontSize:20,
        fontWeight:"700",
        marginTop: 20,
    },
    sell: {
        borderRadius: 20,
        height: 36,
        width: 137,
        backgroundColor: '#5B7AEA',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 60,
        flexDirection: 'row'
    },
    sellText: {
        color: '#EBEFFF',
        fontSize: 15,
        fontWeight: '700',
    },
    dollar: {
        color: "#fff",
        fontSize:20,
        fontWeight:"700",
        position: 'absolute',
        top: 387,
        left: 40,
        zIndex: 100
    }
});
