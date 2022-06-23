import {onAuthChanged} from "../utils/dbAmplify";
import {DataStore} from "aws-amplify";
import {User} from "../models";
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const [awsUser, setAwsUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);
    // const [sub, setUserSub] = useState(null);

    // const checkUser = async () => {
    //     Auth.currentAuthenticatedUser({bypassCache: true}).then(res => {
    //         setUserSub(res?.attributes?.sub);
    //     });
    // }

    useEffect(() => {
        return onAuthChanged((data) => {
            const {payload} = data;
            switch (payload.event) {
                case 'signIn':
                    // setUserSub(payload?.data?.attributes?.sub);
                    console.info("Trying to Sign you in...");
                    setAwsUser(payload);
                    break;
                case 'signOut':
                    // setUserSub(null);
                    console.info("Trying to Sign you out...");
                    setAwsUser(null);
                    break;
                default:
                    break;
            }
        })
    }, []);

    // useEffect(() => {
    //     checkUser().catch();
    // }, []);

    useEffect(() => {
        DataStore.query(User).then(res => {
            const sub = awsUser?.data?.attributes?.sub;
            const currentUser = res.filter(user => user.sub === sub)[0];
            console.info("dbUSER ==> ", currentUser);
            setDbUser(currentUser);
        });
    }, [awsUser])

    return <AuthContext.Provider value={{awsUser, setAwsUser, dbUser, setDbUser}}>{children}</AuthContext.Provider>
}
