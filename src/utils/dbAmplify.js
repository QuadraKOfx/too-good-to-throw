import {Auth, Hub} from "aws-amplify";

export const signOutUser = async () => await Auth.signOut();

export const signInAuthUserWithEmailAndPassword = async (username, password) => {
    if (!username || !password) return;
    return await Auth.signIn(username, password);
};

export const signUpAuthUserWithEmailAndPassword = async (data) => {
    console.info("on-submit => ", data);
    if (!data.username || !data.password || !data) return;
    return await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
            preferred_username: data.username,
            phone_number: `+357${data.phone_number}`,
            name: data.name
        }
    });
};

export const onAuthChanged = (data) => {
    return Hub.listen('auth', data);
}
