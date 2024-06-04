import {applyMiddleware, legacy_createStore} from "redux";
import rootReducer from "./modules";
import {composeWithDevTools} from "@redux-devtools/extension";
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';

const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;