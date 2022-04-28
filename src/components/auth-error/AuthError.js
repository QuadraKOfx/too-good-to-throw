import {View, StyleSheet, Text} from "react-native";
import CustomButton from "../custom-button/CustomButton";

const AuthError = ({props}) => {
    const navigation = props?.navigation;

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.pageContainer}>
            <Text>Are you Signed In?</Text>
            <CustomButton text="Sign in" onPress={onSignIn}/>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AuthError;
