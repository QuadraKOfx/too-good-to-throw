import React from "react";
import {
    ConfirmScreenTyped,
    RestaurantTyped,
    RootStackParamList,
    SignInScreenTyped,
    SignUpScreenTyped
} from "../utils/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeTabs from "./home-navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeTabs}/>
            <Stack.Screen
                name="RestaurantDetails"
                options={{headerShown: false}}
                component={RestaurantTyped}/>
            <Stack.Screen
                name="ConfirmEmail"
                options={{headerShown: false}}
                component={ConfirmScreenTyped}/>
            <Stack.Screen
                name="SignIn"
                options={{headerShown: false}}
                component={SignInScreenTyped}/>
            <Stack.Screen
                name="SignUp"
                options={{headerShown: false}}
                component={SignUpScreenTyped}/>
        </Stack.Navigator>
    );
}

export default RootNavigator;
