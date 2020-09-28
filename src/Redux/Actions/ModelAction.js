// Action types
import {
    SET_MODELS,
    SET_MODEL,
    ADD_MODEL,
    EDIT_MODEL,
    REMOVE_MODEL
} from "../Types";

import axios from "axios";

const host = "http://localhost:8081";

export const getModels = () => {
    return dispatch =>
        axios
            .get(`${host}/api/models`)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: SET_MODELS,
                    payload: res.data.result
                });
            })
            .catch(err => {
                dispatch({
                    type: SET_MODELS,
                    payload: []
                });
            });
};

export const addModel = newModel => {
    return dispatch =>
        axios
            .post(`${host}/api/models`, newModel)
            .then(res => {
                console.log(res);
                dispatch({
                    type: ADD_MODEL,
                    payload: res.data.result
                });
            })
            .catch(err => {
                console.log(err);
            });
};

export const getModel = modelId => {
    return dispatch =>
        axios
            .get(`${host}/api/models/${modelId}`)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: SET_MODEL,
                    payload: res.data.result
                });
            })
            .catch(err => {
                console.log(err);
            });
};

export const editModel = model => {
    return dispatch =>
        axios
            .put(`${host}/api/models/${model._id}`, model)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: EDIT_MODEL,
                    payload: res.data.result
                });
            })
            .catch(err => console.log(err));
};

export const removeModel = modelId => {
    return dispatch => {
        axios
            .delete(`${host}/api/models/${modelId}`)
            .then(res => {
                console.log(res.data.result);
                dispatch({
                    type: REMOVE_MODEL,
                    payload: modelId
                });
            })
            .catch(err => console.log(err));
    };
};
