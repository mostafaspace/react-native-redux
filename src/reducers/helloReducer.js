import {PRESSED_HELLO_BUTTON} from "../actions/types";

const initState = {
    helloText: 'Hello',
    pressedButton: false
}

export default (state = initState, action) => {
    switch (action.type){
        case PRESSED_HELLO_BUTTON:
            //...state allows you to have the entire state + whatever you edited to appear
            return {...state, pressedButton: true, helloText: 'YOU PRESSED THE BUTTON!!'};
        default:
            return state;
    }
}