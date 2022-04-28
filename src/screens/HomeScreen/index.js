import {StyleSheet, FlatList, View} from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantItem from "../../components/RestaurantItem";
import CustomInput from "../../components/custom-input/CustomInput";
import {useForm} from "react-hook-form";
import {createRef, useEffect, useState} from "react";
import {Keyboard} from "react-native";

export default function HomeScreen({props}) {
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const {control, reset} = useForm();

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("Keyboard Shown");
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("Keyboard Hidden");
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const processSearch = () => {
        console.info("Searching... ");
        reset();
    }

    return (
        <View style={styles.pageContainer}>
            <CustomInput
                name="search"
                placeholder="Search"
                onSubmitEditing={processSearch}
                control={control}/>
            <FlatList data={restaurants}
                      style={styles.listContainer}
                      renderItem={({item}) => <RestaurantItem restaurant={item} navigation={props.navigation}/>}
                      showsVerticalScrollIndicator={false}/>
        </View>

    );
}

const styles = StyleSheet.create({
    pageContainer: {
        padding: 15,
        paddingVertical: 45 // temporary hack
    },
    listContainer: {
        marginTop: 10
    }
});
