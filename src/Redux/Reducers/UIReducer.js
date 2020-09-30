import {
    CLEAR_ERRORS,
    LOADING_UI,
    SET_ERRORS,
    STOP_LOADING_UI
} from "../Types";

const intialUIstate = {
    errors: {},
    loading: false
};

export default function(state = intialUIstate, actions) {
    switch (actions.type) {
        case LOADING_UI:
            return {
                ...state,
                loading: true
            };

        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            };

        case SET_ERRORS:
            return {
                errors: actions.payload,
                loading: true
            };

        case CLEAR_ERRORS:
            return {
                errors: {},
                loading: false
            };

        default:
            return state;
    }
}
