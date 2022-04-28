import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

const RestaurantItem = ({restaurant, navigation}) => {

    const minDate = new Date(restaurant['minCollectionTime']);
    const maxDate = new Date(restaurant['maxCollectionTime']);
    const minHours = minDate.getHours() + ":" + minDate.getMinutes();
    const maxHours = maxDate.getHours() + ":" + maxDate.getMinutes();

    const onNavigate = () => {
        navigation.navigate("RestaurantDetails", {id: restaurant.id});
    }

    return (
        <Pressable onPress={onNavigate} style={styles.restaurantContainer}>
            <Image
                source={{uri: restaurant['image']}}
                style={styles.image}/>
            <View style={styles.row}>
                <View style={styles.restaurantInfo}>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.time}>Collect Between &#8226; {minHours} - {maxHours}</Text>
                    <Text style={styles.subtitle}>Price Fee &#8226; ${restaurant['deliveryFee']}</Text>
                </View>

                <View style={styles.ratings}>
                    <Text>{restaurant['rating']}</Text>
                </View>
            </View>

        </Pressable>
    );
}

export default RestaurantItem;


const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "lightgray"
    },
    image: {
        width: "100%",
        aspectRatio: 6/3,
        marginBottom: 5,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderWidth: 1,
        borderColor: "lightgray"
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5
    },
    subtitle: {
        color: "gray",
        fontWeight: "500",
    },
    restaurantInfo: {
        padding: 10
    },
    ratings: {
        marginLeft: "auto",
        marginBottom: "auto",
        marginRight: 10,
        marginTop: 15,
        backgroundColor: "lightgray",
        width: 35,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    },
    time: {},
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
});
