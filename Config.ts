import {Platform} from "react-native";

export const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:4242' : 'http://localhost:19002';
export const is_Android = Platform.OS === 'android';
export const API_NEST_URL = 'https://re-food-it.herokuapp.com/';
