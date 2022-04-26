import {createContext, useContext, useEffect, useState} from "react";
import {Auth} from "aws-amplify";
import {onAuthStateChangedListener} from "../utils/dbAmplify";

const AuthContext = createContext({
    awsUser: null,
    setCurrentUser: () => null,
});

export const AuthContextProvider = ({children}) => {
    const [awsUser, setAwsUser] = useState(null);
    const value = {awsUser, setAwsUser};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
