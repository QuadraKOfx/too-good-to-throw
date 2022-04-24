import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen
                name="Restaurant"
                options={{headerShown: false}}
                component={RestaurantDetailsScreen}/>
        </Stack.Navigator>
    );
}

export default RootNavigator;
