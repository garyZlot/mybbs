import { createStore, applyMiddleware, compose } from 'redux';
import trunk from 'redux-thunk'
import rootReducer from './modules'

let finalCreateStore;

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    finalCreateStore = compose(
        applyMiddleware(trunk),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore);
} else {
    finalCreateStore = applyMiddleware(trunk)(createStore)
}

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (process.env.NODE_ENV !== "production" && module.hot) {
        module.hot.accept("./modules", () => 
            store.replaceReducer(require("./modules"))
        );
    }

    return store;
}