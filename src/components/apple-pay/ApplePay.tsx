import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, Alert, TextInput} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {CardField, useConfirmPayment} from "@stripe/stripe-react-native";
import {API_NEST_URL, API_URL} from "../../../Config";
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

const DUMMY_PAYLOAD = {
    "products":[{
        "id": "1",
        "price": 10.00,
        "title": "test",
        "quantity": 1
    }],
    "currency": "EUR"
}

const PaymentGateway = () => {
    const stripePromise = loadStripe('pk_test_51LGtv6BViwENwDkq7FuAxGsRSB59AwF9jtKVQL2hpDGFhMHo3KAH4rQkvOiyjQq0UWHYX6AhZCDOByblPHmbptov00g4Oxq6c3');
    return (
        <Elements stripe={stripePromise}>
            <ApplePay/>
        </Elements>
    );
};

const ApplePay = () => {
    const [name, setName] = useState('');
    const {confirmPayment, loading} = useConfirmPayment();

    const stripe = useStripe();
    const elements = useElements();

    const testApi = async () => {
        await fetch(`${API_NEST_URL}api/payments/test`).then(res => {
            console.info(res);
        })
    }

    const handlePayPress = async () => {
        console.info(DUMMY_PAYLOAD);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DUMMY_PAYLOAD)
        };
        try {
            await fetch(`${API_NEST_URL}api/payments/createPayment`, requestOptions).then(async res => {
                const _res = await res.text();
                alert(_res);
            })
        } catch (error) {
            alert(`${API_NEST_URL}api/payments/createPayment`);
            console.info(`${API_NEST_URL}api/payments/createPayment`);
            console.info("Something went wrong => ", error);
        }
    }

    useEffect(() => {
        testApi().catch();
    }, []);

    return (
        <View style={style.container}>
            <View style={style.appInfo}>
                {/*<Image style={style.image} source={require("../../assets/rocketsIcon.png")} />*/}
                <View>
                    <Text style={style.text}>Rockets X</Text>
                    <Text style={[style.text, {color: 'gray'}]}>Quadrako</Text>
                    <Text style={[style.text, {color: 'gray'}]}>Offers In-App-Purchases</Text>
                </View>
            </View>
            <View style={style.separator}></View>
            <Text style={[style.text, {color: 'gray', marginLeft: 15, marginVertical: 5}]}>
                ACCOUNT
                <Text style={[style.text]}> quadrako93@gmail.com</Text>
            </Text>
            <View style={style.separator}></View>
            <View style={style.payment_card}>
                {/*<TextInput*/}
                {/*    autoCapitalize="none"*/}
                {/*    placeholder="Name"*/}
                {/*    keyboardType="name-phone-pad"*/}
                {/*    onChange={(value) => setName(value.nativeEvent.text)}*/}
                {/*    style={style.input}/>*/}
                <CardField
                    style={style.cardField}
                    postalCodeEnabled={false}
                    cardStyle={{
                        borderColor: '#000000',
                        borderWidth: 1,
                        borderRadius: 8
                    }}
                />
            </View>
            <View style={style.separator}></View>
            <TouchableOpacity onPress={handlePayPress} disabled={loading}>
                <View style={style.confirmButton}><Text style={{color: '#fff', fontSize: 30}}>💸</Text></View>
            </TouchableOpacity>
        </View>
    );
}

export default PaymentGateway;

const style = StyleSheet.create({
    payment_card: {},
    cardField: {
        width: '100%',
        height: 50,
        marginVertical: 30
    },
    input: {
        fontSize: 20,
        fontWeight: "400",
        color: "#000",
    },
    container: {
        width: '90%',
        marginHorizontal: 5,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 30,
        letterSpacing: .5,
        color: "#000",
    },
    text: {
        color: "#000",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    appInfo: {
        flexDirection: "row",
        marginLeft: '10%',
        alignItems: "center",
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: "#00000040",
        marginVertical: 10,
    },
    confirmButton: {
        backgroundColor: "#0080FB",
        height: 50,
        width: 50,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 15,
        alignItems: "center",
    }
});
