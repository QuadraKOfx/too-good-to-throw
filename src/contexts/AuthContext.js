import {createContext, useEffect, useState} from "react";
import {onAuthChanged} from "../utils/dbAmplify";
import {Auth, DataStore} from "aws-amplify";
import {User} from "../models";

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const [awsUser, setAwsUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);
    const [sub, setUserSub] = useState(null);

    const checkUser = async () => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(res => {
            setUserSub(res?.attributes?.sub);
        });
    }

    useEffect(() => {
        return onAuthChanged((data) => {
            const {payload} = data;
            switch (payload.event) {
                case 'signIn':
                    setUserSub(payload?.data?.attributes?.sub);
                    break;
                case 'signOut':
                    setUserSub(null);
                    break;
                default:
                    break;
            }
        })
    }, []);

    useEffect(() => {
        checkUser().catch();
    }, []);

    useEffect(() => {
        DataStore.query(User).then(res => {
            const currentUser = res.filter(user => user.sub === sub)[0];
            console.info("dbUSER ==> ", currentUser);
            setDbUser(currentUser);
        });
    }, [sub, awsUser])

    return <AuthContext.Provider
        value={{awsUser, setAwsUser, sub, dbUser, setDbUser, setUserSub}}>{children}</AuthContext.Provider>
}
