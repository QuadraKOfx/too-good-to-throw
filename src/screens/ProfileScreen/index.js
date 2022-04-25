import {StyleSheet, Text, View} from "react-native";

const ProfileScreen = () => {
    return(
        <View style={styles.pageContainer}>
            <Text>Welcome to Profile Screen</Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    pageContainer: {
        padding: 10,
        paddingVertical: 45 // temporary hack
    }
});
