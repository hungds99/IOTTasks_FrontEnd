import {
    SET_MODELS
} from '../Types';

const initialModel = {
    models: []
}

export default function(state = initialModel, actions) {
    switch (actions.type) {
        case SET_MODELS:
            return {
                ...state,
                models: actions.payload
            };
        default:
            return state;
    }
}