import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from "../../components/custom-input/CustomInput";
import CustomButton from "../../components/custom-button/CustomButton";
import {useForm} from 'react-hook-form';
import {signUpAuthUserWithEmailAndPassword} from "../../utils/dbAmplify";

const SignUpScreen = ({props}) => {
    const [loading, setLoading] = useState(false);
    const {control, handleSubmit} = useForm();
    const navigation = props?.navigation;

    const onRegisterPressed = async (data) => {
        if(data['password'] !== data['confirmPassword']) {
            alert('Password do not match');
        }
        setLoading(true);
        try {
            signUpAuthUserWithEmailAndPassword(data).then(_ => {
                navigation.navigate('ConfirmEmail', {username: data.username});
                setLoading(false);
            });
        } catch (error) {
            switch(error.message) {
                case 'auth/email-already-in-use':
                    alert('Cannot create User, email already in use');
                    return error;
                case 'auth/weak-password':
                    alert('Password should be at least 6 characters');
                    return error;
                default:
                    return error;
            }
        }
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    name="name"
                    control={control}
                    placeholder="Name"
                    type="default"
                />

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    type='default'
                />
                <CustomInput
                    name="email"
                    placeholder="email"
                    control={control}
                    type='email-address'
                    rules={{required: 'Username is required'}}
                />
                <CustomInput
                    name="phone_number"
                    placeholder="+357"
                    control={control}
                    type='number-pad'
                />
                <CustomInput
                    name="password"
                    placeholder="password"
                    control={control}
                    type='visible-password'
                    rules={{required: 'Username is required'}}
                    secureTextEntry
                />
                <CustomInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    control={control}
                    secureTextEntry
                    type="visible-password"
                    rules={{required: 'Username is required'}}
                />

                <CustomButton
                    text={loading ? 'Loading...' : 'Register'}
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{' '}and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"/>

            </View>
        </ScrollView>
    );
};

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

export default SignUpScreen;
