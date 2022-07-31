import React from "react";
import {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

type FormProps = {
    isLoading: boolean;
}


export default function CCardForm(props: FormProps) {
    const {isLoading} = props;
    const [CardNumber, setCardNumber] = useState('');

    return (
        <View style={isLoading ? style.isLoading: null}>
            <View style={style.cardForm}>
                {/* Card Details Container */}
                <View>
                    <TextInput
                        style={style.cardInput}
                        autoComplete="off"
                        maxLength={19}
                        value={CardNumber}
                        keyboardType={'numeric'}
                        placeholder={'Card Number'}
                        placeholderTextColor='grey'
                    />
                </View>

                {/* Card Holder Container */}
                <View style={style.inputContainer}>
                    <TextInput
                        style={style.cardInput}
                        autoComplete="off"
                        value={CardNumber}
                        placeholder={'Card Holder'}
                        placeholderTextColor='grey'
                    />
                </View>

                {/* Card Security Details Container */}
                <View style={style.cardSecurity}>
                    <View style={style.inputContainer}>
                        <TextInput
                            style={style.expirationDate}
                            autoComplete="off"
                            value={CardNumber}
                            placeholder={'Expiration Date'}
                            placeholderTextColor='grey'
                        />
                    </View>

                    {/* Card CVV */}
                    <View style={style.inputContainer}>
                        <TextInput
                            style={style.CVV}
                            autoComplete="off"
                            value={CardNumber}
                            placeholder={'CVV'}
                            placeholderTextColor='grey'
                        />
                    </View>
                </View>


            </View>
        </View>

    );
}

const style = StyleSheet.create({
    CVV: {
        width: '100%',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        borderRadius: 5,
        borderStyle: "solid",
        color: '#1a3b5d',
        borderWidth: 1,
        borderColor: '#ced6e0',
        marginLeft: 10
    },
    cardSecurity: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%'
    },
    expirationDate: {
        width: '100%',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        borderRadius: 5,
        borderStyle: "solid",
        color: '#1a3b5d',
        borderWidth: 1,
        borderColor: '#ced6e0'
    },
    isLoading: {
      opacity: .2
    },
    cardForm: {
        height: '30%',
        width: '100%',
        borderRadius: 6,
        marginTop: 40,
    },
    cardInput: {
        width: '100%',
        paddingTop: 5,
        paddingLeft: 15,
        height: 50,
        borderRadius: 5,
        borderStyle: "solid",
        color: '#1a3b5d',
        borderWidth: 1,
        borderColor: '#ced6e0'
    },
    inputContainer: {
        marginTop: 10
    }
});
