import { SET_MODELS, SET_MODEL, ADD_MODEL } from "../Types";

const initialModel = {
    models: [],
    model: {}
};

export default function (state = initialModel, actions) {
    switch (actions.type) {
        case SET_MODELS:
            return {
                ...state,
                models: actions.payload,
            };
        case ADD_MODEL:
            return {
                ...state,
                models: [...state.models, actions.payload],
            };
        case SET_MODEL:
            return {
                ...state,
                model: actions.payload
            }
        default:
            return state;
    }
}
