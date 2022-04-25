import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./src/utils/types";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Foundation, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ProfileScreen from "./src/screens/ProfileScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import {Amplify} from "aws-amplify";
import {withAuthenticator} from "aws-amplify-react-native";
import config from './src/aws-exports';

Amplify.configure(config);

type RestaurantScreenProps = NativeStackScreenProps<RootStackParamList, "RestaurantDetails">;
const RestaurantTyped: React.FC<RestaurantScreenProps> = (props) => {
    return (<RestaurantDetailsScreen props={props}/>);
}

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
const HomeScreenTyped: React.FC<HomeScreenProps> = (props) => {
    return (<HomeScreen props={props}/>);
}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;
const ProfileScreenTyped: React.FC<ProfileScreenProps> = () => {
    return (<ProfileScreen/>);
}

type FavoritesScreenProps = NativeStackScreenProps<RootStackParamList, "Favorites">;
const FavoritesScreenTyped: React.FC<FavoritesScreenProps> = () => {
    return (<FavoritesScreen/>);
}

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
            }}/>
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
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <RootNavigator/>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}

export default withAuthenticator(App);
