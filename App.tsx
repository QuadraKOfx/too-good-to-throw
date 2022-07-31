import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import RootNavigator from "./src/navigation/root-navigation";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {Provider} from "react-redux";
import {store} from "./src/store";
import { StripeProvider as _StripeProvider } from '@stripe/stripe-react-native';
import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider';

// Stripe Dependencies
import {_fetchPublishableKey} from "./helpers";
import {Elements} from "@stripe/react-stripe-js";
const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;


function App() {
    const [publishableKey, setPublishableKey] = useState('');
    const [_publishableKey, _setPublishableKey] = useState('');

    const options = {
        // passing the client secret obtained from the server
        clientSecret: process.env.NEXT_PUBLIC_STRIPE_KEY,
    };


    return (
        <Provider store={store}>
            <NavigationContainer>
                <StripeProvider publishableKey={publishableKey}>
                    <BottomSheetModalProvider>
                        <RootNavigator/>
                    </BottomSheetModalProvider>
                </StripeProvider>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </Provider>
    );
}

export default App;


{/*<AuthContextProvider>*/}
{/*</AuthContextProvider>*/}
