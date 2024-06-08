import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import postSlice from './postSlice.js'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root', // Key for your persisted state
    version :1,
    storage
};

const reducer = combineReducers({
    auth: authSlice,
    posts : postSlice
})
const persistedPostsReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedPostsReducer
    
})

// const persistor = persistStore(store);

export default store;