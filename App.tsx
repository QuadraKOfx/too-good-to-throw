import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    FavoritesScreenTyped,
    HomeScreenTyped,
    ProfileScreenTyped,
    RestaurantTyped,
    SignInScreenTyped,
    RootStackParamList,
} from "./src/utils/types";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import React, {useEffect} from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Foundation, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Amplify, Auth} from "aws-amplify";
import config from './src/aws-exports';
import {AuthContextProvider} from "./src/contexts/AuthContext";

Amplify.configure({
    ...config,
    Analytics: {
        disabled: true
    },
});

const Stack = createNativeStackNavigator<RootStackParamList>();

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

const RootNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeTabs}/>
            <Stack.Screen
                name="RestaurantDetails"
                options={{headerShown: false}}
                component={RestaurantTyped}/>
            <Stack.Screen
                name="SignIn"
                options={{headerShown: false}}
                component={SignInScreenTyped}/>
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <AuthContextProvider>
                <RootNavigator/>
            </AuthContextProvider>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}

export default App;
