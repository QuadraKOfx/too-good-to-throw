import {StyleSheet, FlatList, View} from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantItem from "../../components/RestaurantItem";

export default function HomeScreen({props}) {
    console.info(props);
    return (
        <View style={styles.pageContainer}>
            <FlatList data={restaurants}
                      renderItem={({item}) => <RestaurantItem restaurant={item}
                                                              navigation={props.navigation}/>}
                      showsVerticalScrollIndicator={false}/>
        </View>

    );
}

const styles = StyleSheet.create({
    pageContainer: {
        padding: 10,
        paddingVertical: 45 // temporary hack
    }
});
