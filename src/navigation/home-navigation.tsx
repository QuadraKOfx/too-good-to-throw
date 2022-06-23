import {FavoritesScreenTyped, HomeScreenTyped, ProfileScreenTyped} from "../utils/types";
import {Foundation, Ionicons, MaterialIcons} from "@expo/vector-icons";
import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{backgroundColor: "white"}}>
            <Tab.Screen name="Explore" component={HomeScreenTyped} options={{
                tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color}/>
            }}/>
            <Tab.Screen name="Favorites" component={FavoritesScreenTyped} options={{
                tabBarIcon: ({color}) => <MaterialIcons name="favorite" size={24} color={color}/>
            }}></Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreenTyped} options={{
                tabBarIcon: ({color}) => <Ionicons name="ios-person" size={24} color={color}/>
            }}/>
        </Tab.Navigator>
    );
}

export default HomeTabs;
