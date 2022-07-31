import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },
    container_SUPPORT: {
        justifyContent: "center",
        borderColor: "lightblue",
        backgroundColor: "lightblue",
        flex: 1
    },
    container_CHECKOUT: {

    },
    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#3B71F3',
    },

    text_TERTIARY: {
        color: 'gray',
    },
    text_SUPPORT: {

    }
});

export default CustomButton;
