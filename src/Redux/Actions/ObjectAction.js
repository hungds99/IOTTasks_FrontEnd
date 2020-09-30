// Action types
import { FETCH_OBJECTS, LOADING_UI, STOP_LOADING_UI} from "../Types";

import axios from "axios";

const host = "http://localhost:8081";

export const getObjects = page => {
    return dispatch => {
        dispatch({type: LOADING_UI})
        axios
            .get(`${host}/api/objects/page?start=${page}&limit=10`)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: FETCH_OBJECTS,
                    payload: res.data.result
                });
                dispatch({type: STOP_LOADING_UI})
            })
            .catch(err => console.log(err));
    };
};
