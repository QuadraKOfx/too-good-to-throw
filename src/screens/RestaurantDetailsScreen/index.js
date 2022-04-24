import {View, Text, Image, FlatList, StyleSheet} from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import {Ionicons} from "@expo/vector-icons";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = ({props}) => {
    const navigation = props.navigation;
    const route = props.route;
    const id = route.params?.id

    return (
        <View style={styles.pageContainer}>
            <Image style={styles.image}
                   source={{uri: restaurant.image}}
                   resizeMode="cover"/>

            <Ionicons name="arrow-back-circle"
                      size={50}
                      color="white"
                      style={styles.backIconContainer}/>

            <View style={styles.restaurantInfo}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <View style={styles.ratings}>
                    <Text>{restaurant['rating']}</Text>
                    <Text>(58)</Text>
                </View>
                <Text style={styles.time}>Collect Between &#8226; 15:00 - 17:30</Text>
                {/*<Text style={styles.subtitle}>Price Fee &#8226; ${restaurant['deliveryFee']}</Text>*/}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1
    },
    restaurantInfo: {
        flexDirection: "column",
        marginLeft: 5
    },
    backIconContainer: {
        position: "absolute",
        top: 40,
        left: 10
    },
    image: {
        width: "100%",
        aspectRatio: 5/3
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 10
    },
    time: {
        fontSize: 15,
        fontWeight: "500",
        marginVertical: 10
    },
    ratings: {
        marginBottom: "auto",
        marginRight: 5,
        marginTop: 7,
        backgroundColor: "lightgray",
        width: 50,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        flexDirection: "row"
    },
});

export default RestaurantDetailsScreen;
