// Redux types
import { FETCH_OBJECTS } from "../Types";

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

        default:
            return state;
    }
}
