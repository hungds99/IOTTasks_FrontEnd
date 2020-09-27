// Action types
import {SET_MODELS} from '../Types';

import axios from 'axios';

const host = 'https://localhost:44351';

export const getModels = () => {
    return dispatch => (
        axios
        .get(`${host}/api/models`)
        .then(res => {
            console.log(res.data.result)
            dispatch({
                type: SET_MODELS,
                payload: res.data.result
            })
        })
        .catch(err => {
            dispatch({
                type: SET_MODELS,
                payload: []
            })
        }))
}