import { combineReducers, createStore } from 'redux'
import language from './language';
export const Reducer = combineReducers({
    language,
   
})


let innerstore = createStore(Reducer);
if (true || process.env.NODE_ENV === "development") {
    innerstore = createStore(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
export const store = innerstore;

export default {
    Reducer,
    store
}