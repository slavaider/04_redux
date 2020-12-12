import {add, add_number, minus, sub_number} from "../actions/actionTypes";

const initialState = {
    counter: 0
}
export default function counter1(state = initialState, action) {
    switch (action.type) {
        case add:
            return {
                counter: state.counter + 1
            }
        case minus:
            return {
                counter: state.counter - 1
            }
        case add_number:
            return {
                counter: state.counter + action.payload
            }
        case sub_number:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}
