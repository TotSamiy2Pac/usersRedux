import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import usersReducer from "./reducer/userReducer";


const store = createStore(
    combineReducers({
        usersReducer : usersReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;