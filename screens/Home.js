import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'

export const Home = ({navigation}) => {
    const [query, setQuery] = useState("");

    const brands = ["Apple", "Pokemon", "Balenciaga", "Louis Vuitton"];

    const tags = brands.map( brand => (
        <TouchableOpacity key={brand} style={styles.tags}>
            <Text style={styles.tagText}>{brand}</Text>
        </TouchableOpacity>
    ));

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Icon name="notifications" size={25} color={'#fff'}/>
            </View>
            <SearchBar
                placeholder="SEARCH ITEM"
                onChangeText={() => setQuery(query)}
                value={query}
                inputContainerStyle={styles.searchBar}
                containerStyle={styles.searchBarContainer}
                inputStyle={styles.searchBarText}
                placeholderTextColor={'#242424'}
                leftIconContainerStyle={styles.searchBarIcon}
            />
            <Text style={styles.heading}>Trending Brands</Text>
            <View style={styles.tagsContainer}>
                {tags}
            </View>
            <Text style={styles.heading}>Browse Categories</Text>
            <View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.category, {backgroundColor: '#CBD6FF'}]}>
                        <Text style={styles.categoryTag}>Clothing</Text>
                        <Image
                            source={require('../assets/clothing.png')}
                            style={{left: 10, top:10, position: 'absolute', width: 70 + '%', height: 80 + '%'}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.category, {backgroundColor: '#9CB2FF'}]}>
                        <Text style={styles.categoryTag}>Collectibles</Text>
                        <Image
                            source={require('../assets/collectibles.png')}
                            style={{left: 5, top:15, position: 'absolute', width: 80 + '%', height: 71 + '%'}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.category, {backgroundColor: '#5B7AEA'}]}>
                        <Text style={styles.categoryTag}>Technology</Text>
                        <Image
                            source={require('../assets/technology.png')}
                            style={{left: 15, top:15, position: 'absolute', width: 83 + '%', height: 73 + '%'}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.category, {backgroundColor: '#CBD6FF'}]}>
                        <Text style={styles.categoryTag}>Accessories</Text>
                        <Image
                            source={require('../assets/accessories.png')}
                            style={{left: 10, top:0, position: 'absolute', width: 93 + '%', height: 83 + '%'}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.heading}>Marketplace</Text>
            <View style={{height: 600, width:370, paddingLeft:0, paddingRight:0, alignSelf:'center'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.marketplaceCard} onPress={() => navigation.navigate('Product')}>
                        <Image
                            source={require('../assets/vector1.png')}
                            style={styles.vector1}
                        />
                        <Image
                            source={require('../assets/ipad.png')}
                            style={styles.ipad}
                        />
                        <View style={styles.marketplaceText}>
                            <Text style={styles.marketplaceItem}>iPad Pro</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon
                                    name='desktop-outline'
                                    type='ionicon'
                                    color='#434343'
                                    size={15}
                                />
                                <Text style={styles.marketplaceLabel}>Technology</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.marketplaceCard}>
                        <Image
                            source={require('../assets/vector1.png')}
                            style={styles.vector1}
                        />
                        <Image
                            source={require('../assets/jordan.png')}
                            style={styles.jordan}
                        />
                        <View style={styles.marketplaceText}>
                            <Text style={styles.marketplaceItem}>Jordan 5    Retro</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon
                                    name='diamond'
                                    type='font-awesome'
                                    color='#434343'
                                    size={13}
                                />
                                <Text style={styles.marketplaceLabel}>Accessories</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.marketplaceCard}>
                    <Image
                        source={require('../assets/vector1.png')}
                        style={styles.vector1}
                    />
                    <Image
                        source={require('../assets/magikarp.png')}
                        style={styles.magikarp}
                    />
                    <View style={styles.marketplaceText}>
                        <Text style={styles.marketplaceItem}>Magikarp Pokemon Card</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon
                                name='gift-outline'
                                type='ionicon'
                                color='#434343'
                                size={15}
                            />
                            <Text style={styles.marketplaceLabel}>Collectibles</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.marketplaceCard, {backgroundColor: '#9DB3FF'}]}>
                    <Image
                        source={require('../assets/vector1.png')}
                        style={[styles.vector1, {top: 0}]}
                    />
                    <View style={[styles.marketplaceText, {bottom:70, left:25}]}>
                        <View style={{width: 19, height:19, borderRadius: 19, borderWidth:2, borderColor:'#434343', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                            <Icon
                                name='more-horiz'
                                color='#434343'
                                size={16}
                            />
                        </View>
                        <Text style={[styles.marketplaceItem, {textAlign:'center', marginTop:6}]}>Browse Marketplace</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
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
        position: 'relative'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 80,
        height: 12,
        marginTop: 10
    },
    searchBar: {
        backgroundColor: '#fff',
        height: 34
    },
    searchBarContainer: {
        backgroundColor: '#242424',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 18
    },
    searchBarText: {
        color: '#242424',
        fontSize: 10,
        letterSpacing: 1,
    },
    searchBarIcon: {
        color: '#242424',
        paddingLeft: 8
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 23.44,
        color: '#fff',
        marginTop: 20
    },
    tags: {
        borderRadius: 14,
        backgroundColor: '#505050',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    tagText: {
        fontSize: 11,
        color: '#C8C8C8',
        fontWeight: '700'
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 14
    },
    category: {
        borderRadius: 5,
        height: 100,
        width: 180,
        position: 'relative'
    },
    categoryTag: {
        color: '#434343',
        fontSize: 13,
        fontWeight: '700',
        position: 'absolute',
        bottom: 9,
        right: 12
    },
    categoryImage: {
        position: 'absolute',
        width: 70 + '%',
        height: 80 + '%'
    },
    marketplaceCard: {
        height: 235,
        width: 180,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginTop: 14,
        position: 'relative',
        overflow: 'hidden',
        marginRight: 13
    },
    vector1: {
        position: 'absolute',
        width: 180,
        height: 184,
        left: 0,
        bottom: 0
    },
    marketplaceItem: {
        color: '#434343',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 20,
        width: 127,
        paddingBottom: 2,
    },
    marketplaceLabel: {
        color: '#434343',
        fontSize: 8,
        letterSpacing: 0.5,
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingLeft: 4,
        paddingTop: 3
    },
    marketplaceText: {
        bottom: 12,
        left: 14,
        position: 'absolute'
    },
    ipad: {
        position: 'absolute',
        width: 75 + '%',
        height: 65 + '%',
        bottom: 60,
        right: 10
    },
    magikarp: {
        position: 'absolute',
        width: 75 + '%',
        height: 65 + '%',
        bottom: 65,
        right: 10
    },
    jordan: {
        position: 'absolute',
        width: 80 + '%',
        height: 70 + '%',
        bottom: 35,
        right: 10
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
