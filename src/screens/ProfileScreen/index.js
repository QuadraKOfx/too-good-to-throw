import {StyleSheet, View} from "react-native";
import CustomButton from "../../components/custom-button/CustomButton";
import {signOutUser} from "../../utils/dbAmplify";
import {useState} from "react";

const ProfileScreen = ({props}) => {
    const [awsUser, setAwsUser] = useState(null);
    const navigation = props.navigation;

    const onSignOut = () => {
        signOutUser().then(res => {
            console.info(res);
            navigation.navigate('Home');
        });
    }

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.pageContainer}>
            {awsUser ? <CustomButton text="Sign Out" onPress={onSignOut}/> :
                <CustomButton text="Sign in" onPress={onSignIn}/>}
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    pageContainer: {
        padding: 10,
        marginVertical: "20%" // temporary hack
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 40
    }
});
