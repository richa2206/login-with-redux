import { createStore } from "redux";
import userReducer from "../redux/reducer/reducer";
const store = createStore(userReducer);

export default store;
