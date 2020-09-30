// Redux types
import {
    FETCH_OBJECTS,
    FETCH_OBJECT,
    ADD_OBJECT,
    EDIT_OBJECT,
    REMOVE_OBJECT
} from "../Types";

const initialObject = {
    objects: [],
    object: {}
};

export default function(state = initialObject, actions) {
    switch (actions.type) {
        case FETCH_OBJECTS:
            return {
                ...state,
                objects: actions.payload
            };
        case FETCH_OBJECT:
            return {
                ...state,
                object: actions.payload
            };
        case ADD_OBJECT:
            return {
                ...state,
                objects: [actions.payload, ...state.objects]
            };
        case EDIT_OBJECT:
            let indexEDit = state.objects.findIndex(
                object => object._id === actions.payload._id
            );
            state.objects[indexEDit] = actions.payload;
            return {
                objects: [...state.objects],
                object: {}
            };
        case REMOVE_OBJECT:
            let indexRemove = state.objects.findIndex(
                object => object._id === actions.payload.objectId
            );
            state.objects.splice(indexRemove, 1);
            return {
                objects: [...state.objects],
                object: {}
            };
        default:
            return state;
    }
}
