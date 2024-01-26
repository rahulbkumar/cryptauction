import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { Auction } from "../screens/Auction";
import { FinishedAuction } from "../screens/FinishedAuction";
import { Bid } from "../screens/Bid"
import { FinishedBid } from "../screens/FinishedBid";

const Stack = createStackNavigator();

const Navigation = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                          }}/>
            <Stack.Screen name="Product" component={Product}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Auction" component={Auction}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="FinishedAuction" component={FinishedAuction}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Bid" component={Bid}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="FinishedBid" component={FinishedBid}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
        </Stack.Navigator>
    );
};

export { Navigation }
