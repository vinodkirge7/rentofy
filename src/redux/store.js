import { thunk } from "redux-thunk";
import { authReducer } from "./auth/auth.reducers";

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { postReducer } from "./post/post.reducers";

const rootReducers = combineReducers({
auth:authReducer,
postss:postReducer,

})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))