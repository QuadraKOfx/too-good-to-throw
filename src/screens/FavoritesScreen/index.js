import {StyleSheet, View} from "react-native";
import AuthError from "../../components/auth-error/AuthError";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext";

const FavoritesScreen = ({props}) => {
    const {dbUser} = useContext(AuthContext);

    return(
        <View style={styles.pageContainer}>
            {dbUser ?
                <View>

                </View> :
                <AuthError props={props} />}
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
