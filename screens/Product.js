import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon, SearchBar, BottomSheet} from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
import {set} from "react-native-reanimated";

export const Product = ({navigation}) => {
    const [size, setSize] = useState('12.9');
    const [storage, setStorage] = useState('129');
    const [colour, setColour] = useState('Space Gray');

    const [visible, setVisible] = useState(false);

    return(
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
                <Icon name="heart-outline" type='ionicon' size={20} color={'#fff'}/>
            </View>
            <View style={styles.marketplaceText}>
                <Text style={styles.marketplaceItem}>iPad Pro</Text>
                <View style={{flexDirection: 'row', paddingTop: 4}}>
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
            <View style={styles.product}>
                <View style={styles.tags}>
                    <Text style={styles.tagText}>10 Available</Text>
                </View>
                <Image
                    source={require('../assets/vector2.png')}
                    style={styles.vector2}
                />
                <View style={styles.specs}>
                    <View>
                        <Text style={styles.specLabel}>display size</Text>
                        <Text style={styles.specInfo}>{size}"</Text>
                    </View>
                    <View>
                        <Text style={styles.specLabel}>storage</Text>
                        <Text style={styles.specInfo}>{storage}<Text style={{fontSize: 12}}>GB</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.specLabel}>colour</Text>
                        <Text style={styles.specInfo}>{colour}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.specButton} onPress={() => setVisible(!visible)}>
                    <Text style={styles.specButtonLabel}>size</Text>
                    <Text style={styles.specButtonData}>{size}"</Text>
                    <View style={{position: 'absolute', right: 13, top:10}}>
                        <Icon
                            name='chevron-forward'
                            type='ionicon'
                            color='#fff'
                            size={15}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.specButton}>
                    <Text style={styles.specButtonLabel}>storage</Text>
                    <Text style={styles.specButtonData}>{storage} GB</Text>
                    <View style={{position: 'absolute', right: 13, top:10}}>
                        <Icon
                            name='chevron-forward'
                            type='ionicon'
                            color='#fff'
                            size={15}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.specButton}>
                    <Text style={styles.specButtonLabel}>colour</Text>
                    <Text style={styles.specButtonData}>{colour}</Text>
                    <View style={{position: 'absolute', right: 13, top:10}}>
                        <Icon
                            name='chevron-forward'
                            type='ionicon'
                            color='#fff'
                            size={15}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sell} onPress={() => navigation.navigate('Auction')}>
                    <Icon
                        name='card-outline'
                        type='ionicon'
                        color='#EBEFFF'
                        size={18}
                    />
                    <Text style={styles.sellText}>Sell</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bid} onPress={() => navigation.navigate('Bid')}>
                    <Icon
                        name='stats-chart-outline'
                        type='ionicon'
                        color='#5B7AEA'
                        size={16}
                    />
                    <Text style={styles.bidText}>Bid</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tab}>
                <View>
                    <Icon
                        name='home'
                        type='ionicon'
                        color='#fff'
                        size={22}
                    />
                    <Text style={styles.tabTextActive}>Home</Text>
                </View>
                <View>
                    <Icon
                        name='list'
                        type='ionicon'
                        color='#858585'
                        size={22}
                    />
                    <Text style={styles.tabText}>Categories</Text>
                </View>
                <View>
                    <Icon
                        name='pricetags'
                        type='ionicon'
                        color='#858585'
                        size={21}
                    />
                    <Text style={styles.tabText}>Marketplace</Text>
                </View>
                <View>
                    <Icon
                        name='person'
                        type='ionicon'
                        color='#858585'
                        size={22}
                    />
                    <Text style={styles.tabText}>Profile</Text>
                </View>
            </View>

            <BottomSheet
                isVisible={visible}
                containerStyle={{ backgroundColor: 'rgba(0.75, 0.75, 0.75, 0.75)', marginBottom: -35 }}
            >
                <View style={styles.bottomSheet}>
                    <LinearGradient
                        colors={['#383B55', '#313131']}
                        style={styles.gradient}
                        start={{ x: -0.4, y: -0.6 }}
                    />
                    <TouchableOpacity style={styles.closeBottomSheet} onPress={() => setVisible(!visible)}>
                    </TouchableOpacity>
                    <Text style={styles.bottomSheetHeader}>Display Size</Text>
                    <TouchableOpacity onPress={() => setSize('11')} style={size === '11' ? styles.activeOption : styles.option}>
                        <Text style={size === '11' ? styles.activeOptionLabel : styles.optionLabel}>11"-inch display</Text>
                        <View style={size === '11' ? styles.activeCircle: styles.circle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSize('12.9')} style={size === '12.9' ? styles.activeOption : styles.option}>
                        <Text style={size === '12.9' ? styles.activeOptionLabel : styles.optionLabel}>12.9"-inch display</Text>
                        <View style={size === '12.9' ? styles.activeCircle: styles.circle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setVisible(!visible)} style={[styles.sell, {marginTop: 40}]}>
                        <Text style={[styles.sellText, {marginLeft: 0}]}>Save</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        height: 100 + '%',
        paddingTop: 65,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButton: {
        position: 'relative',
        left: 0
    },
    product: {
        backgroundColor: '#fff',
        height: 605,
        width: 370,
        borderRadius: 5,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    vector2: {
        position: 'absolute',
        width: 102 + '%',
        height: 100 + '%',
        left: 0,
        bottom: -55
    },
    ipad: {
        position: 'absolute',
        width: 70 + '%',
        height: 35 + '%',
        top: 90,
        right: 12,
        zIndex: 99
    },
    marketplaceItem: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 29.3,
        width: 127,
        paddingBottom: 2,
    },
    marketplaceLabel: {
        color: '#fff',
        fontSize: 10,
        letterSpacing: 0.5,
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingLeft: 8,
        paddingTop: 3
    },
    marketplaceText: {
        paddingTop: 37,
        paddingBottom: 11,
        paddingLeft: 12
    },
    tags: {
        borderRadius: 14,
        backgroundColor: '#5D81FF',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 3,
        paddingBottom: 3,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        left: 18,
        top: 15
    },
    tagText: {
        fontSize: 11,
        color: '#fff',
        fontWeight: '700'
    },
    specs: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 210,
        marginBottom: 35
    },
    specLabel: {
        textTransform: 'uppercase',
        fontWeight: '500',
        letterSpacing: 0.5,
        fontSize: 10,
        lineHeight: 12,
        color: '#696767',
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
    specButton: {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 5,
        height: 37,
        width: 330,
        alignSelf: 'center',
        marginBottom: 20,
    },
    specButtonLabel: {
        fontWeight: '600',
        fontSize: 10,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#fff',
        position: 'absolute',
        left: 20,
        top: 12
    },
    specButtonData: {
        position: 'absolute',
        fontSize: 12,
        color: '#fff',
        letterSpacing: 0.5,
        right: 37,
        top: 11,
        fontWeight: '600'
    },
    sell: {
        borderRadius: 20,
        height: 36,
        width: 137,
        backgroundColor: '#5B7AEA',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    sellText: {
        color: '#EBEFFF',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 8
    },
    bid: {
        borderRadius: 20,
        height: 36,
        width: 137,
        backgroundColor: '#EBEFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    bidText: {
        color: '#5B7AEA',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 8
    },

    bottomSheet: {
        width: 100 + '%',
        height: 355,
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    gradient: {
        width: 100 + '%',
        height: 100 + '%',
        position: 'absolute',
        flex: 1,
    },
    closeBottomSheet: {
        height: 4,
        width: 57,
        borderRadius: 2,
        backgroundColor: '#C4C4C4',
        alignSelf: 'center',
        marginTop: 20,
    },
    bottomSheetHeader: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        marginLeft: 22,
        marginTop: 38,
        marginBottom: 6
    },
    option: {
        backgroundColor: 'transparent',
        height: 51,
        width: 370,
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 15,
        borderColor: '#6C6C6C',
        position: 'relative'
    },
    activeOption: {
        backgroundColor: 'transparent',
        height: 51,
        width: 370,
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 15,
        borderColor: '#fff',
        position: 'relative'
    },
    optionLabel: {
        fontSize: 15,
        fontWeight: '700',
        color: '#6F6F6F',
        position: 'absolute',
        left: 30,
        top: 16
    },
    activeOptionLabel: {
        fontSize: 15,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        left: 30,
        top: 16
    },
    circle: {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
        borderRadius: 16,
        borderColor: '#DADADA',
        borderWidth: 1,
        position: 'absolute',
        top: 16,
        right: 30
    },
    activeCircle: {
        width: 16,
        height: 16,
        backgroundColor: '#EBEFFF',
        borderRadius: 16,
        borderColor: '#EBEFFF',
        borderWidth: 1,
        position: 'absolute',
        top: 16,
        right: 30
    },

    tab: {
        height: 75,
        width: 414,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: '#474747',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 10
    },
    tabTextActive: {
        color: '#fff',
        fontSize: 10,
        letterSpacing: 0.3,
        textAlign: 'center',
        paddingTop: 2
    },
    tabText: {
        color: '#858585',
        fontSize: 10,
        letterSpacing: 0.3,
        textAlign: 'center',
        paddingTop: 2
    }
});

