import {StyleSheet, Text, View} from "react-native";

const FavoritesScreen = () => {
    return(
        <View style={styles.pageContainer}>
            <Text>Favorites Screen</Text>
        </View>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    pageContainer: {
        padding: 10,
        paddingVertical: 45 // temporary hack
    }
});
