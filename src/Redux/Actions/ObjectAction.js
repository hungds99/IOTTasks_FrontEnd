// Action types
import {
    FETCH_OBJECTS,
    FETCH_OBJECT,
    LOADING_UI,
    STOP_LOADING_UI,
    ADD_OBJECT,
    EDIT_OBJECT
} from "../Types";

import axios from "axios";

const host = "http://localhost:8081";

export const getObjects = page => {
    return dispatch => {
        dispatch({ type: LOADING_UI });
        axios
            .get(`${host}/api/objects/page?start=${page}&limit=10`)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: FETCH_OBJECTS,
                    payload: res.data.result
                });
                dispatch({ type: STOP_LOADING_UI });
            })
            .catch(err => console.log(err));
    };
};

export const getObject = objectID => {
    return dispatch => {
        axios
            .get(`${host}/api/objects/${objectID}`)
            .then(res => {
                dispatch({
                    type: FETCH_OBJECT,
                    payload: res.data.result
                });
            })
            .then(err => console.error(err));
    };
};

export const addObject = object => {
    return dispatch => {
        axios
            .post(`${host}/api/objects`, object)
            .then(res => {
                dispatch({
                    type: ADD_OBJECT,
                    payload: res.data.result
                });
            })
            .catch(err => console.error(err));
    };
};

export const editObject = object => {
    return dispatch =>
        axios
            .put(`${host}/api/objects/${object._id}`, object)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: EDIT_OBJECT,
                    payload: res.data.result
                });
            })
            .catch(err => console.log(err));
};
