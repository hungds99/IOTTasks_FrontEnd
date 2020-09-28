import {
    FETCH_MODELS,
    FETCH_MODEL,
    ADD_MODEL,
    EDIT_MODEL,
    REMOVE_MODEL
} from "../Types";

const initialModel = {
    models: [],
    model: {}
};

export default function(state = initialModel, actions) {
    switch (actions.type) {
        case FETCH_MODELS:
            return {
                ...state,
                models: actions.payload
            };
        case ADD_MODEL:
            return {
                ...state,
                models: [...state.models, actions.payload]
            };
        case FETCH_MODEL:
            return {
                ...state,
                model: actions.payload
            };
        case EDIT_MODEL:
            let indexEDit = state.models.findIndex(
                model => model._id === actions.payload._id
            );
            state.models[indexEDit] = actions.payload;
            return {
                models: [...state.models],
                model: {}
            };
        case REMOVE_MODEL:
            let indexRemove = state.models.findIndex(
                model => model._id === actions.payload.modelId
            );
            state.models.splice(indexRemove, 1);
            return {
                models: [...state.models],
                model: {}
            };
        default:
            return state;
    }
}
