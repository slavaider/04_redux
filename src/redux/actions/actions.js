import {add, add2, add_number, minus, sub_number} from './actionTypes'

export function ADD() {
    return {
        type: add
    }
}

export function MINUS() {
    return {
        type: minus
    }
}

export function ADD_NUMBER(payload) {
    return {
        type: add_number,
        payload
    }
}

export function SUB_NUMBER(payload) {
    return {
        type: sub_number,
        payload
    }
}

export function ADD2(payload) {
    return {
        type: add2,
        payload
    }
}
export function ASYNC_ADD_NUMBER(payload){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(ADD_NUMBER(payload));
        },3000)
    }
}
