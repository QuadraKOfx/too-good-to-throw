import {StyleSheet, Text, View} from "react-native";
import CustomButton from "../../components/custom-button/CustomButton";
import {signOutUser} from "../../utils/dbAmplify";
import {useContext, useState} from "react";
import {AuthContext} from "../../contexts/AuthContext";

const Separator = () => (
    <View style={styles.separator} />
);

const ProfileScreen = ({props}) => {
    const {dbUser} = useContext(AuthContext);
    const navigation = props.navigation;

    const onSignOut = () => {
        signOutUser().catch();
    }

    const onSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.pageContainer}>
            {dbUser ?
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Profile</Text>
                        <CustomButton
                            text="Contact Support"
                            type="SUPPORT" />
                    </View>
                    <Separator />
                    <View style={styles.text}>
                        <Text style={styles[`text_${'secondary'}`]}>Personal Info</Text>
                    </View>
                    <Separator />
                    <View style={styles.text}>
                        <Text style={styles[`text_${'secondary'}`]}>Payment Methods</Text>
                    </View>
                    <Separator />
                    <View style={styles.text}>
                        <Text style={styles[`text_${'secondary'}`]}>Order History</Text>
                    </View>
                    <Separator />
                    <View style={styles.text}>
                        <Text style={styles[`text_${'secondary'}`]}>Settings</Text>
                    </View>
                    <Separator />
                    <CustomButton text="Sign Out" onPress={onSignOut}/>
                </View> :
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
        flex: 1,
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 40
    },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10
    },
    text_secondary: {
        fontSize: 18
    }
});
