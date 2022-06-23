import {StyleSheet, FlatList, View, Pressable, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import RestaurantItem from "../../components/RestaurantItem";
import CustomInput from "../../components/custom-input/CustomInput";
import {useForm} from "react-hook-form";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Keyboard} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import ApplePay from "../../components/apple-pay/ApplePay";
import {CustomBackground} from "../../utils/sheet-types";
import customBackDrop from "../../components/custom-backdrop/CustomBackDrop";

export default function HomeScreen({props}) {
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const [isOpen, setIsOpen] = useState(true);
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '70%'], []);
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

    // callbacks
    const handlePresentModalPress = index => {
        bottomSheetModalRef?.current?.present();
        console.info("pressed => ", index, bottomSheetModalRef);
    };

    const handleSheetChanges = index => {
        console.log('handleSheetChanges', index);
    };

    return (
        <View style={styles.pageContainer}>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                index={1}
                onChange={handleSheetChanges}
                backdropComponent={customBackDrop}
                backgroundComponent={CustomBackground}>
                <ApplePay />
            </BottomSheetModal>

            <View style={styles.filterContainer}>
                <CustomInput
                    width="80"
                    name="search"
                    placeholder="Search"
                    onSubmitEditing={processSearch}
                    control={control}/>
                <TouchableOpacity
                    onPress={() => handlePresentModalPress(0)}
                    style={styles.filterIcon}>
                    <Ionicons name="filter"
                              size={38}
                              color="black"/>
                </TouchableOpacity>
            </View>

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
        marginVertical: 50
    },
    filterContainer: {
        flexDirection: "row"
    },
    listContainer: {
        marginTop: 10
    },
    filterIcon: {
        marginLeft: 5,
        padding: 10
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    sheetContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
