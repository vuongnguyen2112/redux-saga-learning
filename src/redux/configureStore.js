import {applyMiddleware, compose, createStore} from "redux";
import rootReducers from "../reducers";

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
    })
    : compose;

const configureStore = () => {
    const middlewares = [];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducers, composeEnhancers(...enhancers));
    return store;
};

export default configureStore;