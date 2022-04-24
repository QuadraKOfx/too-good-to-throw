import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./src/utils/types";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import React from "react";

type RestaurantScreenProps = NativeStackScreenProps<RootStackParamList, "RestaurantDetails">;
const RestaurantTyped: React.FC<RestaurantScreenProps> = (props) => {
    return (<RestaurantDetailsScreen props={props}/>);
}

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
const HomeScreenTyped: React.FC<HomeScreenProps> = (props) => {
    return (<HomeScreen props={props}/>);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreenTyped}/>
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
            <RootNavigator />
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}

export default App;
