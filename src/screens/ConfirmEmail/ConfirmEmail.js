import {Alert, ScrollView, Text, View, StyleSheet} from "react-native";
import CustomInput from "../../components/custom-input/CustomInput";
import CustomButton from "../../components/custom-button/CustomButton";
import {useForm} from "react-hook-form";
import {Auth} from "aws-amplify";
import {useState} from "react";

const ConfirmEmailScreen = ({props}) => {
    const {username} = props;
    const [loading, setLoading] = useState(false);
    const {control, handleSubmit} = useForm({
        defaultValues: {username: props.navigation?.params?.username},
    });
    const navigation = props.navigation;

    const onConfirmPressed = async data => {
        setLoading(true);
        try {
            await Auth.confirmSignUp(data.username, data.code);
            setLoading(false);
            navigation.navigate('Profile');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onResendPress = async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert('Success', 'Code was resent to your email');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username code is required',
                    }}
                />

                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{
                        required: 'Confirmation code is required',
                    }}
                />

                <CustomButton text={loading ? 'Loading...' : 'Confirm'}
                              onPress={handleSubmit(onConfirmPressed)}/>

                <CustomButton
                    text="Resend code"
                    onPress={onResendPress}
                    type="SECONDARY"/>

                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginVertical: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default ConfirmEmailScreen;
