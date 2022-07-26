import {Image, ScrollView, View, StyleSheet, useWindowDimensions, Alert} from "react-native";
import {useForm} from 'react-hook-form';
import Logo from '../../../assets/images/custom_logo.png';
import {useState} from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import CustomButton from "../../components/custom-button/CustomButton";
// import {signInAuthUserWithEmailAndPassword} from "../../utils/dbAmplify";
import {useDispatch} from "react-redux";
import {actions} from "../../store/user";

const SignInScreen = ({props}) => {
    const navigation = props.navigation;
    const dispatch = useDispatch();
    const {height} = useWindowDimensions();
    const [loading, setLoading] = useState(false);

    const {control, handleSubmit} = useForm();

    const onSignInPressed = async data => {
        if (loading) {
            return;
        }
        setLoading(true);
        dispatch(actions.login(data));
        // try {
        //     await signInAuthUserWithEmailAndPassword(data.username, data.password);
        //     navigation.navigate('Home', {screen: 'Explore'});
        // } catch (e) {
        //     Alert.alert('Something went wrong ', e.message);
        // }
        setLoading(false);
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: 'Username is required'}}
                />

                <CustomInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3,
                            message: 'Password should be minimum 3 characters long',
                        },
                    }}
                />

                <CustomButton
                    text={loading ? 'Loading...' : 'Sign In'}
                    onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                {/*<SocialSignInButtons />*/}

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: 30
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;
