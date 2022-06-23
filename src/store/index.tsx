import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from 'redux-persist';
import {combineReducers, configureStore} from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';

import {reducer as user} from './user';
import {FLUSH, PAUSE, PERSIST, REGISTER, persistStore} from "redux-persist";

const reducers = combineReducers({
    user
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, REGISTER]
            }
        });
        middlewares.push(sagaMiddleware);
        return middlewares;
    }
});

const persistingStore = persistStore(store);

export {store, persistingStore};

