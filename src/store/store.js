import { createStore } from "redux";
import Data from "../Data";

const data = {
    inCart : 0,
    products : Data
}

console.log(data);

const incReducer = (state = data, action) =>{
    if(action.type === "cartInc")
    {
        return {
            inCart: state.inCart + 1,
            products : Data
        }
    }

    return state;
}

const store = createStore(incReducer);
export default store;