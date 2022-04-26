import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
    Home: undefined,
    RestaurantDetails: { id: string };
    Profile: undefined,
    Favorites: undefined,
    SignIn: undefined
};

type RestaurantScreenProps = NativeStackScreenProps<RootStackParamList, "RestaurantDetails">;
export const RestaurantTyped: React.FC<RestaurantScreenProps> = (props) => {
    return (<RestaurantDetailsScreen props={props}/>);
}

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
export const HomeScreenTyped: React.FC<HomeScreenProps> = (props) => {
    return (<HomeScreen props={props}/>);
}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;
export const ProfileScreenTyped: React.FC<ProfileScreenProps> = (props) => {
    return (<ProfileScreen props={props}/>);
}

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, "SignIn">;
export const SignInScreenTyped: React.FC<SignInScreenProps> = (props) => {
    return (<SignInScreen props={props}/>);
}

type FavoritesScreenProps = NativeStackScreenProps<RootStackParamList, "Favorites">;
export const FavoritesScreenTyped: React.FC<FavoritesScreenProps> = () => {
    return (<FavoritesScreen/>);
}
