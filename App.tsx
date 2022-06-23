import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {Amplify} from "aws-amplify";
import config from './src/aws-exports';
import RootNavigator from "./src/navigation/root-navigation";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

Amplify.configure({
    ...config,
    Analytics: {
        disabled: true
    },
});

function App() {
    return (
        <NavigationContainer>
            <BottomSheetModalProvider>
                <RootNavigator/>
            </BottomSheetModalProvider>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}

export default App;


{/*<AuthContextProvider>*/}
{/*</AuthContextProvider>*/}
