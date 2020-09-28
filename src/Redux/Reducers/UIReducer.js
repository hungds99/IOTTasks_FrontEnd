import { LOADING_UI, STOP_LOADING_UI } from "../Types";

const intialUIstate = {
    loading: false,
    errors: {}
};

export default function(state = intialUIstate, actions) {
    switch (actions.types) {
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
        default:
            return state;
    }
}
