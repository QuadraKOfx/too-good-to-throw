import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {API_HOST_URL, API_NEST_URL, API_URL} from "../../../Config";
import CCardForm from "./form/form-index";
import CustomButton from "../custom-button/CustomButton";

const DUMMY_PAYLOAD = {
    "products": [{
        "id": "1",
        "price": 10.00,
        "title": "test",
        "quantity": 1
    }],
    "currency": "EUR"
}

const HideKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function Checkout() {

    const [isLoading, setLoading] = useState<boolean>(false);

    const handlePayPress = async () => {
        setLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(DUMMY_PAYLOAD)
        };
        try {
            await fetch(`${API_NEST_URL}api/payments/createPayment`, requestOptions).then(async res => {
                const _res = await res.json();
                handleResponse(_res);
            })
        } catch (error) {
            console.info(`${API_NEST_URL}api/payments/createPayment`);
            console.info("Something went wrong => ", error);
        }
    }

    const handleResponse = (response) => {
        // const isSuccess = response.status;
        if(response.status === 'succeeded') {
            setLoading(false);
        }
    }

    return (

        <View style={!isLoading ? style.normal : style.blurPayment}>
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

            <CCardForm isLoading={isLoading}/>
            <View style={style.separator}></View>
            <TouchableOpacity onPress={handlePayPress} style={style.buttonContainer}>
                <CustomButton text={isLoading ? 'Loading...' : 'PAY NOW'}
                              bgColor={'black'} fgColor={'white'}
                              onPress={() => {}}/>
            </TouchableOpacity>
        </View>

    );
}

const style = StyleSheet.create({
    normal: {
        width: '90%',
        height: '100%',
        marginHorizontal: 5,
        marginVertical: 20,
    },
    blurPayment: {
        width: '90%',
        height: '100%',
        marginHorizontal: 5,
        marginVertical: 20,
    },
    buttonContainer: {
      marginTop: 10
    },
    cardForm: {
        height: '30%',
        borderRadius: 6,
        marginTop: 40,
    },
    payment_card: {
        height: '100%'
    },
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
        height: '100%',
        marginHorizontal: 5,
        marginVertical: 20,
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
        marginLeft: 15,
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
