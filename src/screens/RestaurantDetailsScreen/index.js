import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import {FontAwesome, Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import {useCallback, useEffect, useRef, useState} from "react";
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import ApplePay from "../../components/apple-pay/ApplePay";
import {fetchPublishableKey} from "../../../helpers";
import PaymentGateway from "../../components/apple-pay/ApplePay";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = ({props}) => {
    const navigation = props.navigation;
    const route = props.route;
    const id = route.params?.id
    const bottomSheetRef = useRef(null);
    console.info("Params => ", id);

    const handleSheetChanges = useCallback((index) => {
        bottomSheetRef.current?.snapToIndex(index);
        console.info("snap to index >>>", index);
    }, []);



    return (
        <View style={styles.pageContainer}>
            <Image style={styles.image}
                   source={{uri: restaurant.image}}
                   resizeMode="cover"/>

            <Ionicons name="arrow-back-circle"
                      size={50}
                      color="white"
                      onPress={() => navigation.goBack()}
                      style={styles.backIconContainer}/>

            <View style={styles.restaurantInfo}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <View style={styles.labelsContainer}>
                    {/* RATINGS LABEL */}
                    <View style={styles.ratings}>
                        <FontAwesome name="star" size={20} color="yellow" />
                        <Text>{restaurant['rating']} (58)</Text>
                    </View>

                    {/* QUANTITY AVAILABLE LABEL */}
                    <View style={styles.quantity}>
                        <SimpleLineIcons name="handbag" size={16} color="black" />
                        <Text>{restaurant['boxes']['available']} &#8226; Left</Text>
                    </View>
                </View>
                <Text style={styles.time}>Collect Between &#8226; 15:00 - 17:30</Text>
                {/*<Text style={styles.subtitle}>Price Fee &#8226; ${restaurant['deliveryFee']}</Text>*/}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleSheetChanges(0)}
                                  style={styles.button}>
                    <Text style={styles.buttonText}>
                        Reserve
                    </Text>
                </TouchableOpacity>
            </View>

            <BottomSheet ref={bottomSheetRef}
                         index={-1}
                         enablePanDownToClose={true}
                         snapPoints={["50%", "90%"]}>
                <BottomSheetView style={{flex: 1, alignItems: 'center'}}>
                    <Text>Welcome to your Payments</Text>
                    <PaymentGateway />
                </BottomSheetView>
            </BottomSheet>


        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1
    },
    labelsContainer: {
        flexDirection: "row"
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
        aspectRatio: 5 / 3
    },
    title: {
        fontSize: 24,
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
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 7,
        flexDirection: "row",
        width: 80,
        height: 35,
    },
    quantity: {
        marginTop: 7,
        marginLeft: 5,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 7,
        flexDirection: "row",
        width: 100,
        height: 35,
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 35
    },
    button: {
        backgroundColor: "black",
        width: "80%",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    bottomSheet: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey'
    }
});

export default RestaurantDetailsScreen;
