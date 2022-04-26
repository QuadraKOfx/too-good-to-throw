import {Auth} from "aws-amplify";

export const signOutUser = async () => await Auth.signOut();

export const onAuthStateChangedListener = (callback) => {
    return Auth.currentAuthenticatedUser({bypassCache: true});
}
