import { createStore, compose } from "redux";
import clientInfo from "../store/reducers/clientInfo";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = compose(composeWithDevTools());

const reducer = clientInfo;

const store = createStore(reducer, enhancer);

export default store;
